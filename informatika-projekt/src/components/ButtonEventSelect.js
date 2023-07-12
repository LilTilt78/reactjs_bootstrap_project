import { EventsQuery }  from '../queries/EventQuery';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/EventSlice';
import { useState } from 'react';

export const EventSelect= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await EventsQuery();
        const data = await response.json();
        dispatch(loadData(data.data.eventPage));
        setDataLoaded(true);
      } catch (error) {
      }
    };
 
  return (
    <div>
      <button className="btn" onClick={fetchData} disabled={dataLoaded}>Load Data</button>
    </div>
  )
}