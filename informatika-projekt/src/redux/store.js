import { configureStore } from '@reduxjs/toolkit'
import eventSlice from '../features/EventSlice'
import EventTypeSlice from '../features/EventTypeSlice'


export const store = configureStore({
    reducer: {
        events : eventSlice,
        eventsType : EventTypeSlice
    }
})