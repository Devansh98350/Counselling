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

const Kanpur = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout
      title="IIT Kanpur - IIT Academy"
      description="IIT Kanpur - Admission, CutOff, Courses, Fees, Placements, Ranking, and More."
      keywords="IIT Kanpur, IIT Kanpur webmail, IIT Kanpur vacancy, IIT Kanpur MTech, IIT Kanpur campus, IIT Kanpur highest package, IIT Kanpur CSE average package, IIT Kanpur CSE cutoff, IIT Kanpur average package, IIT Kanpur director, IIT Kanpur hostel rooms, IIT Kanpur logo, IIT Kanpur MBA fees, IIT Kanpur address, IIT Kanpur area in acres, IIT Kanpur MTech cutoff, IIT Kanpur area, IIT Kanpur courses, IIT Kanpur PhD, IIT Kanpur MBA cut off, IIT Kanpur JEE Advanced paper, IIT Kanpur campus area, IIT Kanpur Department of Mathematics, IIT Kanpur online courses, IIT Kanpur alumni, IIT Kanpur BTech fees, IIT Kanpur economics"
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

export default Kanpur;
