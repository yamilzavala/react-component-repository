import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await res.json();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateRating: (state, action) => {
      const { id, rating } = action.payload;
      const product = state.products.find((prod) => prod.id === id);
      if (product) {
        product.rating = rating;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = [...state.products, ...action.payload];
      });
  },
});

export const { updateRating } = productsSlice.actions;
export default productsSlice.reducer;
