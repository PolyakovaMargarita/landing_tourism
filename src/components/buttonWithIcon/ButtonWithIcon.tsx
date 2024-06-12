import React, {FC} from "react";
import s from "./ButtonWithIcon.module.css";

interface ButtonWithIconProps {
    icon: string;
    text: string;
    width?: string
    height?: string,
    onHandelClick?: () => void;
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  icon,
  text,
  width,
  height,
  onHandelClick
}) => {
  return (
    <div onClick={onHandelClick} className={s.container} style={{ width: width ? width : "91px", height: height ? height : "32px" }} >
      <img className={s.img} src={icon} alt={"icon"} />
      <div>{text}</div>
    </div>
  );
};

export default ButtonWithIcon;