import { authorizedFetch } from './authorizedFetch';

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns 
 */
export const EventsTypePageJSON = () => ({
    "query":
        `query{
            eventTypePage {
              id,
              name
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const EventsTypePageQuery = () =>
authorizedFetch('/gql', {
        body: JSON.stringify(EventsTypePageJSON()),
    })