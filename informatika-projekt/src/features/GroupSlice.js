import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const groupSlice = createSlice({
    name: "groups",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
      loadGroups: (state, action) => {
        const groups= action.payload
        state = [...state, ...groups]
        return state
        },
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadGroups } = groupSlice.actions

// Export the projectsSlice reducer
export default groupSlice.reducer