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
      question: "What is the NIRF ranking of IIT Jammu?",
      answer:
        "IIT Jammu was ranked 62nd in the NIRF 2024 rankings for the Engineering category, improving from its 67th rank in 2023.",
    },
    {
      question: "What scholarships are available at IIT Jammu?",
      answer:
        "IIT Jammu offers scholarships such as Merit-cum-Means (MCM) for Gen/OBC-NCL/EWS students, Free Messing for SC/ST/PWD students, and Freeship for tuition fee remission. Students can apply for only one scholarship by submitting the required documents.",
    },
    {
      question: "What are the hostel fees at IIT Jammu?",
      answer:
        "The hostel fees range from ₹41,320 to ₹60,230 depending on the type of occupancy. Mess fees include a refundable security deposit of ₹10,000, a one-time admission fee of ₹10,000, and a semester mess advance of ₹20,000.",
    },
    {
      question: "What facilities are available on the IIT Jammu campus?",
      answer:
        "The IIT Jammu campus includes classrooms, seminar rooms, a library, computer labs, faculty offices, a cafeteria, and recreational facilities. Sports facilities include volleyball, basketball, badminton courts, cricket nets, and indoor games like table tennis, carom, and chess.",
    },
    {
      question: "What is the highest package offered at IIT Jammu placements?",
      answer:
        "In 2023, the highest package offered at IIT Jammu was INR 53 LPA, while the average package was INR 17.6 LPA.",
    },
    {
      question: "What is the placement percentage at IIT Jammu?",
      answer:
        "The placement percentage at IIT Jammu was 85% in 2023, an improvement from 83% in 2022.",
    },
    {
      question: "What are the branch-wise placement statistics for B.Tech at IIT Jammu?",
      answer:
        "For B.Tech in 2024, the highest salary for CSE was INR 53 LPA, with an average salary of INR 24 LPA. For EE, the highest salary was INR 43 LPA, and for ME, it was INR 47 LPA.",
    },
    {
      question: "What documents are required to apply for scholarships at IIT Jammu?",
      answer:
        "Students need to submit a duly filled application form, bank account details, Aadhaar copies of the student and parents, a family income certificate, and a caste certificate (if applicable).",
    },
    {
      question: "What is the alumni network of IIT Jammu like?",
      answer:
        "IIT Jammu alumni are working in reputed organizations like Amazon, Qualcomm, Intel, and Healthifyme. The alumni network is growing steadily with graduates excelling in various fields.",
    },
    {
      question: "What is the eligibility for Merit-cum-Means (MCM) scholarships at IIT Jammu?",
      answer:
        "The MCM scholarship is available for Gen/OBC-NCL/EWS students and provides a tuition fee refund. It is limited to 25% of students in each branch per semester.",
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