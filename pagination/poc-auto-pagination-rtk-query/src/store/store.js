import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slice/productSlice";
import { productsApi } from "./api/apiSlice";

//store
export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    //[productsApi.reducerPath]: productsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(productsApi.middleware),
});
