import { HOME } from '../../assets/shared/HOME';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  homeArray: HOME,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
});

export const homeReducer = homeSlice.reducer;

