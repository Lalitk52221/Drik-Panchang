import { configureStore } from '@reduxjs/toolkit';
import dateSliceReducer from './dateSlicer';
import hideMenuSlice from './toggle'

export const store = configureStore({
  reducer: {
    dateTime: dateSliceReducer,
    hideMenu: hideMenuSlice
  },
});