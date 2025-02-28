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

const Bombay = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Bombay - IIT Academy"
      description="IIT Bombay - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Bombay, IIT Bombay news, IIT Bombay Techfest, IIT Bombay fest, IIT Bombay average package, IIT Bombay campus, IIT Bombay hostel, IIT Bombay internship, IIT Bombay PhD admission, IIT Bombay packages, IIT Bombay ranking in world, IIT Bombay notable alumni, IIT Bombay fees for 4 years BTech, IIT Bombay logo, IIT Bombay fee structure, IIT Bombay courses, IIT Bombay MBA fees, IIT Bombay highest package 2024, IIT Bombay jobs, IIT Bombay admission, IIT Bombay BTech fees, IIT Bombay location, IIT Bombay MTech fees, IIT Bombay online courses, IIT Bombay electrical engineering, IIT Bombay internship 2024, IIT Bombay NIRF ranking"
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

export default Bombay;
