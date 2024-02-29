import React from "react";
import Card from "../UI/Card";
import "./MealsSummary.css";

const MealsSummary = () => {
  return (
    <React.Fragment>
      <Card className="summary">
        <span className="summary-heading">
          Indulge Your Palate: Unique Bites, One App Away!
        </span>
        <p>
          Explore a world of unique flavors, carefully prepared by our skilled
          chefs, and delivered to your doorstep. Elevate your dining experience
          by selecting from our exquisite range of dishes, each made with the
          finest ingredients to ensure freshness and quality.
        </p>
        <p>
          Order now and let the culinary journey begin, bringing the
          extraordinary to your table, effortlessly. Bon appétit!
        </p>
      </Card>
    </React.Fragment>
  );
};

export default MealsSummary;
