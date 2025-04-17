import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice";
import WishlistReducer from "./wishlistSlice";

//cart
const saveInLocalStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (err) {
    console.error("Error al guardar cart al carrito", err);
  }
};

const getFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : undefined;
  } catch (err) {
    return undefined;
  }
};

//wishList
const saveWishlistInLocalStorage = (state) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  } catch (err) {
    console.error("Error al guardar wishlist al carrito", err);
  }
};

const getWishListFromLocalStorage = () => {
  try {
    const storedCart = localStorage.getItem("wishlist");
    return storedCart ? JSON.parse(storedCart) : undefined;
  } catch (err) {
    return undefined;
  }
};

const preloadedState = {
  cart: getFromLocalStorage() || { cartItems: [] },
  wishlist: getWishListFromLocalStorage() || { items: [] },
};

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    wishlist: WishlistReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveInLocalStorage(store.getState());
  saveWishlistInLocalStorage(store.getState());
});
