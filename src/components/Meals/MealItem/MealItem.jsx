
import { useContext } from 'react';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../contexts/store/cart-context';

const MealItem = (props) => {
    const cartContext = useContext(CartContext);
    const addToCartHandler = (qty) => {
        if(qty>10 || qty<1)
            return alert('Item quantity must be in 1-10');
        const cartItem = {...props.meal, quantity: qty};
        delete cartItem.description;  //removed description: as not required in cart
        cartContext.addItem(cartItem);
    }
    return (
        <li className={classes.item}>
            <div className={classes.itemContent}>
                <span className={classes["meal-name"]}>{props.meal.name}</span>
                <span className={classes["meal-description"]}>{props.meal.description}</span>
                <span className={classes["meal-price"]}>Rs. {props.meal.price}</span>
            </div>
            <MealItemForm id={props.meal.id} onAddItem={addToCartHandler}/>
        </li>
    );
}

export default MealItem;