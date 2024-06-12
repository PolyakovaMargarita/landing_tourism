import React, {FC} from "react";
import s from "./FirstInfo.module.css";

interface FirstInfoProps {
    title: string;
    description: [];
    text: string;
}

const FirstInfo: FC<FirstInfoProps> = ({
  title,
  description,
  text
}) => {
  return (
    <div className={s.container}>
      <div className={s.title}>{title}</div>
      <div className={s.description}>
        {description.length > 0 && description.map((value, i) => (
          <div key={i} className={s.description}>
            {value}
          </div>
        ))}
      </div>
      <div className={s.text}>{text}</div>
    </div>
  );
};

export default FirstInfo;