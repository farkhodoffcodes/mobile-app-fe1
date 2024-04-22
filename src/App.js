import React from "react";
import Page01 from "./components/Pages0125/Page01";
import Page02 from "./components/Pages0125/Page02";
import Page151 from "./components/Pages151175/Page151"
// import { BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container">
        <Page01 />
        <Page02/>
        <Page151/>
      </div>
    </>
  )
};


export default App;
