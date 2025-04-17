import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (el) => el.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, clearCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
