import React from "react";
import s from "./HomeTab.module.css";

//blocks
import ImagesBlock from "@/blocks/imagesBlock/ImagesBlock";
import TripInfoBlock from "@/blocks/tripInfoBlock/TripInfoBlock";
import CommentsBlock from "@/blocks/commentsBlock/CommentsBlock";
import CheckFly from "@/blocks/checkFly/CheckFly";
import PlanBlock from "@/blocks/planBlock/PlanBlock";

//data
import data from "./data.json";
import dataB from "./dataB.json";

const HomeTab = () => {

  return (
    <div className={s.container}>
      <ImagesBlock />
      <TripInfoBlock />
      <CommentsBlock />
      <div className={s.checkFly}>
        <CheckFly />
      </div>
      <PlanBlock data={data} />
      <PlanBlock data={dataB} />
    </div>
  );
};

export default HomeTab;