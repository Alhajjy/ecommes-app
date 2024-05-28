import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "basket",
  initialState: {
    logArea: "s",
    sessionCase: false,
    LStorageCase: false,
  },
  reducers: {
    logCheck: (state, action) => {
      state.sessionCase || state.LStorageCase
        ? (state.logArea = true)
        : (state.logArea = false);
      return true;
    },
    sessionLog: (state, action) => {
      state.sessionCase = !state.sessionCase;
    },
    lStorageLog: (state, action) => {
      state.LStorageCase = !state.LStorageCase;
    },
  },
});

export const { logCheck, sessionLog, lStorageLog } = authSlice.actions;
export default authSlice.reducer;
