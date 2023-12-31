import React, { useEffect, useState } from "react";
import "./widgetBody.css";
import OnPageResult from "../../../Components/onPageResult/OnPageResult";
import "./widgetBody.css";
import GraphCard from "../../../Components/Graph/graphCard/GraphCard";
const WidgetBody = ({ siteData }) => {
  const [meta, setMeta] = useState();
  const [checks, setChecks] = useState();
  const [pageSpeed, setPageSpeed] = useState();
  const [htags, setHtags] = useState();
  // const [socialData, setSocialData] = useState();
  const [onPageScore, setOnPageScore] = useState(0);
  useEffect(() => {
    if (siteData) {
      setMeta(siteData.meta);
      setChecks(siteData.checks);
      setPageSpeed(siteData.page_timing);
      setHtags(siteData.meta.htags);
      // setSocialData(siteData.meta.social_media_tags)
      setOnPageScore(siteData.onpage_score);
    }
  }, [siteData]);
  console.log(siteData);
  console.log(checks);
  return (
    <div className="container-widbody">
      <div className="graph-container">
        <GraphCard
          data={parseFloat(onPageScore.toFixed(0))}
          color="#34f337"
          title="onPage Score"
        />
      </div>
      <OnPageResult
        metaData={meta}
        statData={checks}
        speedData={pageSpeed}
        htags={htags}
      />
      <p style={{margin:"2em"}}>
        Designed and Developed By{" "}
        <a href="https://github.com/Sidd5arth" rel="noreferrer" target="_blank">
          Siddharth
        </a>
      </p>
    </div>
  );
};

export default WidgetBody;
