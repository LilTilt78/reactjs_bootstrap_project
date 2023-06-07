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
import { loadData } from '../features/EventTypeSlice';

export const AddEvent = () => {

    const dispatch = useDispatch()  
    const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await EventsTypeQuery();
        const data = await response.json();
        console.log(data.data.eventPage);
        dispatch(loadData(data.data.eventTypePage));
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };


    const eventsType = useSelector((state) => state.eventsType);

    // const [evStartDate, setEvStartDate] = useState("");
    // const [evEndDate, setEvEndDate] = useState("");

    const [evTypeId, setEvTypeId] = useState("");
    const [evTypeName, setEvTypeName] = useState("");


    const evTypeIdChange= (e) =>{
        setEvTypeId(e.target.value)
        console.log("ID: ", evTypeId)
    }

    const evTypeNameChange= (e) =>{
        console.log(e.target.value)
        setEvTypeName(e.target.value)
        console.log("Name: ", evTypeName)
    }


    // const evStartDateChange= (e) =>{
    //     setEvStartDate(e.target.value)
    // }

    // const evEndDateChange= (e) =>{
    //     setEvEndDate(e.target.value)
    // }



    const handleAddEvent = async () => {
        try{
            await EventsInsert({eventTypeID:evTypeId, eventName:evTypeName});
            alert("Přidání úspěšně proběhlo");
        }
        catch (error) {
            console.error("Adding error", error);
        }
    }
  
    return (
        <>
        <a className="btn btn-primary" data-bs-toggle="modal" href="#addEventModal" role="button" onClick={fetchData}>Add Event</a>
        <div className="modal fade" id="addEventModal" aria-hidden="true" aria-labelledby="addEventModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addEventModalLabel">Add Event</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className='container'>
                <label className="col-form-label">Choose Event:</label>
                    <select className='form-select' aria-label='Default select example' onChange={evTypeNameChange} >
                        { eventsType.map((eventType)=> 
                            <option key={eventType.id} value={eventType.name} >{eventType.name}</option>
                        )}
                    </select>
                </div>
                <div className='container'>
                <label className="col-form-label">Choose Event:</label>
                    <select className='form-select' aria-label='Default select example' onChange={evTypeIdChange}>
                        { eventsType.map((eventType)=> 
                            <option key={eventType.id} value={eventType.id}>{eventType.id}</option>
                        )}
                    </select>
                </div>
                    <div className="mb-3">
                        <label className="col-form-label">Start date:</label>
                        <input type="text" className="form-control" id="evStartDate" value={""}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">End date:</label>
                        <input type="text" className="form-control" id="evEndDate" value={""}></input>
                    </div>
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