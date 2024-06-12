import React, {FC} from "react";
import s from "./RegionHighlights.module.css";
import ButtonWithIcon from "@/components/buttonWithIcon/ButtonWithIcon";
import Highlights from "@/components/highlights/Highlights";
import FullHighlights from "@/components/fullHighlights/FullHighlights";

interface RegionHighlightsProps {
    title: string;
    info: any;
    activeFull: boolean,
    setActiveFull: Function;
}

const RegionHighlights: FC<RegionHighlightsProps> = ({
  title,
  info,
  activeFull,
  setActiveFull
}) => {

  const handelClick = () => {
    setActiveFull(!activeFull);
  };
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div className={s.title}>{title}</div>
        {activeFull
          ? <ButtonWithIcon onHandelClick={handelClick} width={"175px"} icon={"/images/icons/star2.svg"} text={"Show highlights"} />
          : <ButtonWithIcon onHandelClick={handelClick} width={"165px"} icon={"/images/icons/list.svg"} text={"Show daily plan"} />
        }
      </div>

      {activeFull ?
        <FullHighlights />
        : <Highlights info={info} />
      }

    </div>
  );
};

export default RegionHighlights;