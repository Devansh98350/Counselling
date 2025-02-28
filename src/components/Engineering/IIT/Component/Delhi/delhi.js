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

const Delhi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Delhi - IIT Academy"
      description="IIT Delhi - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Delhi, IIT Delhi University, IIT Delhi cut off, IIT Delhi Abu Dhabi, IIT Delhi DMS, IIT Delhi jobs, IIT Delhi highest package, IIT Delhi Varad, IIT Delhi course admissions, IIT Delhi summer internship, IIT Delhi campus, IIT Delhi notable alumni, IIT Delhi news, IIT Delhi fees for MBA, IIT Delhi logo, IIT Delhi MTech, IIT Delhi CSE average package, IIT Delhi placements, IIT Delhi hostel, IIT Delhi MBA fees, IIT Delhi packages, IIT Delhi PhD, IIT Delhi CSE cutoff, IIT Delhi rankings, IIT Delhi MBA cut off, IIT Delhi address, IIT Delhi fees for 4 years BTech, IIT Delhi MBA placements, IIT Delhi fee structure, IIT Delhi BTech fees, IIT Delhi director, IIT Delhi fest, IIT Delhi MTech cutoff, IIT Delhi alumni, IIT Delhi CSE"
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

export default Delhi;
