
import classes from './MealItem.module.css'

const MealItem = (props) => {
    return (
        <li className={classes.item}>
            <span className={classes["meal-name"]}>{props.meal.name}</span>
            <span className={classes["meal-description"]}>{props.meal.description}</span>
            <span className={classes["meal-price"]}>Rs. {props.meal.price}</span>
            <hr></hr>
        </li>
    );
}

export default MealItem;