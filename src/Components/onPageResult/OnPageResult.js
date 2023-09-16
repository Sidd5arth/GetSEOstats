import React, { useState, useEffect } from "react";
import OnPageChunks from "./onPageChunks/OnPageChunks";
import "./onPageResult.css";
import OnPageStats from "./onPageStats/OnPageStats";
import OnPageSpeed from "./onPageSpeed/OnPageSpeed";
const OnPageResult = ({ metaData, statData, speedData }) => {
  const [onPageData, SetOnPageData] = useState([]);
  const [onPageStat, SetOnPageStat] = useState([]);
  const [onPageSpeed, SetOnPageSpeed] = useState([]);
  useEffect(() => {
    if (metaData) {
      const metaArr = [
        { title: "internal links", value: metaData.internal_links_count || 0 },
        { title: "External Links", value: metaData.external_links_count || 0 },
        { title: "Number of Images", value: metaData.images_count || 0 },
        { title: "Images Size", value: metaData.images_size || 0 },
        { title: "Scripts", value: metaData.scripts_count || 0 },
        { title: "Scripts Size", value: metaData.scripts_size || 0 },
        {
          title: "Plain Text Size",
          value: metaData.content.plain_text_size || 0,
        },
        {
          title: "Plain Text Rate",
          value: metaData.content.plain_text_rate || 0,
        },
        {
          title: "Plain Text Word Count",
          value: metaData.content.plain_text_word_count || 0,
        },
        {
          title: "Automated Readability Index",
          value: metaData.content.automated_readability_index || 0,
        },
        {
          title: "Coleman Liau Readability Index",
          value: metaData.content.coleman_liau_readability_index || 0,
        },
        {
          title: "Dale Chall Readability Index",
          value: metaData.content.dale_chall_readability_index || 0,
        },
        {
          title: "Flesch Kincaid Readability Index",
          value: metaData.content.flesch_kincaid_readability_index || 0,
        },
        {
          title: "Smog Readability Index",
          value: metaData.content.smog_readability_index || 0,
        },
        {
          title: "Description to Content Consistency",
          value: metaData.content.description_to_content_consistency || 0,
        },
        {
          title: "Title to Content Consistency",
          value: metaData.content.title_to_content_consistency || 0,
        },
        {
          title: "Meta Keywords to Content Consistency",
          value: metaData.content.meta_keywords_to_content_consistency || 0,
        },
      ];
      SetOnPageData(metaArr);
    }
    if (statData) {
      const statArr = [
        { title: "Duplicate Title", value: statData.duplicate_title_tag || 0 },
        {
          title: "Duplicate Description",
          value: statData.irrelevant_description,
        },
        {
          title: "Duplicate Content",
          value: statData.duplicate_title_tag || 0,
        },
        { title: "Size", value: statData.small_page_size },
        { title: "Canonical", value: statData.canonical },
        {
          title: "HTTPS to HTTP Links",
          value: statData.https_to_http_links || 0,
        },
        { title: "Is 4xx Code", value: statData.is_4xx_code || 0 },
        { title: "Is 5xx Code", value: statData.is_5xx_code || 0 },
        { title: "Is Broken", value: statData.is_broken || 0 },
        { title: "Low Content Rate", value: statData.low_content_rate || 0 },
        {
          title: "Has Render Blocking Resources",
          value: statData.has_render_blocking_resources || 0,
        },
        {
          title: "Low Readability Rate",
          value: statData.low_readability_rate || 0,
        },
        { title: "Title Too Long", value: statData.title_too_long || 0 },
        { title: "No Image Alt", value: statData.no_image_alt || 0 },
        { title: "No Favicon", value: statData.no_favicon || 0 },
        { title: "Title", value: !statData.no_title || 0 },
        { title: "Description", value: !statData.no_description || 0 },
      ];
      SetOnPageStat(statArr);
    }
    if (speedData) {
      const speedArr = [
        {
          title: "Time to Secure Connection",
          value: speedData.time_to_secure_connection,
          color: "#eaec00",
        },
        {
          title: "Waiting Time",
          value: speedData.waiting_time,
          color: "#0fe9c7",
        },
        {
          title: "Download Time",
          value: speedData.download_time,
          color: "#7692FF",
        },
        {
          title: "Time to Interactive",
          value: speedData.time_to_interactive,
          color: "#ff6176",
        },
        {
          title: "DOM Complete",
          value: speedData.dom_complete,
          color: "#08D958",
        },
        {
          title: "Largest Contentful Paint",
          value: speedData.largest_contentful_paint,
          color: "#5bd5ff",
        },
      ];
      SetOnPageSpeed(speedArr);
    }
  }, [metaData, statData, speedData]);
  return (
    <div className="onpage">
      <div className="container-Card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            width: "100%",
            marginBottom: "1em",
          }}
        >
          <h2>Onpage Speed</h2>
          <p>Over all score</p>
        </div>
        <div className="pageSpeed-grid">
          {onPageSpeed.map((data) => (
            <OnPageSpeed
              key={data.title}
              title={data.title}
              value={data.value}
              color={data.color}
            />
          ))}
        </div>
      </div>
      <div className="container-Card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            width: "100%",
            marginBottom: "1em",
          }}
        >
          <h2>Onpage Results</h2>
          <p>Over all score</p>
        </div>
        <div className="pageChunk-grid">
          {onPageData.map((data) => (
            <OnPageChunks
              key={data.title}
              title={data.title}
              value={parseFloat(data.value.toFixed(2))}
            />
          ))}
        </div>
      </div>
      <div className="container-Card">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            width: "100%",
            marginBottom: "1em",
          }}
        >
          <h2>Onpage essentials</h2>
          <p>Over all score</p>
        </div>
        <div className="pageStat-grid">
          {onPageStat.map((data) => (
            <OnPageStats
              key={data.title}
              heading={data.title}
              value={data.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnPageResult;
