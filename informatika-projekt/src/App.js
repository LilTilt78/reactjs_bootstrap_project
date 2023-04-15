import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

function App() {
  function getData(val){
    console.log(val.target.value)
  }
  return (
    <div className="App">
      <Title name='Events'/>
      <p>Sem zadejte hodnotu:</p>
      <input type='text' onChange={getData}/>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projekt z informatiky!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
