import { useEffect, useState, useCallback } from "react";

import Card from "../UI/Card";

import classes from "./AvailableMeals.module.css";
import MealListItem from "./MealListItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const mealsList = meals.map((meal) => <MealListItem key={meal.id} meal={meal} />);

  const fetchData = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch("https://http-hook-60231-default-rtdb.firebaseio.com/meals.json");
      const fetchedData = await res.json();
      setMeals(fetchedData);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <section className={classes.meals}>
      <Card>
        {loading && !error && <span>Loading...</span>}
        {!loading && error && <span>An Error Ocurred: {error}</span>}
        {!loading && !error && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
