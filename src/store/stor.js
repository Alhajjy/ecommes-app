import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./productSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
