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

const Patna = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Patna - IIT Academy"
      description="IIT Patna - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Patna, IIT Bihta, Bihar IIT, IIT Patna campus, IIT Patna online courses, IIT Patna MBA, IIT Patna MTech, IIT Patna CSE average package, IIT Patna campus area in acres, IIT Patna PhD admission, IIT Patna NIRF ranking, IIT Patna placements, IIT Patna recruitment, IIT Patna BSc Computer Science, IIT Patna cutoff, IIT Patna executive MBA, IIT Patna fee structure, IIT Patna course admissions, IIT Patna executive MTech, IIT Patna logo, IIT Patna CSE cutoff, IIT Patna MTech cutoff, IIT Patna hostel, IIT Patna packages, IIT Patna director, IIT Patna established year, IIT Patna MBA fees, IIT Patna notable alumni, IIT Patna official website, IIT Patna admission"
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

export default Patna;
