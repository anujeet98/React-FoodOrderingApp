import React from "react";
import CartBtn from "./CartBtn";
import "./Header.css";
import mealsImage from '../../assets/meals.png'

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="title">ReactMeals</div>
        <CartBtn></CartBtn>
      </header>
      <div className="backdrop-image">
        <img src={mealsImage} alt="backdrop image"/>
      </div>
    </React.Fragment>
  );
};

export default Header;
