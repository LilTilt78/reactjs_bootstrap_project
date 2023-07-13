import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice pro správu stavu typů událostí.
 * @function
 */
export const eventTypeSlice = createSlice({
  name: "eventsType",
  initialState: [],
  reducers: {
    /**
     * Reduktor pro načtení dat typů událostí.
     * @param {Array} state - Stav slicu.
     * @param {Object} action - Akce s payloadem obsahujícím načtená data.
     */
    loadData: (state, action) => {
      const eventsType = action.payload;
      state = [...state, ...eventsType];
      return state;
    },
    /**
     * Reduktor pro přidání nového typu události do stavu.
     * @param {Array} state - Stav slicu.
     * @param {Object} action - Akce s payloadem obsahujícím nová data.
     */
    addData: (state, action) => {
      const newData = action.payload;
      state.push(newData);
      return state;
    },
    /**
     * Reduktor pro aktualizaci dat typu události.
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
    }
  }
});

// Export akcí loadData, addData, updateData z eventTypeSlice
export const {
  loadData,
  addData,
  updateData
} = eventTypeSlice.actions;

// Export eventTypeSlice reduceru
export default eventTypeSlice.reducer;