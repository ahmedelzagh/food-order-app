import React from "react";

import CartIcon from "../../assets/CartIcon";
import classes from "./HeaderCart.module.css";

const HeaderCart = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCart;
