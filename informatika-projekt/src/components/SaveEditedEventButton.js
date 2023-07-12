import { EventsMutation } from '../queries/EventsMutation';


export const SaveEditedEvent = ({ evId, evLastChange, evName, evStartDate, evEndDate, evTypeId }) => {

    const handleEditEvent = async () => {
    try{
      await EventsMutation({id:evId, lastchange:evLastChange, newName:evName, startDate:evStartDate, endDate:evEndDate, typeId:evTypeId});
      alert("Změna úspěšně proběhla");
    }
    catch (error) {
        console.error("Adding error", error);
    }
}
  return (
    <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleEditEvent}>Save</button>
  )
}