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
      question: "Is IIT Goa ranked in NIRF or QS World University Rankings?",
      answer:
        "As of 2025, IIT Goa has not been featured in prominent national or international rankings, including the NIRF 2024 and QS World University Rankings 2025. Being a newer institution, IIT Goa is still establishing itself in such rankings.",
    },
    {
      question: "What scholarships are available at IIT Goa?",
      answer:
        "IIT Goa offers scholarships such as the Merit cum Means Scholarship and the Central Sector Scholarship Scheme for SC students. These scholarships provide benefits like tuition fee exemption, pocket allowances, and free messing for eligible students.",
    },
    {
      question: "What is the eligibility for the Merit cum Means Scholarship?",
      answer:
        "The Merit cum Means Scholarship is awarded to a maximum of 25% of B.Tech students based on family income and academic performance. Benefits include full tuition fee exemption and a pocket allowance of INR 1000 per month.",
    },
    {
      question: "What facilities are available on the IIT Goa campus?",
      answer:
        "IIT Goa provides facilities such as air-conditioned classrooms, a library with internet connectivity, hostels for boys and girls, a cafeteria, a sports complex, and laboratories for various disciplines like Chemistry, Computer Science, and Mechanical Engineering.",
    },
    {
      question: "What sports facilities are available at IIT Goa?",
      answer:
        "IIT Goa offers a sports complex with facilities for badminton, basketball, cricket, football, and table tennis.",
    },
    {
      question: "Who are some notable alumni of IIT Goa?",
      answer:
        "Notable alumni include Mr. Chinraj S (Best Poster Award, 33rd CRSI National Symposium on Chemistry, 2024), Dr. Sreenath Balakrishnan & Team (Best Student Paper Award, International Robotics Conference, 2023), and Prof. B.K. Mishra (Ranked 11th worldwide in Mining & Metallurgy, Stanford University Rankings, 2023).",
    },
    {
      question: "What is the Central Sector Scholarship Scheme for SC students?",
      answer:
        "This scholarship is awarded to SC students with an annual family income of less than INR 4.5 lakhs. It provides benefits like tuition fee exemption, free messing, and requires documents such as caste certificate, proof of admission, and income proof.",
    },
    {
      question: "What laboratories are available at IIT Goa?",
      answer:
        "IIT Goa has well-equipped laboratories, including Chemistry Lab, Computer Lab, Electrical Lab, Electronics Lab, and Mechanical Lab.",
    },
    {
      question: "Does IIT Goa provide hostel facilities?",
      answer:
        "Yes, IIT Goa provides hostel facilities for both boys and girls. The hostels are equipped with modern amenities, including internet connectivity, recreational areas, and mess facilities.",
    },
    {
      question: "What cultural and technical activities are conducted at IIT Goa?",
      answer:
        "IIT Goa organizes various cultural, technical, and non-academic activities, including seminars, workshops, and events to enhance student engagement and learning.",
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