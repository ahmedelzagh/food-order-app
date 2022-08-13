import React from "react";
import CartItem from "./CartItem";

import Button from "../UI/Button";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItemsList = [{ id: "c4", name: "Cuchi", amount: 3, price: 15.87 }].map((item) => <CartItem key={item.id} item={item} />);

  return (
    <Modal onClick={props.onHide}>
      <div className={classes["cart-items"]}>
        {CartItemsList}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>19.75</span>
        </div>
        <div className={classes.actions}>
          <Button onClick={props.onHide}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
