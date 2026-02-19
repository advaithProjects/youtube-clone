import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video/:categoryId/:VideoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
