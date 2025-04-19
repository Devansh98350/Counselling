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
        <h2 style={h2Style}>About IIT Jammu</h2>
        <p style={pStyle}>
          IIT Jammu, established in 2016 by the Ministry of Human Resource Development (MHRD), Government of India, is one of the 3rd generation IITs. Initially mentored by IIT Delhi, IIT Jammu shifted its operations to the main campus in Jagti, Nagrota, in 2018. The State Government of Jammu and Kashmir provided 400 acres of land for the permanent campus. 
        </p>
        <p style={pStyle}>
          Currently, IIT Jammu offers UG, PG, Ph.D., and other programs across 11 departments in fields like Engineering, Physics, Chemistry, and more. The flagship program is the 4-year B.Tech, which admits students based on JEE Advanced scores. The institute also accepts GATE and IIT JAM scores for M.Tech and M.Sc. programs, respectively. Admissions are based on entrance exams, written tests, and interviews.
        </p>
        <p style={pStyle}>
          The Career Development Centre at IIT Jammu provides placement and internship opportunities. In 2023, the highest salary package offered was INR 53 LPA. The institute also offers scholarships for UG, PG, and doctoral students. The campus is equipped with modern facilities, including a library, laboratories, and separate accommodations for boys and girls.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Courses and Fee Structure</h2>
        <p style={pStyle}>
          IIT Jammu offers a variety of courses, including B.Tech, M.Sc., M.Tech, Ph.D., and MS programs. These courses are available in fields like Engineering, Sciences, Arts, and Humanities. The duration of courses ranges from 2 to 6 years, and the fee structure varies by program. Below is an overview of the courses and fees:
        </p>
        <h3 style={th3Style}>Number of Courses</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>No. of Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>8</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>2</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>8</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>10</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>1</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>Fee Breakdown</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>₹8L - ₹9L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc.</td>
              <td style={tdStyle}>₹1L - ₹1.5L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E./M.Tech</td>
              <td style={tdStyle}>₹80K - ₹5.5L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>₹60K</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>--</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>B.E./B.Tech Fee Details (2024)</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Components</th>
              <th style={thStyle}>Amount (for 4 years)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Tuition</td>
              <td style={tdStyle}>
                ₹8L (For parental income above ₹5L) <br />
                ₹2.66L (For parental income between ₹1L to ₹5L)
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Hostel</td>
              <td style={tdStyle}>₹2.2L</td>
            </tr>
            <tr>
              <td style={tdStyle}>One-time Payment</td>
              <td style={tdStyle}>₹16.3K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Other Fees</td>
              <td style={tdStyle}>₹12.72K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹10.49L</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Jammu offers admissions to B.Tech, M.Tech, M.Sc., and Ph.D. programs. B.Tech admissions are based on JEE Advanced scores through JoSAA counseling. M.Tech admissions require GATE scores, followed by a written test and interview. M.Sc. admissions are based on JAM scores, while Ph.D. admissions involve a departmental test, academic performance review, work experience, and interview.
        </p>
        <p style={pStyle}>
          IIT Jammu also offers a dual-degree B.Tech-MBA program in collaboration with IIM Jammu, allowing students to transition to MBA after the 8th semester without a CAT score.
        </p>

        <h3 style={th3Style}>Steps for IIT Jammu Admission Process 2024</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Submit the online application form for the course-specific entrance exam.
          </li>
          <li style={liStyle}>
            Appear for the entrance exam and other selection rounds (if applicable).
          </li>
          <li style={liStyle}>
            Participate in the counseling process for final seat allotment.
          </li>
          <li style={liStyle}>
            Confirm admission by submitting the required fee.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;