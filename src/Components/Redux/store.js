import { configureStore } from '@reduxjs/toolkit';
import dateSliceReducer from './dateSlicer';

export const store = configureStore({
  reducer: {
    dateTime: dateSliceReducer,
  },
});