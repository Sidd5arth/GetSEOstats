import React from "react";
import "./onPageSpeed.css"
const OnPageSpeed = ({title, value, color}) => {
  return (
    <div className="onSpeed" style={{border:`20px solid ${color}`}}>
      <p style={{ fontSize: "1.4em" }}>{value}ms</p>
      <p style={{ fontSize: "0.9em", textAlign: "center" }}>{title}</p>
    </div>
  );
};

export default OnPageSpeed;
