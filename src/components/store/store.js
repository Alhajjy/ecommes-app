import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./productSlice";

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({
    reducer: {
        counter: counterSlice,
    },
});
export default store;
