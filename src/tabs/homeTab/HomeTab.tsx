import React from "react";
import s from "./HomeTab.module.css";
import ImagesBlock from "@/blocks/imagesBlock/ImagesBlock";
import TripInfoBlock from "@/blocks/tripInfoBlock/TripInfoBlock";
import CommentsBlock from "@/blocks/commentsBlock/CommentsBlock";
import CheckFly from "@/blocks/checkFly/CheckFly";

const HomeTab = () => {
  return (
    <div className={s.container}>
      <ImagesBlock />
      <TripInfoBlock />
      <CommentsBlock />
      <div className={s.checkFly}>
        <CheckFly />
      </div>

    </div>
  );
};

export default HomeTab;