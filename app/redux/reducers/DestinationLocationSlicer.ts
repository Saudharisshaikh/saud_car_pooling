// slices/locationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
  name: '',
};

const destinationLocationSlice = createSlice({
  name: 'destinationLocation',
  initialState,
  reducers: {
    setDestinationLocation(state, action) {
      const { latitude, longitude, name } = action.payload;
      state.latitude = latitude;
      state.longitude = longitude;
      state.name = name;
    },
    clearDestinationLocation(state) {
      state.latitude = null;
      state.longitude = null;
      state.name = '';
    },
  },
});

export const { setDestinationLocation, clearDestinationLocation } = destinationLocationSlice.actions;

export default destinationLocationSlice.reducer;
