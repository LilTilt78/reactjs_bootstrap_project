import { authorizedFetch } from './authorizedFetch';

const EventsMutationJSON = (id, lastChange, newName, startDate, endDate) => ({
  query: `
    mutation ($event_id:ID!, $event_last_change:DateTime!, $event_name:String, $event_start_date:DateTime, $event_end_date:DateTime) {
      eventUpdate(event: {
        id: $event_id,
        lastchange: $event_last_change,
        name: $event_name,
        startdate: $event_start_date,
        enddate: $event_end_date
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
        event_end_date: endDate
    }
});

export const EventsMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(EventsMutationJSON(props.id, props.lastchange, props.newName, props.startDate, props.endDate))
  })