import { createSlice } from "@reduxjs/toolkit";

/*
  Auth State Structure
  --------------------
  isAuthenticated : boolean
  user : {
    name,
    email,
    mobile
  }
*/

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // ✅ Login / Register Success
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;

      // Optional: Persist to localStorage
      localStorage.setItem("auth", JSON.stringify(state));
    },

    // 🚪 Logout
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;

      localStorage.removeItem("auth");
    },

    // 🔄 Restore session (on page reload)
    restoreAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
  },
});

export const { loginSuccess, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;
