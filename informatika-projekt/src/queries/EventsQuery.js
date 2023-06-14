import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce
 *  
 */
export const EventsQueryJSON = () => ({
    "query":
        `{
          eventPage {
            id
            name
            eventType{
              id
              name
              }
            lastchange
            startdate
            enddate
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
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const EventsQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(EventsQueryJSON()),
    })