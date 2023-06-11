import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import { EventDetail } from './EventDetailButton';
import { AddEvent } from './AddEventButton';
import { useDispatch, useSelector } from 'react-redux';
import { changeDetail } from '../features/EventDisplaySlice';


export const EventsCard= () => {

    const events = useSelector((state) => state.events);


    return (
        <div className="card" style={{width: '1000px'}}>
            <div className='card-header' style={{backgroundColor: '#9f3'}}><h4>Events Card</h4></div>
              <table className='table'>
                <thead>
                  <tr>
                    <td width="40%">Name:</td>
                    <td width="30%">Start Date:</td>
                    <td width="30%">End Date:</td>
                  </tr>
                </thead>
              </table>
                <div className='card-body'>
                    { events.map((event)=> 
                    <table className ="table" key={event.id}>
                      <tbody>
                        <tr>
                          <td width="40%">{event.name}</td>
                          <td width="30%">{event.startdate}</td>
                          <td width="30%">{event.enddate}</td>
                          <EventDetail 
                            eventDetail={event}
                            // evId={event.id}
                            // evName={event.name}
                            // evLastChange={event.lastchange}
                            // evStartDate={event.startdate}
                            // evEndDate={event.enddate}
                            // evPresences={event.presences}
                          />
                        </tr>
                      </tbody>
                    </table>
            )}
            <AddEvent />
            </div>
        </div>
    )
  }