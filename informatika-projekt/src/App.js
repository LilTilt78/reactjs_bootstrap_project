//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Title from './components/Title';
import { useState } from 'react';


function App() {
  const udaje1 = [
    { name: "Janek", age: 37, gender: "Male" },
    { name: "Jana", age: 54, gender: "Female" },
    { name: "Jarda", age: 63, gender: "Male"},
  ]
  const udaje2 = [
    { name: "Andy", activity: "Football", email: "andy.footballer@gmail.com" },
    { name: "Tyler", activity: "Basketball", email: "tyler.basketballer@gmail.com" },
    { name: "Paul", activity: "Icehockey", email: "paul.icehockeyplayer@gmail.com"},
  ]
  // const [data,setData] = useState(null)
  // const [zapsat,setZapsano] = useState(false)
  // function getData(val){
  //   setData(val.target.value)
  //   setZapsano(false)
  //   console.log(val.target.value)

  const [data,setData] = useState([])
  function getInputData(event){
    const pomoc = [...data,event.target.value]
    setData(pomoc)
    console.log("Event: ", event.target.value)
  }
  function printData(){
    const value = data
    console.log("value:",value)
  }
  return (
    <div className="App">
      <Title name='Events'/>
      <p>Sem zadejte hodnotu:</p>
      <input type='text' size={100} onChange={(event) => getInputData(event)}/>
      <p>(jednotlivé údaje prosím oddělte čárkami)</p>
      <p><button onClick={printData}>ZAPSAT</button></p>
      <table className='center'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {udaje1.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </table>
      <p></p>
      <p></p>
      <table className='center'>
        <tr>
          <th>Name</th>
          <th>Activity</th>
          <th>Email</th>
        </tr>
        {udaje2.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.activity}</td>
              <td>{val.email}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;

/* <header className="App-header">
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
      </header> */
