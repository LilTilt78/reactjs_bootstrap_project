import { authorizedFetch } from "./authorizedFetch"


export const GroupsQueryJSON = () => ({
    "query":
        `query{
            groupPage {
              id
              name
          }
          }`,
})


export const GroupsQuery = () =>
authorizedFetch('/gql', {
        body: JSON.stringify(GroupsQueryJSON()),
})