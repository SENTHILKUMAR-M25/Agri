import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    items: []
  },
  reducers: {
    toggleSave: (state, action) => {
      const product = action.payload;
      const exists = state.items.find(item => item.id === product.id);

      if (exists) {
        state.items = state.items.filter(item => item.id !== product.id);
      } else {
        state.items.push(product);
      }
    },
    removeSaved: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { toggleSave, removeSaved } = savedSlice.actions;
export default savedSlice.reducer;
