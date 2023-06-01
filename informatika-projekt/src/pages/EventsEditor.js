import { useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import TablePresencies from '../components/TablePresences';
import { EventsEdit } from '../components/EditEventButton';

export default function EventEditor() {
    const events = useSelector(state => state.events);
  
    return (
      <div className="container ">
            { events.map((event)=> 
                    <table className ="table" key={event.id}>
                      <thead>
                        <tr>
                          <td>ID: {event.id}</td>
                        </tr>
                        <tr>
                          <td>Name: {event.name}</td>
                        </tr>
                        <tr>
                          <td>Last Change: {event.lastchange}</td>
                        </tr>
                        <tr>
                          <td>Start Date: {event.startdate}</td>
                        </tr>
                        <tr>
                          <td>End Date: {event.enddate}</td>
                        </tr>
                        <tr>
                          <td>Presences:</td>
                        </tr>
                      </thead>
                      <EventsEdit 
                        evId={event.id}
                        evName={event.name}
                        evLastChange={event.lastchange}
                        evStartDate={event.startdate}
                        evEndDate={event.enddate}
                      />
                      <tbody>
                        <tr>
                          <td><TablePresencies presences={event.presences} /></td>
                        </tr>
                      </tbody>
                    </table>
            )}
      </div>
    );
  }