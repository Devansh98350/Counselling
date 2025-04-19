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
        "What is the total number of seats available for Joint MTech/MCP PhD courses at IIT Kharagpur?",
      answer:
        "IIT Kharagpur offers a significant academic opportunity in the form of 2,992 seats in different specialisations for Joint MTech/MCP PhD programmes. The widespread seat availability mirrors the institute's efforts to facilitate a broad spectrum of students pursuing advanced degrees. Prospective students can pursue an array of courses in the Joint MTech/MCP PhD programmes at IIT Kharagpur.",
    },
    {
      question: "Is IIT Kharagpur good for placement?",
      answer:
        "Yes, IIT Kharagpur is good for placements. As per media reports, the highest package offered so far during the 2025 placements was INR 2.14 crore per annum. Further, 13 students have secured international offers and the total count of offers made stood above 800.",
    },
    {
      question: "Is VGSOM IIT Kharagpur hard to get?",
      answer:
        "Yes, it is hard to get admission at VGSOM IIT Kharagpur. The institute offers admission based on merit and entrance exams. The institute accepts national entrance exams such as CAT. Executive MBA admission is based on a written test and personal interview. Aspiring candidates must qualify for the eligibility criteria set by the institute for the desired course. The institute has limited seats and difficult for students to get admission with high competition. ",
    },
    {
      question: "How are the faculty members at VGSOM IIT Kharagpur?",
      answer:
        "Faculty members of VGSoM IIT Kharagpur are genuinely good and very supportive. You need to focus on your academics but also they are very strict regarding rules and regulations.",
    },
    {
      question: "Why choose IIT Kharagpur?",
      answer:
        "IIT Kharagar is among the top 4 colleges of India and this is the oldest IIT. Academically its very good and all other kinds of facilities are available here. IIT Kharagpur has best culture among and it has the biggest and most beautiful campus. ",
    },
    {
      question: "Is B.Tech in Biotechnology at LPU better than IIT, Kharagpur?",
      answer:
        "hi, LPU provides various Biotechnology programs including B.Tech, B.Sc. (Hons.), and M.Sc. (Hons.). B.Tech eligibility usually demands 60% in 10+2 with Physics, Chemistry, English, and Biology/Biotechnology/Maths, subject to LPUNEST.These programs strive to deliver sound theoretical concepts and practical knowledge using equipped laboratories and projects in line with industry demands. The curriculum includes topics such as genetic engineering, molecular biology, and bioinformatics.LPU places strong focus on placements, and students of Biotechnology have been placed with organizations such as Capgemini and HireQuotient. The maximum salary offered during 2024 for B.Sc. (Hons.) Biotechnology was ?10 LPA, and the average was ?5.51 LPA.The university boasts experienced teaching staff in the School of Bioengineering and Biosciences, engaging in research and industry-orientated teaching.",
    },
    {
      question:
        "Can a student receive more than one scholarship at IIT Kharagpur?",
      answer:
        "No student will be permitted to enjoy more than one scholarship during the same period. In the event of an awardee becoming eligible for another scholarship from any other source, he will have the option to accept either of the two. In such a case he/she is required to communicate in writing his/her choice to the Dean Undergraduate Studies.",
    },
    {
      question:
        "Is the JEE score compulsory to pursue B.Sc. in Mathematics and Computing at IIT Kharagpur?",
      answer:
        "Yes, the JEE (Joint Entrance Examination) score is compulsory to pursue a B.Sc. in Mathematics and Computing at IIT Kharagpur. The admission to the B.Sc. (Hons.) in Mathematics and Computing program at IIT Kharagpur is through the JEE Advanced exam, which is conducted after qualifying the JEE Main exam.Here's a breakdown of the process:JEE Main: First, you need to appear for the JEE Main exam and secure a qualifying score.JEE Advanced: After qualifying JEE Main, you need to appear for the JEE Advanced exam. Only candidates who qualify JEE Advanced are eligible for admission to the undergraduate programs at IITs, including the B.Sc. in Mathematics and Computing at IIT Kharagpur.Admission Process: Based on your JEE Advanced rank, you can participate in the JoSAA (Joint Seat Allocation Authority) counseling process, where you will be allocated a seat based on your rank, category, and availability of seats in the desired program.Therefore, JEE Advanced is mandatory for admission to this program at IIT Kharagpur.",
    },
    {
      question:
        "What exam is required is admission to Integrated B.Sc. (Hons.) + M.Sc. in Economics at IIT Kharagpur?",
      answer:
        "Prospective students can access the Integrated BSc (Hons) + MSc in Economics at IIT Kharagpur by passing the Joint Entrance Examination (JEE Advanced). Candidates must pass the JEE Advanced before they can take the Joint Admission Test for IITs and other premier institutes through their JAM Economics examination. Students must pay INR 10 lakh as total fees to complete their 5-year Integrated BSc (Hons) + MSc in Economics program.",
    },
    {
      question: "How can I get admission to BTech course at IIT Kharagpur?",
      answer:
        "IIT Kharagpur BTech course admissions are based on the merit and entrance exam scores. The accepted entrance exams are JEE Advanced,  JEE Main, and others. Students must secure valid scores in the entrance exams for a successful admission to various courses offered at IT Kharagpur. ",
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
