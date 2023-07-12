import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeDetail } from '../features/EventDisplaySlice';


export const InviteDetail= ({ eventDetail }) => {

  const event = useSelector((state) => state.eventDetail)
  const dispatch = useDispatch()

    return (
        <>
        <a className="btn btn-dark" data-bs-toggle="modal" href="#detailEventInvitationModal" role="button" onClick={()=>{dispatch(changeDetail(eventDetail))}}>Detail</a>
            <div className="modal fade" id="detailEventInvitationModal" aria-hidden="true" aria-labelledby="detailEventInvitationModalLabel" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="detailEventInvitationModalLabel">Invitation Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="col-form-label">Name of the event:</label>
                            <label type="text" className="form-control">{event.name}</label>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Presences:</label>
                            { event.presences?.map((presence)=> 
                                <table className ="table table-presences" key={presence.id}>
                                <thead>
                                    <tr>
                                    <th>{presence.user.name} {presence.user.surname}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><span>Email: </span>{presence.user.email}</td>
                                    </tr>
                                    <tr>
                                        <td><span>Invitation: </span>{presence.invitationType.name}<span>, Presence: </span>{presence.presenceType.name}</td>
                                    </tr>
                                </tbody>
                                </table>
                                    )}
                        </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
  }