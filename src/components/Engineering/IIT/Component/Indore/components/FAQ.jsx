
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = {
    sectionStyle: {
      padding: "20px",
      backgroundColor: "#ffffff",
      fontFamily: "Segoe UI",
      lineHeight: "1.6",
      textAlign: "justify",
      overflowX: "hidden",
    },
    faqContainer: {
      marginTop: "40px",
      maxWidth: "95%",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    faqHeading: {
      color: "rgb(0,0,255)",
      fontSize: "32px",
      fontWeight: "700",
      textAlign: "center",
      lineHeight: "48px",
    },
    faq: {
      marginBottom: "10px",
      borderBottom: "1px solid #ccc",
      paddingBottom: "10px",
    },
    question: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
      margin: 0,
    },
    questionText: {
      fontSize: "16px",
      lineHeight: "1.6",
      fontWeight: "700",
    },
    icon: {
      fontSize: "24px",
      color: "#333",
      transition: "transform 0.2s, color 0.2s",
    },
    iconActive: {
      transform: "rotate(45deg)",
      color: "#007bff",
    },
    answer: {
      display: "none",
      marginTop: "10px",
      fontSize: "16px",
      fontFamily: "Segoe UI",
    },
    answerVisible: {
      display: "block",
    },
    pstyle: {
      paddingTop: "0",
      marginTop: "0%",
      fontSize: "16px",
      fontFamily: "Segoe UI",
    },
  };

  const faqData = [
    {
      question: "What are the academic programs offered at IIT Indore?",
      answer:
        "IIT Indore offers undergraduate (B.Tech), postgraduate (M.Tech, MSc, MS), and doctoral (PhD) programs in various disciplines including Computer Science, Electrical Engineering, Mechanical Engineering, and more.",
    },
    {
      question: "How can I get admission to IIT Indore?",
      answer:
        "Admission to B.Tech programs is through JEE Advanced. For M.Tech and MSc, admissions are based on GATE and JAM scores respectively. PhD admissions require GATE/NET scores along with interviews.",
    },
    {
      question: "What are the placement statistics at IIT Indore?",
      answer:
        "IIT Indore has strong placement records with top companies like Microsoft, Google, Amazon, and Goldman Sachs offering competitive salary packages.",
    },
    {
      question: "Does IIT Indore provide hostel facilities?",
      answer:
        "Yes, IIT Indore provides well-equipped hostel facilities for students, including Wi-Fi, mess services, sports complexes, and recreational areas.",
    },
    {
      question: "What are the research opportunities at IIT Indore?",
      answer:
        "IIT Indore has a strong research ecosystem with multiple funded projects, collaborations with international universities, and state-of-the-art labs.",
    },
    {
      question: "What is the campus infrastructure like at IIT Indore?",
      answer:
        "The campus is spread over 500+ acres with modern classrooms, well-equipped labs, a library, hostels, sports complexes, and research centers.",
    },
    {
      question: "Are there scholarships available at IIT Indore?",
      answer:
        "Yes, IIT Indore offers various scholarships based on merit and financial need, including government and institute-funded scholarships.",
    },
    {
      question: "How is student life at IIT Indore?",
      answer:
        "IIT Indore has a vibrant student community with clubs, cultural fests, tech events, and sports activities, providing a balanced academic and extracurricular environment.",
    },
  ];

  return (
    <section id="faq" style={styles.sectionStyle}>
      <div style={styles.faqContainer} className="faq-container">
        <h2 style={styles.faqHeading} className="faqh2">
          Frequently Asked Questions
        </h2>
        {faqData.map((faqItem, index) => (
          <div style={styles.faq} key={index} className="faq">
            <div
              style={styles.question}
              className={`question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 style={styles.questionText}>{faqItem.question}</h3>
              <span
                style={{
                  ...styles.icon,
                  ...(activeIndex === index ? styles.iconActive : {}),
                }}
              >
                +
              </span>
            </div>
            <div
              style={{
                ...styles.answer,
                ...(activeIndex === index ? styles.answerVisible : {}),
              }}
              className="answer"
            >
              <p style={styles.pstyle}>{faqItem.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
