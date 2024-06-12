import React, {FC} from "react";
import s from "./WhereToStayBlock.module.css";
import WhereToStay from "@/components/whereToStay/WhereToStay";

interface WhereToStayBlockProps {
    where_to_stay: any
}

const WhereToStayBlock: FC<WhereToStayBlockProps> = ({
  where_to_stay,
}) => {
  return (
    <div className={s.container}>
      <div className={s.img}>
        <img src={"/images/icons/bed.svg"} alt="bet" />
      </div>
      <WhereToStay
        title={"Where to stay"}
        info={where_to_stay}
      />
    </div>
  );
};

export default WhereToStayBlock;