import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { useState } from 'react';


function App() {
  const [data,setData] = useState(null)
  const [zapsat,setZapsano] = useState(false)
  function getData(val){
    setData(val.target.value)
    setZapsano(false)
    console.log(val.target.value)
  }
  return (
    <div className="App">
      <Title name='Events'/>
      <p>Sem zadejte hodnotu:</p>
      <input type='text' onChange={getData}/>
      <p><button onClick={()=>setZapsano(true)}>Zapsat do tabulky</button></p>
      {
        zapsat?         // tohle popisuje if(zapsat == true)
        <p>{data}</p>
        :null           // tohle je else
      }
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
