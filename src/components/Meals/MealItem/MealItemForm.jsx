import { Fragment } from 'react';
import classes from './MealItemForm.module.css';


const MealItemForm = (props) => {
    return (
        <Fragment>
            <form className={classes.itemForm}>
                <div className={classes.inputGroup}>
                    <label>Amount</label>
                    <input type="number" min="0" max="10" step="1" defaultValue="0" />
                </div>
                <button className={classes.addBtn}>+ Add</button>
            </form>
        </Fragment>
    )
}

export default MealItemForm;
