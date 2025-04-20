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

const BHU = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT BHU - IIT Academy"
      description="IIT Bhu - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Bhu, IIT Bhu news, IIT Bhu Techfest, IIT Bhu fest, IIT Bhu average package, IIT Bhu campus, IIT Bhu hostel, IIT Bhu internship, IIT Bhu PhD admission, IIT Bhu packages, IIT Bhu ranking in world, IIT Bhu notable alumni, IIT Bhu fees for 4 years BTech, IIT Bhu logo, IIT Bhu fee structure, IIT Bhu courses, IIT Bhu MBA fees, IIT Bhu highest package 2024, IIT Bhu jobs, IIT Bhu admission, IIT Bhu BTech fees, IIT Bhu location, IIT Bhu MTech fees, IIT Bhu online courses, IIT Bhu electrical engineering, IIT Bhu internship 2024, IIT Bhu NIRF ranking"
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

export default BHU;
