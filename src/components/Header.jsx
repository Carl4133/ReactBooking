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
  //const [狀態變數, 設置狀態的函數]=useState(初始值)
  const [destination, setDestination] = useState(""); //只關係到顯示
  const [openConditions, setOpenConditions] = useState(false); //只關係到顯示
  const [openCalendar, setOpenCalendar] = useState(false); //只關係到顯示

  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [conditions, setConditions] = useState({
    adult: 1, //初始人數一,房間數為一
    children: 0, //可以不一定要有小孩
    room: 1,
  });
  //計算加減的函數
  const handleCounter = (name, sign) => {
    //導入的變數name用來判斷是adult/children/room,sign判斷加/減法
    setConditions((previous) => {
      //previous代表的是conditions的當前值
      return {
        ...previous,
        [name]:
          sign === "increase" ? conditions[name] + 1 : conditions[name] - 1,
      };
    });
  };
  console.log(destination, dates, conditions);

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
              onChange={(e) => setDestination(e.target.value)}
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
            <FontAwesomeIcon
              icon={faPeopleGroup}
              onClick={() => setOpenConditions(!openConditions)}
            />
            <span
              className="SearchText"
              onClick={() => setOpenConditions(!openConditions)}
            >
              {conditions.adult}位成人·
              {conditions.children}位小孩·{conditions.room}間房
            </span>
            {openConditions && (
              <div className="ConditionsContainer">
                <div className="condition">
                  成人
                  <div className="conditionCounter">
                    <button
                      className="conditionCounterButton"
                      disabled={conditions.adult <= 1}
                      onClick={() => handleCounter("adult", "decrease")}
                    >
                      -
                    </button>
                    <span className="number">{conditions.adult}</span>
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("adult", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="condition">
                  <span>
                    小孩
                    <p>0-17 歲</p>
                  </span>

                  <div className="conditionCounter">
                    <button
                      className="conditionCounterButton"
                      disabled={conditions.children <= 0}
                      onClick={() => handleCounter("children", "decrease")}
                    >
                      -
                    </button>
                    <span className="number">{conditions.children}</span>
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("children", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="condition">
                  房間
                  <div className="conditionCounter">
                    <button
                      className="conditionCounterButton"
                      disabled={conditions.room <= 1}
                      onClick={() => handleCounter("room", "decrease")}
                    >
                      -
                    </button>
                    <span className="number"> {conditions.room}</span>
                    <button
                      className="conditionCounterButton"
                      onClick={() => handleCounter("room", "increase")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="SearchBarBtn">搜尋</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
