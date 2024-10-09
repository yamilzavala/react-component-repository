// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./toastSlice";

export const toaststore = configureStore({
  reducer: {
    toasts: toastReducer,
  },
});
