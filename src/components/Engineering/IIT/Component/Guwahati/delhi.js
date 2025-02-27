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

const Delhi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="IIT Delhi - IIT Academy">
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

export default Delhi;
