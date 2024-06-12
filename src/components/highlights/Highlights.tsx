import React, {FC} from "react";
import s from "./Highlights.module.css";

interface HighlightsProps {
    info: any
}

const Highlights: FC<HighlightsProps> = ({ info }) => {
  return (
    <div className={s.blockWrapper}>
      {info.length && info.map((item: any, index: number) => (
        <div key={index} className={s.block}>
          <div className={s.imgBlock}>
            <img className={s.img} src={item.image} alt={"image"}/>
            {index === info.length - 1 && (
              <img className={s.imgArrow} src={"/images/icons/arrowRight.svg"} alt={"arrow"}/>
            )}
          </div>
          <div className={s.title}>{item.title}</div>
          <div className={s.infoBlock}>
            <div>{item.hours}</div>
            <div className={s.point}></div>
            <div>{item.info}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;