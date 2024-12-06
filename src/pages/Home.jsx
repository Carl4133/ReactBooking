import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import "./home.scss";

//範例: const component = (變因variable) => return (結果Value) 輸出到網站上
// <Navbar/ > 導入Navbar component
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
