import { EventsLoader } from '../actions/EventsDataLoaderButton';
import { EventsCard } from '../components/EventsCard';
import { SvgBox } from '../components/SvgBox';
import { InvitationsCard } from '../components/InvitationsCard';

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
        <div className='container my-5 d-flex align-items-center justify-content-center'>
          <InvitationsCard />
        </div>
      </>
    );
}