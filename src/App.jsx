import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import "./App.css";

import Cart from "./components/Cart/Cart";
import CartProvider from "./contexts/store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown ? <Cart onHideCart={hideCartHandler} /> : ""}
      <div className="App">
        <Header onShowCart={showCartHandler} />
        <Meals />
      </div>
    </CartProvider>
  );
}

export default App;
