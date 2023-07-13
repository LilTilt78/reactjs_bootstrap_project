const globalFetchParams = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  cache: 'no-cache',
  // *default, no-cache, reload, force-cache, only-if-cached
  redirect: 'follow' // manual, *follow, error
};

/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @function
 * @param {string} path - Cesta k API endpointu.
 * @param {Object} params - Volitelné parametry pro fetch.
 * @returns {Promise} - Promise obsahující výsledek fetch požadavku.
 */
export const authorizedFetch = (path, params) => {
  const newParams = {
    ...globalFetchParams,
    ...params
  }; // umožňuje přepsání výchozích parametrů (globalFetchParams)
  const overridenPath = '/api/gql';
  return fetch(overridenPath, newParams) //params.header by měl být rozšířen o autorizační TOKEN
  ;
};