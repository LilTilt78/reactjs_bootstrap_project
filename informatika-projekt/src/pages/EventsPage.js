import { useDispatch, useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import { TablePresencies}  from '../components/TablePresences';
import { EventsEdit } from '../components/EditEventButton';
import Card from "react-bootstrap/Card";
import { useEffect } from 'react';
import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsUpdater } from '../actions/EventsMutationLoaderButton';
import { ShowPresences } from '../components/ShowPresences';

export const EventsPage = () => {
    const events = useSelector((state) => state.events);
  
    return (
      <div className="container ">
        <div className='container-fluid bg-info text-center'>
          <h1>Event Page</h1>
        </div>
        <div className='container text-center p-2'>
          <EventsLoader />
        </div>
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
                      <TablePresencies presences={event.presences} />
                      {/* <ShowPresences presences={event.presences}/> */}
                      <tbody>
                        <tr>
                          {/* <td><TablePresencies presences={event.presences} /></td> */}
                        </tr>
                      </tbody>
                    </table>
            )}
        <div className='container text-center p-2'>
          <EventsUpdater />
        </div>
      </div>
    );
  }