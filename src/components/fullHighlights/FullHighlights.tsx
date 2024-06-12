import React from "react";
import s from "./FullHighlights.module.css";

import data from "./data.json";

const FullHighlights = () => {

  return (
    <div className={s.container}>
      {
        data && data.length && data.map((item: any, index: number) => (
          <div className={s.wrapper} key={index}>
            <div className={s.header}>
              <div>Day {index + 1}</div>
              <div className={s.headerInfo}>
                <img className={s.img_24} src={"/images/icons/arrowBack.svg"} alt={"image"}/>
                <div>{item.time}</div>
                <img className={s.img_32} src={"/images/icons/points.svg"} alt={"image"}/>
              </div>
            </div>
            <div className={s.infoBlock}>
              {item.info.map((i: any, ind: number) => (
                <div className={s.infoWrapper} key={ind}>
                  <div className={s.pointOnLine}></div>
                  <div className={s.mainInfo}>
                    <img className={s.img} src={i.image} alt={"image"}/>
                    <div className={s.listOfInfo}>
                      <div className={s.title}>{i.title}</div>
                      <div className={s.dopTitle}>{i.dopInfo}</div>
                      <div className={s.text}>{i.info}</div>
                    </div>
                  </div>

                  <div className={s.icons}>
                    <img className={s.img_32} src={"/images/icons/twoLines.svg"} alt={"image"}/>
                    <img className={s.img_32} src={"/images/icons/points.svg"} alt={"image"}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default FullHighlights;