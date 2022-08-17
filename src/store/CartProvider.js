import React, { useEffect, useReducer } from "react";
import CartContext from "./cart-context";
import { manageCartReducer } from "../reducers/cart-reducer";

const CartProvider = (props) => {
  // Get and convert the last item in the cart from localStorage to an array of objects.
  const cartItemsLocal = JSON.parse(localStorage.getItem("cartItems"));
  // Set the cartItems state to the cartItemsLocal state if it is not empty.
  const [cartItems, dispatchCart] = useReducer(manageCartReducer, [], () => {
    return cartItemsLocal;
  });

  const addToCartHandler = (mealDetails) => {
    const idsArray = cartItems.map((item) => item.id);
    const isIdAdded = idsArray.includes(mealDetails.id);
    // If the meal is already in the cart, increase only the amount.
    if (isIdAdded) {
      dispatchCart({ type: "INCREASE_AMOUNT", mealDetails: mealDetails });
    } else {
      // If the meal is not in the cart, add it to the cart.
      dispatchCart({ type: "ADD_TO_CART", mealDetails: mealDetails });
    }
  };

  // Store the cart items in the local storage after 0.3s from the last change happened in the cart.
  useEffect(() => {
    const cartRefreshTimer = setTimeout(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, 300);
    return () => {
      clearTimeout(cartRefreshTimer);
    };
  }, [cartItems]);

  const contextValue = {
    cartItems: cartItems,
    dispatchCart: dispatchCart,
    onAddToCart: addToCartHandler,
  };
  return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
