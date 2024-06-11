import React, { useState } from "react";
import s from "./Header.module.css";

//img
import plusImg from "/images/icons/plus.svg";
import arrowDownImg from "/images/icons/arrowDown.svg";
import Image from "next/image";

const listOfDate = [
  5, 6, 7, 8, 9, 10
];

const Header = () => {
  const [activeDate, setActiveDate] = useState<number>(7);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDateChange = (date: number) => {
    setActiveDate(date);
    setIsDropdownOpen(false);
  };

  return (
    <div className={s.container}>
      <div className={s.itemsBlock}>
        <div className={s.itemTrips}>Trips</div>
        <div className={s.itemIceland}>Iceland</div>
        <div className={s.itemDay} onClick={toggleDropdown}>
          <div>{activeDate} days</div>
          <img
            src={"/images/icons/arrowDown.svg"}
            alt="arrowDownImg"
          />
          {isDropdownOpen && (
            <div className={s.dropdown}>
              {listOfDate.map((date) => (
                <div
                  key={date}
                  className={s.dropdownItem}
                  onClick={() => handleDateChange(date)}
                >
                  {date} days
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={s.itemCreate}>
        <img
          src={"/images/icons/plus.svg"}
          alt="plusImg"
        />
        <div>Create</div>
      </div>
    </div>
  );
};

export default Header;
