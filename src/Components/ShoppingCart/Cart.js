import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItemList from "./CartItemList";
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const navigate = useNavigate();
  const cartCtx = useContext(CartContext);

  //Dispatches the action to clear the cart.
  const clearCart = () => {
    cartCtx.dispatchCart({ type: "CLEAR_CART" });
  };

  const isCartEmpty = cartCtx.cartItems.length === 0;

  const orderHandle = () => {
    navigate("/checkout");
    props.onHide();
  };

  return (
    <Modal onClick={props.onHide}>
      <div className={classes.card}>
        <CartItemList />
        <div className={classes.actions}>
          {!isCartEmpty && <Button onClick={clearCart}> Clear</Button>}
          <Button onClick={props.onHide}>Close</Button>
          {!isCartEmpty && <Button onClick={orderHandle}>Order</Button>}
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
