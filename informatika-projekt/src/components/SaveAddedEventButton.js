import { EventsInsert } from "../queries/EventsInsert";
import { addData } from '../features/EventSlice';
import { useDispatch } from 'react-redux';


export const SaveAddedEvent = ({ name, typeId, startDate, endDate }) => {
    const dispatch = useDispatch()

    const handleAddEvent = async () => {
    try{
        const response = await EventsInsert({eventName:name, eventTypeID:typeId, eventStartDate:startDate, eventEndDate:endDate });
        const data = await response.json();
        dispatch(addData(data.data.eventInsert.event));
        alert("Přidání úspěšně proběhlo");
    }
    catch (error) {
        console.error("Adding error", error);
    }
}

  return (
    <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleAddEvent}>Save</button>
  )
}