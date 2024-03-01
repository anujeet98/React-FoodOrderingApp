import classes from './CartItem.module.css';


const CartItem = (props) => {
    // const fun = () => {
    //     console.log(props.data);
    // }
    return (
        <li className={classes["cartItem-li"]}>
            <div>
                <span className={classes["cartItem-name"]}>{props.data.name}</span>
                <div className={classes["cartItem-metadata"]}>
                    <span className={classes["cartItem-price"]}>Rs. {props.data.price}</span>
                    <div className={classes["cartItem-quantity"]}>x {props.data.quantity}</div>
                </div>
            </div>
            <div className={classes["item-btn-action-grp"]}>
                <button>-</button>
                <button>+</button>
            </div>
        </li>
    )
}

export default CartItem;