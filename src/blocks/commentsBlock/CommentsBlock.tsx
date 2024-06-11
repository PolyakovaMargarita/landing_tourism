import React from "react";
import s from "./CommentsBlock.module.css";

//data
import data from "./data.json";
import ButtonWithIcon from "@/components/buttonWithIcon/ButtonWithIcon";

interface IData {
    trip: string,
    name: string,
    star: string,
    text: string,
    avatar: string,
}

const CommentsBlock = () => {

  return (
    <div className={s.container}>
      <div className={s.dataTrip}>
        <div className={s.trip}>{data.trip}</div>
        <div className={s.buttons}>
          <ButtonWithIcon width={"156px"} icon={"/images/icons/favorite.svg"} text={"Add to wishlist"} />
          <ButtonWithIcon width={"91px"} icon={"/images/icons/share.svg"} text={"Share"} />
        </div>
      </div>
      <div className={s.commentsBlock}>
        <img src={data.avatar} alt="arrowUpImg" />
        <div className={s.nameAndStar}>
          <div className={s.name}>{data.name}</div>
          <div className={s.star}>{data.star}</div>
        </div>
      </div>
      <div className={s.text}>{data.text}</div>
    </div>
  );
};

export default CommentsBlock;