import classes from "./AvailableMeals.module.css";
import MealListItem from "./MealListItem";
import Card from "../UI/Card";
import { useFetch } from "../../hooks";

const AvailableMeals = () => {
  const { loading, error, value: meals } = useFetch("https://http-hook-60231-default-rtdb.firebaseio.com/meals.json");

  return (
    <section className={classes.meals}>
      <Card>
        {loading && !error && <span>Loading...</span>}
        {!loading && error && <span>An Error Ocurred: {error}</span>}
        {!loading && !error && (
          <ul>
            {meals.map((meal) => (
              <MealListItem key={meal.id} meal={meal} />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
