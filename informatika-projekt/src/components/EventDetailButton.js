import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import { ShowPresences}  from './PresencesTable';
import { EventsEdit } from '../components/EditEventButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetail } from '../features/EventDisplaySlice';

/**
 * Komponenta EventDetail pro zobrazení detailu události.
 * @function
 * @param {object} eventDetail - Detail události.
 * @returns {JSX.Element} Element komponenty pro zobrazení detailu události.
 */
export const EventDetail = ({ eventDetail }) => {
  const event = useSelector((state) => state.eventDetail);
  const dispatch = useDispatch();

  const [evId, setEvId] = useState("");
  const [evName, setEvName] = useState("");
  const [evLastChange, setEvLastChange] = useState("");
  const [evStartDate, setEvStartDate] = useState("");
  const [evEndDate, setEvEndDate] = useState("");

  /**
   * Funkce pro nastavení hodnot pro úpravu události.
   * @returns {Promise<void>} Slouží pro nastavení hodnot pro úpravu události.
   */
  const setValues = async () => {
    setEvId(event.id);
    setEvName(event.name);
    setEvLastChange(event.lastchange);
    setEvStartDate(event.startdate);
    setEvEndDate(event.enddate);
  };

    return (
        <>
        <a className="btn btn-dark" data-bs-toggle="modal" href="#detailEventModal" role="button" onClick={()=>{dispatch(changeDetail(eventDetail))}}>Detail</a>
          <div className="modal fade" id="detailEventModal" aria-hidden="true" aria-labelledby="detailEventModalLabel" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="detailEventModalLabel">Event Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="col-form-label">ID:</label>
                            <input type="text" className="form-control" id="evId" value={event.id}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Name:</label>
                            <input type="text" className="form-control" id="evName" value={event.name}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Type:</label>
                            <input type="text" className="form-control" id="evTypeName" value={event.eventType? event.eventType.name : ""}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Last change:</label>
                            <input type="text" className="form-control" id="evLastChange" value={event.lastchange}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Start date:</label>
                            <input type="text" className="form-control" id="evStartDate" value={event.startdate}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">End date:</label>
                            <input type="text" className="form-control" id="evEndDate" value={event.enddate}></input>
                        </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button className="btn btn-warning" data-bs-target="#editEventModal" data-bs-toggle="modal" data-bs-dismiss="modal" onClick={setValues}>Edit</button>
                        <button className="btn btn-dark" data-bs-target="#presencesEventModal" data-bs-toggle="modal" data-bs-dismiss="modal">Show presences</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="editEventModal" aria-hidden="true" aria-labelledby="editEventModalLabel" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="editEventModalLabel">Event Editation</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <EventsEdit 
                      evEditId={event.id}
                      evEditName={event.name}
                      evEditType={event.eventType}
                      evEditLastChange={event.lastchange}
                      evEditStartDate={event.startdate}
                      evEditEndDate={event.enddate}
                    />
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" data-bs-target="#detailEventModal" data-bs-toggle="modal" data-bs-dismiss="modal">Back</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="modal fade" id="presencesEventModal" aria-hidden="true" aria-labelledby="presencesEventModal" tabndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="presencesEventModal">Event Editation</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <ShowPresences presences={event.presences}/>
                  </div>
                  <div className="modal-footer">
                    <button className="btn btn-secondary" data-bs-target="#detailEventModal" data-bs-toggle="modal" data-bs-dismiss="modal">Back</button>
                  </div>
                </div>
              </div>
            </div>
        </>
  )
}