import { loadGroups} from "../features/GroupSlice";
import { GroupsQuery } from "../queries/GroupsQuery";

/**
 * Asynchronní action creator, který načítá skupiny a dispečuje akci 'loadGroups'.
 * @function
 * @returns {Function} Funkce, která přijímá funkce 'dispatch' a 'getState' z Reduxu.
 */
export const GroupsFetchAsync = () => (dispatch, getState) => {
  // Zavolá funkci GroupsQuery pro načtení skupin
  GroupsQuery()
    .then(response => response.json())
    .then(json => {
      // Extrahuje data o skupinách z JSON odpovědi
      const groupsPage = json.data?.groupPage
      if (groupsPage) {
        // Dispečuje akci 'loadGroups' s načtenými skupinami
        dispatch(loadGroups(groupsPage))
      }
      return json
    })
}
