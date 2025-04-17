import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = wishlistSlice.actions;
export default wishlistSlice.reducer;
