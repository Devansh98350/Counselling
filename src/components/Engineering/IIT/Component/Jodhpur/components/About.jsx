import React from "react";

const About = () => {
  const sectionStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",     
    fontFamily: "Segoe UI",
    lineHeight: "1.6",
    textAlign: "justify",
    overflowX: "hidden",
  };

  const h2Style = {
    color: "rgb(0,0,255)",
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "48px",
  };

  const pStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const ulStyle = {
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  const tableStyle = {
    width: "80%",
    borderCollapse: "collapse",
    margin: "0 auto",
    border: "1px solid #ddd",
    fontSize: "1.2rem",
  };

  const tdStyle = {
    backgroundColor: "#f2f2f2",
    padding: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const thStyle = {
    backgroundColor: "#1d2f52",
    color: "#fff",
    textAlign: "left",
    padding: "8px",
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const th3Style = {
    marginLeft: "5%",
    fontSize: "24px",
    fontWeight: "700",
  };

  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  return (
    <div style={sectionStyle}>
      <section id="about">
        <h2 style={h2Style}>About IIT Jodhpur</h2>
        <p style={pStyle}>
          IIT Jodhpur, established under the Institute of Technology Act 2011 by the Ministry of Human Resource Development, is one of the eight new IITs. The institute offers 40 courses across 11 departments and 3 schools of study, including UG, PG, PG diploma, and PhD programs in Engineering, Management, and other streams. Its flagship courses are B.Tech and MBA.
        </p>
        <p style={pStyle}>
          Admissions to IIT Jodhpur are based on national-level entrance exams such as JEE Advanced, GATE, and CAT. In 2023, the highest package offered was INR 53 LPA, with an average package of INR 21.30 LPA. Top recruiters included Tata 1mg, Samsung, Oracle, Flipkart, Publicis Sapient, Mercedes Benz, and Adobe.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          IIT Jodhpur offers a variety of courses in streams like engineering, science, management, arts, humanities, and social sciences. Below is an overview of the courses and their fee structure:
        </p>

        <h3 style={th3Style}>Number of Courses</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree Course</th>
              <th style={thStyle}>Number of Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Sc.</td>
              <td style={tdStyle}>2</td>
            </tr>
            <tr>
              <td style={tdStyle}>MBA/PGDM</td>
              <td style={tdStyle}>10</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>9</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>14</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>12</td>
            </tr>
            <tr>
              <td style={tdStyle}>PG Diploma</td>
              <td style={tdStyle}>1</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.A.</td>
              <td style={tdStyle}>2</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>1</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>2</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>Fee Range</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree Course</th>
              <th style={thStyle}>Fee Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Sc.</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>MBA/PGDM</td>
              <td style={tdStyle}>8L - 9L</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>8L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>52K - 1L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>26K - 1L</td>
            </tr>
            <tr>
              <td style={tdStyle}>PG Diploma</td>
              <td style={tdStyle}>3L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.A.</td>
              <td style={tdStyle}>1L</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>50K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>1L</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>B.E./B.Tech Fee Details 2024</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Component</th>
              <th style={thStyle}>Amount (for 4 years)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Tuition Fee (For students with family income above ₹5L)</td>
              <td style={tdStyle}>₹8 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>One-time Payment (Admission Fee, Refundable Deposits, Convocation Fee)</td>
              <td style={tdStyle}>₹14.8 K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Other Fees</td>
              <td style={tdStyle}>₹2.18 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹10.33 L</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Jodhpur admission process involves registration, entrance exams, shortlisting, merit list release, counselling, and admission confirmation. Below is the step-by-step process:
        </p>
        <h3 style={th3Style}>IIT Jodhpur Admission Process 2024</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Complete the application form for the course-specific entrance exam (e.g., JEE Advanced for B.Tech, IIT JAM for M.Sc., CAT for MBA).
          </li>
          <li style={liStyle}>
            Appear for the entrance exam and participate in counselling rounds (if applicable).
          </li>
          <li style={liStyle}>
            Confirm admission by paying the required fee after selection.
          </li>
        </ul>

        <h3 style={th3Style}>Required Documents</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Entrance examination scorecard</li>
          <li style={liStyle}>Class 10+2 marks sheet</li>
          <li style={liStyle}>Graduation certificate</li>
          <li style={liStyle}>Transfer certificate</li>
          <li style={liStyle}>Migration certificate (if applicable)</li>
          <li style={liStyle}>Income certificate</li>
          <li style={liStyle}>Caste certificate (if applicable)</li>
        </ul>
      </section>
    </div>
  );
};

export default About;