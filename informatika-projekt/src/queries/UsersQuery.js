import { authorizedFetch } from "./authorizedFetch"

/**
 * Vytvoří JSON pro GraphQL dotaz UsersQuery.
 * @function
 * @returns {Object} JSON pro dotaz UsersQuery.
 */
export const UsersQueryJSON = () => ({
    "query":
        `query{
            userPage {
              id
              name
              surname
              email
          }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @function
 */
export const UsersQuery = () =>
authorizedFetch('/gql', {
        body: JSON.stringify(UsersQueryJSON()),
})