import { loadData } from "../features/EventTypeSlice";
import { EventsTypeQuery } from "../queries/EventsTypePageQuery";

/**
 * Asynchronní action creator, který načítá události a dispečuje akci 'loadData'.
 * @function
 * @returns {Function} Funkce, která přijímá funkce 'dispatch' a 'getState' z Reduxu.
 */
export const EventsTypeFetchAsync = () => (dispatch, getState) => {
  // Zavolá funkci EventsTypeQuery pro načtení událostí
  EventsTypeQuery().then(response => response.json()).then(json => {
    // Extrahuje data o událostech z JSON odpovědi
    const eventsPage = json.data?.eventTypePage;
    if (eventsPage) {
      // Dispečuje akci 'loadData' s načtenými událostmi
      dispatch(loadData(eventsPage));
    }
    return json;
  });
};