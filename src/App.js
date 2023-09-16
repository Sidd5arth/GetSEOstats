import React, { useState, useRef } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import AppContextProvider from "./context/AppContextProvider";
import OnPageResult from "./Components/onPageResult/OnPageResult";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Widget from "./Pages/Widget/Widget";
function App() {
  const inputRef = useRef(null);
  const [url, setUrl] = useState("");
  console.log(url);
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = inputRef.current.value;
    console.log(url);
    setUrl(url);
  };

  return (
    <AppContextProvider url={url}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleSubmit={handleSubmit} inputRef={inputRef}/>} />
          <Route path="/widget" component={<Widget/>} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
