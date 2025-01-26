import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dateValue: '',
  timevalue:''
};

export const dateSlice = createSlice({
  name: "dateTime",
  initialState,
  reducers: {
    updatedDate: (state, action) => {
      state.dateValue = action.payload;
    },
    updatedTime: (state, action) => {
      state.timeValue = action.payload;
    },
  },
});

export const { updatedDate, updatedTime } = dateSlice.actions;
export default dateSlice.reducer;
