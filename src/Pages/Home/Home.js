import React, { useContext, useEffect, useState } from "react";
import Widget from "../Widget/Widget";
import "./home.css";
import AppContext from "../../context/app-context";
import FrameComponent from "react-frame-component";
const Home = ({ handleSubmit, inputRef }) => {
  const [siteData, setSitedata] = useState();
  const { data, isLoading } = useContext(AppContext);
  console.log(data);
  useEffect(() => {
    if (data) {
      setSitedata(data);
    }
  }, [data]);
  return (
    <div className="Frame-container">
      <Widget
        inputRef={inputRef}
        siteData={siteData}
        isLoading={isLoading}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;

// this the same thing but inside iFrame
// return (
//   <div>
//     <div>
//       home content
//     </div>
//     <div className="Frame-container">
//     <Widget/>
//     <FrameComponent
//     width={480}
//     height={480}
//     >
//       <Widget
//       inputRef={inputRef}
//       handleSubmit={handleSubmit}/>
//     </FrameComponent>

//     </div>
//   </div>
// );
