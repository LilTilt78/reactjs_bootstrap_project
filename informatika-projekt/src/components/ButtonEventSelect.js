import { EventsQuery }  from '../queries/EventQuery';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/EventSlice';
import { useState } from 'react';

/**
 * Komponenta EventSelect pro výběr události.
 * @function
 */
export const EventSelect = () => {
  const dispatch = useDispatch();
  const [dataLoaded, setDataLoaded] = useState(false);

  /**
   * Asynchronní funkce pro načítání dat událostí.
   * @returns {Promise<void>} Slouží pro načtení dat o událostech a dispečování akce 'loadData'.
   */
  const fetchData = async () => {
    try {
      const response = await EventsQuery(); // Volání funkce EventsQuery pro načtení dat událostí
      const data = await response.json(); // Převod odpovědi na formát JSON
      dispatch(loadData(data.data.eventPage)); // Dispatch akce 'loadData' s načtenými událostmi
      setDataLoaded(true); // Nastavení příznaku, že data byla načtena
    } catch (error) {
      // V případě chyby ji zachytáváme, ale neřešíme
    }
  };
 
  return (
    <div>
      <button className="btn" onClick={fetchData} disabled={dataLoaded}>Load Data</button>
    </div>
  )
}