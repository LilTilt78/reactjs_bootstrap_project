import { useSelector } from 'react-redux';
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
import { EventsTypeQuery } from '../queries/EventsTypePageQuery';
import { useDispatch } from 'react-redux';
import { addData } from '../features/EventSlice';
import { EventsTypeFetchAsync } from '../actions/FetchEventsType';

// Tohle si dejte do souboru zvlášť
export const AddEventButton = ({ name, typeId, startDate, endDate }) => {
    const dispatch = useDispatch()

    const handleAddEvent = async () => {
    try{
        const response = await EventsInsert({eventName:name, eventTypeID:typeId, eventStartDate:startDate, eventEndDate:endDate });
        const data = await response.json();
        dispatch(addData(data.data.eventInsert.event));
        alert("Přidání úspěšně proběhlo");
    }
    catch (error) {
        console.error("Adding error", error);
    }
}

  return (
    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddEvent}>Save</button>
  )
}
// až sem

export const AddEvent = () => {

    const dispatch = useDispatch()  
    const eventsType = useSelector((state) => state.eventsType);

    const [evStartDate, setEvStartDate] = useState("2024-05-24");
    const [evEndDate, setEvEndDate] = useState("2024-05-24");

    const [evTypeId, setEvTypeId] = useState("b87d3ff0-8fd4-11ed-a6d4-0242ac110002");
    const [evName, setEvName] = useState("Jmeno");


    const evTypeIdChange= (e) =>{
        setEvTypeId(e.target.value)
        console.log("ID: ", evTypeId)
    }

    const evStartDateChange= (e) =>{
        setEvStartDate(e.target.value)
    }

    const evEndDateChange= (e) =>{
        setEvEndDate(e.target.value)
    }

  
    return (
        <>
        <a className="btn btn-primary" data-bs-toggle="modal" href="#addEventModal" role="button" onClick={() => {dispatch(EventsTypeFetchAsync())}}>Add Event</a>
        <div className="modal fade" id="addEventModal" aria-hidden="true" aria-labelledby="addEventModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addEventModalLabel">Add Event</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='container'>
                <div className="mb-3">
                        <label className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="evName" value={evName} onChange={(e) => {setEvName(e.target.value)}}></input>
                </div>
                <label className="col-form-label">Choose Event:</label>
                    <select className='form-select' aria-label='Default select example' onChange={evTypeIdChange} >
                        { eventsType.map((eventType)=> 
                            <option key={eventType.id} value={eventType.id} >{eventType.name}</option>
                        )}
                    </select>
                </div>
                    <div className="mb-3">
                        <label className="col-form-label">Start date:</label>
                        <input type="date" className="form-control" id="evStartDate" value={evStartDate} onChange={evStartDateChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">End date:</label>
                        <input type="date" className="form-control" id="evEndDate" value={evEndDate} onChange={evEndDateChange}></input>
                    </div>
              </div>
              <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <AddEventButton name={evName} typeId={evTypeId} startDate={ evStartDate } endDate={evEndDate}/>
              </div>
            </div>
          </div>
        </div>
        </>
    );
  }