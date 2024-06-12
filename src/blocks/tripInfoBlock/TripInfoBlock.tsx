import React, {FC} from "react";
import s from "./TripInfoBlock.module.css";

//data
import data from "./data.json";
import Link from "next/link";
import {GOLDEN_BLOCK} from "../../helpers/constants/id";

interface TripInfoBlockProps {
}


const TripInfoBlock: FC<TripInfoBlockProps> = () => {

  const handleClick = () => {
    const element = document.getElementById(GOLDEN_BLOCK);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
    
  return (
    <div className={s.container}>
      <div className={s.firstBlock}>
        {data && data.length && data.map((data: {title: string, info: string}, index) => (
          <div key={index} className={s.block}>
            <div className={s.title}>{data.title}</div>
            <div className={s.info}>{data.info}</div>
          </div>
        ))}

      </div>
      <div
        className={s.secondBlock} 
        onClick={handleClick}
      >
        View itinerary
      </div>
    </div>
  );
};

export default TripInfoBlock;