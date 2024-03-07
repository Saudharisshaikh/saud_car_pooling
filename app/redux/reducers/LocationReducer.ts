// slices/locationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
  name: '',
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action) {
      const { latitude, longitude, name } = action.payload;
      state.latitude = latitude;
      state.longitude = longitude;
      state.name = name;
    },
    clearLocation(state) {
      state.latitude = null;
      state.longitude = null;
      state.name = '';
    },
  },
});

export const { setLocation, clearLocation } = locationSlice.actions;

export default locationSlice.reducer;
