import { configureStore } from '@reduxjs/toolkit'
import eventSlice from '../features/EventSlice'
import EventTypeSlice from '../features/EventTypeSlice'
import EventDisplaySlice from '../features/EventDisplaySlice'
import EventEditSlice from '../features/EventEditSlice'


export const store = configureStore({
    reducer: {
        events : eventSlice,
        eventsType : EventTypeSlice,
        eventDetail : EventDisplaySlice,
        eventEditDetail : EventEditSlice
    }
})