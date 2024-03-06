import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    removeProduct: (state, action) => {
      let i = state.products.indexOf(action.payload);
      state.products.splice(i, 1);
    },
    clearProducts: (state, action) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;
