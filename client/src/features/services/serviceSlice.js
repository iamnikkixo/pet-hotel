import SERVICES from '../../assets/shared/SERVICES';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  servicesArray: SERVICES,
};

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
});

export const servicesReducer = servicesSlice.reducer;
