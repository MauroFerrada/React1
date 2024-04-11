import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home.js';
import Titulo from './components/titulo/Titulo.js';


const saludo="Hola, funciono";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <Titulo text={"tp 1 React"} />
        <Home />
        {saludo}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
