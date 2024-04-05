import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '../features/home/homeSlice';
import { servicesReducer } from '../features/services/serviceSlice';
import { newClientsReducer } from '../features/newclients/newClientSlice';
import { aboutReducer } from '../features/about/aboutSlice';
import { registerReducer } from '../features/registration/registerSlice';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    services: servicesReducer,
    newclients: newClientsReducer,
    about: aboutReducer,
    register: registerReducer,
  },
});
