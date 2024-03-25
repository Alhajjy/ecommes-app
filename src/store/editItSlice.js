import { createSlice } from "@reduxjs/toolkit";

export const editItSlice = createSlice({
  name: "editIt",
  initialState: {
    item: {},
  },
  reducers: {
    takeItemData: (state, action) => {
      state.item = action.payload;
    },
    emptyItemData: (state, action) => {
      state.item = {};
    },
  },
});

export const { takeItemData, emptyItemData } = editItSlice.actions;
export default editItSlice.reducer;
