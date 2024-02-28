import CartBtn from '../CartBtn/CartBtn';
import './Header.css';

const Header = () => {
    return  (
        <div className='header'>
            <div className="title">ReactMeals</div>
            <CartBtn></CartBtn>
        </div>
    );
};

export default Header;