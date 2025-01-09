import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
// import PagenotFound from "./components/PagenotFound";
import IITS from "./components/Engineering/IIT/IIT_main.js";
import NITS from "./components/Engineering/NIT/NIT_main.js";
import IIITS from "./components/Engineering/IIIT/IIIT_main.js";
import CFTIS from "./components/Engineering/CFTI/CFTI_main";
import StateEng_main from "./components/Engineering/State/StateEng_main.js";
import StateDetails from "./components/Engineering/State/StateDetails.js";
import AIIMS from "./components/Medical/AIIMS/AIIMS__main.js";
import Dental from "./components/Medical/Dental/Dental_main.js";
import OtherM from "./components/Medical/OtherM/OtherM_main.js";
import IIM from "./components/MBA/IIM/IIM_main.js";
import MBA_IIT_NIT from "./components/MBA/MBA_IIT_NIT/MBA_IIT_NIT_main.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/iit-details" element={<IITS />} />
        <Route path="/nit-details" element={<NITS />} />
        <Route path="/iiit-details" element={<IIITS />} />
        <Route path="/cfti-details" element={<CFTIS />} />
        <Route path="/stateEng-details" element={<StateEng_main />} />
        <Route path="/state-details/:state" element={<StateDetails />} />
        <Route path="/aiims-details" element={<AIIMS />} />
        <Route path="/dental-colleges-details" element={<Dental />} />
        <Route path="/other-medical-college-details" element={<OtherM />} />
        <Route path="/iim-details" element={<IIM />} />
        <Route path="/mba-in-iit-nit-details" element={<MBA_IIT_NIT />} />
      </Routes>
    </Router>
  );
}

export default App;
