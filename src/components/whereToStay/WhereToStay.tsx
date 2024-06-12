import React, {FC} from "react";
import s from "./WhereToStay.module.css";

interface WhereToStayProps {
    title: string;
    info: any
}

const WhereToStay: FC<WhereToStayProps> = ({
  title,
  info    
}) => {

  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>{title}</div>
      </div>

      <div className={s.blockWrapper}>
        {info.length && info.map((item: any, index: number) => (
          <div key={index} className={s.block}>
            <div className={s.imgBlock}>
              <img className={s.img} src={item.image} alt={"image"}/>
              {index === info.length - 1 && (
                <img className={s.imgArrow} src={"/images/icons/arrowRight.svg"} alt={"arrow"} />
              )}
            </div>
            <div className={s.title}>{item.title}</div>
            <div className={s.rate}>
              <img src={"/images/icons/arrrowUpRight.svg"} alt={"image"}/>
              <div>{item.rate}</div>
            </div>
            <div className={s.infoBlock}>
              <div>${item.price}+</div>
              <div className={s.point}></div>
              <div>{item.name}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereToStay;