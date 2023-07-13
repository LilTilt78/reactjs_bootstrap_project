import { authorizedFetch } from './authorizedFetch';

/**
 * Vytvoří JSON pro GraphQL dotaz EventsTypeQuery.
 * @function
 * @returns {Object} JSON pro dotaz EventsTypeQuery.
 */
export const EventsTypeJSON = () => ({
  "query": `query{
            eventTypePage {
              id,
              name
            }
          }`
});

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @function
 */
export const EventsTypeQuery = () => authorizedFetch('/gql', {
  body: JSON.stringify(EventsTypeJSON())
});