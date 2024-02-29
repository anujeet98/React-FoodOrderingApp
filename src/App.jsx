import React from "react";
import Header from './components/Layout/Header'
import Meals from "./components/Meals/Meals";

import './App.css'

import Cart from "./components/Cart/Cart";

function App() {
  return (
    <React.Fragment>
      <Cart/>
      <div className="App">
        <Header></Header>
        <Meals/>
      </div>
    </React.Fragment>
  );
}

export default App;
