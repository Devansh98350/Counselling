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

const Madras = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Madras - IIT Academy"
      description="IIT Madras - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Madras, IIT Madras admission, IIT Madras university, IIT Madras campus, IIT Madras online degree, IIT Madras research park, IIT Madras BS degree, IIT Madras data science, IIT Madras cutoff, IIT Madras course admissions, IIT Madras MBA, IIT Madras address, IIT Madras placements, IIT Madras DoMS, IIT Madras MTech, IIT Madras recruitment, IIT Madras highest package, IIT Madras fees, IIT Madras PhD admission, IIT Madras director, IIT Madras hostel, IIT Madras rankings, IIT Madras packages, IIT Madras online degree fees, IIT Madras biotechnology, IIT Madras alumni, IIT Madras NIRF ranking"
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

export default Madras;
