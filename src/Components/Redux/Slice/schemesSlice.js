import { createSlice } from "@reduxjs/toolkit";
import agricultureSchemes from "../../Schemes/SchemeData";

const schemesSlice = createSlice({
  name: "schemes",
  initialState: {
    list: agricultureSchemes,
    selectedScheme: null,
  },
  reducers: {
    selectScheme: (state, action) => {
      state.selectedScheme = action.payload;
    },
    addScheme: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { selectScheme, addScheme } = schemesSlice.actions;
export default schemesSlice.reducer;
