import { authorizedFetch } from "./authorizedFetch";

/**
 * Funkce pro vložení presence pomocí GraphQL mutace.
 * @param {string} event_id - ID události.
 * @param {string} user_id - ID uživatele.
 * @param {string} invitation_id - ID pozvánky.
 * @param {string} presencetype_id - ID typu presence.
 * @returns {Object} JSON objekt pro mutaci PresenceInsert.
 */
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

/**
 * Realizuje dotaz na server pro mutaci přidání události.
 * Využívá funkci authorizedFetch pro komunikaci se serverem.
 * @function
 * @param {string} event_id - ID události.
 * @param {string} user_id - ID uživatele.
 * @param {string} invitation_id - ID pozvánky.
 * @param {string} presencetype_id - ID typu presence.
 * @returns {Promise<Response>} - Promise reprezentující odpověď ze serveru.
 */
export const PresenceInsert = ({
  event_id,
  user_id,
  invitation_id,
  presencetype_id
}) => authorizedFetch('/gql', {
  body: JSON.stringify(PresenceInsertJSON(event_id, user_id, invitation_id, presencetype_id))
});