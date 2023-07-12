import { authorizedFetch } from './authorizedFetch';

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
                name
                surname
                email
                membership {
                  id
                  group {
                    id
                    name
                  }
                }
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