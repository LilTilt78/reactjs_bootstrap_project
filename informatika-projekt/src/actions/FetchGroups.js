import { loadGroups} from "../features/GroupSlice";
import { GroupsQuery } from "../queries/GroupsQuery";

/**
 * An asynchronous action creator that fetches events and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const GroupsFetchAsync = () => (dispatch, getState) => {
  // Call the EventsQuery function to fetch events
  GroupsQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the events data from the JSON response
      const groupsPage = json.data?.groupPage
      if (groupsPage) {
        // Dispatch the 'loadData' action with the fetched events
        dispatch(loadGroups(groupsPage))
      }
      return json
    })
}


// const groupTypeFetch = () => (dispatch, getState) => {
//     GroupsQuery()
//       .then(response => response.json())
//       .then(json => {
//         // extract data from groupPage, ? => if data exist, else doesn't create an error
//         const GroupTypeSetter = json.data?.groupPage
//         if (GroupTypeSetter) {
//           setGroupTypeSetter(GroupTypeSetter)
//           //console.log(presenceType);
//         } else {
//           console.log("Error ocurred in groupTypeFetch function for fetching data from database: \n", console.error());
//         }
//         return json
//       })
//   }