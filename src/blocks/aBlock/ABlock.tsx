import React, {FC} from "react";
import s from "./ABlock.module.css";
import FirstInfo from "@/components/firstInfo/FirstInfo";

interface ABlockProps {
    title: string;
    description: [];
    text: string;
}

const ABlock: FC<ABlockProps> = ({
  title,
  description,
  text
}) => {
  return (
    <div className={s.container}>
      <div>
        <div className={s.img}>A</div>
      </div>
      <FirstInfo
        title={title}
        text={text}
        description={description}
      />
      <div className={s.line}></div>
    </div>
  );
};

export default ABlock;