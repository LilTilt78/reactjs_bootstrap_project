//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useState } from 'react';
//import './App.css';
import { Table } from "./components/Table";
import { Modal } from './components/Modal';
//import Title from './components/Title';
//import { useSelector } from 'react-redux';
import { EventsPage }  from './pages/EventsPage';
import { EventsLoader } from './actions/EventsDataLoaderButton';
import { EventsUpdater } from './actions/EventsMutationLoaderButton';
import { EditPresences } from './components/EditPresencesButton';
import { EventsEdit } from './components/EditEventButton';


function App() {

  return (

    <div className="App">
      <EventsPage />
    </div>
  );
}

export default App;
