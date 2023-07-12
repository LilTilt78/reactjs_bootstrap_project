import React, { useState } from "react";
import { useSelector } from 'react-redux';


export const EventTypeDef = () => {

    const eventsType = useSelector((state) => state.eventsType);

    const [evTypeId, setEvTypeId] = useState("");

    const evTypeIdChange= (e) =>{
        setEvTypeId(e.target.value)
        // console.log("ID: ", evTypeId)
    }

    return (
        <>
        <a className="btn btn-primary" data-bs-toggle="modal" href="#addEventModal" role="button">Define Event Type</a>
            <select className='form-select' aria-label='Default select example' onChange={evTypeIdChange} >
                    { eventsType.map((eventType)=> 
                        <option key={eventType.id} value={eventType.id}>{eventType.name}</option>
                    )}
            </select>
        </>
    )
}