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

    const handleEditEvent = async () => {
        try{
            console.log("ID: ", evId);
            console.log("Name: ", evName);
            console.log("Last Change: ", evLastChange);
            await EventsMutation({id:evId, lastchange:evLastChange, newName:evName});
            console.log("Mutace propběla");
            alert("Změna úspěšně proběhla");
        }
        catch (error) {
            console.error("Mutace error", error);
        }
    }
   
    return (
        // <>
        //     <a class="btn btn-primary" data-bs-toggle="modal" href="#editEventModal" role="button">Edit</a>
        //     <div class="modal fade" id="editEventModal" aria-hidden="true" aria-labelledby="editEventModalLabel" tabindex="-1">
        //       <div class="modal-dialog modal-dialog-centered">
        //         <div class="modal-content">
        //           <div class="modal-header">
        //             <h5 class="modal-title" id="editEventModalLabel">Event Editation</h5>
        //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //           </div>
        //           <div class="modal-body">
        //             Hide this modal and show the first with the button below.
        //           </div>
        //           <div class="modal-footer">
        //             <button class="btn btn-primary" data-bs-target="#detailEventModal" data-bs-toggle="modal" data-bs-dismiss="modal">Back</button>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        // </>




        <div className="cotent-container">
                <div className="content-body">
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
                <div className="content-footer">
                    <button type="button" className="btn btn-primary" onClick={handleEditEvent}>Save</button>
                </div>
        </div>
    )
  }