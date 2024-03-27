import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toggle: false,
    case: "",
    toast: {},
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
            background: "#198754",
            hBackground: "#198754",
            time: 3000,
          };
          break;
        case "update":
          break;
        case "delete":
          break;
        default:
          break;
      }
    },
  },
});

export const { handleCase, handleToast, togglIt } = toastSlice.actions;
export default toastSlice.reducer;
