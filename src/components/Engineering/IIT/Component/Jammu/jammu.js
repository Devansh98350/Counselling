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
      title="IIT Jammu - IIT Academy"
      description="IIT Jammu - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Jammu, IIT Jammu news, IIT Jammu Techfest, IIT Jammu fest, IIT Jammu average package, IIT Jammu campus, IIT Jammu hostel, IIT Jammu internship, IIT Jammu PhD admission, IIT Jammu packages, IIT Jammu ranking in world, IIT Jammu notable alumni, IIT Jammu fees for 4 years BTech, IIT Jammu logo, IIT Jammu fee structure, IIT Jammu courses, IIT Jammu MBA fees, IIT Jammu highest package, IIT Jammu jobs, IIT Jammu admission, IIT Jammu BTech fees, IIT Jammu location, IIT Jammu MTech fees, IIT Jammu online courses, IIT Jammu electrical engineering, IIT Jammu internship, IIT Jammu NIRF ranking"
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
