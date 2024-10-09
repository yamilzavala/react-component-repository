import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import {
  addItemToCart,
  removeItemToCart,
  updateQuantity,
} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((s) => s.cart);

  const handleAddProduct = (id) => {
    const newProduct = {
      id,
      name: id === 1 ? "Product 1" : "Product 2",
      price: id === 1 ? 100 : 200,
      quantity: 1,
    };
    dispatch(addItemToCart(newProduct));
  };

  const handleQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeItemToCart({ id }));
  };

  if (!cartItems.length)
    return (
      <div className="cart-container">
        <h2>Your cart is Empty!</h2>
        <div className="cart-buttons">
          <button onClick={() => handleAddProduct(1)}>Add product 1</button>
          <button onClick={() => handleAddProduct(2)}>Add product 2</button>
        </div>
      </div>
    );

  return (
    <div className="cart-container">
      <div className="cart-buttons">
        <button onClick={() => handleAddProduct(1)}>Add product 1</button>
        <button onClick={() => handleAddProduct(2)}>Add product 2</button>
      </div>

      <div className="cart">
        <ul>
          {cartItems.map((item, idx) => {
            return (
              <li key={idx}>
                <span>
                  {item.name} - {item.price} x {item.quantity}
                  <button
                    onClick={() => handleQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="remove-btn"
                  >
                    x
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        Total Cart Items: $
        {cartItems.reduce((acc, curr) => {
          return acc + curr.price * curr.quantity;
        }, 0)}
      </div>
    </div>
  );
};

export default Cart;
