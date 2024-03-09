import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    count: 0,
  },
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count += 1;
    },
    IncByValue: (state, action) => {
      state.count += action.payload;
    },
    IncBySomeThingElse: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increament, decreament, IncByValue } = counterSlice.actions;
export default counterSlice.reducer;
