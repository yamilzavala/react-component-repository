// store/toastSlice.js
import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toasts",
  initialState: [],
  reducers: {
    addToast: (state, action) => {
      state.push({
        id: new Date().getTime(), // Genera un ID único para cada toast
        message: action.payload.message,
        type: action.payload.type,
      });
    },
    removeToast: (state, action) => {
      return state.filter((toast) => toast.id !== action.payload.id);
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
