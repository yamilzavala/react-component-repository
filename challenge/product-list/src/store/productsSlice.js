// store/productsSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  status: "idle",
  page: 1,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page) => {
    const response = await axios.get(
      `https://fakestoreapi.com/products?limit=10&page=${page}`
    );
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductRating: (state, action) => {
      const { id, rating } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) product.rating = rating;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = [...state.products, ...action.payload];
        state.status = "idle";
        state.page += 1;
      });
  },
});

export const { updateProductRating } = productsSlice.actions;
export default productsSlice.reducer;
