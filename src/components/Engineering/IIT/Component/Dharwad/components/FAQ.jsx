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
      question: "How are BTech placements at IIT Dharwad?",
      answer:
        "The highest and average package offered during IIIT Dharwad BTech placements 2024 stood at INR 46 LPA and INR 9.54 LPA, respectively. Further, the median package offered during IIIT Dharwad placements 2024 stood at INR 8 LPA. The key highlights of IIIT Dharwad placements for the BTech Class of 2023 and 2024 are tabulated below:ParticularsPlacement Statistics (2023)Placement Statistics (2024)the highest packageINR 35 LPAINR 46 LPAAverage packageINR 11.52 LPAINR 9.54 LPAMedian packageNAINR 8 LPAPlacement percentage68%NA",
    },
    {
      question:
        "What is the branch-wise salary package offered during IIT Dharwad M.Tech placements?",
      answer:
        "The branch-wise salary package offered during IIT Dharwad M.Tech ME placements 2024 is presented below:Particulars MTech ME Placement Statistics (2024)the highest packageINR 13 LPAAverage packageINR 8.97 LPAMedian packageINR 8 LPAthe lowest packageINR 5.5 LPANote: The above-mentioned branch-wise data is sourced from unofficial source, and is updated till May, 2024. (Placements 2024 was ongoing at that time)",
    },
    {
      question: "Is IIT Dharwad good in terms of M.Tech placements?",
      answer:
        "According to unofficial sources, the highest and average package offered to M.Tech ME students in 2024 was INR 13 LPA and INR 8.97 LPA. Further, the median and the lowest package offered was INR 8 LPA and INR 5.5 LPA. A total of 7 students were placed out of 11 registered students in 2024.Note: The above-mentioned branch-wise data is sourced from unofficial source, and is updated till May, 2024. (Placements 2024 was ongoing at that time)",
    },
    {
      question:
        "How many students are placed during the recent placements at IIT Dharwad?",
      answer:
        "The branch-wise number of students placed and placement rate recorded during IIT Dharwad placements 2024 is presented below:BTech Branch Students Registered (2024)Students Placed (2024)Placement Percentage (2024)CSE603965%EE491632.65%ME421330.95%MTech BranchStudents Registered (2024)Students Placed (2024)Placement Percentage (2024)ME11763.63%Note: The above-mentioned branch-wise data is sourced from unofficial source, and is updated till May, 2024. (Placements 2024 was ongoing at that time)",
    },
    {
      question:
        "Which college should I choose for MS among LNMIIT and IIT Dharwad?",
      answer:
        "To know which college to choose, students can compare the options based on significant factors such as fees, rating, and median package. To help, presented below is a comparison between the MS courses at LNMIIT and IIT Dharwad, based on fees and the median package:Institute/UniversityCourse FeeMedian PackageLNMIITINR 3.9 lakhINR 12.50 LPAIIT DharwadINR 10,000INR 10 LPANote: The abovementioned information is as per official sources. However, it is subject to change. Hence, it is indicative.",
    },
    {
      question:
        "What is the cutoff for admission to various courses at IIT Dharwad?",
      answer:
        "IIT Dharwad JEE Advanced Cutoff has been concluded after the counselling session. The Cutoff was released for different categories under the AI Quota. The table provides the last-round cutoff in respect of the General AI Category candidates for different BTech courses:Course2024B.Tech. in Computer Science and Engineering6375B.Tech. in Electrical Engineering– / –B.Tech. in Mechanical Engineering13435B.Tech. in Engineering Physics12851B.Tech. in Chemical and Biochemical Engineering15739B.Tech. in Mathematics and Computing7381B.Tech. in Civil and Infrastructure Engineering15945Integrated B.Sc.+ M.Sc. in Interdisciplinary Sciences16968B.Tech. in Electronics and Communication Engineering8772B.Tech. in Electrical and Electronics Engineering9778",
    },
    {
      question:
        "What is the effectiveness of the placement cell for B.E. / B.Tech programs at IIT Dharwad?",
      answer:
        "Based on the provided information, the effectiveness of the placement cell for B.E./B.Tech programs at IIT Dharwad can be analyzed as follows:* According to the students' feedback, the placement cell has been successful in placing most students. Almost 80% of the students got placed during the on-campus placement season with an average salary package of 8 LPA.* The college's career development cell (CDC) plays a crucial role in assisting students in securing internships and placements. The CDC actively brings in various companies for campus recruitment and provides assistance with internships.* Although the placement percentage may vary depending on the programme and stream, the overall placement record appears to be strong. Students have reported getting placed in reputed companies like Nasdaq, and the college expects the average salary package to increase over the years as it grows in terms of age and student intake.* However, some students have mentioned that the placement process is not 100% efficient, with approximately 20% of students not getting placed through the on-campus process. This might be due to factors such as limited presence of high-paying or career-oriented companies or individual student choices.Overall, while the placement cell at IIT Dharwad shows promise, there is always scope for improvement. The college should focus on increasing diversity in the companies attending campus placements and providing more support to students who are struggling to find suitable employment opportunities.",
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
