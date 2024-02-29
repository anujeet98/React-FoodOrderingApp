import './CartBtn.css'

const CartBtn = (props) => {
    return (
        <button className="cart-btn" onClick={props.onClick}>    
            <i className="ri-shopping-cart-line cart-icon"></i>
            <div className='cart-text'> Your Cart </div>
            <div className='cart-quantity'>0</div>
        </button>
    )
}

export default CartBtn;