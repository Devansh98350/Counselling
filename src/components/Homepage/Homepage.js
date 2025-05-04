import React, { useEffect } from "react";
import Layout from "./../Layout";
import "./Homepage.css";
import SessionForm from "./SessionForm";
import NewsletterForm from "./Newsletter";
import { AccordionComponent } from "./Accordian";
import Breadcrumbs from "../Breadcrumb";
import Banner from "../Common/Banner";
import Explore from "../Common/Explore";
import Services from "./Services";
import Count from "./Count";

const Homepage = () => {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title="Counselling - IIT Academy">
      <Breadcrumbs />
      <div className="photo-bg">
        <div className="photo-text">
          <h1>India's One of the Best Counselling Portal</h1>
          <div className="sec1-para">
            <span>
              Wants to find best college after JEE , NEET or any other exam ?
            </span>
            <span>Unable to understand the process of Counselling!</span>
            <span>Get Updates about Cut off, Fees & Coaching.</span>
          </div>
          <button
            className="photo-btn"
            onClick={() => (window.location.href = "tel:9205704041")}
          >
            Call Us Now
          </button>
        </div>
      </div>
      <Services />
      <Count />
      <SessionForm />
      <NewsletterForm />
      <AccordionComponent />
      <Banner />
      <Explore />
    </Layout>
  );
};

export default Homepage;
