import { authorizedFetch } from './authorizedFetch';

const GroupsSelectQueryJSON = (id, lastchange, newName) => ({
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

export const EventNameMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(props.id, props.lastchange, props.newName))
  })