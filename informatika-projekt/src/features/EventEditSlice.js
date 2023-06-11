import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the project add form
export const editDetailSlice = createSlice({
    name: "editDetail",
    initialState: {},
    reducers: {
        changeEditDetail: (state, action) => {
            state = action.payload;
            return state
        },
    },
})

// Export the changeFormState action creator from the projectsAddFormSlice
export const { changeEditDetail } = editDetailSlice.actions

// Export the projectsAddFormSlice reducer
export default editDetailSlice.reducer