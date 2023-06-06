import { useDispatch, useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import { TablePresencies}  from '../components/TablePresences';
import { EventsEdit } from '../components/EditEventButton';
import Card from "react-bootstrap/Card";
import { useEffect } from 'react';
import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsUpdater } from '../actions/EventsMutationLoaderButton';
import { ShowPresences } from '../components/ShowPresences';
import React, { useState } from "react";
import { EventsInsert } from '../queries/EventsInsert';

export const AddEvent = () => {

    // const [evStartDate, setEvStartDate] = useState("");
    // const [evEndDate, setEvEndDate] = useState("");

    const [evTypeId, setEvTypeId] = useState("");
    const [evName, setEvName] = useState("");


    const evTypeIdChange= (e) =>{
        setEvTypeId(e.target.value)
    }

    const evNameChange= (e) =>{
        setEvName(e.target.value)
    }


    // const evStartDateChange= (e) =>{
    //     setEvStartDate(e.target.value)
    // }

    // const evEndDateChange= (e) =>{
    //     setEvEndDate(e.target.value)
    // }

    const handleAddEvent = async () => {
        try{
            await EventsInsert({eventTypeID:evTypeId, eventName:evName});
            alert("Přidání úspěšně proběhlo");
        }
        catch (error) {
            console.error("Adding error", error);
        }
    }
  
    return (
        <>
        <a class="btn btn-primary" data-bs-toggle="modal" href="#addEventModal" role="button">Add Event</a>
        <div class="modal fade" id="addEventModal" aria-hidden="true" aria-labelledby="addEventModalLabel" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addEventModalLabel">Add Event</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                    <div className="mb-3">
                        <label className="col-form-label">Type ID:</label>
                        <input type="text" className="form-control" id="evTypeID" value={evTypeId} onChange={evTypeIdChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="evName" value={evName} onChange={evNameChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Start date:</label>
                        <input type="text" className="form-control" id="evStartDate" value={""}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">End date:</label>
                        <input type="text" className="form-control" id="evEndDate" value={""}></input>
                    </div>
                </form>
              </div>
              <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddEvent}>Save</button>
              </div>
            </div>
          </div>
        </div>
        </>
    );
  }