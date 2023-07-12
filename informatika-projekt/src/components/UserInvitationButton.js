import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { SaveAddedInvitation } from './SaveAddedInvitationButton';

export const AddUserInvitation = () => {
 
    const events = useSelector((state) => state.events);
    const users = useSelector((state) => state.users);

    const [eventId, setEvId] = useState("");
    const [userId, setUserId] = useState("");

    const evIdChange = (e) =>{
        setEvId(e.target.value);
    }

    const userIdChange = (e) =>{
        setUserId(e.target.value);
    }

    return (
      <>
        <a className="btn" style={{backgroundColor: '#9f3'}} data-bs-toggle="modal" href="#addUserInvitationModal" role="button">Invite User</a>
        <div className="modal fade" id="addUserInvitationModal" aria-hidden="true" aria-labelledby="addInvitationModalLabel" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="addUserInvitationModalLabel">Add Invitation to Presence</h5>
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
                  <label className="col-form-label">Users:</label>
                  <select className='form-select' aria-label='Default select example' onChange={userIdChange}>
                  <option disabled selected>Choose user</option>
                    { users.map((user)=> 
                      <option key={user.id} value={user.id}>{user.name} {user.surname}</option>
                    )}
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <SaveAddedInvitation  eventId={eventId} userId={userId}/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}