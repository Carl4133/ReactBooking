import React from "react";
import Categories from "../subcomponents/Categories";
import "./feature.scss";

const Feature = () => {
  return (
    <div className="feature">
      <div className="container">
        <h2>依住宿類型瀏覽</h2>
      </div>
      <div className="listItems">
        <Categories />
      </div>
    </div>
  );
};

export default Feature;
