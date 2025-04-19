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
      title="IIT Bhilai - IIT Academy"
      description="IIT Bhilai - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Bhilai, IIT Bhilai news, IIT Bhilai Techfest, IIT Bhilai fest, IIT Bhilai average package, IIT Bhilai campus, IIT Bhilai hostel, IIT Bhilai internship, IIT Bhilai PhD admission, IIT Bhilai packages, IIT Bhilai ranking in world, IIT Bhilai notable alumni, IIT Bhilai fees for 4 years BTech, IIT Bhilai logo, IIT Bhilai fee structure, IIT Bhilai courses, IIT Bhilai MBA fees, IIT Bhilai highest package, IIT Bhilai jobs, IIT Bhilai admission, IIT Bhilai BTech fees, IIT Bhilai location, IIT Bhilai MTech fees, IIT Bhilai online courses, IIT Bhilai electrical engineering, IIT Bhilai internship, IIT Bhilai NIRF ranking"
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
