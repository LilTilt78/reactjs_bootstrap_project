import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { SaveAddedInvitation2 } from './SaveAddedInvitation2Button';

/**
 * Komponenta AddGroupInvitation pro přidání pozvánky pro skupinu.
 * @function
 * @returns {JSX.Element} Element komponenty pro přidání pozvánky pro skupinu.
 */
export const AddGroupInvitation = () => {
  const events = useSelector((state) => state.events);
  const groups = useSelector((state) => state.groups);

  const [eventId, setEvId] = useState("");
  const [groupId, setGroupId] = useState("");

  /**
   * Funkce pro změnu ID události.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const evIdChange = (e) => {
      setEvId(e.target.value);
  };

  /**
   * Funkce pro změnu ID skupiny.
   * @param {object} e - Událost změny hodnoty vstupního pole.
   */
  const groupIdChange = (e) => {
      setGroupId(e.target.value);
  };

    return (
      <>
        <a className="btn" style={{backgroundColor: '#9f3'}} data-bs-toggle="modal" href="#addGroupInvitationModal" role="button">Invite Group</a>
        <div className="modal fade" id="addGroupInvitationModal" aria-hidden="true" aria-labelledby="addGroupInvitationModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addGroupInvitationModalLabel">Add Invitation to Presence</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className='container'>
                  <label className="col-form-label">Event:</label>
                  <select className='form-select' aria-label='Default select example' onChange={evIdChange}>
                    <option disabled selected>Choose event</option>
                    { events.map((event)=> 
                      <option key={event.id} value={event.id}>{event.name}</option>
                    )}
                  </select>
                </div>
                <div className='container'>
                  <label className="col-form-label">Groups:</label>
                  <select className='form-select' aria-label='Default select example' onChange={groupIdChange}>
                  <option disabled selected>Choose group/groups</option>
                    { groups?.map((group)=> 
                      <option key={group.id} value={group.id}>{group.name}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <SaveAddedInvitation2 eventId={eventId} groupId={groupId}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}