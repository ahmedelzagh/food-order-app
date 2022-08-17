import React from "react";
import CartItem from "./CartItem";

import Button from "../UI/Button";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItemsList = props.cartItems.map((item) => <CartItem key={item.id} item={item} dispatchCart={props.dispatchCart} />);

  // Multiply the price of each cart item with its amount, then reduce(Add) the array of numbers returned from the map method.
  let totalAmount = props.cartItems.map((item) => item.price * item.amount).reduce((total, sum) => total + sum, 0);

  const clearCart = () => {
    props.dispatchCart({ type: "CLEAR_CART" });
  };

  return (
    <Modal onClick={props.onHide}>
      <div className={classes["cart-items"]}>
        {CartItemsList}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <Button onClick={clearCart}> Clear</Button>
          <Button onClick={props.onHide}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
