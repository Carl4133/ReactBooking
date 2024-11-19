import React from "react";
import Navbar from "../components/Navbar";

import "./home.scss";

//範例: const component = (變因variable) => return (結果Value) 輸出到網站上
const Home = () => {
  return (
    <div className="home">
      <Navbar />
    </div>
  );
};

export default Home;
