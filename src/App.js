import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Component } from 'react/cjs/react.development';

const AppContext = React.createContext()
const MainPostsContext = React.createContext()

class App extends Component {
  constructor() {
    this.state = {
      myCompany : "Grupo ACME, S.A."
    }
  }

  render() {
    const contextData = {
      company: this.state.myCompany,
      otherData: 3,
      callbackTo: (newName) => this.setState({ myCompany: newName })
    };

    return (
      <div className="App">
        <Header company={this.state.myCompany} />
        
        <AppContext.Provider value={contextData}>
          <main>
            <h1>Hola mundo</h1>

            <MainPostsContext.Provider value="datosMain"> 
              <MainPosts />
            </MainPostsContext.Provider>

            <SecondaryPosts />
          </main>
        </AppContext.Provider>

        <Footer company={this.state.myCompany} />
      </div>
    )
  }
}

export default App;
