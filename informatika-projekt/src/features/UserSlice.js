import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const userSlice = createSlice({
    name: "users",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
      loadUsers: (state, action) => {
        const users= action.payload
        state = [...state, ...users]
        return state
        },
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadUsers } = userSlice.actions

// Export the projectsSlice reducer
export default userSlice.reducer