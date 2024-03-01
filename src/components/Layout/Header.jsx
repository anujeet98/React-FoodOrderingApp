import React from "react";
import CartBtn from "./CartBtn";
import "./Header.css";
import mealsImage from '../../assets/meals.png'

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="title">ReactMeals</div>
        <CartBtn onClick={props.onShowCart}/>
      </header>
      <div className="backdrop-image">
        <img src={mealsImage} alt="backdrop"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
