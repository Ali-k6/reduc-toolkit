import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value--;
      }
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, increment, incrementByValue } = counter.actions;
export default counter.reducer;
