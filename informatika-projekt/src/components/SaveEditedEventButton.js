import { EventsMutation } from '../queries/EventsMutation';


export const SaveEditedEvent = ({ evId, evLastChange, evName, evStartDate, evEndDate, evTypeId }) => {

    const handleEditEvent = async () => {
    try{
      console.log("ID: ", evId);
      console.log("Name: ", evName);
      console.log("LastChange: ", evLastChange);
      console.log("Start: ", evStartDate);
      console.log("End: ", evEndDate);
      console.log("Type: ", evTypeId);
      await EventsMutation({id:evId, lastchange:evLastChange, newName:evName, startDate:evStartDate, endDate:evEndDate, typeId:evTypeId});
      console.log("Mutace propběla");
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