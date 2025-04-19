import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const styles = {
    sectionStyle: {
      padding: "20px",
      // paddingTop: "calc(20px + 50px)",
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
      //   color: "#666",
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
      question:
        "Will I get into IIT Ropar if I am getting 12000 rank in the JEE Advanced 2024 under OBC Female?",
      answer:
        "Under the acquired rank of 12000, candidates cannot get admission for OBC Female category. First of all, IIT Ropar do not release its cutoffs based on Gender and State-level quota. Considering the IIT Ropar cutoff 2024 for JEE Advanced, the required rank should be under 1084 and 4968 for the OBC AI quota. So, 12000 is not enough rank to secure a seat at IIT Ropar.",
    },
    {
      question: "How can I apply for admission to IIT Ropar?",
      answer:
        "Candidates who could not qualify for the JEE Main exam can go for other courses. If BTech aspirants have missed the JEE Main, worry not they can go for the JEE Main entrance exam the next year. Follow the IIT Ropar application process mentioned below:Step 1: Register for the JEE Main exams.Step 2: Score well in the JEE Main exams and JEE Advanced. Step 3: Appear for the counselling. Step 4: Pay the fee at the selected and the allotted college. ",
    },
    {
      question: "Is IIT Ropar worth all the hype?",
      answer:
        "Yes, IIT Ropar is worth the hype as it is ranked 148 by the QS Ranking 2025 under the Asian University Rankings - Southern Asia category and 521-540 by the QS Ranking 2025 under the Asian University Rankings category. IIT Ropar is also ranked 48th by NIRF 2024 under the Overall category, 22nd by NIRF 2024 under the Engineering category,  and 45th by NIRF 2024 under the Research Institutions category. Also, the college's placements are also good. ",
    },
    {
      question: "Which are the various courses offered at IIT Ropar?",
      answer:
        "IIT Ropar offers undergraduate and postgraduate courses to students. At the undergraduate level, the Indian Institute of Technology–Ropar offers four to five-year BTech in nine specialisations. In addition to this, it also offers an integrated BTech programme. At the postgraduate level, Ropar IIT offers two to five-year M.Tech in different specialisations and a two-year MSc in various specialisations. The IIT Ropar also offers PhD courses to students.",
    },
    {
      question: "How can I get admission in IIT Ropar?",
      answer:
        "Candidates willing to get admission to various courses must apply online on the official website of the college. The modes of IIT Ropar course admissions are online and offline. For BTech, MTech, and MSc, aspirants need to apply for the respective accepted entrance exams and then at the institute's portal after counselling to confirm their admission. Hence, for the BTech course, aspirants are required to firstly complete the JEE Main application form.",
    },
    {
      question:
        "When was IIT Ropar established? How many branches does it have?",
      answer:
        "Indian Institute of Technology (IIT) Ropar was established in 2008 as one of the eight IITs that was set up by the MHRD and the Government of India. IIT Punjab has 12 departments under it and through these departments, it offers undergraduate, PG, and PhD courses to students across Engineering, Science, and various other streams. For branches information, please visit the official website of the college. ",
    },
    {
      question: "Which one is better, IIT Ropar or Thapar University?",
      answer:
        "IIT Ropar is a much better choice than Thapar University. IIT Ropar is considered among the top 3 IITs among the ones that are newly established,",
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
              <p styles={styles.pstyle}>{faqItem.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
