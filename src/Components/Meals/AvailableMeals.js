import React from "react";

import { DUMMY_MEALS } from "../../dummy-meals";
import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealListItem from "./MealListItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <MealListItem key={meal.id} meal={meal} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
