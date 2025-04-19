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
      title="IIT Tirupati - IIT Academy"
      description="IIT Tirupati - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Tirupati, IIT Tirupati news, IIT Tirupati Techfest, IIT Tirupati fest, IIT Tirupati average package, IIT Tirupati campus, IIT Tirupati hostel, IIT Tirupati internship, IIT Tirupati PhD admission, IIT Tirupati packages, IIT Tirupati ranking in world, IIT Tirupati notable alumni, IIT Tirupati fees for 4 years BTech, IIT Tirupati logo, IIT Tirupati fee structure, IIT Tirupati courses, IIT Tirupati MBA fees, IIT Tirupati highest package, IIT Tirupati jobs, IIT Tirupati admission, IIT Tirupati BTech fees, IIT Tirupati location, IIT Tirupati MTech fees, IIT Tirupati online courses, IIT Tirupati electrical engineering, IIT Tirupati internship, IIT Tirupati NIRF ranking"
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
