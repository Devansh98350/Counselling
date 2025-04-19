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

  return (
    <div style={sectionStyle}>
      <section id="about">
        <h2 style={h2Style}>About IIT Tirupati</h2>
        <p style={pStyle}>
          Established in 2015 by the Ministry of Education, Government of India, IIT Tirupati is an autonomous technical university and an Institute of National Importance. Located on the Yerpedu-Venkatagiri Highway, 22 km from Tirupati Town, it started functioning with the mentorship of IIT Madras. IIT Tirupati is one of the fastest-growing 3rd generation IITs, emphasizing research, innovation, and quality education.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Courses and Fees</h2>
        <p style={pStyle}>
          IIT Tirupati offers a variety of courses across multiple disciplines. Below is an overview of the number of courses and their fee structure:
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>Number of Courses</th>
              <th style={thStyle}>Fee (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>6</td>
              <td style={tdStyle}>8L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>9</td>
              <td style={tdStyle}>10K-15K</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>12</td>
              <td style={tdStyle}>20K</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.A.</td>
              <td style={tdStyle}>1</td>
              <td style={tdStyle}>60K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>5</td>
              <td style={tdStyle}>15K</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ marginTop: "20px", fontSize: "24px", fontWeight: "700" }}>
          B.E./B.Tech Fee Details
        </h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Component</th>
              <th style={thStyle}>Amount (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>
                Tuition Fee (For students with parental income above 5L)
              </td>
              <td style={tdStyle}>₹ 8 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Hostel Fee (Includes Meal Plan, varies by semester)
              </td>
              <td style={tdStyle}>₹ 2.16 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                One-time Payment (Includes admission, library, alumni, and other
                fees)
              </td>
              <td style={tdStyle}>₹ 8.55 K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹ 10.25 L</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Tirupati admission to more than 59 courses is conducted via
          national-level entrance examinations. The institute offers admissions
          to B.Tech, M.Tech, M.Sc, MS, and many other courses. Candidates must
          meet the eligibility criteria for admission. For B.Tech, candidates
          must appear for JEE Advanced, while M.Sc. admissions are based on IIT
          JAM scores. M.Tech, M.S, and Ph.D. admissions require GATE scores,
          with additional options like UGC/CSIR NET/NBHM for Ph.D.
        </p>
        <h3 style={{ marginTop: "20px", fontSize: "24px", fontWeight: "700" }}>
          IIT Tirupati Admission Process 2024
        </h3>
        <ul style={ulStyle}>
          <li style={pStyle}>
            <strong>Application Process:</strong>
            <ul style={ulStyle}>
              <li>Register for the relevant entrance exam (e.g., JEE Main & Advanced for B.Tech, GATE for M.Tech, IIT JAM for M.Sc.).</li>
              <li>Qualifying candidates must apply on IIT Tirupati’s official website.</li>
            </ul>
          </li>
          <li style={pStyle}>
            <strong>Selection Process:</strong>
            <ul style={ulStyle}>
              <li>B.Tech: Admission through JEE Advanced + JoSAA Counselling.</li>
              <li>M.Tech: Admission via GATE + COAP Counselling.</li>
              <li>M.Sc.: Admission via IIT JAM + CCMN Counselling.</li>
            </ul>
          </li>
          <li style={pStyle}>
            <strong>Cutoff, Counselling & Admission Confirmation:</strong>
            <ul style={ulStyle}>
              <li>Cutoff lists are released by respective counselling bodies.</li>
              <li>Shortlisted candidates attend counselling for seat allotment.</li>
              <li>Final admission is confirmed upon fee payment.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;