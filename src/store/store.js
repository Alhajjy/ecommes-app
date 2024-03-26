import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productSlice from "./productSlice";
import basketSlice from "./basketSlice";
import editItSlice from "./editItSlice";
import toastSlice from "./toastSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    counter: productSlice,
    basket: basketSlice,
    editIt: editItSlice,
    toast: toastSlice,
  },
});

export default store;
