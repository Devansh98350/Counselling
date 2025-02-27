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
      question: "What is the eligibility for MBA at IIT Bombay?",
      answer:
        "Candidates must pass a bachelor's degree with at least 60% aggregate (55% aggregate in case of aspirants belonging to SC/ ST/ PwD category) or a minimum CPI of 6.5 (6 in case of aspirants belonging to SC/ ST/ PwD category) out of 10 to apply for IIT Bombay MBA. Aspirants in the final year of the degree and those awaiting results can also apply. The applicant should have scored an aggregate of 60% (55% aggregate  in case of candidates belonging to SC/ ST/PWD category) or equivalent till the latest exam that has been completed and whose scores are available. ",
    },
    {
      question: "How should I study if I want to get into IITB BTech CSE?",
      answer:
        "Before an understanding of how one can study to get into BTech CSE, candidates should know what they have to study for admission to the BTech CSE at IIT Bombay. For admission, the university accepts the scores of JEE Mains and JEE Advanced. Hence, candidates should focus on Physics, Chemistry, and Mathematics with conceptual and application-based questions, which are the most important parts of the JEE Mains and JEE Advanced syllabus. Check out the useful tips and tricks for preparation for BTech courses at IIT Bombay below: Candidates must complete the Class 11 and 12 syllabus thoroughly of Physics, Chemistry, and Mathematics subjects. Additionally, try the 'example problems' as well for more practice with objective questions.Create a weekly plan, and according to that, make up the schedule that you wish to complete in that week. The small goals can lead aspirants towards the biggest achievement. In addition, candidates should stick to their weekly plans to cover the syllabus swiftly and on time. All of the questions in the exams are taken from the JEE Main and JEE Advanced syllabuses. Hence, make sure that applicants complete the syllabus of the mentioned exams thoroughly. Create the revision strategy and invest an hour or so in the whole day to revise everything that you have studied the whole day. Making a schedule that works. Do not attempt anything new right before the exam, as candidates may forget what they have already learned.",
    },
    {
      question: "What is the placement scenario at IIT Bombay?",
      answer:
        "The overall placement rate recorded during IIT Bombay 2024 placements was 74.53%. The average package and median package stood at INR 23.5 LPA and INR 17.92 LPA, respectively. Further, a total of 364 recruiters visited the campus. Check the complete insights of IIT Bombay placements 2024 from the table below:ParticularsPlacement Statistics (2024)Placement rate74.53%Average package INR 23.5 LPAMedian package INR 17.92 LPATotal companies visited 364Top recruiters ISRO, Google, Intel, Samsung, Qualcomm.",
    },
    {
      question: "How can I apply for BDes at IIT Bombay?",
      answer:
        "Candidates seeking admission to the Bachelor of Design (BDes) programme offered at IIT Bombay must apply for UCEED first, and then submit a duly filled application to the institute. To apply for BDes, follow the step-wise application process:Step 1: Visit the official website of UCEED.Step 2: Click on the Registration button and then on Registration Portal.Step 3: Register using a valid email ID and enter the required details and submit them.Step 4: Log in to the registered account to fill out the application form.Step 5: Choose preferred exam cities (three) and upload the scanned documents.Step 6: Payment of the application fee and submit the application.",
    },
    {
      question: "Which are the MDes specialisations offered at IIT Bombay?",
      answer:
        "IIT Bombay offers an array of specialisations under its MDes programme. Listed below are the specialisations offered with the MDes programme:Animation Design, Communication Design, Industrial Design, Interaction Design, Mobility & Vehicle Design .",
    },
    {
      question:
        "Looking for Product Lifecycle Management courses including BOM management Change Management in IIT Bombay, IIT Hyderabad, Bits Pilani?",
      answer:
        "The Professional Certificate in Product Management at IIT Roorkee provides students with training on Product Lifecycle Management together with BOM management and Change Management practices. There are no dedicated Product Lifecycle Management courses at IIT Bombay or Hyderabad nor at Bits Pilani although the IIT Roorkee live programme with campus experience costs 1,60,000 INR more GST. This programme features 10+ realistic business scenarios and a product toolkit containing 6+ practical tools and access to professional experts. As part of the programme participants will have the opportunity to join the 3-day campus immersion session at IIT Roorkee.",
    },
    {
      question: "Does IIT Bombay accept GATE Score?",
      answer:
        "Yes, IIT Bombay accept GATE scores for the admission to M.S/ M.Tech courses for various All India categories. Further, as per the IIT Bombay cutoff 2024, the last-round ranged between 325 and 725 for the General AI category candidates. Among all the categories, the most difficult course to get into IIT Bombay was M.Tech. in Computer Science and Engineering having a last-round cutoff 750.",
    },
    {
      question: "Does IIT Bombay (SJSOM) take non-engineer students?",
      answer:
        "Hi,  Yes, IIT Bombay's Shailesh J. Mehta School of Management (SJSOM) does accept non-engineer students for its MBA program. While a significant portion of the student body typically comes from engineering backgrounds, SJSOM values diversity in its batch and welcomes candidates from various academic disciplines, including commerce, science, arts, and more.  The admission process primarily evaluates your CAT score, academic background, work experience (if applicable), and performance in the personal interview. A strong CAT percentile, paired with good communication skills and clarity about your career goals, can help you stand out regardless of your academic background.  If you're passionate about pursuing management studies at SJSOM, focus on building a strong application that highlights your unique skills and experiences.  all the very best  for your preparation and application process!",
    },
    {
      question:
        "What are the job profiles open to MDes students of IIT Bombay?",
      answer:
        "IIT Bombay offers MDes courses for two years in five specialisations i.e., Interaction Design (IN), Mobility and Vehicle Design (MD), Animation Design (AN), Communication Design (CD), and Industrial Design (ID). The scope after completing MDes from IIT Bombay is huge as it opens opportunities for various job profiles such as Fashion designer, Product Research Analyst, Graphic designer, Product Designer, Visual Designer, Design Manager, Game Designer and Industrial Designer.",
    },
    {
      question:
        "I want to know about the latest cutoff information for Python training at IIT Bombay.",
      answer:
        "To get admission to BTech in Computer Science and Engineering (CSE) at IIT Bombay, one generally needs to score in the top 65 in JEE Advanced. To get a rank between 1 and 70, one needs to score around 285-290 out of 360. Admission to IIT Bombay requires clearing JEE Main and JEE Advanced followed by JoSAA counselling. JoSAA handles seat allocation in 97 institutes including 23 IITs. IIT Bombay Admission Tips:Admission to IIT Bombay is based on JEE Advanced scores. BTech cutoffs vary based on applicant category and residency/quota. CSE is the most competitive specialisation at IIT Bombay. To get admission to IIT Bombay, one needs to score between 85-95 percentile in JEE Main. Expected cutoff score for JEE Main 2025: General 91+, OBC 74+, EWS 76+.",
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
