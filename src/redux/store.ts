import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
