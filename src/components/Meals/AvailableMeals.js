import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Samosa",
    description: "Finest deep fried",
    price: 25,
  },
  {
    id: "m2",
    name: "Schezwan Noodles",
    description: "A chinese specialty!",
    price: 320,
  },
  {
    id: "m3",
    name: "Margherita Pizza",
    description: "Italian, mozerralla, tomatoes",
    price: 449,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 250,
  },
];

const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
    return (
        <li key={meal.id}>
            <span className={classes["meal-name"]}>{meal.name}</span>
            <span className={classes["meal-description"]}>{meal.description}</span>
            <span className={classes["meal-price"]}>Rs. {meal.price}</span>
            <hr></hr>
        </li>
    );
  });

  return (
    <Card className={classes.meals}>
      <ul className={classes.list}>{mealList}</ul>
    </Card>
  );
};

export default AvailableMeals;
