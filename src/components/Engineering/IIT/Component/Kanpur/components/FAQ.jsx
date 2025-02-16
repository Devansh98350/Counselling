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
      question: "What is the eligibility for Surge IIT Kanpur Program?",
      answer:
        "Students-Undergraduate Research Graduate Excellence (SURGE) is an internship programme of IIT Kanpur. The programme is offered to the three categories - SAARC students, Non-IITK students, and IIT Kanpur students. The eligibility to get the SURGE IIT Kanpur internship may vary depending on the category of the students. The minimum eligibility requires the candidates to complete 3rd of BTech course.",
    },
    {
      question: "What is IIT Kanpur campus area in acres?",
      answer:
        "IIT campus Kanpur is located in Kalyanpur, Kanpur and is about 16 kilometers from the Kanpur Central Railway station. The IIT kanpur area in acres is around 4.3 square kilometres, that is 1037 acres. The Institute is establsihed by the Government of India. IIT campus Kanpur is well-equipped with modern infrastructure. Additionally, the campus has research centers, including the Advanced Centre for Electronic Systems (ACES) and the Centre for Environmental Science and Engineering. ",
    },
    {
      question: "What is the placement of MBA in IIT Kanpur?",
      answer:
        "As per the overall placement report, the highest package and average package offered during IIT Kanpur MBA 2024 placements, stood at INR 24 LPA and INR 18.20 LPA, respectively. Further, the median package offered to MBA batch stood at INR 19.90 LPA. Additionally, a total of 21 recruiters visited the campus during IIT Kanpur MBA 2024 placements. The top recruiters included Infosys, HDFC Bank, Intellus Direct, etc.",
    },
    {
      question:
        "Is University of California, San Diego, USA a better option than IIT Kanpur, India for doing B.Tech?",
      answer:
        "The University of California, San Diego (UCSD) and the Indian Institute of Technology (IIT) Kanpur are highly regarded institutions for engineering programs, and the choice between the two may depend on a variety of factors, including cost of living, research opportunities.",
    },
    {
      question:
        "I am getting Electrical Engineering at IIT Kanpur and Electrical Engineering (Power and Automation) at IIT Delhi. Which would be better?",
      answer:
        "Actually, both these courses are excellent. Both have good faculty, good infrastructure and also high market demand. Only point to make difference is placements. Electrical Engineering at IIT Kanpur have little much better placements than Electrical Engineering (Power and Automation) at IIT Delhi. Finally, I would suggest you Electrical Engineering at IIT Kanpur if you consider placements. ",
    },
    {
      question:
        "Can I know about the latest cutoff information for Ph.D. in English (Literature, Linguistics and ELT) at IIT Kanpur?",
      answer:
        "Eligibility: The applicant must have passed the master's degree in the concerned subject with aggregate marks of at least 55%.Entrance Exams: Admission will be done through entrance exam scores from a recognized test like GATE, CSIR-NET, or JRF, which is followed by an interview. The duration of the Ph.D. course is around 3 years.The total fee for the course is around INR 48,550. The specific cut off scores can differ yearly. This is because so many factors determine the range. The number of applications submitted and their performance mainly dictates the cutoff scores. For particular details on cutoff scores, I would advise you reach out to the admissions desk or check the official page on IIT Kanpur.You can reach IIT Kanpur's admission office for direct queries or the most recent correct information through their official contacts.",
    },
    {
      question: "Can I get IIT Kanpur at 700 rank through GATE exam?",
      answer:
        "IIT Kanpur also accepts GATE exam scores for the admission to M.Tech courses. Candidates with 700 score can easily get admission to any course except Discontinued (Jul 2023)-M.Tech. in Microelectronics and VLSI at IIT Kanpur. The IIT Kanpur cutoff 2024 stood between 622 and 840 for the General AI category candidates.",
    },
    {
      question: "Does IIT Kanpur set tough paper for JEE Advanced?",
      answer:
        "It's important to note that the difficulty level of the exam is not influenced by the particular IIT conducting it. Furthermore, the exam's difficulty is not necessarily dictated by trends from previous years. Ultimately, the difficulty level is shaped by the level of preparation and understanding of the students taking the exam, as well as the opinions of experts and students alike. The perceived difficulty level of the JEE Advanced exam is subjective and can vary from person to person. What one candidate finds challenging, another may consider manageable, depending on their individual preparation.",
    },
    {
      question:
        "Is University of Reading, Australia a better option than IIT Kanpur, India for doing MBA?",
      answer:
        "Choosing between University of Reading, Australia, and IIT Kanpur, India for an MBA depends on your goals. IIT Kanpur offers a prestigious, tech-focused MBA with strong industry links in India. University of Reading provides international exposure and access to global business networks. If you prefer a local, technology-oriented MBA, IIT Kanpur is ideal. For international business exposure, the University of Reading could be a better choice.",
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
