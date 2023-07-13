import { authorizedFetch } from "./authorizedFetch"

/**
 * Vytvoří JSON pro GraphQL dotaz GroupsQuery.
 * @function
 * @returns {Object} JSON pro dotaz GroupsQuery.
 */
export const GroupsQueryJSON = () => ({
    "query":
        `query{
            groupPage {
              id
              name
          }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @function
 */
export const GroupsQuery = () =>
authorizedFetch('/gql', {
        body: JSON.stringify(GroupsQueryJSON()),
})