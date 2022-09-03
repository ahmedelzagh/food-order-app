import classes from "./CartItem.module.css";
import Button from "../UI/Button";

const CartItem = (props) => {
  const { name, amount, price } = props.item;
  //Dispatches the action to increment or decrement the amount of the cart item.
  const increaseAmount = () => {
    props.dispatchCart({ type: "INCREASE_AMOUNT", mealDetails: { ...props.item, amount: 1 } });
  };
  const decreaseAmount = () => {
    props.dispatchCart({ type: "DECREASE_AMOUNT", mealDetails: { ...props.item, amount: 1 } });
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.container}>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <div className={classes.amountControl}>
            <Button className={classes.changeAmountButton} onClick={increaseAmount}>
              +
            </Button>
            <span className={classes.amount}>x {amount}</span>
            <Button className={classes.changeAmountButton} onClick={decreaseAmount}>
              -
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
