//import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Table } from "./components/Table";
import { Modal } from './components/Modal';
//import Title from './components/Title';



function App() {
  
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {udalost: "Událost1", popis: "Popis události1", stav: "nadcházející"},
    {udalost: "Událost2", popis: "Popis události2", stav: "probíhá"},
    {udalost: "Událost3", popis: "Popis události3", stav: "ukončeno"},
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  };

  const handleAddRow = (newRow) => {
    setRows([...rows, newRow])
  };

  return (

    <div className="App">
      <h1>Tabulka pro přidávání a editace událostí</h1>
      <Table rows={rows} deleteRow={handleDeleteRow} />
      <button className='btn' onClick={() => setModalOpen(true)}>Přidat</button>
      {modalOpen && <Modal closeModal={() => {setModalOpen(false)}} onAdd={handleAddRow}/>}
    </div>

  );
}

export default App;
