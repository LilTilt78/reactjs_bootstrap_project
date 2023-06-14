import { authorizedFetch } from './authorizedFetch';

const EventsMutationJSON = (id, lastChange, newName, startDate, endDate, typeId) => ({
  query: `
    mutation ($event_id:ID!, $event_last_change:DateTime!, $event_name:String, $event_start_date:DateTime, $event_end_date:DateTime, $event_type_id:ID) {
      eventUpdate(event: {
        id: $event_id,
        lastchange: $event_last_change,
        name: $event_name,
        startdate: $event_start_date,
        enddate: $event_end_date
        eventtypeId: $event_type_id
      }){
        id
        msg
        event {
          id
          lastchange
        }
      }
    }`, variables: {
        event_id: id,
        event_last_change: lastChange,
        event_name: newName,
        event_start_date: startDate,
        event_end_date: endDate,
        event_type_id: typeId
    }
});

export const EventsMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(EventsMutationJSON(props.id, props.lastchange, props.newName, props.startDate, props.endDate, props.typeId))
  })