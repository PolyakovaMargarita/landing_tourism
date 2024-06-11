import React, {FC} from "react";
import s from "./MyInput.module.css";

interface MyInputProps {
  placeholder: string;
  width?: string;
  height?: string;
}

const MyInput: FC<MyInputProps> = ({
  placeholder,
  width,
  height
}) => {
  return (
    <input
      style={{
        width: width ? width : "167px",
        height: height ? height : "40px"
      }}
      className={s.container}
      placeholder={placeholder}
    >
            
    </input>
  );
};

export default MyInput;