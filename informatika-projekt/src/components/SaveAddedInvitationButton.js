<<<<<<< HEAD
import { useState } from "react";

export const SaveAddedInvitation = ({evName, userName, groupName}) => {

    

  return (
    <>
        <button className="btn btn-success" data-bs-dismiss="modal">Save</button>
    </>
=======
import { EventsInsert } from "../queries/EventsInsert";
import { addData } from '../features/EventSlice';
import { useDispatch } from 'react-redux';


export const SaveAddedInvitation = ({ type, name, group}) => {
    const dispatch = useDispatch()

    const handleAddInvitation = async () => {
    try{
        const response = await EventsInsert({eventType:type, eventUserName:name, eventUserGroup:group});
        const data = await response.json();
        dispatch(addData(data.data.eventInsert.event));
        alert("Pozvánka úspěšně poslána");
    }
    catch (error) {
        console.error("Adding error", error);
    }
}

  return (
    <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleAddInvitation}>Save</button>
>>>>>>> 3560b3ea82126422690650ce62140e136c1ccbe7
  )
}