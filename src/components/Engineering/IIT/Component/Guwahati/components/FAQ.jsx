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
      question: "Does IIT Guwahati follow semester pattern for MBA programme?",
      answer:
        "Yes, IIT Guwahati does follow a semester pattern for its MBA programme. The institute offers a two-year full-time MBA programme, which is further segregated into four semesters. This semester-based pattern helps students with systematic learning. To apply for the course, interested candidates must visit the official website to apply online.",
    },
    {
      question: "Is MBA programme available at IIT Guwahati?",
      answer:
        "Yes, IIT Guwahati offers an MBA with a course duration of two years. To be eligible for the programme, students must meet the requisite eligibility criteria. For more insight, candidates can refer to the following table: ParticularHighlightsDuration2 yearsCourse LevelPG DegreeMode of CourseFull TimeTotal Tuition FeesINR 5.54 LakhSeat breakup16NOTE: The above-mentioned information is taken from the official website/sanctioning body. It is still subject to change and, hence, is indicative.",
    },
    {
      question: "Does IIT Guwahati offer direct admission for any course?",
      answer:
        "No, admission to IIT Guwahati courses is entrance-based, except for certificate course. There is no provision for direct admission. The below table mentions course-wise accepted entrance exams:CoursesAccepted Entrance ExamBTechJEE Main/JEE Advanced +JoSAA CounsellingBDesUCEED + CounsellingMTechGATE + COAP CounsellingMScIIT JAM +CCMN CounsellingMDesCEED +GDPIMBACAT +PIMAWriiten Test +PI+ Counselling conducted by IIT Guwahati.",
    },
    {
      question: "What is the eligibility criteria for MA at IIT Guwahati?",
      answer:
        "IIT Guwahati offers a full-time MA programme lasting two years. To be eligible for MA admission, candidates must have completed their graduation in any discipline from a recognised university. To be eligible, they must have scored a minimum of 60% aggregate in their graduation. Additionally, they must present the relevant documents to prove their eligibility at the time of admission. The selection is based on the scores obtained in the accepted entrance examination.",
    },
    {
      question: "How many seats are available for IIT Guwahati MSc courses?",
      answer:
        "There are a total of 170 seats for MSc courses at IIT Guwahati. This seat allotment varies for each of the course specialisations. The admission of the candidates is as per the selection criteria and sanctioned seat count. Moreover, the maximum number of seats are for MSc in Physic and MSc in Chemistry - 60. It must be noted that the seat intake mentioned is as per the official website. It is, however, subject to changes and hence, is indicative.",
    },
    {
      question:
        "What are the steps to apply online for the BTech programme at IIT Guwahati?",
      answer:
        "To apply for the BTech programme at IIT Guwahati, candidates need to complete the application form for the course-specific entrance exam. Candidates should follow these below mentioned steps to apply online for the BTech course at IIT Guwahati:Step 1: Open the IIT Guwahati official website. On its homepage, click the tab reading 'Admission' and select 'UG' from the dropdown menu.Step 2: Click on 'Application Procedure' to proceed further. The online application portal opens up. The admission brochure and course structure PDFs can be downloaded from this page.Step 3: Click on 'New User Register Here'. Fill out the registration form with name, email ID, contact number, course preference, etc. Create an alpha-numeric password for password for latter logins.Step 4: Further, fill in the remaining application form by addressing other details, including guardian info, address of communication, etc. At this step, upload a passport-size photograph and signature.Step 5: Pay an application fee in the online mode through the SBI payment gateway using a debit card, credit card, or net banking.Step 6: Fill in the second to last step of the application form, which includes the entrance exam, work experience if any, references and publications if applicable for PhD applicants, and academic details.Step 7: Close the application form by finalising the self-declaration and clicking on the 'Submit' button.",
    },
    {
      question: "What is the total seat intake for B.Tech at IIT Guwahati?",
      answer:
        "The total seat intake for the BTech programme at IIT Guwahati is 962, encompassing various specialisations. Among these, the fields of Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Mechanical Engineering, and Civil Engineering have the highest seat allocations, with counts of 114, 104, 119, and 117, respectively. Candidates can secure admission to the BTech programme by meeting the necessary eligibility criteria.",
    },
    {
      question:
        "What is the eligibility criteria for B.Tech course at IIT Guwahati?",
      answer:
        "Candidates seeking admission to the IIT Guwahati must ensure that they meet the required eligibility criteria. The below-mentioned table includes IIT Guwahati BTech eligibility and selection criteria:CourseEligibility CriteriaSelection CriteriaBTechPass Class 12 in the Science stream with Chemistry, Physics, and Mathematics as compulsory subjectsJEE Main + JEE Advanced + JoSAA Counselling.",
    },
    {
      question:
        "What is the highest placement package offered at IIT Guwahati?",
      answer:
        "The overall the highest package for the 2024 drive stood at INR 2.05 crore per annum and was offered to BTech students. The table below represents the course-wise IIT Guwahati the highest package 2024:Coursethe highest Package (2024)BTechINR 2.05 crore per annumBDesINR 95 LPAMTechINR 65.70 LPAMScINR 65.70 LPAMDesINR 52 LPAMSRINR 21.74 LPAMBAINR 15 LPAMAINR 8 LPAThe highest package for MSR increased from 2022 to 2023 and was the same in 2023 and 2024. On the other hand, a fluctuating trend was recorded in the MA and MSc the highest packages.",
    },
    {
      question:
        "Which is the top recruiting sector during IIT Guwahati placement drive?",
      answer:
        "SDE emerged as the top recruiting sector with 31.90% of students placed in it. The second in the sequence was the Core sector. The table below represents the sector-wise distribution of IIT Guwahati placements 2024:SectorPlacement Percentage (2024)SDE31.90%Core23.10%Others16.20%Analyst7.30%EdTech6.90%Finance5%Design4.60%Consulting2.70%Data Science2.30%.",
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
