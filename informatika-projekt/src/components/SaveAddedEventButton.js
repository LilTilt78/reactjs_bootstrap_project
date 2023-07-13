import { EventsInsert } from "../queries/EventsInsert";
import { addData } from '../features/EventSlice';
import { useDispatch } from 'react-redux';

/**
 * Komponenta SaveAddedEvent pro uložení nové události.
 * @function
 * @param {string} name - Název události.
 * @param {string} typeId - ID typu události.
 * @param {string} startDate - Datum a čas začátku události.
 * @param {string} endDate - Datum a čas konce události.
 * @returns {JSX.Element} Tlačítko pro uložení nové události.
 */
export const SaveAddedEvent = ({ name, typeId, startDate, endDate }) => {
    const dispatch = useDispatch()

    /**
    * Funkce pro přidání události.
    * @async
    */
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