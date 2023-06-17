import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { EventsTypeFetchAsync } from '../actions/FetchEventsType';
import { SaveAddedEvent } from './SaveAddedEventButton';
import { EventNameInput } from './EventNameInputBox';
import { EventTypeSelect } from './EventTypeSelect';

export const AddEvent = () => {

    const dispatch = useDispatch()  
    // const eventsType = useSelector((state) => state.eventsType);

    const [evStartDate, setEvStartDate] = useState("2023-05-24T10:00");
    const [evEndDate, setEvEndDate] = useState("2023-05-24T11:00");

    const [evTypeId, setEvTypeId] = useState("");
    const [evName, setEvName] = useState("");

    // const evTypeIdChange= (e) =>{
    //     setEvTypeId(e.target.value)
    //     console.log("ID: ", evTypeId)
    // }

    const evStartDateChange= (e) =>{
        setEvStartDate(e.target.value)
    }

    const evEndDateChange= (e) =>{
        setEvEndDate(e.target.value)
    }

    const nameRecieve = (evName) => {
      setEvName(evName);
    }

    const typeRecieve = (evType) => {
      setEvTypeId(evType);
    }

  
    return (
      <>
        <a className="btn" style={{backgroundColor: '#9f3'}} data-bs-toggle="modal" href="#addEventModal" role="button" onClick={() => {dispatch(EventsTypeFetchAsync())}}>Add Event</a>
        <div className="modal fade" id="addEventModal" aria-hidden="true" aria-labelledby="addEventModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addEventModalLabel">Add Event</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='container'>
                  <div className="mb-3">
                    <EventNameInput nameRecieve={nameRecieve}/>
                    {/* <label className="col-form-label">Name:</label>
                    <input type="text" className="form-control" id="evName" value={evName} onChange={(e) => {setEvName(e.target.value)}}></input> */}
                  </div>
                  <label className="col-form-label">Choose Event Type:</label>
                  <EventTypeSelect typeRecieve={typeRecieve}/>
                  {/* <select className='form-select' aria-label='Default select example' onChange={evTypeIdChange}>
                    { eventsType.map((eventType)=> 
                      <option key={eventType.id} value={eventType.id}>{eventType.name}</option>
                    )}
                  </select> */}
                  <div className="mb-3">
                    <label className="col-form-label">Start date:</label>
                    <input type="datetime-local" className="form-control" id="evStartDate" value={evStartDate} onChange={evStartDateChange}></input>
                  </div>
                  <div className="mb-3">
                    <label className="col-form-label">End date:</label>
                    <input type="datetime-local" className="form-control" id="evEndDate" value={evEndDate} onChange={evEndDateChange}></input>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <SaveAddedEvent name={evName} typeId={evTypeId} startDate={ evStartDate } endDate={evEndDate}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }