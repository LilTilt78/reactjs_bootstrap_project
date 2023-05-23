import { useSelector } from 'react-redux';
//import { EventSelect } from '../components/ButtonEventSelect';
import TablePresencies from '../components/TablePresences';

export default function EventEditor() {
    const events = useSelector(state => state.events);
  
    return (
      <div className="container ">
            { events.map((event)=> 
                    <table className ="table table-bordered" key={event.id}>
                      <tbody>
                      <tr>
                          <td>{event.id}</td>
                          <td>{event.name}</td>
                          <td><TablePresencies presences={event.presences} /></td>
                        </tr>
                      </tbody>
                    </table>
            )}
      </div>
    );
  }