import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
 *  
 */
export const GroupsSelectQueryJSON = () => ({
    "query":
        `{
          eventPage {
            id
            name
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

export const GroupsSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsSelectQueryJSON()),
    })