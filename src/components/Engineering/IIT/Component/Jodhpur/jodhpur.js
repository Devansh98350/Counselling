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
      title="IIT Jodhpur - IIT Academy"
      description="IIT Jodhpur - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Jodhpur, IIT Jodhpur news, IIT Jodhpur Techfest, IIT Jodhpur fest, IIT Jodhpur average package, IIT Jodhpur campus, IIT Jodhpur hostel, IIT Jodhpur internship, IIT Jodhpur PhD admission, IIT Jodhpur packages, IIT Jodhpur ranking in world, IIT Jodhpur notable alumni, IIT Jodhpur fees for 4 years BTech, IIT Jodhpur logo, IIT Jodhpur fee structure, IIT Jodhpur courses, IIT Jodhpur MBA fees, IIT Jodhpur highest package, IIT Jodhpur jobs, IIT Jodhpur admission, IIT Jodhpur BTech fees, IIT Jodhpur location, IIT Jodhpur MTech fees, IIT Jodhpur online courses, IIT Jodhpur electrical engineering, IIT Jodhpur internship, IIT Jodhpur NIRF ranking"
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
