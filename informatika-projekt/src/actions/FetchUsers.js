import { loadUsers } from '../features/UserSlice';
import { UsersQuery } from '../queries/UsersQuery';

/**
 * An asynchronous action creator that fetches events and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const UsersFetchAsync = () => (dispatch, getState) => {
  // Call the EventsQuery function to fetch events
  UsersQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the events data from the JSON response
      const usersPage = json.data?.userPage
      if (usersPage) {
        // Dispatch the 'loadData' action with the fetched events
        dispatch(loadUsers(usersPage))
      }
      return json
    })
}