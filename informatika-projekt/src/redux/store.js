import { configureStore } from '@reduxjs/toolkit'
import eventReducer from '../features/EventSlice'


export const store = configureStore({
    reducer: {
        events : eventReducer,
    }
})