import './CartBtn.css'

const CartBtn = () => {
    return (
        <button className="cart-btn">    
            <i className="ri-shopping-cart-line cart-icon"></i>
            <div className='cart-text'> Your Cart </div>
            <div className='cart-quantity'>2</div>
        </button>
    )
}

export default CartBtn;