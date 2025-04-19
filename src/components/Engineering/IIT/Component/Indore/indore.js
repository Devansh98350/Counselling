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

const Indore = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Indore - IIT Academy"
      description="IIT Indore - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Indore, IIT Indore cutoff, IIT Indore campus, IIT Indore MBA, IIT Indore address, IIT Indore summer internship, IIT Indore campus area in acres, IIT Indore pin code, IIT Indore vacancy, IIT Indore CSE cutoff, IIT Indore jobs, IIT Indore admission, IIT Indore BTech admission, IIT Indore news, IIT Indore CSE average package, IIT Indore online courses, IIT Indore BSc Data Science, IIT Indore fees, IIT Indore MTech cutoff, IIT Indore CSE average package, IIT Indore ranking, IIT Indore highest package, IIT Indore average package, IIT Indore Alcheringa, IIT Indore courses, IIT Indore director, IIT Indore NIRF ranking"
    >
      <Header />
      <div
        style={{
          marginLeft: "2.5%",
          marginRight: "2.5%",
          marginBottom: "10px",
        }}
      >
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

export default Indore;
