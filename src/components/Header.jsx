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
import * as locales from "react-date-range/dist/locale"; //設定時區使用

import format from "date-fns/format"; //日期顯示格式
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
              {format(dates[0].startDate, "MM/dd/yyyy")} -{" "}
              {format(dates[0].endDate, "MM/dd/yyyy")}
            </span>
            {openCalendar && (
              <DateRange
                editableDateInputs={true} //可以讓日期被選取並輸入等等
                onChange={(item) => setDates([item.selection])}
                //onChange把紀錄到的改動都紀錄到state date 裡面我們暫存器就會有選好的日期範圍，等於是輸入到暫存器
                //item.selection的概念就是讓他選擇上傳到key=selection的部分
                moveRangeOnFirstSelection={false}
                className="calendar" //並記得classname scss styling導入，才能搭配SCSS
                ranges={dates} //才可以選範圍並範圍更改會re-render useState的date等於這是個抓取date範圍並顯示在日曆上，等於是從暫存器輸入到日曆顯示上面
                minDate={new Date()}
                locale={locales["zhTW"]}
                //語言版本使用繁體中文zhTW概念
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
