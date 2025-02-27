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
      question: "Which is better for MSc: IIT Delhi or IIT Madras?",
      answer:
        "IIT Delhi and IIT Madras are well known and reputed institutions in India. According to the NIRF 2023, IIT Madras ranked is 01 while IIT Delhi is ranked 03 in the Engineering category. Both the colleges offer MSc course across various specialisations with top quality education to its students. Both colleges have world class infrastructure. Both colleges have highly qualified and experienced faculty members who are experts in their respective fields. Both colleges are very good in their own way.  Which one is the best college depends on what the person is actually looking for in a college or university.",
    },
    {
      question: "How much rank in JEE Advanced is required for IIT Delhi?",
      answer:
        "The IIT Delhi cutoff 2024 has been concluded for admission to the BTech and Integrated BTech courses. As per the JEE Advanced 2024 cutoff for the Last Round, the closing rank for BTech ranged between 116 and 4849 for the General AI category students. The toughest course to get into IIT Delhi was CSE. So, candidates seeking admission at this institute must aim to secure up to 4850 rank to be eligible for BTech admission. The required cutoff ranks will vary based on the categories you fall into. To get an idea of the category-wise JEE Advanced cutoff range for BTech admission at IIT Delhi, refer to the table below: CategoryJEE Advanced Round 1JEE Advanced Last Round General116 - 4754116 - 4849OBC89 - 306889 - 2749SC48 - 176550 - 1780ST23 - 99123- 991EWS33 - 113935 - 1215PWD5 - 1595 - 159",
    },
    {
      question: "Is DMS IIT Delhi good for MBA?",
      answer:
        "The Department of Management Studies (DMS) of IIT Delhi is well-known for its MBA programme. It provides a demanding curriculum that aims to provide students with advanced management skills and knowledge. The programme is noted for its emphasis on analytics, technology, and innovation, which complements the institute's engineering heritage. DMS IIT Delhi has skilled teachers, good infrastructure, and strong industry links that improve learning and placement prospects. The institute is frequently ranked among the top MBA programmes in India, making it a great alternative for students looking for a complete and competitive business education.",
    },
    {
      question: "How are IIT Delhi placements compared with other top IITs?",
      answer:
        "According to the most recent media report, during Phase I IIT Delhi placements in 2024, 1,050 offers—including PPOs—were made. Additionally, 1,000 applicants in total were chosen at random during phase 1 of the IIT Delhi placements 2024. In addition, during Phase I IIT Delhi placements 2024, more than 50 foreign offers including PPOs were received from almost 20 foreign businesses.The table below shows the IIT Delhi placements compared with other top IITs for the year 2023.College Namethe highest Package (2023)IIT DelhiINR 2.5 crore per annumIIT MadrasINR 1.31 crore per annumIIT BombayINR 1.68 crore per annumIIT KharagpurAbove INR 2.68 crore per annum",
    },
    {
      question:
        "I've scored less than 60% in 12th boards, can I get admission in IIT Delhi for BTech?",
      answer:
        "Admission to IIT Delhi BTech courses is subject to fulfiment of the eligibility requirements for JEE Main and JEE Advanced. The students who have passed Class 12 in Science stream with at least 75% aggregate (65% aggregate for SC/ST/PwD) are eligible to apply. Hence, a student scoring less than 60% is not eligible to pursue BTech at IIT Delhi. They can go for other colleges offering the course. They can also check out the colleges offering Online BTech courses.",
    },
    {
      question:
        "What is the branch-wise placement rate recorded during IIT Delhi BTech placements?",
      answer:
        "According to unofficial sources, the branch-wise placement rate recroded during IIT Delhi BTech placements 2023 is presented below:BTech Branch Students Registered (2023)Students Placed (2023)Placement Rate (2023)Biochemical Engineering and Biotechnology463882.61%Civil Engineering635384.13%Chemical Engineering676191.04%Computer Science and Engineering959498.95%Electrical Engineering959296.84%Electrical Engineering (Power and Automation)494795.92%Mechanical Engineering705882.86%Production and Industrial Engineering686291.18%Mathematics and Computing676597.01%Engineering Physics413482.93%Textile Technology907280.00%",
    },
    {
      question:
        "Can you share details about the extracurricular activities conducted at DMS IIT Delhi?",
      answer:
        "DMS IIT Delhi arranges various events, seminars, and workshops for students. There are various extracurricular activities arranged by the college. Various DMS IIT Delhi students have established their start ups. Throughout the years of their graduation, students are given the knowledge of the latest developments happening in the job world.",
    },
    {
      question:
        "What is the rank of IIT Delhi in QS World University Rankings 2024?",
      answer:
        "IIT Delhi is listed as the 197th best university in the world as per the QS World University Rankings 2024. The institute is ranked 46th in the Asia University Rankings and 151-200 in the Engineering and Technology (Engineering) category. The QS World University Rankings are based on several variables, such as academic standing, employer standing, faculty-to-student ratio, number of citations per faculty, and proportion of foreign students. IIT Delhi was also ranked 717 by the US News Rankings 2022.",
    },
    {
      question:
        "What documents are required during B.Tech admission process at IIT Delhi?",
      answer:
        "The students need to submit important documents for verification purposes. Candidates should have scanned copies with them. Before the JEE Main 2024 registration process, students must keep the following documents and information ready for a smooth application process:Valid email ID and mobile numberAcademic details related to the Class 10 and Class 12 qualifying examsScanned copy of the category certificate (if applicable)Scanned copy of the PwD certificate (if applicable)Scanned photograph and signature as per the specification mentioned by the NTANet banking/credit card/debit card/UPI details for application fee payment",
    },
    {
      question: "How can I get admission in IIT Delhi for MBA?",
      answer:
        "To get confirmation at DMS IIT Delhi for the MBA program, candidates to meet the qualification rules of having a graduation degree with 60% marks. The CAT exam is the primary selection criterion. In addition, if students are interested in the Executive MBA program, the CAT exam will serve as the selection parameter and similar eligibility requirements will apply. The MBA programme has a INR 11.2 Lacs tuition fee.",
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
