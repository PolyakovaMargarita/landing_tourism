import React, {FC} from "react";
import Image from "next/image";
import s from "./ImagesBlock.module.css";

//img
import mainImg from "@/images/mainBlock/big.svg";

interface ImagesBlockProps {
}

const ImagesBlock: FC<ImagesBlockProps> = () => {

  return (
    <div className={s.container}>
      <div className={s.first}>
        <img className={s.imgMain} src={"/images/mainBlock/big.svg"} alt="image" />
      </div>
      <div className={s.second}>
        <div className={s.item}>
          <img className={s.img} src={"/images/mainBlock/1.png"} alt="image"/>
          <img className={s.img} src={"/images/mainBlock/3.png"} alt="image"/>
        </div>
        <div className={s.item}>
          <img className={s.imgThird} src={"/images/mainBlock/2.png"} alt="image"/>
          <img className={s.imgFour} src={"/images/mainBlock/4.png"} alt="image"/>
        </div>
      </div>
    </div>
  );
};

export default ImagesBlock;