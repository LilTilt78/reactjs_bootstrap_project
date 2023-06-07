import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const eventTypeSlice = createSlice({
    name: "eventsType",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
      loadData: (state, action) => {
        const eventsType = action.payload
        state = [...state, ...eventsType]
        return state
        },
      
      addData: (state, action) => {
          const newData = action.payload
          state.push(newData)
          return state
      }, 
      
      updateData: (state, action) => {
          const updateData = action.payload
          state = state.map(data => data.id === updateData.id ? {...data, ...updateData} : data)
          return state
      },
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadData, addData, updateData } = eventTypeSlice.actions

// Export the projectsSlice reducer
export default eventTypeSlice.reducer