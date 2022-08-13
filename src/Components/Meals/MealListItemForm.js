import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

const MealListItemForm = (props) => {
  return (
    <form>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button type="button">+ Add</Button>
    </form>
  );
};

export default MealListItemForm;
