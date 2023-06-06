import { configureStore } from '@reduxjs/toolkit'
import eventSlice from '../features/EventSlice'


export const store = configureStore({
    reducer: {
        events : eventSlice,
    }
})