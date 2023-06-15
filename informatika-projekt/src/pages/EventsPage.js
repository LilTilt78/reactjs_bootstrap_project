import { useDispatch, useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import { EventsEdit } from '../components/EditEventButton';
import { useEffect } from 'react';
import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsUpdater } from '../actions/EventsMutationLoaderButton';
import { AddEvent } from '../components/AddEventButton';
import { EventsCard } from '../components/EventsCard';
import TestModal from '../components/TestModalButton';

export const EventsPage = () => {
  
    return (
      <>
        <div className='container-fluid bg-dark text-light text-center'>
          <h1>Event Page</h1>
        </div>
        <div className='container text-center p-2'>
          <EventsLoader />
        </div>
        {/* <div className='container text-center p-2'>
          <EventsUpdater />
        </div> */}
        {/* <div className='container text-center p-2'>
          <TestModal />
        </div> */}
        <EventsCard />
            {/* { events.map((event)=> 
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
                          <AddEvent />
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
                      <ShowPresences presences={event.presences}/>
                      <tbody>
                        <tr>
                          <td><TablePresencies presences={event.presences} /></td>
                        </tr>
                      </tbody>
                    </table>
            )} */}
        
      </>
    );
  }