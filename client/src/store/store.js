import { configureStore } from '@reduxjs/toolkit';
import castleConfReducer from './castleConfSlice';

export const store = configureStore({
  reducer: {
    castleConf: castleConfReducer
  },
});
