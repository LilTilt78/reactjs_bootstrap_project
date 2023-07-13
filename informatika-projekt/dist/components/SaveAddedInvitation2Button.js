import { useDispatch } from "react-redux";
import { GroupByIdQuery } from "../queries/GroupByIdQuery";
import { handleAddInvitation } from "./SaveAddedInvitationButton";

/**
 * Komponenta SaveAddedInvitation2 pro uložení pozvánky na událost.
 * @function
 * @param {string} eventId - ID události.
 * @param {string} groupId - ID skupiny.
 */
export const SaveAddedInvitation2 = ({
  eventId,
  groupId
}) => {
  const dispatch = useDispatch();

  /**
  * Funkce pro načtení členů skupiny a jejich pozvání na událost.
  * @param {string} eventId - ID události.
  * @param {string} groupId - ID skupiny.
  * @returns {Function} Funkce, která přijímá 'dispatch' a 'getState' funkce z Redux.
  */
  const groupMemebersFetch = (eventId, groupId) => (dispatch, getState) => {
    GroupByIdQuery(groupId).then(response => response.json()).then(json => {
      console.log(json);
      const groupMemberships = json.data?.groupById.memberships;
      if (groupMemberships) {
        const users = groupMemberships.map(user => {
          return user.user.id;
        });
        console.log(users);
        for (let user of users) {
          dispatch(handleAddInvitation(eventId, user));
        }
      } else {
        console.log("Error ocurred in GroupByIdQueryFetch function for fetching data from database: \n");
      }
      return json;
    });
  };
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-success",
    onClick: () => {
      dispatch(groupMemebersFetch(eventId, groupId));
    }
  }, "Save");
};