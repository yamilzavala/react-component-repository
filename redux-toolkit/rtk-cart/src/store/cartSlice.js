import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  // totalAmount: 0,
  // totalItems: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemToCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    updateQuantity: (state, action) => {
      const { quantity, id } = action.payload;
      const item = state.cartItems.find((i) => i.id === id);
      if (item) {
        if (quantity < 1) {
          state.cartItems = state.cartItems.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItemToCart, removeItemToCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
