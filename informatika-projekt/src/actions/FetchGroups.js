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
