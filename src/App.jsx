import React, { useState } from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";

import './App.css'

import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <React.Fragment>
      {cartIsShown?<Cart onHideCart={hideCartHandler}/>:''}
      <div className="App">
        <Header onShowCart={showCartHandler}/>
        <Meals/>
      </div>
    </React.Fragment>
  );
}

export default App;
