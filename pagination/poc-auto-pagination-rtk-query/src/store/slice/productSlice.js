import { createSlice } from "@reduxjs/toolkit";

//slice
const initialState = {
  value: { products: [] },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveProducts: (state, action) => {
      const newState = [...state.value.products, ...action.payload.products];
      state.value.products = newState;
    },
  },
});

export const { saveProducts } = productsSlice.actions;
