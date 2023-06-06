import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import { useSelector } from 'react-redux';
import { EventDetail } from './EventDetailButton';
import { AddEvent } from './AddEventButton';

export const EventsCard= () => {

    const events = useSelector((state) => state.events);
   
    return (
        <div className="card-container">
            <div className='card-title'><h4>Events Card</h4></div>
                <div className='card-body'>
                    { events.map((event)=> 
                    <table className ="table" key={event.id}>
                      <thead>
                        <tr>
                          <td>Name: {event.name}</td>
                          <td>Start Date: {event.startdate}</td>
                          <td>End Date: {event.enddate}</td>
                          <EventDetail 
                            evId={event.id}
                            evName={event.name}
                            evLastChange={event.lastchange}
                            evStartDate={event.startdate}
                            evEndDate={event.enddate}
                            presences={event.presences}
                          />
                        </tr>
                      </thead>
                    </table>
            )}
            <AddEvent />
            </div>
        </div>
    )
  }