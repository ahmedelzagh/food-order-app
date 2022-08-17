import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  dispatchCart: () => {},
  onAddToCart: () => {},
});

export default CartContext;
