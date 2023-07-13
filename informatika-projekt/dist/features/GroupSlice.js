import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice pro správu stavu skupin.
 * @function
 */
export const groupSlice = createSlice({
  name: "groups",
  initialState: [],
  reducers: {
    /**
     * Reduktor pro načítání dat skupin.
     * @param {Array} state - Stav slice.
     * @param {Object} action - Akce s daty, která se načítají.
     */
    loadGroups: (state, action) => {
      const groups = action.payload;
      state = [...state, ...groups];
      return state;
    }
  }
});

// Export akce loadGroups z groupSlice
export const {
  loadGroups
} = groupSlice.actions;

// Export reduktoru groupSlice
export default groupSlice.reducer;