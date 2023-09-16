import React from "react";
import "./onPageChunks.css"
const OnPageChunks = ({title, value}) => {
  return (
    <div className="pagechunk">
      <p style={{ fontSize: "1.4em" }}>{value}</p>
      <p style={{ fontSize: "0.9em", textAlign:"center" }}>{title}</p>
    </div>
  );
};

export default OnPageChunks;
