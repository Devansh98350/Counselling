import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import PagenotFound from "./components/PagenotFound";
import IITS from "./components/Engineering/EngMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/iits-details" element={<IITS />} />
      </Routes>
    </Router>
  );
}

export default App;
