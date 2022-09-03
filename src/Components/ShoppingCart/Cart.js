import React, { useContext } from "react";

import classes from "./Cart.module.css";

import CartItem from "./CartItem";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const CartItemsList = cartCtx.cartItems.map((item) => <CartItem key={item.id} item={item} dispatchCart={cartCtx.dispatchCart} />);
  // Multiply the price of each cart item with its amount, then reduce(Add) the array of numbers returned from the map method.
  let totalAmount = cartCtx.cartItems.map((item) => item.price * item.amount).reduce((total, sum) => total + sum, 0);

  //Dispatches the action to clear the cart.
  const clearCart = () => {
    cartCtx.dispatchCart({ type: "CLEAR_CART" });
  };

  const isCartEmpty = cartCtx.cartItems.length === 0;

  return (
    <Modal onClick={props.onHide}>
      <div className={classes["cart-items"]}>
        {CartItemsList}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          {!isCartEmpty && <Button onClick={clearCart}> Clear</Button>}
          <Button onClick={props.onHide}>Close</Button>
          {!isCartEmpty && <Button>Order</Button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
