import React from "react";
import { Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3 } from "./components";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
};

export default App;
