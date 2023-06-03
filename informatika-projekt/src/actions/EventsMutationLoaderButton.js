import 'bootstrap/dist/css/bootstrap.min.css';
import { EventsMutation } from '../queries/EventsMutation';


export const EventsUpdater = (props) => {

  const fetchData = async () => {
    try {
      const response = await EventsMutation(props);
      const data = await response.json();
      console.log('clicked', data);
      console.log('updateData: ', data.data.eventUpdate.msg);
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };


  return (
    <button
        className="btn btn-info"
        onClick={fetchData}
    >
    Update Data
    </button>
  )
}