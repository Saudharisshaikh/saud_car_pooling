// travelSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TravelDetails {
  startingPoint: string;
  destinationPoint: string;
  date: string;
  seats: string;
  note: string;
}

interface TravelState {
  travelDetails: TravelDetails;
}

const initialState: TravelState = {
  travelDetails: {
    startingPoint: '',
    destinationPoint: '',
    date: '',
    seats: '',
    note: '',
  },
};

const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    saveTravelDetails: (state, action: PayloadAction<TravelDetails>) => {
      state.travelDetails = action.payload;
    },
  },
});

export const { saveTravelDetails } = travelSlice.actions;
export default travelSlice.reducer;
