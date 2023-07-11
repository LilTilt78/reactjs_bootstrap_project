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
            <div className='card-header bg-dark text-light'><h4>Events Card</h4></div>
              <table className='table'>
                <thead>
                  <tr>
                    <td width="20%" style={{backgroundColor: '#9f3'}}>Name:</td>
                    <td width="20%" style={{backgroundColor: '#9f3'}}>Type:</td>
                    <td width="30%" style={{backgroundColor: '#9f3'}}>Start Date:</td>
                    <td width="30%" style={{backgroundColor: '#9f3'}}>End Date:</td>
                  </tr>
                </thead>
              </table>
                <div className='card-body'>
                    { events.map((event)=> 
                    <table className ="table" key={event.id}>
                      <tbody>
                        <tr>
                          <td width="20%">{event.name}</td>
                          <td width="20%">{event.eventType? event.eventType.name : ""}</td>
                          <td width="30%">{event.startdate}</td>
                          <td width="30%">{event.enddate}</td>
                          <EventDetail eventDetail={event}/>
                        </tr>
                      </tbody>
                    </table>
            )}
            <AddEvent />
            </div>
        </div>
    )
  }