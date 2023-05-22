import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const eventSlice = createSlice({
    name: "events",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
      loadData: (state, action) => {
        const events = action.payload
        state = [...state, ...events]
        return state
        }
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadData } = eventSlice.actions

// Export the projectsSlice reducer
export default eventSlice.reducer