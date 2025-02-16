import React, { useEffect, useState } from "react";
import ReactCountup from "react-countup";
import Layout from "./../Layout";
import "./Homepage.css";
import m1 from "../../assests/home_page/m1.png";
import m2 from "../../assests/home_page/m2.png";
import m3 from "../../assests/home_page/m3.png";
import m4 from "../../assests/home_page/m4.png";
import m5 from "../../assests/home_page/m5.png";
import m6 from "../../assests/home_page/m6.png";
import m7 from "../../assests/home_page/m7.png";
import m8 from "../../assests/home_page/m8.png";
import c1 from "../../assests/home_page/c1.png";
import c2 from "../../assests/home_page/c2.png";
import c3 from "../../assests/home_page/c3.png";
import c4 from "../../assests/home_page/c4.png";
import SessionForm from "./SessionForm";
import NewsletterForm from "./Newsletter";
import { AccordionComponent } from "./Accordian";
import Breadcrumbs from "../Breadcrumb";
import Banner from "../Common/Banner";
import Explore from "../Common/Explore";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // window.scrollTo(0, 0);
    function handleScroll() {
      const container = document.querySelector(".record");
      const rect = container.getBoundingClientRect();
      // Check if the container is in the viewport
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout title="Counseling - IIT Academy">
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
      <div className="community-bg">
        <div className="community-text">
          <h1>
            India's One of the Largest Community of{" "}
            <span className="green">Mentors & Toppers</span>
          </h1>
          <p>Crack your preparations with guidance from the best.</p>
          <p>IIT Academy brings to you a community of Examination toppers!</p>
          <button className="community-btn">Grab The Guidance</button>
        </div>
      </div>
      <div className="center-text">
        <h2 className="center">
          How <span className="green">Mentorship</span> from IIT Academy helps
          you?
        </h2>
        <p className="center">
          Preparing for a Examination Can be tough and we know that students
          require guidance at every step.
        </p>
      </div>
      <div className="container">
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m1} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Motivational Tips from the Toppers</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m2} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Guidance in creating Daily Routine</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m3} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Interactive Group Sessions Daily</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m4} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Invidual Guidance to Students</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m5} alt="img" />
          </div>
          <div className="mentor-text">
            <p>1:1 Discussions with the Mentors</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m6} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Paper Solving & Time Management Techniques</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m7} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Continuous Evaluation of Progress</p>
          </div>
        </div>
        <div className="mentor-card">
          <div className="mentor-img">
            <img src={m8} alt="img" />
          </div>
          <div className="mentor-text">
            <p>Building Retention Skills for you</p>
          </div>
        </div>
      </div>
      <h2 className="center">Best Counselling Platform</h2>
      <h2 className="center-green">Your career Begins Here</h2>
      <div className="container">
        <div className="counselling-card">
          <div className="counselling-img">
            <img src={c1} alt="img" />
          </div>
          <div className="counselling-text">
            <h3>Overview of Counselling Platform</h3>
            <p>Brief Introduction to the platform and its mission and goals.</p>
          </div>
        </div>
        <div className="counselling-card">
          <div className="counselling-img">
            <img src={c2} alt="imag" />
          </div>
          <div className="counselling-text">
            <h3>Services Offered:</h3>
            <p>Specializations or focus areas within career counselling.</p>
          </div>
        </div>
        <div className="counselling-card">
          <div className="counselling-img">
            <img src={c3} alt="imag" />
          </div>
          <div className="counselling-text">
            <h3>Counseller Expertise:</h3>
            <p>Experience and Specialization areas of the counselling team.</p>
          </div>
        </div>
        <div className="counselling-card">
          <div className="counselling-img">
            <img src={c4} alt="imag" />
          </div>
          <div className="counselling-text">
            <h3>User Interface:</h3>
            <p>
              Evaluation of the platform's usability with different devices.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container record"
        style={{ backgroundColor: "#BEC7C6", width: "100%" }}
      >
        <div className="record-item">
          <h1>
            {isVisible && <ReactCountup start={0} end={500} duration={2.5} />}+
          </h1>
          <p>TOTAL FORM FILLED</p>
        </div>
        <div className="record-item">
          <h1>
            {isVisible && <ReactCountup start={0} end={470} duration={2.5} />}+
          </h1>
          <p>ADMISSION DONE</p>
        </div>
        <div className="record-item">
          <h1>
            {isVisible && <ReactCountup start={0} end={120} duration={2.5} />}+
          </h1>
          <p>EXPERT COUNSELLOR</p>
        </div>
      </div>
      <SessionForm />
      <NewsletterForm />
      <AccordionComponent />
      <Banner />
      <Explore />
    </Layout>
  );
};

export default Homepage;
