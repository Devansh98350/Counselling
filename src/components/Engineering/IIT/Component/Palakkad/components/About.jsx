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
        <h2 style={h2Style}>About IIT Palakkad</h2>
        <p style={pStyle}>
          Established in 2015, IIT Palakkad is one of the third-generation IITs in India. It is currently mentored by IIT Madras and operates from two campuses: the temporary campus at Ahalia Integrated Campus in Kozhippara, Palakkad, and the permanent campus in Kanjikode. The permanent campus spans 500 acres in Pudussery village, Palakkad district, Kerala.
        </p>
        <p style={pStyle}>
          Recognized as an Institute of National Importance, IIT Palakkad offers B.Tech, M.Tech, MSc, MS, and PhD programs across various disciplines such as Chemistry, Civil Engineering, Humanities & Social Sciences, and Mechanical Engineering. The institute has signed study-abroad agreements with prestigious universities like Auckland University of Technology, Nanyang Technological University, and the University of California, San Diego, among others, allowing B.Tech final-year students to study one semester abroad.
        </p>
        <p style={pStyle}>
          In 2023, IIT Palakkad achieved a 90% placement rate, with 130 students placed out of 144 registered. The highest package offered was INR 46.15 LPA, while the average package stood at INR 13.95 LPA. Additionally, 38 PPOs were offered to students.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          IIT Palakkad offers a variety of programs across multiple disciplines. Below is an overview of the courses and their fee structure:
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
              <td style={tdStyle}>B.Tech</td>
              <td style={tdStyle}>5</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech</td>
              <td style={tdStyle}>6</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>11</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>3</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>6</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>Fee Structure</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree Course</th>
              <th style={thStyle}>Fee (in Lakhs)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech</td>
              <td style={tdStyle}>9L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech</td>
              <td style={tdStyle}>1L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>1.5L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>1L</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>1L</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>B.Tech Fee Details 2024</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Component</th>
              <th style={thStyle}>Amount (for 4 years)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Tuition Fee</td>
              <td style={tdStyle}>₹ 8 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hostel Fee</td>
              <td style={tdStyle}>₹ 2.25 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>One-time Payment</td>
              <td style={tdStyle}>₹ 7.5 K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹ 10.33 L</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Palakkad's admission process varies by program. Below is an overview of the steps involved:
        </p>
        <h3 style={th3Style}>How to Apply</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Visit the official website and fill out the online application form.
          </li>
          <li style={liStyle}>
            Upload all required documents and pay the application fee.
          </li>
          <li style={liStyle}>
            Submit the application form and keep a printout for records.
          </li>
        </ul>

        <h3 style={th3Style}>Admission Process</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>B.Tech:</strong> Apply for JEE (Main) via the NTA website, followed by JEE Advanced and JoSAA counseling.
          </li>
          <li style={liStyle}>
            <strong>M.Tech:</strong> Register for GATE and participate in CCMT counseling.
          </li>
          <li style={liStyle}>
            <strong>M.Sc.:</strong> Register for JAM and participate in JAM counseling.
          </li>
          <li style={liStyle}>
            <strong>Ph.D. and MS:</strong> Apply via the IIT Palakkad website and appear for the institute's written test and interview.
          </li>
        </ul>

        <h3 style={th3Style}>Seat Allocation</h3>
        <p style={pStyle}>
          Seat allocation for B.Tech is conducted through JoSAA counseling, while M.Tech and M.Sc. admissions are based on GATE and JAM counseling, respectively.
        </p>
      </section>
    </div>
  );
};

export default About;