import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import basketSlice from "./basketSlice";
import editItSlice from "./editItSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    counter: productSlice,
    basket: basketSlice,
    editIt: editItSlice,
  },
});

export default store;
