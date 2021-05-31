import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Object {
  [key: string]: unknown;
}

export interface UserData {
  address: Object;
  company: Object;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface FetchTodoError {
  message: string;
}

export interface State {
  value: number;
  userData: UserData | null;
  loading: boolean;
}

const initialState: State = {
  value: 0,
  userData: null,
  loading: false,
};

export const getUser = createAsyncThunk<UserData>("getTodo", async () => {
  let userId = Math.floor(Math.random() * 10);
  if (userId === 0) {
    userId = 1;
  }
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const res2 = await res.json();
  return res2;
});

const counter = createSlice({
  name: "counter",
  initialState,
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
  extraReducers: (bundler) => {
    bundler.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    bundler.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<UserData>) => {
        state.loading = false;
        state.userData = action.payload;
      }
    );
  },
});

export const { decrement, increment, incrementByValue } = counter.actions;
export default counter.reducer;
