import { PresenceInsert } from "../queries/PresenceInsert";
import { useDispatch } from "react-redux";
import { addPresence } from "../features/EventSlice";

export const SaveAddedInvitation = ({ eventId, userId }) => {
  const dispatch = useDispatch()

  const handleAddInvitation = async () => {
  try{
      const response = await PresenceInsert({event_id:eventId, user_id:userId, invitationtype_id:"e871403c-a79c-11ed-b76e-0242ac110002", presencetype_id:"466398c6-a79c-11ed-b76e-0242ac110002"});
      const data = await response.json();
      dispatch(addPresence(data.data.presenceInsert.presence));
      alert("Přidání úspěšně proběhlo");
  }
  catch (error) {
      console.error("Adding error", error);
  }

  }
  return (
    <button className="btn btn-success" data-bs-dismiss="modal" onClick={handleAddInvitation}>Save</button>
  )
}