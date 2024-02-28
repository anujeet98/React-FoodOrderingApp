import { Fragment } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';


const MealItemForm = (props) => {
    return (
        <Fragment>
            <form className={classes.itemForm}>
                <Input label="Amount" input={{type:"number", min:"0", max:"10", step:"1", defaultValue:"0"}}/>
                <button className={classes.addBtn}>+ Add</button>
            </form>
        </Fragment>
    )
}

export default MealItemForm;
