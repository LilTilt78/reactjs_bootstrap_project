import { useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import { EventsEdit } from '../components/EditEventButton';
import Card from "react-bootstrap/Card";
import { useEffect } from 'react';
import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsUpdater } from '../actions/EventsMutationLoaderButton';
import React, { useState } from "react";
import { EventsInsert } from '../queries/EventsInsert';
import { EventsTypeQuery } from '../queries/EventsTypePageQuery';
import { useDispatch } from 'react-redux';
import { EventsTypeFetchAsync } from '../actions/FetchEventsType';
import { SaveAddedEvent } from './SaveAddedEventButton';
import { EventTypeDef } from './EventTypeButton';

export const EventNameInput = ({nameRecieve}) => {

    const [evName, setEvName] = useState("");

    const evNameChange = (e) =>{
        setEvName(e.target.value)
        nameRecieve(e.target.value)
    }

    return (
        <div className='content-container'>
                <label className="col-form-label">Name:</label>
                <input type="text" className="form-control" id="evName" value={evName} onChange={evNameChange}></input>
        </div>
    );
}