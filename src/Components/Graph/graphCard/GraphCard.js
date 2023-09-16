import React, { useEffect, useState } from "react";
import "./graphCard.css";
import PieChart from "../graphs/PieChart";

const GraphCard = ({
  data,
  color,
  title,
  desc,
}) => {;

  return (
    <div className="card-wrapper">
      <PieChart data={data} color={color} />
      <div
        className="filter-container"
      >
        <div className="card-title">
          <h3>{title}</h3>
          <p style={{ fontSize: "0.8em" }}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default GraphCard;
