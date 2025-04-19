import React, { useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Placement from "./components/Placement";
import Cutoff from "./components/Cutoff";
import Ranking from "./components/Ranking";
import FAQ from "./components/FAQ";
import Layout from "../../../../Layout";
import Banner from "../../../../Common/Banner";
import Explore from "../../../../Common/Explore";

const Palakkad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Palakkad - IIT Academy"
      description="IIT Palakkad - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Palakkad, IIT Palakkad news, IIT Palakkad Techfest, IIT Palakkad fest, IIT Palakkad average package, IIT Palakkad campus, IIT Palakkad hostel, IIT Palakkad internship, IIT Palakkad PhD admission, IIT Palakkad packages, IIT Palakkad ranking in world, IIT Palakkad notable alumni, IIT Palakkad fees for 4 years BTech, IIT Palakkad logo, IIT Palakkad fee structure, IIT Palakkad courses, IIT Palakkad MBA fees, IIT Palakkad highest package, IIT Palakkad jobs, IIT Palakkad admission, IIT Palakkad BTech fees, IIT Palakkad location, IIT Palakkad MTech fees, IIT Palakkad online courses, IIT Palakkad electrical engineering, IIT Palakkad internship, IIT Palakkad NIRF ranking"
    >
      <Header />
      <div style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
        <About />
        <Cutoff />
      </div>
      <Banner />
      <Explore />
      <div style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
        <Placement />
        <Ranking />
        <FAQ />
      </div>
      <Banner />
      <Explore />
    </Layout>
  );
};

export default Palakkad;
