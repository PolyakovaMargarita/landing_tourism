import React, {FC} from "react";
import s from "./RegionHighlightsBlock.module.css";
import RegionHighlights from "@/components/regionHighlights/RegionHighlights";

interface RegionHighlightsProps {
    region_highlights: any
}

const RegionHighlightsBlock: FC<RegionHighlightsProps> = ({
  region_highlights,
}) => {
  const [activeFull, setActiveFull] = React.useState(false);

    
  return (
    <div className={s.container}>
      <div className={s.img}>
        {activeFull
          ? <img src={"/images/icons/listWhite.svg"} alt="stars" />
          : <img src={"/images/icons/stars.svg"} alt="stars" />
        }
      </div>
      <RegionHighlights
        title={activeFull ? "2 days plan" : region_highlights.title}
        info={region_highlights.info}
        activeFull={activeFull}
        setActiveFull={setActiveFull}
      />
      <div className={s.line}></div>
    </div>
  );
};

export default RegionHighlightsBlock;