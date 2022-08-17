import React from "react";

import MealListItemForm from "./MealListItemForm.js";

import classes from "./MealListItem.module.css";

const MealListItem = (props) => {
  const { name, description, price } = props.meal;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <p className={classes.description}>{description}</p>
        <span className={classes.price}>{price}</span>
      </div>
      <div>
        <MealListItemForm mealDetails={props.meal} onAddToCart={props.onAddToCart} />
      </div>
    </li>
  );
};

export default MealListItem;
