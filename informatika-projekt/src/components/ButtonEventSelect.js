import  {GroupsSelectQuery}  from '../queries/EventGroupQuery';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/EventSlice';
import { useState } from 'react';

export const ButtonEventSelect= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await GroupsSelectQuery();
        const data = await response.json();
        console.log(data.data.eventPage);
        dispatch(loadData(data.data.eventPage));
        setDataLoaded(true);
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
    <div>
      <button className="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >Load</button>
    </div>
  )
}