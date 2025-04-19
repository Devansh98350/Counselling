// iit_indore/About.jsx
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

  const tableStyle = {
    width: "80%",
    borderCollapse: "collapse",
    margin: "20px auto",
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
        <h2 style = {h2Style}>About IIT Indore</h2>
        <p style={pStyle}>
          Indian Institute of Technology Indore, popularly known as IIT Indore or
          IITI, was established in 2009. IIT Indore was founded by the Ministry of
          Education, Government of India, and is an institute of national importance.
          Located in Simrol, Indore, Madhya Pradesh, IIT Indore is one of the eight
          new IITs initiated by the Government of India.
        </p>
        <p style={pStyle}>
          IIT Indore has secured the 14th rank in the NIRF 2023 Rankings under the
          'Engineering' category. QS World University Ranking 2025 has also ranked
          IIT Indore 477.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          Indian Institute of Technology, Indore offers B.Tech, M.Tech, Dual Degrees, 
          M.Sc., MS, and Ph.D. courses at the undergraduate, postgraduate, and doctoral levels. 
          All the IIT Indore courses are offered in full-time mode except for 4 courses which 
          are offered in online mode. IIT Indore UG courses include B.Tech and Dual Degree, 
          while MS, M.Tech, and M.Sc. are IIT Indore PG courses.
        </p>
        <p style={pStyle}>
          The IIT Indore courses are offered in various specializations in the Ph.D. program. 
          The IIT Indore fee structure is different for different courses. The candidate must 
          meet the eligibility criteria of IIT Indore to apply for the courses. 
          Here are some famous degrees and their number of courses provided: 
        </p>  
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degrees</th>
              <th style={thStyle}>No of Courses</th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr>
              <td style={tdStyle}>B.E / B.Tech</td>
              <td style={tdStyle}>15</td>
            </tr>
            <tr>
              <td style={tdStyle}>Msc</td>
              <td style={tdStyle}>10</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E. / M.Tech</td>
              <td style={tdStyle}>21</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>6</td>
            </tr>
            <tr>
              <td style={tdStyle}>PHD</td>
              <td style={tdStyle}>2</td>
            </tr>
          </tbody>
        </table>

        <p style={pStyle}>Student can check the exam accepted by the IIT Indore of its degree: </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degrees</th>
              <th style={thStyle}>Exams</th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr>
              <td style={tdStyle}>B.E / B.Tech</td>
              <td style={tdStyle}>JEE MAIN, JEE ADVANCE </td>
            </tr>
            <tr>
              <td style={tdStyle}>Msc</td>
              <td style={tdStyle}>GATE, IIT JAM </td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E. / M.Tech</td>
              <td style={tdStyle}>GATE, JEE MAIN, JEE ADVANCE </td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>JAM </td>
            </tr>
            <tr>
              <td style={tdStyle}>PHD</td>
              <td style={tdStyle}>GATE, UGC NET, CSIR NET</td>
            </tr>
          </tbody>
        </table>

        <p style = {pStyle}>Here is the tuition fee of some of the famous degrees provide by the IIT Indore: </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degrees</th>
              <th style={thStyle}>Tuition Fee</th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr>
              <td style={tdStyle}>B.E / B.Tech</td>
              <td style={tdStyle}>8L </td>
            </tr>
            <tr>
              <td style={tdStyle}>Msc</td>
              <td style={tdStyle}>50K - 2L </td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E. / M.Tech</td>
              <td style={tdStyle}>25K - 2.78L</td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>30K</td>
            </tr>
            <tr>
              <td style={tdStyle}>PHD</td>
              <td style={tdStyle}>2.5L</td>
            </tr>
          </tbody>
        </table>

      <h2 style ={h2Style}>Fee Structure</h2>
      <p style = {pStyle}>IIT Indore fee structure for different programmes lies between INR 20,000 and INR 800,000. While candidates can pay the fee annually or semester-wise depending on ask during admissions, there are a few components which are paid only once, namely one-time fee. The below table mentions the total tuition fee that students are required to pay at IIT Indore for all courses. Students who wish to take out the annual or semester fee amount can divide the amount by the number of years the course is valid for (for annual fee) and by double the number of years the course is valid for (to calculate the semester-wise fee). Check IIT Indore fees below: </p>
      <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degrees</th>
              <th style={thStyle}>Tuition Fee</th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr>
              <td style={tdStyle}>B.E / B.Tech</td>
              <td style={tdStyle}>8L </td>
            </tr>
            <tr>
              <td style={tdStyle}>Msc</td>
              <td style={tdStyle}>20 K-1.56 L  </td>
            </tr>
            <tr>
              <td style={tdStyle}>M.E. / M.Tech</td>
              <td style={tdStyle}>28 K-1.56 L </td>
            </tr>
            <tr>
              <td style={tdStyle}>MS</td>
              <td style={tdStyle}>28K </td>
            </tr>
            <tr>
              <td style={tdStyle}>PHD</td>
              <td style={tdStyle}>2.41L</td>
            </tr>
          </tbody>
        </table>     

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Components</th>
              <th style={thStyle}>Amount (for 4 years) </th>
            </tr>
          </thead>
          <tbody>
            {}
            <tr>
              <td style={tdStyle}>Tuition 
The tuition fee is calculated on the basis of 1st semester. Actual amount may vary. 
</td>
              <td style={tdStyle}>8L </td>
            </tr>
            <tr>
              <td style={tdStyle}>Hostel 
The fees might include components other than hostel fees.

</td>
              <td style={tdStyle}>2.68 L  </td>
            </tr>
            <tr>
              <td style={tdStyle}>One-time payment includes Refundable Security Deposits, Admission Fee, Grade Sheets Fee, Smart Card fee, Medical Examination Fee, Degree Certificate Fee, Convocation Fee, Alumni Association Membership</td>
              <td style={tdStyle}>18.1K </td>
            </tr>
            <tr>
              <td style={tdStyle}>Other Fees</td>
              <td style={tdStyle}>50.4K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>  
              <td style={tdStyle}>11.37L</td>
            </tr>
          </tbody>
        </table> 
        <h4>*These are estimated fees information. Actual values may differ.</h4>
      </section>

      <section id="admission">
      <h2 style={h2Style}>Admission</h2>
      <p style = {pStyle}>Indian Institute of Technology, Indore (IITI) provides admissions to B.Tech. Dual Degree, MS, M.Tech., M.Sc., and Ph.D.. The candidates should appear in the relevant entrance examination before applying for admission at IIT Indore. Admission to B.Tech. Is based on the scores of JEE Mains and JEE Advanced. Then the qualified candidates have to attend the JoSAA counselling process. </p>
      <p style = {pStyle}>Apart from the B.Tech program, IIT Indore also offers UG, PG, and Doctoral courses, namely B.Tech, M.Tech, MSc, and PhD. Admission to various UG and PG programs at IIT Indore is done through national entrance exams. Admissions to IIT Indore are determined by several national entrance tests, including JEE Main, JEE Advanced, GATE, IIT JAM, UGC NET, and CSIR NET, as well as counseling and in-person interviews.  </p>
      <p style = {pStyle}>IIT Indore M.Tech admissions are GATE score-based and seats are allocated as per COAP counselling. IIT Indore Ph.D. admissions are done based on an entrance exam conducted by the institute followed by a PI round. IIT Indore Ph.D. program candidates are also evaluated with valid GATE, CEED, UGC, or CSIR exam scores.</p>
      <p style = {pStyle}>IIT Indore admissions to PG programmes are based on the marks secured by the candidate in GATE or JAM. For IIT Indore admissions, Candidates are shortlisted based on the qualifying entrance examination scores and past academic records. The candidate must meet the IIT Indore eligibility criteria before applying for the courses. The details of IIT Indore admissions are mentioned below. </p>
      <p style={pStyle}> How to fill out the IIT Indore application form 2024?</p>
        <ul>
          <li>The candidates can apply for admission by visiting the official college website.</li>
          <li>A unique application number will be assigned to each applicant.</li>
          <li>Applicants should fill out the IIT Indore application form with valid required information.</li>
          <li>The candidate should submit the required documents.</li>
          <li>Then submit the application form after paying the fees.</li>
        </ul>
      <p style = {pStyle}>Eligibility & Selection</p>
      <p style = {pStyle}>While merit is the basic eligibility for all the courses offered at IIT Indore, admission to each one of them is entrance exam-based. The institute considers the scores of various entrance exams conducted at the national level. The table below lists the entrance exams that are valid for IIT Indore admissions 2024 to various courses:</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Course Name</th>
            <th style={thStyle}>Eligibility</th>
            <th style={thStyle}>Selection Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>B.Tech</td>
            <td style={tdStyle}>
              Class 12 in Science stream with Chemistry, Physics, and Mathematics as compulsory subjects
            </td>
            <td style={tdStyle}>JEE Main + JEE Advanced + JOSAA Counselling</td>
          </tr>
          <tr>
            <td style={tdStyle}>M.Tech</td>
            <td style={tdStyle}>B.Tech or BE/MCA/ MSc/AMIETE with 60% aggregate or 6.0 CPI</td>
            <td style={tdStyle}>GATE + COAP Counselling</td>
          </tr>
          <tr>
            <td style={tdStyle}>MSc</td>
            <td style={tdStyle}>Bachelor's degree in the Science stream with a minimum of 55% aggregate</td>
            <td style={tdStyle}>IIT-JAM + CCMN counselling</td>
          </tr>
          <tr>
            <td style={tdStyle}>PhD</td>
            <td style={tdStyle}>
              Master's degree in a relevant discipline with a minimum of 60% to 70% aggregate or 6.0 to 7.0 CPI
            </td>
            <td style={tdStyle}>GATE/NET/CEED/INSPIRE</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
  );
};

export default About;
