import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import { EventsMutation } from '../queries/EventsMutation';


export const EventsEdit= (props) => {

    const [evId, setEvId] = useState(props.evId);
    const [evName, setEvName] = useState(props.evName);
    const [evLastChange, setEvLastChange] = useState(props.evLastChange);
    const [evStartDate, setEvStartDate] = useState(props.evStartDate);
    const [evEndDate, setEvEndDate] = useState(props.evEndDate);


    const evIdChange= (e) =>{
        setEvId(e.target.value)
    }

    const evNameChange= (e) =>{
        setEvName(e.target.value)
    }

    const evLastChangeChange= (e) =>{
        setEvLastChange(e.target.value)
    }

    const evStartDateChange= (e) =>{
        setEvStartDate(e.target.value)
    }

    const evEndDateChange= (e) =>{
        setEvEndDate(e.target.value)
    }

    const handleAddEvent = async () => {
        try{
            console.log("ID: ", evId);
            console.log("Name: ", evName);
            console.log("Last Change: ", evLastChange);
            await EventsMutation({id:evId, lastchange:evLastChange, newName:evName});
            console.log("Mutace propběla");
        }
        catch (error) {
            console.error("Mutace error", error);
        }
    }
   
    return (
        <div className="container p-2">

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit Event</button>
        <div className="modal modal fade" id="exampleModal" role='dialog'>
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Event Editation</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label className="col-form-label">ID:</label>
                        <input type="text" className="form-control" id="evID" value={evId} onChange={evIdChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="evName" value={evName} onChange={evNameChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Last change:</label>
                        <input type="text" className="form-control" id="evLastChange" value={evLastChange} onChange={evLastChangeChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Start date:</label>
                        <input type="text" className="form-control" id="evStartDate" value={evStartDate} onChange={evStartDateChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">End date:</label>
                        <input type="text" className="form-control" id="evEndDate" value={evEndDate} onChange={evEndDateChange}></input>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleAddEvent}>Save</button>
                </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }