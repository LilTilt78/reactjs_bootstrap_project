//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
//import './App.css';
import { Table } from "./components/Table";
import { Modal } from './components/Modal';
//import Title from './components/Title';
//import { useSelector } from 'react-redux';
import  EventEditor  from './pages/EventsEditor';
import { EventsLoader } from './actions/EventsDataLoaderButton';
import { EventsUpdater } from './actions/EventsMutationLoaderButton';
import { EventsUpravit } from './components/UpravitButton';
import { EventsEdit } from './components/EditEventButton';


function App() {
  
  // const events = useSelector(state => state.events);

  // console.log("Vypis dat",events);

  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
    {udalost: "Událost1", popis: "Popis události1", stav: "nadcházející"},
    {udalost: "Událost2", popis: "Popis události2", stav: "probíhá"},
    {udalost: "Událost3", popis: "Popis události3", stav: "ukončeno"},
  ]);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex))
  };

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  }

  const handleAddRow = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow]) : 
    setRows(rows.map((currRow, idx) => {
      if(idx !== rowToEdit) return currRow;
      return newRow;
    }));
  };

  return (

    <div className="App">
      <div className='container-fluid bg-info text-center'>
        <h1>Event Page</h1>
      </div>
      <div className='container text-center p-2'>
        <EventsLoader />
      </div>
      <div>
        <button className='btn btn-info' onClick={null}>Show Data</button>
      </div>
      <EventEditor />
      <div className='container text-center p-2'>
        <EventsUpdater />
      </div>
      {/* <h1>Tabulka pro přidávání a editace událostí</h1>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
      <button className='btn-table' onClick={() => setModalOpen(true)}>Přidat</button>
      {modalOpen && <Modal closeModal={() => {setModalOpen(false); setRowToEdit(null)}} onAdd={handleAddRow} defaultValue={rowToEdit!==null && rows[rowToEdit]}/>} */}
    </div>
  );
}

export default App;
