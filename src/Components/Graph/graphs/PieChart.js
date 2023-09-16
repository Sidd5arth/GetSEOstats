import React, { useContext, useEffect, useRef } from "react";
import * as d3 from "d3";
import AppContext from "../../../context/app-context";

function PieChart({ data, color }) {
  const svgRef = useRef();
  const appContext = useContext(AppContext)

  const margin = {
    top: 40,
    right: 20,
    bottom: 20,
    left: 20,
  };

  let width, height, outerRadius, innerRadius;

  if(appContext.dimensions.width > 900){
    outerRadius = Math.floor(appContext.dimensions.width)* 0.09;
    innerRadius = Math.floor(appContext.dimensions.width)* 0.05;
    width = Math.floor(appContext.dimensions.width) * 0.23 - margin.left - margin.right;
  }else{
    width = Math.floor(appContext.dimensions.width) * 0.65 - margin.left - margin.right;
    outerRadius = Math.floor(appContext.dimensions.width)* 0.15;
    innerRadius = Math.floor(appContext.dimensions.width)* 0.08;
  }
  if(appContext.dimensions.width < 400){
    outerRadius = Math.floor(appContext.dimensions.width)* 0.2;
    innerRadius = Math.floor(appContext.dimensions.width)* 0.12;
    width = Math.floor(appContext.dimensions.width) * 0.5 - margin.left - margin.right;
  }

  const percentage = data;

  // outerRadius = 100;
  // innerRadius = 40; 

  const startAngle = 0;
  const endAngle = (percentage / 100) * Math.PI * 2;

  const pieData = [{ startAngle, endAngle }];

  useEffect(() => {
    if (svgRef.current) {
      drawChart();
    }
  }, [percentage, appContext.dimensions]);

  function drawChart() {
    d3.select(svgRef.current).select("svg").remove();

    width = 2 * outerRadius + margin.left + margin.right;
    height = 2 * outerRadius + margin.top + margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${outerRadius + margin.left}, ${outerRadius + margin.top})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const arcPaths = svg.selectAll("path").data(pieData);

    arcPaths
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", color)
      .style("stroke", "#ffffff")
      .style("stroke-width", 0)
      .transition()
      .duration(1000)
      .attrTween("d", function (d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arcGenerator(interpolate(t));
        };
      });

    svg
      .append("text")
      .attr("x", -30)
      .attr("y", 10)
      .attr("alignment-baseline", "middle")
      .style("font-size", "32px")
      .text(`${percentage}%`)
      .attr("fill", "#32232e");
  }

  return (
    <div
      ref={svgRef}
      style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "300px" }}
    />
  );
}

export default PieChart;
