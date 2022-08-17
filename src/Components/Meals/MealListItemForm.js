import React, { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const MealListItemForm = (props) => {
  const [itemAmout, setItemAmount] = useState(1);
  const { name, price, id } = props.mealDetails;

  const updateAmountHandler = (e) => {
    setItemAmount(+e.target.value);
  };
  const addToCartHandler = (e) => {
    e.preventDefault();
    props.onAddToCart({ name: name, price: price, id: id, amount: itemAmout });
  };

  return (
    <form>
      <Input
        label="Amount"
        input={{
          id: "amount_" + id,
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
