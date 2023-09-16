import React, { useEffect } from "react";
import "./widget.css";
import { Blocks } from "react-loader-spinner";
import WidgetBody from "./WidgetBody/WidgetBody";

const Widget = ({ handleSubmit, inputRef, siteData, isLoading }) => {
  const submitHandler = (e) => {
    handleSubmit(e);
  };

  useEffect(() => {
    if (siteData) {
      const widgetDataElement = document.getElementById("widgetData");
      if (widgetDataElement) {
        widgetDataElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [siteData]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={submitHandler} className="wid">
        <div>
          <input
            placeholder="Enter the Link Here to get the SEO Data"
            className="input"
            type="text"
            id="name"
            name="name"
            required
            ref={inputRef}
          />
        </div>
        <div>
          <button className="btn" type="submit" style={{margin: "0 auto"}}>
            Submit
          </button>
        </div>
        <div style={{ height: "100px", width: "100px" }}>
          {isLoading ? <Blocks /> : ""}
        </div>
      </form>
      {siteData ? (
        <div id="widgetData" style={{ width: "100%", height: "100vh" }}>
          <WidgetBody siteData={siteData} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Widget;
