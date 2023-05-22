import { useSelector } from 'react-redux';
import { EventSelect } from '../components/ButtonEventSelect';

export default function EventEditor() {
    const events = useSelector(state => state.events);
  
    return (
      <div className="container ">
        <EventSelect />
        <table className='table table-bordered'> 
            { events.map((event)=> 
                <tbody>
                    <table class ="table table-bordered">
                        {/* <SurveyNameBox key={survey.id} name={survey.name} id={survey.id} lastchange={survey.lastchange} /> */}
                    </table>
                </tbody>
            )}
        </table>
      </div>
    );
  }