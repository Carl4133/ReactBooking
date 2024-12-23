import {
  faCalendar,
  faBed,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons"; //icon要注意
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import * as locales from "react-date-range/dist/locale"; //?
import "./header.scss";

const Header = () => {
  //const [destination, setDestination] = useState(""); ???
  //const [openConditions, setOpenConditions] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  /*   const [conditions, setConditions] = useState({
    adult: 1, //初始人數,房間數為一
    children: 0, //可以不一定要有小孩
    room: 1,
  });
  const handleCounter = (name, sign) => {
    setConditions((prev) => {
      return {
        ...prev,
        [name]:
          sign === "increase" ? conditions[name] + 1 : conditions[name] - 1,
      };
    });
  }; */
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
            <FontAwesomeIcon
              icon={faCalendar}
              onClick={() => setOpenCalendar(!openCalendar)}
            />
            <span
              className="SearchText"
              onClick={() => setOpenCalendar(!openCalendar)}
            >
              08/19/2022-08/16/2022
            </span>
            {openCalendar && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDates([item.selection])}
                moveRangeOnFirstSelection={false}
                className="calendar"
                ranges={dates}
                minDate={new Date()}
                locale={locales["zhTW"]}
              />
            )}
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
