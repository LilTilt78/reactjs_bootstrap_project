import { authorizedFetch } from './authorizedFetch';

const EventsMutationJSON = (id, lastchange, newName) => ({
  query: `
    mutation {
      eventUpdate(event: {
        id: "${id}"
        lastchange: "${lastchange}"
        name: "${newName}"
      }){
        id
        msg
        event {
          id
          lastchange
        }
      }
    }
  `
});

export const EventsMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(EventsMutationJSON(props.id, props.lastchange, props.newName))
  })