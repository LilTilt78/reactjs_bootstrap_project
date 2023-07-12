import { useDispatch } from "react-redux";
import { GroupByIdQuery } from "../queries/GroupByIdQuery";
import { handleAddInvitation } from "./SaveAddedInvitationButton";

export const SaveAddedInvitation2 = ({ eventId, groupId }) => {

  const dispatch = useDispatch()

  const groupMemebersFetch = (eventId, groupId) => (dispatch, getState) => {
    GroupByIdQuery(groupId)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        const groupMemberships = json.data?.groupById.memberships
        if (groupMemberships) {
          const users = groupMemberships.map((user) => {
            return user.user.id
          })
          console.log(users)
          for(let user of users){
            dispatch(handleAddInvitation(eventId, user))
          }
        } else {
          console.log("Error ocurred in GroupByIdQueryFetch function for fetching data from database: \n")
        }
        return json;
      });
  };

  
  return (
    <button className="btn btn-success" onClick={() => {dispatch(groupMemebersFetch(eventId, groupId))}}>Save</button>
  )
}