import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import basketSlice from "./basketSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    counter: productSlice,
    basket: basketSlice,
  },
});

export default store;
