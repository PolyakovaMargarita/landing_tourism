import React, { useState } from "react";
import s from "./CheckFly.module.css";
import MyInput from "@/components/UI/myInput/MyInput";
import MyCalendar from "@/components/myCalendar/MyCalendar";
import ButtonWithIcon from "@/components/buttonWithIcon/ButtonWithIcon";

const CheckFly = () => {
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);

  return (
    <div className={s.container}>
      <div className={s.title}>Iceland itinerary</div>
      <div className={s.flyBlock}>
        <div className={s.item}>
          <MyInput placeholder={"Reykjavík, KEF"} />
          <img className={s.img} src={"/images/icons/plane.svg"} alt={"plane"} />
          <MyInput placeholder={"San Francisco, SFO"} /></div>
        <div className={s.itemSecond}>
          <MyCalendar data={selectedDateRange} />
          <ButtonWithIcon icon={"/images/icons/people.svg"} text={"2"} height={"40px"} /></div>
      </div>
    </div>
  );
};

export default CheckFly;