import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React from "react";

export const EventsEdit= (props) => {

    
   
    return (
      <div className='container'>

        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >Edit Event</button>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Event Editation</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="mb-3">
                        <label className="col-form-label">ID:</label>
                        <input type="text" className="form-control" id="recipient-name" value={props.evId}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Name:</label>
                        <input type="text" className="form-control" id="recipient-name" value={props.evName}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Last change:</label>
                        <input type="text" className="form-control" id="recipient-name" value={props.evLastChange}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">Start date:</label>
                        <input type="text" className="form-control" id="recipient-name" value={props.evStartDate}></input>
                    </div>
                    <div className="mb-3">
                        <label className="col-form-label">End date:</label>
                        <input type="text" className="form-control" id="recipient-name" value={props.evEndDate}></input>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
        
      </div>
    )
  }