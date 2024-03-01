import { Fragment, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = (props) => {
    const [quantity, setQuantity] = useState(1);

    const addToCartHandler = (event) => {
        event.preventDefault();
        props.onAddItem(quantity);
        setQuantity(1);   //reseting the quantity back to 1
    }

    const updateQuantity = (event) => {
        setQuantity(event.target.value);
    }
    return (
        <Fragment>
            <form className={classes.itemForm}>
                <Input id={props.id} label="Amount" input={{type:"number", min:"1", max:"10", step:"1", value: quantity, onChange: updateQuantity}}/>
                <button className={classes.addBtn} onClick={(event)=>addToCartHandler(event,props.id)}>+ Add</button>
            </form>
        </Fragment>
    )
}

export default MealItemForm;
