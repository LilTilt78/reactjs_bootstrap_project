import { authorizedFetch } from "./authorizedFetch";


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


export const GroupByIdQuery = (groupId) =>
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupByIdJSON(groupId)),
  });