import { createSlice } from '@reduxjs/toolkit';
import { ABOUT } from '../../assets/shared/ABOUT';

const initialState = {
  aboutArray: ABOUT,
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
});

export const aboutReducer = aboutSlice.reducer;

export const selectAboutContent = (state) => {
  return state.about.aboutArray;
};

export const selectFeaturedContent = (state) => {
  return state.about.aboutArray.filter((content) => content.featured);
};
