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
      title="IIT Goa - IIT Academy"
      description="IIT Goa - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Goa, IIT Goa news, IIT Goa Techfest, IIT Goa fest, IIT Goa average package, IIT Goa campus, IIT Goa hostel, IIT Goa internship, IIT Goa PhD admission, IIT Goa packages, IIT Goa ranking in world, IIT Goa notable alumni, IIT Goa fees for 4 years BTech, IIT Goa logo, IIT Goa fee structure, IIT Goa courses, IIT Goa MBA fees, IIT Goa highest package, IIT Goa jobs, IIT Goa admission, IIT Goa BTech fees, IIT Goa location, IIT Goa MTech fees, IIT Goa online courses, IIT Goa electrical engineering, IIT Goa internship, IIT Goa NIRF ranking"
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
