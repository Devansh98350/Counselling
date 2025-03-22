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
      question: "How to apply for BTech course at IIT Roorkee?",
      answer:
        "For BTech course admission at IIT Roorkee, aspirants need to fill the application form for JEE (Main) through the official website of the National Testing Agency (NTA) (nta.ac.in). The application fee for boys is INR 625 and INR 325 for girls. Below are the steps to apply:Step 1: Open the official website of JEE and click on the 'Registration for JEE (Main) 2025' link.Step 2: Fill out the registration form with the required information, followed by clicking on the submit button.Step 3: Fill out the detailed application form and upload scanned images and documents.Step 4: Pay the application fees.",
    },
    {
      question: "When will the application form for BA LLB at IIT Roorkee?",
      answer:
        "The application form for undergraduate programs at the Indian Institute of Technology Roorkee (IITR) is facilitated through the Joint Entrance Examination (JEE). ExplanationThe application process for undergraduate programs at IITR is online. The application form includes filling out the form, uploading required documents, and paying the application fee. The JEE is the only exam that facilitates admission to undergraduate courses at IITR. You can check the IITR website for more information about undergraduate admission. ",
    },
    {
      question: "Can I get a job abroad if I study at IIT Roorkee?",
      answer:
        "Yes, studying at IIT Roorkee significantly increases your chances of getting a job abroad, as an IIT degree is highly respected globally, particularly in fields like technology and engineering, and many multinational companies actively recruit IIT graduates for international placements; however, securing a job abroad will depend on your individual skills, performance, and the specific job market you target. Key points about getting a job abroad after studying at IIT Roorkee:High demand for IIT graduates:Companies like Google, Microsoft, Amazon, and others regularly recruit IIT graduates for international roles due to their strong technical skills and academic background. Research opportunities:IITs offer opportunities for research collaborations with international institutions, which can open doors to research positions abroad. Campus placements:Many multinational companies participate in campus placements at IITs, offering international job opportunities directly to students. International exposure:IIT Roorkee provides opportunities for semester exchange programs and international internships, which enhance your resume and global network. ",
    },
    {
      question:
        "What is the average package offered during IIT Roorkee BTech CSE placements?",
      answer:
        "The average package offered during IIT Roorkee BTech CSE placements 2024 was INR 34.07 LPA. Further, the median package offered to CSE students in 2024 was INR 34 LPA.",
    },
    {
      question: "How to apply for MBA admissions at IIT Roorkee DOMS?",
      answer:
        "In order to get admission to IIT Roorkee DOMS MBA, candidates are required to submit the application form. Check out the below steps to know the complete application process:1. Visit the official website of the institute.2. Register and make a new student account by filling in basic details.3. Login to the student account and fill out the application form.4. Upload the required set of documents. 5. Pay an application fee and submit the form.",
    },
    {
      question:
        "What is the branch-wise salary package offered during IIT Roorkee BTech placements?",
      answer:
        "The branch-wise average and median package offered during IIT Roorkee BTech placements 2024 are presented below:Course / BranchAverage Package (2024)Median Package (2024)CSEINR 34.07 LPAINR 34 LPAElectricalINR 22.1 LPAINR 19.48 LPAElectronics and CommunicationINR 23.52 LPAINR 21.5 LPAChemicalINR 19.43 LPAINR 16.5 LPAMechanicalINR 19.56 LPAINR 16.58 LPACivilINR 15.1 LPAINR 13 LPAPolymerINR 12.7 LPAINR 14 LPAMetallurgyINR 15.45 LPAINR 14.1 LPAEngineering PhysicsINR 15.53 LPAINR 15.5 LPAProduction and Industrial INR 16.48 LPAINR 15.46 LPABiotechnologyINR 17.84 LPAINR 16 LPAGeological TechnologyINR 18.5 LPAINR 16 LPAGeophysical Technology INR 21.73 LPAINR 19.81 LPA",
    },
    {
      question: "What is the eligibility criteria for BTech at IIT Roorkee?",
      answer:
        "In order to apply for a BTech course, a candidate must have passed your Class 12 (or equivalent) examination with a minimum of 75% aggregate marks (65% for SC, ST, and PwD) from a recognised board, and have Physics, Chemistry, and Mathematics as compulsory subjects. IIT Roorkee admission 2025 is primarily entrance-based. The candidates are selected through national-level tests conducted by various authorities. IIT Roorkee offers UG and PG degrees in the fields of Engineering, Science, Architecture, Management and Social Sciences.",
    },
    {
      question: "Is IIT Roorkee hard to get?",
      answer:
        "Yes, getting into Indian Institute of Technology Roorkee (IIT Roorkee) is highly competitive, requiring a strong performance in the JEE Main and JEE Advanced exams, with competitive branches such as Computer Science Engineering demanding even higher ranks. The cutoff ranks for IIT Roorkee have varied over the years, but generally, the closing ranks for the general category in Computer Science Engineering (CSE) have been around the 6000-8000 range in JEE Advanced. Therefore, once an applicant fulfills IIT Roorkee admission requirements i.e., competitive grades, standardised test scores, technical language requirements as well as relevant documents, they are most likely to secure an admission in the institute. However, students must not take this lightly and apply to the institute within the deadlines in order to get enrolled as a student.",
    },
    {
      question: "How are the placements at IIT Roorkee for M.Tech program?",
      answer:
        "The salary package offered during IIT Roorkee M.Tech placements 2024 is presented below:Particulars MTech Placement Statistics (2024)the highest packageINR 13.48 LPAAverage packageINR 12 LPA",
    },
    {
      question: "How does it feel to live in the hostel of IIT Roorkee?",
      answer:
        "At IIT Roorkee, hostels are referred to as 'Bhawans'. The institute has a variety of hostels for UG, PG, Doctoral and married students. The institute provides co-ed space comfortable for everyone. The hostels offer various facilities with amenities such as cyber cafes, gyms, Wi-Fi, and mess facilities to the students. IIT Roorkee Bhawan ensures a comfortable and productive living experience with spacious rooms, internet, a well-maintained mess, and recreational spaces make it a standout choice.",
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
