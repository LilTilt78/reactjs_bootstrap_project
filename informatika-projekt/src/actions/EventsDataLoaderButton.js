import 'bootstrap/dist/css/bootstrap.min.css';
import  { EventsQuery }  from '../queries/EventsQuery';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/EventSlice';
import { useState } from 'react';
import { UsersFetchAsync } from './FetchUsers';
import { GroupsFetchAsync } from './FetchGroups';

export const EventsLoader= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await EventsQuery();
        const data = await response.json();
        console.log(data.data.eventPage);
        dispatch(loadData(data.data.eventPage));
        setDataLoaded(true);
        dispatch(UsersFetchAsync())
        dispatch(GroupsFetchAsync())
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
 
  return (
    <div>
      <button className='btn' style={{backgroundColor: '#9f3'}} onClick={fetchData} disabled={dataLoaded}>{dataLoaded ? 'Data Loaded' : 'Load Data'}</button>
    </div>
  )
}