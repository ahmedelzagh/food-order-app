import React, { useEffect, useReducer } from "react";
import CartContext from "./cart-context";
import { manageCartReducer } from "../reducers/cart-reducer";

const CartProvider = (props) => {
  // Get and convert the last item in the cart from localStorage to an array of objects.
  const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems"));
  // Set the cartItems state to the cartItemsLocal state if it is not empty.
  const getItemsLocally = () => {
    return cartItemsLocal ? cartItemsLocal : [];
  };

  const [cartItems, dispatchCart] = useReducer(manageCartReducer, [], getItemsLocally);

  // Store the cart items in the local storage after 0.3s from the last change happened in the cart.
  useEffect(() => {
    const cartRefreshTimer = setTimeout(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, 300);
    return () => {
      clearTimeout(cartRefreshTimer);
    };
  }, [cartItems]);

  // Multiply the price of each cart item with its amount, then reduce(Add) the array of numbers returned from the map method.
  const calcAmount = cartItems
    .map((item) => item.price * item.amount)
    .reduce((total, sum) => total + sum, 0)
    .toFixed(2);

  const contextValue = {
    cartItems: cartItems || [],
    totalAmount: calcAmount,
    dispatchCart: dispatchCart,
  };
  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
