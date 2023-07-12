import { authorizedFetch } from './authorizedFetch';

const EventsInsertJSON = (eventName, eventTypeID, startDate, endDate) => ({
    "query":
        `mutation ($event_name:String!, $event_type_id:ID!, $event_start_date:DateTime, $event_end_date:DateTime) {
            eventInsert(event: {
                name: $event_name,
                eventtypeId: $event_type_id,
                startdate: $event_start_date,
                enddate: $event_end_date}){
                    id,
                    msg
                    event {
                        id
                        name
                        lastchange
                        startdate
                        enddate
                        eventType {
                          id
                          name
                        }
                        presences {
                          id
                          presenceType {
                            id
                            name
                          }
                          invitationType {
                            id
                            name
                          }
                          user {
                            id
                            email
                          }
                        }
                    }
                }
        }`, variables: {
            event_type_id: eventTypeID,
            event_name: eventName,
            event_start_date: startDate,
            event_end_date: endDate
        }
});


export const EventsInsert = (props) => 
    authorizedFetch('/gql', {
    body: JSON.stringify(EventsInsertJSON(props.eventName, props.eventTypeID, props.eventStartDate, props.eventEndDate))
  })
