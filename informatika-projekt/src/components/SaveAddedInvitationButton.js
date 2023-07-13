import { PresenceInsert } from "../queries/PresenceInsert";
import { useDispatch } from "react-redux";
import { addPresence } from "../features/EventSlice";

/**
 * Funkce pro přidání pozvánky na událost.
 * @function
 * @param {string} eventId - ID události.
 * @param {string} userId - ID uživatele.
 * @returns {Function} Funkce, která přijímá 'dispatch' a 'getState' funkce z Redux.
 */
export const handleAddInvitation = (eventId, userId) => (dispatch, getState) => {
  PresenceInsert({event_id:eventId, user_id:userId, invitation_id:"e871403c-a79c-11ed-b76e-0242ac110002", presencetype_id:"466398c6-a79c-11ed-b76e-0242ac110002"})
    .then(response=>response.json())
    .then(json => {
      const presence = json.data?.presenceInsert.presence
      if(presence){
        dispatch(addPresence(presence));
      }
      return json
    })
}

/**
 * Komponenta SaveAddedInvitation pro uložení pozvánky na událost.
 * @function
 * @param {string} eventId - ID události.
 * @param {string} userId - ID uživatele.
 */
export const SaveAddedInvitation = ({ eventId, userId }) => {
  const dispatch = useDispatch()
  return (
    <button className="btn btn-success" data-bs-dismiss="modal" onClick={() => {dispatch(handleAddInvitation(eventId, userId))}}>Save</button>
  )
}