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
      question: "What is the NIRF ranking of IIT Palakkad?",
      answer:
        "IIT Palakkad was ranked 64th in the 'Engineering' category by NIRF 2024, improving from 69th in 2023 and 68th in 2022.",
    },
    {
      question: "What scholarships are available at IIT Palakkad?",
      answer:
        "IIT Palakkad offers scholarships such as Merit cum Means Scholarship, Free Studentship, SC/ST Scholarship, and Scholarship for PD Students. These scholarships provide benefits like tuition fee exemption, pocket allowances, and free messing for eligible students.",
    },
    {
      question: "What are the eligibility criteria for the Merit cum Means Scholarship?",
      answer:
        "The Merit cum Means Scholarship is awarded to 25% of students with an annual family income less than INR 4.5 lakhs. Renewal requires a minimum GPA of 5 in passed subjects.",
    },
    {
      question: "What facilities are available at IIT Palakkad campuses?",
      answer:
        "IIT Palakkad operates across two campuses: Temporary Campus and Nila Campus. Facilities include Wi-Fi-enabled hostels, dining facilities, sports and gym amenities, a library, and laboratories. The institute also provides counseling services and healthcare facilities.",
    },
    {
      question: "What dining options are available at IIT Palakkad?",
      answer:
        "Separate mess facilities are available at Nila and Sahyadri Campuses. Additional eateries include Kedaram, Kaapi, and an Amul outlet.",
    },
    {
      question: "What sports facilities are available at IIT Palakkad?",
      answer:
        "IIT Palakkad offers facilities for football, volleyball, basketball, cricket practice pitches, table tennis, and badminton. The campus also has a gym with modern equipment.",
    },
    {
      question: "Who are some notable alumni of IIT Palakkad?",
      answer:
        "Notable alumni include Vineet Jain, who ranked 1st in the Civil Engineering discipline of the All India Engineering Services Exam, and Aronin Ponnappan, founder of Sastra Robotics, which signed a contract with Lockheed Martin.",
    },
    {
      question: "What healthcare facilities are available at IIT Palakkad?",
      answer:
        "IIT Palakkad has an institute clinic and MOUs with local hospitals for cashless medical services. Outpatient treatment is available at Ahalia Foundation hospitals.",
    },
    {
      question: "What is the library facility like at IIT Palakkad?",
      answer:
        "The library is fully computerized and offers access to 2,700 books, CDs, scientific kits, magazines, newspapers, and the National Digital Library.",
    },
    {
      question: "What is the eligibility for the SC/ST Scholarship at IIT Palakkad?",
      answer:
        "The SC/ST Scholarship is for students with an annual family income less than INR 4.5 lakhs. Benefits include tuition fee exemption, free messing (basic menu), and a pocket allowance of INR 250 per month.",
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