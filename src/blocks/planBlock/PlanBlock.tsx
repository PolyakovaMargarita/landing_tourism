import React, {FC} from "react";
import s from "./PlanBlock.module.css";
import ABlock from "@/blocks/aBlock/ABlock";
import RegionHighlightsBlock from "@/blocks/regionHighlightsBlock/RegionHighlightsBlock";
import WhereToStayBlock from "@/blocks/whereToStayBlock/WhereToStayBlock";
import {GOLDEN_BLOCK} from "../../helpers/constants/id";

interface PlanBlockProps {
    data: any
}

const PlanBlock: FC<PlanBlockProps> = ({
  data
}) => {

  return (
    <div className={s.container}>
      <div id={GOLDEN_BLOCK}>
        <ABlock
          title={data.a.first.title}
          text={data.a.first.text}
          description={data.a.first.description}
        />
      </div>
      <RegionHighlightsBlock
        region_highlights={data.a.region_highlights}
      />
      <WhereToStayBlock where_to_stay={data.a.where_to_stay} />
    </div>
  );
};

export default PlanBlock;