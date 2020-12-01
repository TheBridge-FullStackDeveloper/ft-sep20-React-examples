import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'

function App() {
  const myCompany = "ACME S.A."

  return (
    <div className="App">
      <Header company={myCompany} />
      <main>
        <h1>Hola mundo</h1>
      </main>
      <Footer company={myCompany} />
    </div>
  );
}

export default App;
