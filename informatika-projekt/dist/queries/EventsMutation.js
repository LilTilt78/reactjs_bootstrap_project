import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce pro upravení události pomocí GraphQL mutace.
 * @param {string} id - ID události.
 * @param {string} lastChange - Poslední změna.
 * @param {string} newName - Nový název události.
 * @param {string} typeId - ID typu události.
 * @param {string} startDate - Datum a čas začátku události.
 * @param {string} endDate - Datum a čas konce události.
 * @returns {Object} JSON objekt pro mutaci EventsMutation.
 */
const EventsMutationJSON = (id, lastChange, newName, startDate, endDate, typeId) => ({
  query: `
    mutation ($event_id:ID!, $event_last_change:DateTime!, $event_name:String, $event_start_date:DateTime, $event_end_date:DateTime, $event_type_id:ID) {
      eventUpdate(event: {
        id: $event_id,
        lastchange: $event_last_change,
        name: $event_name,
        startdate: $event_start_date,
        enddate: $event_end_date
        eventtypeId: $event_type_id
      }){
        id
        msg
        event {
          id
          lastchange
        }
      }
    }`,
  variables: {
    event_id: id,
    event_last_change: lastChange,
    event_name: newName,
    event_start_date: startDate,
    event_end_date: endDate,
    event_type_id: typeId
  }
});

/**
 * Realizuje dotaz na server pro mutaci úpravu události.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @function
 * @param {Object} props - Parametry pro úpravu události.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const EventsMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(EventsMutationJSON(props.id, props.lastchange, props.newName, props.startDate, props.endDate, props.typeId))
});