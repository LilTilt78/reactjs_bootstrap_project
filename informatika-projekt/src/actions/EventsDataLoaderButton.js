import 'bootstrap/dist/css/bootstrap.min.css';
import { EventsQuery }  from '../queries/EventsQuery';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/EventSlice';
import { useState } from 'react';
import { UsersFetchAsync } from './FetchUsers';
import { GroupsFetchAsync } from './FetchGroups';

/**
* Komponenta EventsLoader pro načtení dat.
* @function
*/
export const EventsLoader= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

  /**
   * Asynchronní funkce pro načítání dat.
   * @returns {Promise<void>} Slouží pro načtení dat o událostech.
   */
  const fetchData = async () => {
    try {
      const response = await EventsQuery(); // Volání funkce EventsQuery pro získání dat o událostech
      const data = await response.json(); // Převod odpovědi na formát JSON
      console.log(data.data.eventPage); // Výpis dat o stránce událostí do konzole
      dispatch(loadData(data.data.eventPage)); // Dispatch akce pro načtení dat do store
      setDataLoaded(true); // Nastavení příznaku, že data byla načtena
      dispatch(UsersFetchAsync()); // Dispatch asynchronní akce pro načtení uživatelů
      dispatch(GroupsFetchAsync()); // Dispatch asynchronní akce pro načtení skupin
    } catch (error) {
      console.error('Error fetching data:', error); // Výpis chyby při načítání dat
    }
  };
 
  return (
    <div>
      <button className='btn' style={{backgroundColor: '#9f3'}} onClick={fetchData} disabled={dataLoaded}>{dataLoaded ? 'Data Loaded' : 'Load Data'}</button>
    </div>
  )
}