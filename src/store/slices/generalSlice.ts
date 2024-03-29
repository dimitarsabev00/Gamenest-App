import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myLibrary: [],
  myBag: [],
};

export const generalSlice = createSlice({
  name: "generalSlice",
  initialState,
  reducers: {
    setGeneralFields: (state, { payload }) => ({ ...state, ...payload }),
  },
});

export const { setGeneralFields } = generalSlice.actions;

export default generalSlice.reducer;
