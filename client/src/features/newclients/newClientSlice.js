import NEWCLIENTS from '../../assets/shared/NEWCLIENTS';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newClientsArray: NEWCLIENTS,
};

export const newClientsSlice = createSlice({
  name: 'newclients',
  initialState,
});

export const newClientsReducer = newClientsSlice.reducer;
