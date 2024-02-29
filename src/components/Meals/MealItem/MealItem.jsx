
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    return (
        <li className={classes.item}>
            <div className={classes.itemContent}>
                <span className={classes["meal-name"]}>{props.meal.name}</span>
                <span className={classes["meal-description"]}>{props.meal.description}</span>
                <span className={classes["meal-price"]}>Rs. {props.meal.price}</span>
            </div>
            <MealItemForm/>
        </li>
    );
}

export default MealItem;