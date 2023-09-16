import React from "react";
import { ReactComponent as Tick } from "../../../assets/tick.svg";
import { ReactComponent as Cross } from "../../../assets/cross.svg";
import "./onPageStat.css";
const OnPageStats = ({ heading, value }) => {
  return (
    <div className="onStat">
      <div className="icon-style">
        {value ? (
          <Tick height={40} width={40} />
        ) : (
          <Cross height={40} width={40} />
        )}
      </div>
      <div className="about-stat">
        <h3 style={{ fontSize: "1em" }}>{heading}</h3>
        <p className="p-style">
          {value === 0 ? "false" : value.toString()}
        </p>
      </div>
    </div>
  );
};

export default OnPageStats;
