import { authorizedFetch } from './authorizedFetch';


const EventsInsertJSON = (eventTypeID, eventName) => ({
    "query":
        `mutation {
            eventInsert(event: {
                eventtypeId: "${eventTypeID}",
                name: "${eventName}"}){
                    id,
                    msg
                }
        }`
});


export const EventsInsert = (props) => 
    authorizedFetch('/gql', {
    body: JSON.stringify(EventsInsertJSON(props.eventTypeID, props.eventName))
  })