import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Checkout.module.css";
import CartItemList from "../Components/ShoppingCart/CartItemList";
import Card from "../Components/UI/Card";
import Button from "../Components/UI/Button";

const Checkout = () => {
  const ctx = useContext(CartContext);
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({items: [...ctx.cartItems], totalPrice: ctx.totalAmount}),
  };

  const makeOrder = async () => {
    await fetch("https://http-hook-60231-default-rtdb.firebaseio.com/orders.json", requestOptions);
  };

  return (
    <Card className={classes.checkoutCard}>
      <CartItemList />
      <Button onClick={makeOrder}>Checkout</Button>
    </Card>
  );
};

export default Checkout;
