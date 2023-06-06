import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import React, { useState } from "react";
import { TablePresencies}  from '../components/TablePresences';
import { EventsEdit } from '../components/EditEventButton';


export const EventDetail= (props) => {

    // const evId = useState(props.evId);
    // const evName = useState(props.evName);
    // const evLastChange = useState(props.evLastChange);
    // const evStartDate = useState(props.evStartDate);
    // const evEndDate = useState(props.evEndDate);

   
    return (
        <>
        <a class="btn btn-primary" data-bs-toggle="modal" href="#detailEventModal" role="button">Detail</a>
            <div class="modal fade" id="detailEventModal" aria-hidden="true" aria-labelledby="detailEventModalLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="detailEventModalLabel">Event Detail</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="col-form-label">ID:</label>
                            <input type="text" className="form-control" id="evID" value={props.evId}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Name:</label>
                            <input type="text" className="form-control" id="evName" value={props.evName}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Last change:</label>
                            <input type="text" className="form-control" id="evLastChange" value={props.evLastChange}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">Start date:</label>
                            <input type="text" className="form-control" id="evStartDate" value={props.evStartDate}></input>
                        </div>
                        <div className="mb-3">
                            <label className="col-form-label">End date:</label>
                            <input type="text" className="form-control" id="evEndDate" value={props.evEndDate}></input>
                        </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button class="btn btn-primary" data-bs-target="#editEventModal" data-bs-toggle="modal" data-bs-dismiss="modal">Edit</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade" id="editEventModal" aria-hidden="true" aria-labelledby="editEventModalLabel" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editEventModalLabel">Event Editation</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <EventsEdit 
                            evId={props.evId}
                            evName={props.evName}
                            evLastChange={props.evLastChange}
                            evStartDate={props.evStartDate}
                            evEndDate={props.evEndDate}
                        />
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-target="#detailEventModal" data-bs-toggle="modal" data-bs-dismiss="modal">Back</button>
                  </div>
                </div>
              </div>
            </div>
        </>




    //     <div className="container p-2">

    //     <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal" data-bs-dismiss="modal">Detail</button>
    //     <div className="modal fade" id="detailModal" role='dialog' aria-hidden="true" tabIndex="-1">
    //         <div className="modal-dialog modal-lg modal-dialog-centered">
    //             <div className="modal-content">
    //             <div className="modal-header">
    //                 <h1 className="modal-title fs-5" id="exampleModalLabel">Event Detail</h1>
    //                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div className="modal-body">
    //                 <form>
    //                 <div className="mb-3">
    //                     <label className="col-form-label">ID:</label>
    //                     <input type="text" className="form-control" id="evID" value={props.evId}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label className="col-form-label">Name:</label>
    //                     <input type="text" className="form-control" id="evName" value={props.evName}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label className="col-form-label">Last change:</label>
    //                     <input type="text" className="form-control" id="evLastChange" value={props.evLastChange}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label className="col-form-label">Start date:</label>
    //                     <input type="text" className="form-control" id="evStartDate" value={props.evStartDate}></input>
    //                 </div>
    //                 <div className="mb-3">
    //                     <label className="col-form-label">End date:</label>
    //                     <input type="text" className="form-control" id="evEndDate" value={props.evEndDate}></input>
    //                 </div>
    //                 </form>
    //             </div>
    //             <div className="modal-footer">
    //                 <EventsEdit 
    //                     evId={evId}
    //                     evName={evName}
    //                     evLastChange={evLastChange}
    //                     evStartDate={evStartDate}
    //                     evEndDate={evEndDate}
    //                 />
    //                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                 <button type="button" className="btn btn-primary">Save</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
        
    //   </div>
    )
  }