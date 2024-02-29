import React from 'react';
import classes from './Cart.module.css'
import Modal from '../Modal/Modal';


const Cart = (props) => {    
    const cartItems = 23;
    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>Rs. 100</span>
            </div>
            <div className={classes.btnGrp}>
                <button className={classes['button--cancel']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;