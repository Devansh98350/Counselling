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
      title="IIT Kharagpur - IIT Academy"
      description="IIT Kharagpur - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Kharagpur, IIT Kharagpur news, IIT Kharagpur Techfest, IIT Kharagpur fest, IIT Kharagpur average package, IIT Kharagpur campus, IIT Kharagpur hostel, IIT Kharagpur internship, IIT Kharagpur PhD admission, IIT Kharagpur packages, IIT Kharagpur ranking in world, IIT Kharagpur notable alumni, IIT Kharagpur fees for 4 years BTech, IIT Kharagpur logo, IIT Kharagpur fee structure, IIT Kharagpur courses, IIT Kharagpur MBA fees, IIT Kharagpur highest package, IIT Kharagpur jobs, IIT Kharagpur admission, IIT Kharagpur BTech fees, IIT Kharagpur location, IIT Kharagpur MTech fees, IIT Kharagpur online courses, IIT Kharagpur electrical engineering, IIT Kharagpur internship, IIT Kharagpur NIRF ranking"
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
