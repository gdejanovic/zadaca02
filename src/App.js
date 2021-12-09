import logo from './logo.svg';
import './App.css';
const x = 4;
const y = 9;
const element = <div>Hola!</div>
const element2 = <div>I have {x} cars.</div>
const element3 = <div>Numbers are {x} {y}.</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {element}{element2}{element3}
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
