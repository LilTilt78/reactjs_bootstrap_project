import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice pro správu stavu editovaného detailu.
 * @function
 */
export const editDetailSlice = createSlice({
    name: "editDetail",
    initialState: {},
    reducers: {
        /**
        * Akce pro změnu editovaného detailu.
        * @param {Object} state - Stav slicu.
        * @param {Object} action - Akce s payloadem.
        */
        changeEditDetail: (state, action) => {
            state = action.payload;
            return state
        },
    },
})

// Export akce changeEditDetail z editDetailSlice
export const { changeEditDetail } = editDetailSlice.actions

// Export editDetailSlice reduceru
export default editDetailSlice.reducer