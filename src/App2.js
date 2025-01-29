import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./Cards";

function App2() {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
    </Routes>
  );
}

export default App2;
