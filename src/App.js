import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'

function App() {
  let myCompany = "Grupo ACME, S.A.";

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
