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
      question: "Can I do MTech in IIT Madras without GATE?",
      answer:
        "The admission to M.Tech at IIT Madras is entirely based on GATE scores. Hence, aspirants must meet eligibility requirements and have valid score of GATE. However, MS candidates can apply without the entrance score. Aspirants who have completed a BTech degree from one of the IITs with a CGPA of 8.0 and above can apply without a GATE score for MS.",
    },
    {
      question: "What is the placement trend at IIT Madras?",
      answer:
        "IIT Madras has released its placements report for 2023. As per the report, 172 offers were presented above INR 30 LPA. Check the complete insights of IIT Madras placements 2023 and 2022 from the table below:ParticularsPlacement Statistics (2022)Placement Statistics (2023)No. of offers1,4911,612Companies visited480+480+PPOs231350the highest packageINR 2.14 crore per annumINR 1.31 crore per annumthe lowest packageINR 3 LPAINR 5.40 LPAOffers above INR 30 LPA203172Offers between INR 25 LPA - INR 30 LPA7548Offers between INR 20 LPA - INR 25 LPA134135Offers between INR 15 LPA - INR 20 LPA264312Offers between INR 10 LPA - INR 15 LPA342226Offers between INR 5 LPA - INR 10 LPA154152Offers less than INR 5 LPA4N/APopular recruitersAtlassian, Deloitte India, Capgemini, American Express, Cogoport, SAP Labs.",
    },
    {
      question:
        "I want to crack JEE Mains to join IIT Madras. Is the JEE Mains results enough to get admission?",
      answer:
        "To get admission to IIT Madras the JEE Mains Results alone are not enough. A qualifying qualification in the JEE Mains examination is required to first qualify as it serves as a preliminary test. However, to secure a place in the IIT Madras B.Tech programme you will also need to take the JEE Advanced exam which is the second stage of the admission process. Admission is mainly based on your performance in the JEE Advanced. You must achieve a competitive rank to be considered for popular courses like computer science or electrical engineering which are very challenging It is therefore important to perform well in both exams to get a chance of admission to IIT Madras.",
    },
    {
      question: "What is the average package offered at IIT Madras?",
      answer:
        "The IIT Madras average package has not been released. However, the median salary is out. Comparing the last two-year median package details, an improving trend was recorded in IIT Madras MBA and M.Tech courses. For UG (BTech, DD, IDDD), MS (Science streams), and PhD courses, the median package dropped from 2022 to 2023. Alongside this, the median package for MS (Engineering streams) and MA (Humanities and Social Sciences) has been stagnant over the past two years. For a better understanding, take a look at the below table depicting the IIT Madras placement package comparison for 2022 and 2023:CourseMedian Package (2022)Median Package (2023)UG (BTech, DD, IDDD)INR 18 LPAINR 17 LPAMTechINR 13.02 LPAINR 15 LPAMS- Engineering StreamsINR 15 LPAINR 15 LPAMSc- Science StreamINR 14 LPAINR 9.62 LPAMA (Humanities and Social Sciences)INR 13.69 LPAINR 10.95 LPAMBAINR 15.35 LPAINR 20.80 LPAPhDINR 16.50 LPAINR 15 LPA",
    },
    {
      question: "Can I do an MSc at IIT Madras?",
      answer:
        "Yes, you can do an MSc at IIT Madras. The institute offers a two-year postgraduate degree for this course. Students can pursue the course in the field of Physics, Chemistry, and Mathematics. Those looking to enrol in IIT Madras MSc need to clear JAM exam. Additionally, to be eligible for MSc admission at IIT Madras, students must have passed an UG degree or should be currently studying in the final year of the UG programme. Proof of having passed the undergraduate degree must be submitted at the time of admission. Interested candidates can visit the official website of IITM to know more about the course. ",
    },
    {
      question: "What is the NIRF ranking of IIT Madras in 2024?",
      answer:
        "As per the NIRF ranking 2024, Indian Institute of Technology, (IIT) Madras emerged to be the No. 1 Engineering college in India. For the sixth consecutive year,  IIT Madras has maintained its status as the top college overall and as the finest engineering school for the eighth consecutive year. Indian Institute of Technology, (IIT) Delhi retained its position as the No. 2 among the Engineering category.",
    },
    {
      question: "Is MBA available at IIT Madras?",
      answer:
        "Yes, IIT Madras offers MBA/PGDM in a full time mode. The duration of this course is of 2 years. Under this course, two specializations are offered which are MBA and Tech MBA. The total tuition fees for these courses are INR 1.26 L and INR 17 L respectively. For admission IIT Madras MBA, students must have completed their graduation with an aggregate score of 60%. However, admissions to MBA course is entirely entrance-based and scores of CAT exam is accepted for this purpose followed group discussion and personal interview round.",
    },
    {
      question:
        "Can I take admission in IIT Madras BTech course without JEE Mains?",
      answer:
        "No, admissions to the IIT Madras is not possible without JEE Main scores as JEE Main is the major accepted entrance examination for admission to the BTech course. The JEE Main exam is also an eligibility test for the JEE Advanced. This exam is conducted for admission to major IITs. JEE Main is held twice a year, that gives students two opportunities to secure a good score. Students have the option to appear in one or both attempts.",
    },
    {
      question: "What is the fee for BTech at IIT Madras?",
      answer:
        "The IIT Madras fee includes Institute Fees, Hostel Fee, and various other fee components. The fee is exclusive of various charges such as tuition fee, admission fee, and others. For knowing the exact fee details, please visit the official website of the college and ask for the details. Till the time, students can check the below fee breakup:CoursesTuition FeesB.E. / B.Tech5.3 L - 10 LB.Sc.1.2 L - 17 LB.Sc.1.2 L - 10 L.",
    },
    {
      question: "How can I get admission in IIT Madras?",
      answer:
        "Students who have missed the JEE Main exams must not worry, these students can apply again the next year. Candidates willing to get admission must take part in the IIT Madras admission process before the last date of application. Candidates must know their eligibility criteria and apply accordingly. Follow the IIT Madras application process mentioned below:Step 1: Visit the official website to register for the JEE Main examination.Step 2: Appear for the JEE Main exam.Step 3: Register for the counselling.Step 4: Pay the admission fee to the selected and the allotted college.",
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
