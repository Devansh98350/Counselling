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
import IIT_DELHI from "./components/Engineering/IIT/Component/Delhi/delhi.js";
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
        <Route path="/iit-colleges" element={<IITS />} />
        <Route path="/iit-colleges/iit-delhi" element={<IIT_DELHI />} />
        <Route path="/nit-colleges" element={<NITS />} />
        <Route path="/iiit-colleges" element={<IIITS />} />
        <Route path="/cfti-colleges" element={<CFTIS />} />
        <Route path="/stateEng-colleges" element={<StateEng_main />} />
        <Route path="/state-colleges/:state" element={<StateDetails />} />
        <Route path="/aiims-colleges" element={<AIIMS />} />
        <Route path="/dental-colleges-colleges" element={<Dental />} />
        <Route path="/other-medical-college-colleges" element={<OtherM />} />
        <Route path="/iim-colleges" element={<IIM />} />
        <Route path="/mba-in-iit-nit-colleges" element={<MBA_IIT_NIT />} />
      </Routes>
    </Router>
  );
}

export default App;
