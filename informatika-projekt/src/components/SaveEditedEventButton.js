import { EventsMutation } from '../queries/EventsMutation';
import { addData } from '../features/EventSlice';
import { useDispatch } from 'react-redux';


export const SaveEditedEvent = ({ id, lastChange, newName, startDate, endDate }) => {
    const dispatch = useDispatch()

    const handleEditEvent = async () => {
    try{
        const response = await EventsMutation({id, lastChange, newName, startDate, endDate });
        const data = await response.json();
        dispatch(addData(data.data.eventInsert.event));
        alert("Změna úspěšně proběhla");
    }
    catch (error) {
        console.error("Adding error", error);
    }
}

  return (
    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEditEvent}>Save</button>
  )
}