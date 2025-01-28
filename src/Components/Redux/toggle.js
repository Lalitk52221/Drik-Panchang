import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const hideMenuSlice = createSlice({
  name: "hideMenu",
  initialState,
  reducers: {
    toggle: (state) => {
      if (state.value === false) {
        state.value = true;
      } else {
        state.value = false;
      }
    },
  },
});

export const { toggle } = hideMenuSlice.actions;
export default hideMenuSlice.reducer;
