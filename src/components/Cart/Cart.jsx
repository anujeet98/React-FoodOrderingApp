import React from 'react';
import classes from './Cart.module.css'
import Modal from '../Modal/Modal';


const Cart = () => {    
    const cartItems = 23;
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>Rs. 100</span>
            </div>
            <div className={classes.btnGrp}>
                <button className={classes['button--cancel']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;