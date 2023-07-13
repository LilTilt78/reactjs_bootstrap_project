import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce pro vložení události pomocí GraphQL mutace.
 * @param {string} eventName - Název události.
 * @param {string} eventTypeID - ID typu události.
 * @param {string} startDate - Datum a čas začátku události.
 * @param {string} endDate - Datum a čas konce události.
 * @returns {Object} JSON objekt pro mutaci EventsInsert.
 */
const EventsInsertJSON = (eventName, eventTypeID, startDate, endDate) => ({
  "query": `mutation ($event_name:String!, $event_type_id:ID!, $event_start_date:DateTime, $event_end_date:DateTime) {
            eventInsert(event: {
                name: $event_name,
                eventtypeId: $event_type_id,
                startdate: $event_start_date,
                enddate: $event_end_date}){
                    id,
                    msg
                    event {
                        id
                        name
                        lastchange
                        startdate
                        enddate
                        eventType {
                          id
                          name
                        }
                        presences {
                          id
                          presenceType {
                            id
                            name
                          }
                          invitationType {
                            id
                            name
                          }
                          user {
                            id
                            email
                          }
                        }
                    }
                }
        }`,
  variables: {
    event_type_id: eventTypeID,
    event_name: eventName,
    event_start_date: startDate,
    event_end_date: endDate
  }
});

/**
 * Realizuje dotaz na server pro mutaci přidání události.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @function
 * @param {Object} props - Parametry pro vložení události.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const EventsInsert = props => authorizedFetch('/gql', {
  body: JSON.stringify(EventsInsertJSON(props.eventName, props.eventTypeID, props.eventStartDate, props.eventEndDate))
});