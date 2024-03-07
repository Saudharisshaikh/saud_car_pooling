
// stringsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookingDate: '',
  bookingTime: '',
  startingPoint:'',
  destinationPoint:'',
  specialInstruction:'',
};

const bookingtimeSlice = createSlice({
  name: 'bookingDateTime',
  initialState,
  reducers: {
    updateBookingDate: (state, action) => ({
      ...state,
      bookingDate: action.payload,
    }),
    updateBookingTime: (state, action) => ({
      ...state,
      bookingTime: action.payload,
    }),
    updateStartingPoint: (state, action) => ({
      ...state,
      startingPoint: action.payload,
    }),
    updateDestinationPoint: (state, action) => ({
      ...state,
      destinationPoint: action.payload,
    }),
    updateSpecialInstruction: (state, action) => ({
      ...state,
      specialInstruction: action.payload,
    })
  },
});

export const { updateBookingDate, updateBookingTime, updateStartingPoint, updateDestinationPoint, updateSpecialInstruction } = bookingtimeSlice.actions;
export default bookingtimeSlice.reducer;