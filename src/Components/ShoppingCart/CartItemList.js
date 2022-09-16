import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import classes from "./CartItemList.module.css";

const CartItemList = () => {
  const cartCtx = useContext(CartContext);
  const CartItemsList = cartCtx.cartItems.map((item) => <CartItem key={item.id} item={item} dispatchCart={cartCtx.dispatchCart} />);

  return (
    <div className={classes["cart-items"]}>
      {CartItemsList}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount}</span>
      </div>
    </div>
  );
};

export default CartItemList;
