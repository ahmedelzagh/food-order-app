import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCart.module.css";
import CartIcon from "../../assets/CartIcon";

import CartContext from "../../store/cart-context";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const [flashCartButton, setFlashCartButton] = useState(false);
  // Get the number of items in the cart by reducing the array of cart items amounts.
  const itemsCount = cartCtx.cartItems.map((item) => item.amount).reduce((total, sum) => total + sum, 0);

  useEffect(() => {
    if (itemsCount === 0) {
      return;
    }
    const timer = setTimeout(() => {
      setFlashCartButton(false);
    }, 300);
    setFlashCartButton(true);
    return () => clearTimeout(timer);
  }, [itemsCount]);

  const btnClasses = `${classes.button} ${flashCartButton ? classes.bump : ""}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCart;
