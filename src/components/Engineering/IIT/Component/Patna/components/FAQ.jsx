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
      question: "What is the placement scenario at IIT Patna for CSE?",
      answer:
        "IIT Patna placement 2023 has witnessed a great start with the highest salary standing at INR 82.05 LPA and the average salary standing at INR 29.30 LPA. Students received 72 PPOs and in all 281 offers were made. Some of the Top Recruiters were Amazon, Google, Adobe, etc.",
    },
    {
      question:
        "What is lacking in the newer IITs (Patna, Indore, Jodhpur, etc.) that causes them to become less preferred by students?",
      answer:
        "The newer Indian Institutes of Technology (IITs) like Patna, Indore, and Jodhpur are generally less preferred by students compared to the older, more established IITs due to the following reasons:\n\n" +
        "1. Brand recognition: The older IITs have a strong reputation and are more widely recognized, unlike the new IITs.\n" +
        "2. Alumni network: Older IITs have a strong alumni network that can provide better placement opportunities and industry connections. This is lacking a bit in the new IITs.\n" +
        "3. Infrastructure: Newer IITs may still be developing their infrastructure, including laboratories, research facilities, and campus amenities.\n" + // <-- Added \n before "3."
        "4. Research opportunities: Older IITs typically have more research collaborations, funding, and ongoing projects, providing better research opportunities for students.\n" +
        "5. Industry partnerships: Established IITs often have stronger ties with industries, leading to better internship and placement opportunities.\n" +
        "6. Placement records: The track record of placements and average salary packages are stronger for the older IITs.",
    },
    {
      question: "Can I get IIT Patna without JEE Advanced?",
      answer:
        "Yes, it is possible to join IIT Patna wihout JEE Advanced for courses other than BTech. For BTech programme JEE Advanced with JEE Mains is necessary. For other courses, such as M.Tech the asping candidates need to clear GATE with COAP counselling. Candidates who are seeking admission to the MTech, BBA, BSc or EMBA need not take JEE Advanced.",
    },
    {
      question:
        "I would like to know about the placement records for executive MBA at IIT Patna. Can you help me with the same?",
      answer:
        "The EMBA programme of IIT Patna is especially designed for working professionals and, hence, provides flexible curricula. In addition, it does not involve traditional campus placements but, instead, provides career services that include access to more than 200 job postings per month, in addition to personal career guidance that will help students progress in their professional careers.",
    },
    {
      question:
        "How much JEE score is required in B.Sc. (Hons.) in Computer Science and Data Analytics at IIT Patna?",
      answer:
        "To get admitted to IIT Patna B.Sc. (Hons.) in Computer Science and Data Analytics course, applicants must meet the entry requirements - 60.0% in 12th. IIT Patna The total tuition fee for this course is INR 240000 for the entire duration of the course. To learn more about other courses offered under B.Sc. at IIT Patna.Additional DetailsCourse Duration: 3 yearsMode: Full-timeTotal Tuition Fees: INR 2.40 LakhUnique Feature: Hybrid (Online/Campus) mode of instructionThe admission process is competitive and requires candidates to meet both the academic and entrance exam criteria.",
    },
    {
      question: "How is the placement of BBA in IIT Patna?",
      answer:
        " Placements for BBA at IIT PatnaThe placement scenario regarding BBA of IIT Patna is highly optimistic.The buoyant placement efforts of this institute, which has an effective placement cell, are working hard with many prominent companies for offering a valid opportunity for recruitment into them. It might also refer to some pre-placement talks where students get to meet potential employers and understand their perspectives on the event.Good average salary packages are available even to BBA graduates, clearly indicating that this is a full-fledged program of education and thus very much capable of preparing students for industry needs.The actual campus visits of the industry from all spheres will invite the students for interviews, tests, group discussions, and the recruitment process, making them prepared with too much opportunity for absorption into some of the best companies. ",
    },
    {
      question: "What is the application process of IIT Patna?",
      answer:
        "The candidate needs to be eligible for the selected programme which they are applying for (B.Tech, M.Tech, or Ph.D.). In B.Tech, candidates have to qualify through JEE Main and then advance, followed by participation in the counseling round held by JoSAA. In M.Tech, candidates need to appear for GATE examination and then register themselves at COAP and then apply on the IIT Patna portal. Ph.D. candidates require a relevant degree and have to apply online, later followed by interviews or tests. All documents should be submitted according to the guidelines provided on the IIT Patna website.",
    },
    {
      question: "Can I get direct admission in IIT Patna?",
      answer:
        "No, direct admission is not available for undergraduate studies at IIT Patna. It's purely on the basis of candidates' performances in JEE Advanced. For postgraduate, it may be either on the basis of their GATE scores or by entrance examinations conducted by respective courses.",
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
