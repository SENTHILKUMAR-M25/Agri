import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import cartReducer from "./Slice/cartSlice";
import wishlistReducer from "./Slice/wishlistSlice"
import savedReducer from "./Slice/savedSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    saved: savedReducer,
  },
});
