import React from "react";
import Header from './components/Layout/Header'
import Card from "./components/UI/Card";

import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header></Header>
        <Card className="summary">
          <span className="summary-heading">Indulge Your Palate: Unique Bites, One App Away!</span>
          <p>
            Explore a world of unique flavors, carefully prepared by our skilled chefs, and delivered to your doorstep. Elevate your dining experience by selecting from our exquisite range of dishes, each made with the finest ingredients to ensure freshness and quality.
          </p>
          <p>
            Order now and let the culinary journey begin, bringing the extraordinary to your table, effortlessly. Bon appétit!
          </p>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default App;
