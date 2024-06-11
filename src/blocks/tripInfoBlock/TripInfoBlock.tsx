import React, {FC} from "react";
import s from "./TripInfoBlock.module.css";

//data
import data from "./data.json";

interface TripInfoBlockProps {
}


const TripInfoBlock: FC<TripInfoBlockProps> = () => {

  console.log("data", data);
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
      <div className={s.secondBlock}>View itinerary</div>
    </div>
  );
};

export default TripInfoBlock;