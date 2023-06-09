import { loadData } from "../features/EventTypeSlice";
import { EventsTypeQuery } from "../queries/EventsTypePageQuery";

/**
 * An asynchronous action creator that fetches projects and dispatches the 'loadProjects' action.
 *
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const EventsTypeFetchAsync = () => (dispatch, getState) => {
  // Call the ProjectsQuery function to fetch projects
  EventsTypeQuery()
    .then(response => response.json())
    .then(json => {
      // Extract the projects data from the JSON response
      const eventsPage = json.data?.eventTypePage
      if (eventsPage) {
        // Dispatch the 'loadProjects' action with the fetched projects
        dispatch(loadData(eventsPage))
      }
      return json
    })
}
