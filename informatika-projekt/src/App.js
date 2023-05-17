//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Table } from "./components/Table";
import { Modal } from './components/Modal';
//import Title from './components/Title';



function App() {
  // const [data,setData] = useState([])
  // function getInputData(event){
  //   const pomoc = [...data, event.target.value]
  //   setData(pomoc)
  //   console.log("Event: ", event.target.value)
  // }
  // function printData(){
  //   const value = data
  //   console.log("value:",value)
  // }
  
  const [modalOpen, setModalOpen] = useState(false)

  const rows = [
    {udalost: "Událost1", popis: "Popis události1", stav: "Nadcházející"},
    {udalost: "Událost2", popis: "Popis události2", stav: "Probíhá"},
    {udalost: "Událost3", popis: "Popis události3", stav: "Ukončeno"},
  ];

  return (
    // <div className="App">
    //   <Title name='Events'/>
    //   <p>Sem zadejte hodnotu:</p>
    //   <input type='text' size={100} onChange={(event) => getInputData(event)}/>
    //   <p><button onClick={printData}>ZAPSAT</button></p>
      
    // </div>

    <div className="App">
      <h1>Tabulka pro přidávání a editace událostí</h1>
      <Table rows={rows}/>
      <button className='btn' onClick={() => setModalOpen(true)}>Přidat</button>
      {modalOpen && <Modal closeModal={() => {setModalOpen(false)}} />}
    </div>

  );
}

export default App;
