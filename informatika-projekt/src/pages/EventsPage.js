import { useDispatch, useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import { EventsEdit } from '../components/EditEventButton';
import { useEffect } from 'react';
import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsUpdater } from '../actions/EventsMutationLoaderButton';
import { AddEvent } from '../components/AddEventButton';
import { EventsCard } from '../components/EventsCard';
import TestModal from '../components/TestModalButton';
import { SvgBox } from '../components/SvgBox';

export const EventsPage = () => {
  
    return (
      <>
        <div className='container-fluid bg-dark text-light text-center'>
          <h1>Event Page</h1>
        </div>
        <div className='container text-center p-2'>
          <EventsLoader />
        </div>
        <div className='container my-5 d-flex align-items-center justify-content-center'>
          <EventsCard />
        </div>
          <SvgBox />
      </>
    );
}