import React, { useContext } from "react";
import classes from "./HeaderCart.module.css";
import CartIcon from "../../assets/CartIcon";

import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const itemsCount = cartCtx.cartItems.length;

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCart;
