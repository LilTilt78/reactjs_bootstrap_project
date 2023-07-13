import React, { useState } from "react";
import { useSelector } from 'react-redux';

/**
 * Komponenta EventTypeDef pro definici typu události.
 * @function
 * @returns {JSX.Element} Element komponenty pro definici typu události.
 */
export const EventTypeDef = () => {
    const eventsType = useSelector((state) => state.eventsType);
    const [evTypeId, setEvTypeId] = useState("");

    /**
     * Funkce pro změnu ID typu události.
     * @param {object} e - Událost změny hodnoty vstupního pole.
     */
    const evTypeIdChange = (e) => {
        setEvTypeId(e.target.value);
    };

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