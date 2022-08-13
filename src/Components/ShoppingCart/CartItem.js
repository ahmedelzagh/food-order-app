import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { name, amount, price } = props.item;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
