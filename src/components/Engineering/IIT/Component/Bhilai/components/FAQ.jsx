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
      question: "What is the NIRF ranking of IIT Bhilai?",
      answer:
        "IIT Bhilai was ranked 81st in the NIRF 2023 rankings for the Engineering category and improved to 73rd in 2024.",
    },
    {
      question: "What scholarships are available at IIT Bhilai?",
      answer:
        "IIT Bhilai offers scholarships like Merit Cum Means (MCM) Scholarship, Institute SC/ST Scholarship, Institute Free Studentship Scholarship, and Institute Fellowship for Postgraduate Students. These scholarships provide benefits such as tuition fee remission, pocket allowances, and fellowships for eligible students.",
    },
    {
      question: "What are the hostel facilities at IIT Bhilai?",
      answer:
        "IIT Bhilai provides separate hostels for boys and girls with recreation rooms, dining facilities, night canteens, washing machines, and 24/7 security surveillance.",
    },
    {
      question: "What medical facilities are available on campus?",
      answer:
        "IIT Bhilai has a 24/7 health center, tie-ups with nearby hospitals for emergencies, and a fully equipped ambulance available at all times.",
    },
    {
      question: "What is the highest package offered at IIT Bhilai placements?",
      answer:
        "The highest package offered during IIT Bhilai placements 2023 was INR 48.64 LPA.",
    },
    {
      question: "What is the average package offered at IIT Bhilai placements?",
      answer:
        "The average package offered during IIT Bhilai placements 2023 was INR 14 LPA.",
    },
    {
      question: "What sports facilities are available at IIT Bhilai?",
      answer:
        "IIT Bhilai offers facilities for indoor and outdoor games such as badminton, basketball, tennis, volleyball, football, carom, and chess. Gym facilities are also available for students.",
    },
    {
      question: "What IT infrastructure is available at IIT Bhilai?",
      answer:
        "IIT Bhilai has two high-end computer labs with Dell desktops and servers, high-speed internet, and campus-wide Wi-Fi connectivity.",
    },
    {
      question: "What is the alumni network of IIT Bhilai like?",
      answer:
        "IIT Bhilai alumni are working in reputed organizations like LTI - Larsen & Toubro Infotech, ATONARP, and Tinkerers’ Lab. The alumni network is steadily growing.",
    },
    {
      question: "What is the eligibility for the Merit Cum Means (MCM) Scholarship at IIT Bhilai?",
      answer:
        "The MCM Scholarship is available for 25% of UR & OBC students with an annual family income between INR 1 lakh - INR 5 lakh and a minimum CGPA of 6.0. Benefits include tuition fee remission and pocket money of INR 1000/month.",
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