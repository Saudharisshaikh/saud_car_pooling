// store.js
import { configureStore } from '@reduxjs/toolkit';
import BookingtimeReducer from './reducers/BookingtimeReducer';
import travelSlice from './reducers/travelSlice';
import LocationReducer from './reducers/LocationReducer';
import DestinationLocationSlicer from './reducers/DestinationLocationSlicer';



const store = configureStore({
  reducer: {
    bookingDateTime: BookingtimeReducer,
    travel: travelSlice,
    location: LocationReducer,
    destinationLocation: DestinationLocationSlicer


  },// Pass your root reducer here
  // Add middleware, devtools configuration, etc. if needed
});

export default store;
