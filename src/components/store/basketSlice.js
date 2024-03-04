import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        products: "",
    },
    reducers: {
        addProduct: (state, action) => {
            state.products = action.payload.id;
        },
        // removeProduct: (state, action) => {
        //     state.products = action.payload.id;
        // },
        clearProducts: (state, action) => {
            state.products = "";
        },
    },
});

export const { addProduct } = basketSlice.actions;
export default basketSlice.reducer;
