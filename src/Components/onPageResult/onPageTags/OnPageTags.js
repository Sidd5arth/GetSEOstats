import React from "react";
import "./onPageTags.css";

const OnPageTags = ({ heading, value }) => {
  return (
    <div className="onTags">
      <h2 style={{ fontSize: "1.4em", textAlign: "left" }}>{heading}</h2>
      {value
        .filter((data, index, self) => self.indexOf(data) === index)
        .map((data, index) => (
          <p key={index} style={{ fontSize: "0.9em" }}>
            - {data}
          </p>
        ))}
    </div>
  );
};

export default OnPageTags;
