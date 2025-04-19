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
  };

  const faqData = [
    {
      question: "What is the NIRF ranking of IIT Tirupati?",
      answer:
        "IIT Tirupati was ranked 59th in the NIRF Engineering Ranking 2023, improving from its 60th rank in 2022. The institute has been steadily improving its rankings over the years.",
    },
    {
      question: "What scholarships are available for B.Tech students at IIT Tirupati?",
      answer:
        "IIT Tirupati offers Merit-cum-Means Scholarships for students with a family income less than INR 4.5 Lakhs, providing a full tuition fee waiver. SC/ST students are eligible for scholarships that include mess charge discounts up to INR 8,000 per semester, free lodging, and a pocket allowance of INR 250 per month.",
    },
    {
      question: "What is the highest package offered at IIT Tirupati placements?",
      answer:
        "During the IIT Tirupati Placements 2024, the highest package offered was INR 41.68 LPA. In 2023, the highest package stood at INR 46 LPA.",
    },
    {
      question: "What facilities are available on the IIT Tirupati campus?",
      answer:
        "The IIT Tirupati campus includes hostels with recreational facilities, a library equipped with e-resources, sports facilities, high-speed Wi-Fi, a cafeteria, a gym, smart classrooms, and well-equipped laboratories. The campus also has a tie-up with Sri Venkateswara Institute of Medical Sciences (SVIMS) for medical facilities.",
    },
    {
      question: "How is the alumni network of IIT Tirupati?",
      answer:
        "IIT Tirupati has a growing alumni network with graduates working in reputed organizations like Amazon, Deloitte, ICICI Bank, and MathWorks. The institute also has active student clubs like the E-cell and Astronomy Club.",
    },
    {
      question: "What is the placement percentage for B.Tech branches at IIT Tirupati?",
      answer:
        "The placement percentages for B.Tech branches in 2023-24 are as follows: CSE - 67.27%, ME - 41.86%, EE - 32.14%, CHE - 33.33%, and CE - 13.33%.",
    },
    {
      question: "What is the eligibility for Ph.D. scholarships at IIT Tirupati?",
      answer:
        "Full-time Ph.D. scholars are eligible for the Half-Time Teaching/Research Assistantship (HTRA). Scholars must work for 8 hours per week, and the renewal of the assistantship is based on research performance. They can also apply for scholarships like UGC/CSIR-JRF, AICTE, and ICMR.",
    },
    {
      question: "What are the sports facilities available at IIT Tirupati?",
      answer:
        "IIT Tirupati offers indoor and outdoor sports facilities, including football, cricket, basketball, badminton, chess, and table tennis.",
    },
    {
      question: "What is the ranking of IIT Tirupati in Andhra Pradesh?",
      answer:
        "IIT Tirupati is ranked #4th in Andhra Pradesh for Overall and #2nd in Andhra Pradesh for B.Tech in 2024.",
    },
    {
      question: "What is the average stipend for summer internships at IIT Tirupati?",
      answer:
        "During the IIT Tirupati Summer Internship Placements 2024, the average stipend stood at INR 29.25 K per month, with the highest stipend being INR 2 Lakhs per month.",
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
              <p>{faqItem.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;