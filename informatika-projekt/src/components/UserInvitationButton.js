import { useSelector } from 'react-redux';
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { UsersFetchAsync } from '../actions/FetchUsers';
import { SaveAddedInvitation } from './SaveAddedInvitationButton';

export const AddUserInvitation = () => {
 
    const dispatch = useDispatch()
    const events = useSelector((state) => state.events);
    const users = useSelector((state) => state.users);

    const [evName, setEvName] = useState("");
    const [userName, setUserName] = useState("");

    const evNameChange = (e) =>{
        setEvName(e.target.value);
        console.log("EvName: ", evName);
    }

    const userNameChange = (e) =>{
        setUserName(e.target.value);
        console.log("UserName: ", userName);
    }

    return (
      <>
        <a className="btn" style={{backgroundColor: '#9f3'}} data-bs-toggle="modal" href="#addUserInvitationModal" role="button" onClick={() => {dispatch(UsersFetchAsync())}}>Invite User</a>
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
                  <select className='form-select' aria-label='Default select example' onChange={evNameChange}>
                    <option disabled selected>Choose event</option>
                    { events.map((event)=> 
                      <option key={event.id} value={event.id}>{event.name}</option>
                    )}
                  </select>
                </div>
                <div className='container'>
                  <label className="col-form-label">Users:</label>
                  <select className='form-select' aria-label='Default select example' onChange={userNameChange}>
                  <option disabled selected>Choose user/users</option>
                    { users.map((user)=> 
                      <option key={user.id} value={user.id}>{user.name} {user.surname}</option>
                    )}
                  </select>
                </div>
              </div>
              <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <SaveAddedInvitation evName={evName} userName={userName} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}