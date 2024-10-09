// store.js
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi"; // Importa la API que creaste

export const store = configureStore({
  reducer: {
    // Añade el reducer de RTK Query al store
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Añade el middleware de RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
