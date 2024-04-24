import React from "react";
import { Routes, Route } from "react-router-dom";
import Page01 from "./components/Pages0125/Page01";
import Page02 from "./components/Pages0125/Page02";
import Page151 from "./components/Pages151175/Page151";
import Page152 from "./components/Pages151175/Page152";

const App = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={() => "First Page"} />
          <Route path="/page01" element={<Page01 />} />
          <Route path="/page022" element={<Page02 />} />
          <Route path="/page151" element={<Page151 />} />
          <Route path="/page152" element={<Page152 />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
