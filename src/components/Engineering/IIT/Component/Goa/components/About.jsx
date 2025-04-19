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

  return (
    <div style={sectionStyle}>
      <section id="about">
        <h2 style={h2Style}>About IIT Goa</h2>
        <p style={pStyle}>
          Established in 2016, the Indian Institute of Technology Goa (IIT Goa) is the youngest autonomous public university located in Goa. Currently, IIT Goa operates from its temporary campus at GEC, Farmagudi, Ponda, while its permanent campus is under construction in Sattari, North Goa. IIT Bombay served as the mentor for IIT Goa during its initial three years.
        </p>
        <p style={pStyle}>
          IIT Goa offers undergraduate, postgraduate, and doctoral programs. The courses include B.Tech at the UG level, M.Tech at the PG level, and Ph.D. at the doctoral level. Admission to these programs is based on national-level entrance exams such as JEE Advanced for B.Tech and GATE for M.Tech. Candidates must meet the eligibility criteria and apply online through the official website of IIT Goa.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          IIT Goa offers a variety of programs across multiple disciplines. Below is an overview of the courses and their fee structure:
        </p>

        <h3 style={th3Style}>Degree-wise Course Offerings</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>Number of Courses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech</td>
              <td style={tdStyle}>4</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech</td>
              <td style={tdStyle}>3</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>8</td>
            </tr>
            <tr>
              <td style={tdStyle}>Executive PG Diploma in ERP</td>
              <td style={tdStyle}>1</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>Degree-wise Fee Structure</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Degree</th>
              <th style={thStyle}>Total Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech</td>
              <td style={tdStyle}>₹ 8 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech</td>
              <td style={tdStyle}>₹ 1 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ph.D.</td>
              <td style={tdStyle}>₹ 1 L - 1.5 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Executive PG Diploma in ERP</td>
              <td style={tdStyle}>₹ 4.15 L (Tuition Fee)</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>B.E. / B.Tech Fee Details 2024</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Fee Component</th>
              <th style={thStyle}>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Tuition</td>
              <td style={tdStyle}>₹ 8 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>Hostel (Includes Meal Plan & Other Components)</td>
              <td style={tdStyle}>₹ 71K</td>
            </tr>
            <tr>
              <td style={tdStyle}>One-time Payment (Admission, Security Deposits, Certificates, etc.)</td>
              <td style={tdStyle}>₹ 7K</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹ 8.78 L</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Goa admission to all its UG and PG courses is offered through national-level entrance examinations. The institute accepts JEE Advanced scores for admission to its flagship B.Tech program. Candidates seeking admission must qualify for JEE Main to appear for the JEE Advanced exam, followed by the JoSAA Counseling seat allotment process.
        </p>
        <p style={pStyle}>
          For M.Tech programs, admission is based on GATE scores followed by COAP counseling. Ph.D. admissions require a master's degree in a relevant discipline, and shortlisting is done based on an institute-based written test and interview round.
        </p>

        <h3 style={th3Style}>How to Apply for IIT Goa Admission</h3>
        <ul style={ulStyle}>
          <li>Visit the official website of IIT Goa and apply online.</li>
          <li>Register on the institute website with a valid email ID.</li>
          <li>Select the course and fill out separate application forms for different programs.</li>
          <li>Fill in the required details and save the form.</li>
          <li>Upload a recent passport-size photograph, mark sheets, and other documents.</li>
          <li>Pay the application fee and submit the application form.</li>
        </ul>

        <h3 style={th3Style}>IIT Goa Admission Process 2024</h3>
        <ul style={ulStyle}>
          <li>
            <strong>Application Submission:</strong> Apply for the course-specific entrance exam (e.g., JEE Main, GATE).
          </li>
          <li>
            <strong>Selection & Merit List:</strong> Appear for the entrance exam and selection rounds. Meet the IIT Goa cutoff and participate in counseling for final seat allotment.
          </li>
          <li>
            <strong>Admission Confirmation:</strong> Pay the required fee to confirm admission.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;