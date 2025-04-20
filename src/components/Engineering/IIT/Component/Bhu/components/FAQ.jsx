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
      question: "What is the rank of IIT BHU in NIRF 2024?",
      answer:
        "As per the NIRF Rankings 2024, IIT BHU is ranked among the top IITs in India. It is highly recognized for its engineering programs and research contributions.",
    },
    {
      question: "What is the JEE Advanced cutoff for IIT BHU?",
      answer:
        "The JEE Advanced cutoff for IIT BHU varies by branch and category. Generally, for core branches like CSE and ECE, a rank within the top 2000 can be required. Cutoff trends change yearly, so check the official website for the latest updates.",
    },
    {
      question: "How are placements at IIT BHU?",
      answer:
        "IIT BHU has an excellent placement record. Top recruiters include Google, Microsoft, Amazon, and Goldman Sachs. The highest packages often exceed INR 1 crore per annum for international offers.",
    },
    {
      question: "Does IIT BHU offer dual-degree programs?",
      answer:
        "Yes, IIT BHU offers dual-degree (B.Tech + M.Tech) programs in several disciplines, allowing students to complete both degrees in 5 years.",
    },
    {
      question: "What extracurricular activities are available at IIT BHU?",
      answer:
        "IIT BHU hosts various cultural and technical fests, including *Kashiyatra* (cultural fest) and *Technex* (tech fest). There are also multiple student clubs for coding, robotics, music, and more.",
    },
    {
      question: "What are the hostel facilities like at IIT BHU?",
      answer:
        "IIT BHU provides well-maintained hostels with Wi-Fi, mess facilities, sports grounds, and other essential amenities.",
    },
    {
      question: "What is the fee structure for BTech at IIT BHU?",
      answer:
        "The approximate fee for a BTech course at IIT BHU is around INR 2.5-3 lakh per year. Fee waivers are available for reserved categories and economically weaker sections.",
    },
    {
      question: "Does IIT BHU provide scholarships?",
      answer:
        "Yes, IIT BHU offers various scholarships, including merit-based and need-based scholarships for students with exceptional academic performance or financial need.",
    },
  ];

  return (
    <section id="faq" style={styles.sectionStyle}>
      <div style={styles.faqContainer} className="faq-container">
        <h2 style={styles.faqHeading} className="faqh2">
          Frequently Asked Questions (IIT BHU)
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
