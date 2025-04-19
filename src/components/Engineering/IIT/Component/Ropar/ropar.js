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
      title="IIT Ropar - IIT Academy"
      description="IIT Ropar - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Ropar, IIT Ropar news, IIT Ropar Techfest, IIT Ropar fest, IIT Ropar average package, IIT Ropar campus, IIT Ropar hostel, IIT Ropar internship, IIT Ropar PhD admission, IIT Ropar packages, IIT Ropar ranking in world, IIT Ropar notable alumni, IIT Ropar fees for 4 years BTech, IIT Ropar logo, IIT Ropar fee structure, IIT Ropar courses, IIT Ropar MBA fees, IIT Ropar highest package, IIT Ropar jobs, IIT Ropar admission, IIT Ropar BTech fees, IIT Ropar location, IIT Ropar MTech fees, IIT Ropar online courses, IIT Ropar electrical engineering, IIT Ropar internship, IIT Ropar NIRF ranking"
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
