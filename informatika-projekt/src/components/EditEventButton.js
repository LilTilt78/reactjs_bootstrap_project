import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import { EventsMutation } from '../queries/EventsMutation';
import { useSelector, useDispatch } from 'react-redux';
import { changeEditDetail } from '../features/EventEditSlice';

export const EventsEdit= ( props ) => {


    const [evId, setEvId] = useState("");
    const [evName, setEvName] = useState("");
    const [evLastChange, setEvLastChange] = useState("");
    const [evStartDate, setEvStartDate] = useState("");
    const [evEndDate, setEvEndDate] = useState("");

    console.log("name: ", evName)
    console.log("startDate: ", evStartDate)
    console.log("endDate: ", evEndDate)

    // const evIdChange= (e) =>{
    //     setEvId(e.target.value)
    // }

    const evNameChange= (e) =>{
        setEvName(e.target.value);
        setEvId(props.evEditId);
        setEvLastChange(props.evEditLastChange);
        evStartDate?setEvStartDate(evStartDate):setEvStartDate(props.evEditStartDate);
        evEndDate?setEvEndDate(evEndDate):setEvEndDate(props.evEditEndDate);
    }

    // const evLastChangeChange= (e) =>{
    //     setEvLastChange(e.target.value)
    // }

    const evStartDateChange= (e) =>{
        setEvStartDate(e.target.value);
        setEvId(props.evEditId);
        setEvLastChange(props.evEditLastChange);
        evName?setEvName(evName):setEvName(props.evEditName);
        evEndDate?setEvEndDate(evEndDate):setEvEndDate(props.evEditEndDate);
    }

    const evEndDateChange= (e) =>{
        setEvEndDate(e.target.value);
        setEvId(props.evEditId);
        setEvLastChange(props.evEditLastChange);
        evName?setEvName(evName):setEvName(props.evEditName);
        evStartDate?setEvStartDate(evStartDate):setEvStartDate(props.evEditStartDate);
    }

    const handleEditEvent = async () => {
        try{
            console.log("ID: ", evId);
            console.log("Name: ", evName);
            console.log("LastChange: ", evLastChange);
            console.log("Start: ", evStartDate);
            console.log("End: ", evEndDate);
            await EventsMutation({id:evId, lastchange:evLastChange, newName:evName, startDate:evStartDate, endDate:evEndDate});
            console.log("Mutace propběla");
            alert("Změna úspěšně proběhla");
        }
        catch (error) {
            console.error("Mutace error", error);
        }
    }
   
    return (
        <>
            <div className="cotent-container">
                <div className="content-body">
                    <form>
                    <div className="mb-3">
                        <label className="col-form-label">ID:</label>
                        <input type="text" className="form-control" id="evID" value={props.evEditId}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="evName" value={evName?evName:props.evEditName} onChange={evNameChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Last change:</label>
                        <input type="text" className="form-control" id="evLastChange" value={props.evEditLastChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Start date:</label>
                        <input type="datetime-local" className="form-control" id="evStartDate" value={evStartDate?evStartDate:props.evEditStartDate} onChange={evStartDateChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">End date:</label>
                        <input type="datetime-local" className="form-control" id="evEndDate" value={evEndDate?evEndDate:props.evEditEndDate} onChange={evEndDateChange}></input>
                    </div>
                    </form>
                </div>
                <div className="content-footer">
                    <button type="button" className="btn btn-primary" onClick={handleEditEvent}>Save</button>
                </div>
            </div>
        </>
    )
  }