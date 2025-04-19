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
        <h2 style={h2Style}>About IIT Bhilai</h2>
        <p style={pStyle}>
          Established in 2016 by the Ministry of Human Resource Development, IIT Bhilai is one of the 3rd generation IITs. The institute offers UG, PG, PG diploma, and PhD programs across Engineering, Science, and other streams through its 11 departments. The eco-friendly campus spans 455 acres in Bhilai, Chhattisgarh.
        </p>
        <p style={pStyle}>
          IIT Bhilai's flagship programs include B.Tech and M.Tech, with specializations in Computer Science Engineering, Electrical Engineering, Mechanical Engineering, Chemistry, Physics, and Mathematics and Computing. In 2020, the institute introduced a new discipline, Data Science and Artificial Intelligence, in its B.Tech program. Admissions are based on national-level entrance exams like JEE Advanced, GATE, and IIT JAM.
        </p>
        <p style={pStyle}>
          During the 2023 placements, IIT Bhilai achieved 100% placements in M.Tech, CSE, EE, and DSAI branches. The highest package recorded was INR 48.64 LPA, with an average package of INR 14 LPA. Over 105 recruiters visited the campus, including the first international recruiter, Accenture (Japan).
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Courses and Fee Structure</h2>
        <p style={pStyle}>
          IIT Bhilai offers a variety of programs, including B.Tech, M.Tech, M.Sc., and Ph.D., across multiple disciplines. Below is an overview of the courses and their fee structure:
        </p>
        <h3 style={th3Style}>Number of Courses</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>Number of Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>7</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>3</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>9</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>3</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>Fee Breakdown</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>Fee Range</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>₹8L - ₹9L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>₹50K - ₹1.3L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>₹50K - ₹1L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>₹1.2L</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>B.E./B.Tech Fee Details</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Component</th>
              <th style={thStyle}>Amount (for 4 years)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Tuition</td>
              <td style={tdStyle}>₹8 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hostel (Includes Meal Plan & other components)</td>
              <td style={tdStyle}>₹2.95 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>One-time Payment (Includes Caution Deposit, Admission Fee, ID Card, Library Fee, etc.)</td>
              <td style={tdStyle}>₹14 K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Other Fees</td>
              <td style={tdStyle}>₹93 K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹12.02 L</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Bhilai admissions are based on national-level entrance exams. The institute offers B.Tech, M.Tech, M.Sc., and Ph.D. programs. Below is the admission process for B.Tech:
        </p>
        <h3 style={th3Style}>B.Tech Admission Process</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Fill out and submit the JEE online application form for IIT Bhilai admissions.</li>
          <li style={liStyle}>Appear for the JEE Main and JEE Advanced examinations conducted by NTA.</li>
          <li style={liStyle}>Students clearing JEE Main are eligible to appear for JEE Advanced.</li>
          <li style={liStyle}>Register for JoSAA counselling on the official JoSAA website.</li>
          <li style={liStyle}>Choose IIT Bhilai as the preferred college during choice filling.</li>
          <li style={liStyle}>Admissions are offered based on JoSAA registration, counselling participation, and filled choices.</li>
          <li style={liStyle}>Verify documents and pay the IIT Bhilai B.Tech fees to confirm/block the seat.</li>
        </ul>
        <p style={pStyle}>
          For other programs like M.Tech and M.Sc., admissions are based on GATE and IIT JAM scores, respectively.
        </p>
      </section>
    </div>
  );
};

export default About;