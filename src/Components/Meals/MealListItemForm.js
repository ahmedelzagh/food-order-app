import React, { useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import useInput from "../../hooks/use-input";

import CartContext from "../../store/cart-context";

const MealListItemForm = (props) => {
  const [item] = useInput(1);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (e) => {
    e.preventDefault();
    cartCtx.dispatchCart({ type: "ADD_TO_CART", mealDetails: { ...props.mealDetails, amount: item.value } });
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
          ...item,
        }}
      />
      <Button type="button" onClick={addToCartHandler}>
        + Add
      </Button>
    </form>
  );
};

export default MealListItemForm;
