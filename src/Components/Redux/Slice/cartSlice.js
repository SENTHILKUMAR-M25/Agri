

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {

    // ➕ Add / Increase Qty
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    // ➖ Decrease Qty (remove only if qty = 1)
    decreaseQty: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);

      if (existing) {
        if (existing.qty > 1) {
          existing.qty -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },

    // 🗑 Remove item fully
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },

    // 🧹 Clear all
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  decreaseQty,
  removeFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
