import { authorizedFetch } from "./authorizedFetch";


const PresenceInsertJSON = (event_id, user_id, invitation_id, presencetype_id) => ({
  "query": `
    mutation ($event_id: ID!, $user_id: ID!, $invitation_id: ID!, $presencetype_id: ID) {
      presenceInsert(presence: {
        eventId: $event_id,
        userId: $user_id,  
        invitationId: $invitation_id, 
        presencetypeId: $presencetype_id
        }){
        id
        msg
        presence {
          event {
            id
            presences {
              id
              lastchange
              invitationType {
                id
                name
              }
              presenceType {
                id
                name
              }
              user {
                id
                name
                surname
                email
              }
            }
          }
        }
      }
    }
  `,
  variables: {
    event_id,
    user_id,
    invitation_id,
    presencetype_id
  }
});


export const PresenceInsert = ({event_id, user_id, invitation_id, presencetype_id}) => 
    authorizedFetch('/gql', {
    body: JSON.stringify(PresenceInsertJSON(event_id, user_id, invitation_id, presencetype_id))
  })