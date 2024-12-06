import React from "react";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCableCar,
  faBed,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <h1 className="headerTitle">尋找下趟住宿</h1>
        <p className="headerDes">
          搜尋飯店、民宿及其他住宿類型的優惠...
          <br />
          Booking.com clone挑戰
        </p>
        <div className="headerSearchBar">
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faBed} />
            <input
              type="Search"
              placeholder="你要去哪裡?"
              className="SearchInput"
            />
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faCableCar} />
            <span className="SearchText">08/19/2022-08/16/2022</span>
          </div>
          <div className="SearchBarItem">
            <FontAwesomeIcon icon={faPeopleGroup} />
            <span className="SearchText">三位成人、2位小孩、1間房</span>
          </div>
          <buton className="SearchBarBtn">搜尋</buton>
        </div>
      </div>
    </div>
  );
};

export default Header;
