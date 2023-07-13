import { createSlice, current } from "@reduxjs/toolkit";

/**
 * Redux slice pro správu stavu událostí.
 * @function
 */
export const eventSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {
    /**
     * Reducer pro načtení dat událostí.
     * @param {Array} state - Stav slicu.
     * @param {Object} action - Akce s payloadem obsahujícím načtená data.
     */
    loadData: (state, action) => {
      const events = action.payload;
      state = [...state, ...events];
      return state;
    },
    /**
     * Reducer pro přidání nové události do stavu.
     * @param {Array} state - Stav slicu.
     * @param {Object} action - Akce s payloadem obsahujícím nová data.
     */
    addData: (state, action) => {
      const newData = action.payload;
      state.push(newData);
      return state;
    },
    /**
     * Reducer pro aktualizaci dat události.
     * @param {Array} state - Stav slicu.
     * @param {Object} action - Akce s payloadem obsahujícím aktualizovaná data.
     */
    updateData: (state, action) => {
      const updateData = action.payload;
      state = state.map(data => data.id === updateData.id ? {
        ...data,
        ...updateData
      } : data);
      return state;
    },
    /**
     * Reducer pro přidání přítomnosti k události.
     * @param {Array} state - Stav slicu.
     * @param {Object} action - Akce s payloadem obsahujícím přidané přítomnosti.
     */
    addPresence: (state, action) => {
      const updateData = action.payload;
      console.log(updateData);
      const event = current(state).find(event => event.id === updateData.event.id);
      const newEvent = {
        ...event,
        presences: updateData.event.presences
      };
      state = current(state).map(event => event.id === newEvent.id ? newEvent : event);
      return state;
    }
  }
});

// Export akcí loadData, addData, updateData, addPresence z eventSlice
export const {
  loadData,
  addData,
  updateData,
  addPresence
} = eventSlice.actions;

// Export eventSlice reduceru
export default eventSlice.reducer;