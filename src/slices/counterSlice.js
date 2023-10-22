import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 1,
  },
  reducers: {
    initialize: (state) => {
      state.value = 0;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { initialize, increment, decrement } = counterSlice.actions;

export const selectCounter = (state) => state.counter.value;

export default counterSlice.reducer;
