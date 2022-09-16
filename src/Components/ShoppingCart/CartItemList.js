import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartItemList.module.css";

const CartItemList = () => {
  const cartCtx = useContext(CartContext);
  const CartItemsList = cartCtx.cartItems.map((item) => <CartItem key={item.id} item={item} dispatchCart={cartCtx.dispatchCart} />);

  // Multiply the price of each cart item with its amount, then reduce(Add) the array of numbers returned from the map method.
  let totalAmount = cartCtx.cartItems.map((item) => item.price * item.amount).reduce((total, sum) => total + sum, 0);

  return (
    <div className={classes["cart-items"]}>
      {CartItemsList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItemList;
