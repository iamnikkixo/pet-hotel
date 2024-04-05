import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    addStep: (state) => {
      if (state.step < 2) {
        state.step += 1;
      }
    },
    decreaseStep: (state) => {
      state.step -= 1;
    },
    resetStep: (state) => {
      state.step = 0;
    },
  },
});

export const registerReducer = registerSlice.reducer;

export const { addStep, decreaseStep, resetStep } = registerSlice.actions;

export const selectCurrentStep = (state) => {
  return state.register.step;
};
