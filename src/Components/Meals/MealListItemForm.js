import React, { useContext } from "react";
import classes from "./MealListItemForm.module.css";
import CartContext from "../../store/cart-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useInput } from "../../hooks";

const MealListItemForm = (props) => {
  const [itemProps, validation, resetItem] = useInput(1, (value) => value < 6);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (e) => {
    e.preventDefault();
    cartCtx.dispatchCart({ type: "ADD_TO_CART", mealDetails: { ...props.mealDetails, amount: itemProps.value } });
    resetItem();
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.mealDetails.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          ...itemProps,
        }}
      />

      <Button type="button" onClick={addToCartHandler} disabled={!validation.valueIsValid}>
        + Add
      </Button>
      {validation.inputIsInvalid && <p style={{ color: "salmon" }}>max amount is 5</p>}
    </form>
  );
};

export default MealListItemForm;
