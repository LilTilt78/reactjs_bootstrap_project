import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the project add form
export const detailSlice = createSlice({
    name: "detail",
    initialState: {},
    reducers: {
        changeDetail: (state, action) => {
            state = action.payload;
            return state
        },
    },
})

// Export the changeFormState action creator from the projectsAddFormSlice
export const { changeDetail } = detailSlice.actions

// Export the projectsAddFormSlice reducer
export default detailSlice.reducer