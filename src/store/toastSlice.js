import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toggle: false,
    case: "",
    toast: {
      title: "Done",
      message: "Action Done Successfully!",
      background: "#0a58ca",
    },
  },
  reducers: {
    togglIt: (state, action) => {
      state.toggle = !state.toggle;
    },
    handleCase: (state, action) => {
      state.case = action.payload;
    },
    handleToast: (state, action) => {
      switch (action.payload) {
        case "create":
          state.toast = {
            title: "Creation",
            message: "New Product Created!",
            background: "#157347",
          };
          break;
        case "update":
          state.toast = {
            title: "Editing",
            message: "Product Edited Successfully!",
            background: "#0a58ca",
          };
          break;
        case "delete":
          state.toast = {
            title: "Deleting",
            message: "Product Deleted Successfully!",
            background: "#b02a37",
          };
          break;
        default:
          break;
      }
    },
  },
});

export const { handleCase, handleToast, togglIt } = toastSlice.actions;
export default toastSlice.reducer;
