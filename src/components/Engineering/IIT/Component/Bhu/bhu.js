import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Placement from "./components/Placement";
import Cutoff from "./components/Cutoff";
import Ranking from "./components/Ranking";
import FAQ from "./components/FAQ";
import Layout from "../../../../Layout";

const delhi = () => {
  return (
    <Layout title="IIT Delhi - IIT Academy">
      <Header />
      <div style={{ marginLeft: "2.5%", marginRight: "2.5%" }}>
        <About />
        <Cutoff />
        <Placement />
        <Ranking />
        <FAQ />
      </div>
    </Layout>
  );
};

export default delhi;
