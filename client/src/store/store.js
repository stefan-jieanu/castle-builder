import { configureStore } from '@reduxjs/toolkit';
// import castleConfReducer from './castleConfSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // castleConf: castleConfReducer,
  },
});
