import { authorizedFetch } from "./authorizedFetch";

/**
 * Funkce pro vložení události pomocí GraphQL mutace.
 * @function
 * @param {string} groupId - ID skupiny.
 * @returns {Object} JSON objekt pro mutaci EventsInsert.
 */
export const GroupByIdJSON = (groupId) => ({
  "query": 
    `query GroupById($groupId: ID!) {
      groupById(id: $groupId) {
        id
        name
        memberships {
          id
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
    }
  `,
  variables: {
    groupId
  }
})

/**
 * Realizuje dotaz na server.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @function
 * @param {Object} groupId - ID skupiny.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const GroupByIdQuery = (groupId) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupByIdJSON(groupId)),
  });