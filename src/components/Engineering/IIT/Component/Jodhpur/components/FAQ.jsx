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
      question: "What is the NIRF ranking of IIT Jodhpur?",
      answer:
        "IIT Jodhpur was ranked 28th in the NIRF Engineering Ranking 2024 and 30th in 2023. It was also ranked 66th in the NIRF Overall Ranking 2023.",
    },
    {
      question: "What is the eligibility for the Merit Cum Means (MCM) Scholarship at IIT Jodhpur?",
      answer:
        "For General and OBC students, a minimum of 60% marks in 12th standard (1st year) or a CPI of 6.5 with no backlogs (2nd year) is required. For SC/ST students, a minimum of 55% marks in 12th standard (1st year) or no F grades (2nd year) is required. The annual family income should not exceed INR 6 lakhs for all categories.",
    },
    {
      question: "What are the benefits of the MCM Scholarship at IIT Jodhpur?",
      answer:
        "For General and OBC students, the scholarship includes free tuition fees and INR 1000 per month. For SC/ST students, it includes free dining (basic menu), exemption from hostel seat rent, and INR 1000 per month as a pocket allowance.",
    },
    {
      question: "What is the campus area of IIT Jodhpur?",
      answer:
        "IIT Jodhpur's campus is spread over 852 acres and offers state-of-the-art residential and academic facilities.",
    },
    {
      question: "What sports facilities are available at IIT Jodhpur?",
      answer:
        "IIT Jodhpur has facilities for football, cricket, basketball, volleyball, lawn tennis, badminton, squash, table tennis, weightlifting, and athletics.",
    },
    {
      question: "What is the highest package offered during IIT Jodhpur placements?",
      answer:
        "The highest package offered during IIT Jodhpur placements 2023 was INR 53 LPA.",
    },
    {
      question: "What is the average package offered during IIT Jodhpur placements?",
      answer:
        "The average package offered during IIT Jodhpur placements 2023 was INR 21.30 LPA.",
    },
    {
      question: "Who are some notable alumni of IIT Jodhpur?",
      answer:
        "Notable alumni include Heena Rathor (Assistant Professor at Texas State University), Shivendra Nandan (Musical Artist), Dr. Bibin G Anand (Research Assistant Professor at SRM), Dr. Arun Kumar Upadhyay (Assistant Professor at IIT Bhilai), and Rahul Badhwar (Senior Research Scientist at Reliance Limited).",
    },
    {
      question: "What healthcare facilities are available on campus?",
      answer:
        "IIT Jodhpur has an ISO-certified healthcare center with OPD and ambulance services. The medical board includes doctors from Government Medical College and AIIMS.",
    },
    {
      question: "What is the Tech Park at IIT Jodhpur?",
      answer:
        "IIT Jodhpur's Tech Park is a planned 100-acre facility with the capacity to host 30 companies at once, promoting innovation and entrepreneurship.",
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