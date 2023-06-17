import React, { useState } from "react";
import { useSelector } from "react-redux";

export const EventTypeSelect = ({typeRecieve}) => {

    const eventsType = useSelector((state) => state.eventsType);

    const [evTypeId, setEvTypeId] = useState("");

    const evTypeIdChange= (e) =>{
        setEvTypeId(e.target.value)
        typeRecieve(e.target.value)
    }

    return (
        <div className='content-container'>
            <select className='form-select' aria-label='Default select example' onChange={evTypeIdChange}>
                { eventsType.map((eventType)=> 
                    <option key={eventType.id} value={eventType.id}>{eventType.name}</option>
                )}
            </select>
        </div>
    );
}