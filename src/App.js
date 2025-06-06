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
import IIT_BOMBAY from "./components/Engineering/IIT/Component/Bombay/bombay.js";
import IIT_DELHI from "./components/Engineering/IIT/Component/Delhi/delhi.js";
import IIT_GUWAHATI from "./components/Engineering/IIT/Component/Guwahati/guwahati.js";
import IIT_PATNA from "./components/Engineering/IIT/Component/Patna/patna.js";
import IIT_KANPUR from "./components/Engineering/IIT/Component/Kanpur/kanpur.js";
import IIT_MADRAS from "./components/Engineering/IIT/Component/Madras/madras.js";
import IIT_ROORKEE from "./components/Engineering/IIT/Component/Roorkee/roorkee.js";
import IIT_DHARWAD from "./components/Engineering/IIT/Component/Dharwad/dharwad.js";
import IIT_ROPAR from "./components/Engineering/IIT/Component/Ropar/ropar.js";
import IIT_KHARAGPUR from "./components/Engineering/IIT/Component/Kharagpur/kharagpur.js";
import IIT_INDORE from "./components/Engineering/IIT/Component/Indore/indore.js";
import IIT_BHU from "./components/Engineering/IIT/Component/Bhu/bhu.js";
import IIT_JODHPUR from "./components/Engineering/IIT/Component/Jodhpur/jodhpur.js";
import IIT_TIRUPATI from "./components/Engineering/IIT/Component/Tirupati/tirupati.js";
import IIT_BHILAI from "./components/Engineering/IIT/Component/Bhilai/bhilai.js";
import IIT_JAMMU from "./components/Engineering/IIT/Component/Jammu/jammu.js";
import IIT_PALAKKAD from "./components/Engineering/IIT/Component/Palakkad/palakkad.js";
import IIT_GOA from "./components/Engineering/IIT/Component/Goa/goa.js";
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
import Blog from "./components/Blogs/Blog.js";
import FullBlog from "./components/Blogs/Separate/FullBlog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
        <Route path="/iit-colleges" element={<IITS />} />
        <Route path="/iit-colleges/iit-bombay" element={<IIT_BOMBAY />} />
        <Route path="/iit-colleges/iit-delhi" element={<IIT_DELHI />} />
        <Route path="/iit-colleges/iit-guwahati" element={<IIT_GUWAHATI />} />
        <Route path="/iit-colleges/iit-madras" element={<IIT_MADRAS />} />
        <Route path="/iit-colleges/iit-patna" element={<IIT_PATNA />} />
        <Route path="/iit-colleges/iit-kanpur" element={<IIT_KANPUR />} />
        <Route path="/iit-colleges/iit-roorkee" element={<IIT_ROORKEE />} />
        <Route path="/iit-colleges/iit-dharwad" element={<IIT_DHARWAD />} />
        <Route path="/iit-colleges/iit-ropar" element={<IIT_ROPAR />} />
        <Route path="/iit-colleges/iit-kharagpur" element={<IIT_KHARAGPUR />} />
        <Route path="/iit-colleges/iit-indore" element={<IIT_INDORE />} />
        <Route path="/iit-colleges/iit-bhu" element={<IIT_BHU />} />
        <Route path="/iit-colleges/iit-jodhpur" element={<IIT_JODHPUR />} />
        <Route path="/iit-colleges/iit-tirupati" element={<IIT_TIRUPATI />} />
        <Route path="/iit-colleges/iit-bhilai" element={<IIT_BHILAI />} />
        <Route path="/iit-colleges/iit-jammu" element={<IIT_JAMMU />} />
        <Route path="/iit-colleges/iit-palakkad" element={<IIT_PALAKKAD />} />
        <Route path="/iit-colleges/iit-goa" element={<IIT_GOA />} />
        <Route path="/nit-colleges" element={<NITS />} />
        <Route path="/iiit-colleges" element={<IIITS />} />
        <Route path="/cfti-colleges" element={<CFTIS />} />
        <Route path="/stateEng-colleges" element={<StateEng_main />} />
        <Route path="/state-colleges/:state" element={<StateDetails />} />
        <Route path="/aiims-colleges" element={<AIIMS />} />
        <Route path="/dental-colleges" element={<Dental />} />
        <Route path="/other-medical-college" element={<OtherM />} />
        <Route path="/iim-colleges" element={<IIM />} />
        <Route path="/mba-in-iit-nit-colleges" element={<MBA_IIT_NIT />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:link" element={<FullBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
