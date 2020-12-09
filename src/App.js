import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import TaskList from './TaskList/TaskList';
import React, { Component } from 'react';

const AppContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myCompany: "Grupo ACME, S.A.",
      tasks: [
        {
          text: "Task 1"
        },
        {
          text: "Task 2"
        },
        {
          text: "Task 3"
        }
      ]
    }
  }

  render() {
    const contextData = {
      company: this.state.myCompany,
      changeCompany: (newName) => this.setState({ myCompany: newName })
    };

    return (
      <div className="App">
        <Header company={this.state.myCompany} />
        
        <AppContext.Provider value={contextData}>
          <main>
            <h1>Hola mundo</h1>

            <TaskList tasks={this.state.tasks} />
          </main>
        </AppContext.Provider>

        <Footer company={this.state.myCompany} />
      </div>
    )
  }
}

export default App;
