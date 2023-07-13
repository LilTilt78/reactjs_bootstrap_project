import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice pro správu stavu detailu.
 * @function
 */
export const detailSlice = createSlice({
    name: "detail",
    initialState: {},
    reducers: {
      /**
       * Akce pro změnu detailu.
       * @param {Object} state - Stav slicu.
       * @param {Object} action - Akce s payloadem.
       */
      changeDetail: (state, action) => {
        state = action.payload;
        return state;
      },
    },
  });
  
  // Export akce changeDetail z detailSlice
  export const { changeDetail } = detailSlice.actions;
  
  // Export detailSlice reduceru
  export default detailSlice.reducer;