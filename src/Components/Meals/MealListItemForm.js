import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import CartContext from "../../store/cart-context";

const MealListItemForm = (props) => {
  const [itemAmout, setItemAmount] = useState(1);
  const cartCtx = useContext(CartContext);

  const updateAmountHandler = (e) => {
    setItemAmount(+e.target.value);
  };
  const addToCartHandler = (e) => {
    e.preventDefault();
    cartCtx.onAddToCart({ ...props.mealDetails, amount: itemAmout });
  };

  return (
    <form>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.mealDetails.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
          onChange: updateAmountHandler,
        }}
      />
      <Button type="button" onClick={addToCartHandler}>
        + Add
      </Button>
    </form>
  );
};

export default MealListItemForm;
