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

const Guwahati = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Guwahati - IIT Academy"
      description="IIT Guwahati - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Guwahati, IIT Guwahati cutoff, IIT Guwahati campus, IIT Guwahati MBA, IIT Guwahati address, IIT Guwahati summer internship, IIT Guwahati campus area in acres, IIT Guwahati pin code, IIT Guwahati vacancy, IIT Guwahati CSE cutoff, IIT Guwahati jobs, IIT Guwahati admission, IIT Guwahati BTech admission, IIT Guwahati news, IIT Guwahati CSE average package, IIT Guwahati online courses, IIT Guwahati BSc Data Science, IIT Guwahati fees, IIT Guwahati MTech cutoff, IIT Guwahati CSE average package, IIT Guwahati ranking, IIT Guwahati highest package, IIT Guwahati average package, IIT Guwahati Alcheringa, IIT Guwahati courses, IIT Guwahati director, IIT Guwahati NIRF ranking"
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

export default Guwahati;
