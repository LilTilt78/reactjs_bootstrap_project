import { configureStore } from '@reduxjs/toolkit'
import eventSlice from '../features/EventSlice'
import EventTypeSlice from '../features/EventTypeSlice'
import EventDisplaySlice from '../features/EventDisplaySlice'
import EventEditSlice from '../features/EventEditSlice'
import groupSlice from '../features/GroupSlice'
import userSlice from '../features/UserSlice'

/**
 * Konfiguruje Redux store s jednotlivými reducery.
 * @module store
 * @type {Object} store - Redux store.
 */
export const store = configureStore({
    reducer: {
        events : eventSlice,
        eventsType : EventTypeSlice,
        eventDetail : EventDisplaySlice,
        eventEditDetail : EventEditSlice,
        groups : groupSlice,
        users : userSlice
    }
})