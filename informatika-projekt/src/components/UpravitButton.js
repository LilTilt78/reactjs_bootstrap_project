import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React from "react";

export const EventsUpravit= (props) => {

    
   
    return (
      <div className="container p-2">

        <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#myModal">Upravit</button>
        <div className="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Úprava prezence: {props.presenceId}</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <table>
                  <tbody>
                        <tr>
                          <td><span>Presence Type ID:</span> {props.presenceTypeId} </td>
                          <td><span>Presence Type Name:</span> {props.presenceTypeName} </td>
                        </tr>
                        <tr>
                          <td><span>Invitation Type ID:</span> {props.invitationTypeId} </td>
                          <td><span>Invitation Type Name:</span> {props.invitationTypeName} </td>
                        </tr>
                        <tr>
                          <td><span>User ID:</span> {props.userId} </td>
                          <td><span>User Email:</span> {props.userEmail} </td>
                        </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-success">Save</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }