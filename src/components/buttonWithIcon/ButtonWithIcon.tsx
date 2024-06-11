import React, {FC} from "react";
import s from "./ButtonWithIcon.module.css";

interface ButtonWithIconProps {
    icon: string;
    text: string;
    width?: string
    height?: string
}

const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  icon,
  text,
  width,
  height
}) => {
  return (
    <div className={s.container} style={{ width: width ? width : "91px", height: height ? height : "32px" }} >
      <img src={icon} alt={"icon"} />
      <div>{text}</div>
    </div>
  );
};

export default ButtonWithIcon;