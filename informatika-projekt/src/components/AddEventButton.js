import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { EventsTypeFetchAsync } from '../actions/FetchEventsType';
import { SaveAddedEvent } from './SaveAddedEventButton';
import { EventNameInput } from './EventNameInputBox';
import { EventTypeSelect } from './EventTypeSelect';

/**
 * Komponenta AddEvent pro přidání události.
 * @function
 */
export const AddEvent = () => {
  const dispatch = useDispatch();

  const [evStartDate, setEvStartDate] = useState("2023-05-24T10:00");
  const [evEndDate, setEvEndDate] = useState("2023-05-24T11:00");
  const [evTypeId, setEvTypeId] = useState("");
  const [evName, setEvName] = useState("");

  /**
   * Funkce pro změnu počátečního data události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evStartDateChange = (e) => {
      setEvStartDate(e.target.value)
  }

  /**
   * Funkce pro změnu koncového data události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evEndDateChange = (e) => {
      setEvEndDate(e.target.value)
  }

  /**
   * Funkce pro přijetí názvu události z komponenty EventNameInput.
   * @param {string} evName - Název události.
   */
  const OnNameRecieve = (evName) => {
      setEvName(evName);
  }

  /**
   * Funkce pro přijetí typu události z komponenty EventTypeSelect.
   * @param {string} evType - Typ události.
   */
  const OnTypeRecieve = (evType) => {
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
                    <EventNameInput OnNameRecieve={OnNameRecieve}/>
                  </div>
                  <label className="col-form-label">Choose Event Type:</label>
                  <EventTypeSelect OnTypeRecieve={OnTypeRecieve}/>
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
              <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <SaveAddedEvent name={evName} typeId={evTypeId} startDate={ evStartDate } endDate={evEndDate}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }