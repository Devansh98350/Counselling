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
    marginBottom: "auto",
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

  const th3Style = { marginLeft: "5%", fontSize: "24px", fontWeight: "700" };
  const liStyle = { fontSize: "16px", lineHeight: "1.6" };

  return (
    <div style={sectionStyle}>
      <section id="about">
        <h2 style={h2Style}>About IIT BHU</h2>
        <ul style={ulStyle}>
    <li>
      History & Establishment: Founded as Banaras Engineering College (BENCO) in 1919. 
      Later merged with MINMET & TECHNO to form IT-BHU in 1968 and was officially designated as IIT BHU in 2012.
    </li>
    <li>
      Rankings: Ranked 531 in QS World University Rankings 2025 and 8th in The Week 2023 (Technical category).
    </li>
    <li>
      Courses & Admission: Offers B.Tech, B.Arch, M.Tech, Pharm, MSc, PhD, Integrated M.Tech (IMD), 
      and Integrated Dual Degree (IDD) programs. B.Tech admissions are based on JEE Advanced & JoSAA counselling.
    </li>
    <li>
      Placements 2024: On the first day of placements, the highest package offered was ₹1.68 crore per annum. 
      A total of 1,044 offers were received, including 310 pre-placement offers (PPOs). 
      Major recruiters included Qualcomm, Uber, Goldman Sachs, and Google.
    </li>
  </ul>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
    Indian Institute of Technology Varanasi offers programmes like Undergraduate, Postgraduate, 
    and PhD programmes, with 15 departments and 3 inter-disciplinary schools. Under these departments 
    and schools, the courses include B.Tech, B.Arch, M.Tech, M.Pharm, MSc, PhD, Integrated M.Tech (IMD), 
    and Integrated Dual Degree (IDD). IIT BHU Varanasi also offers 2 certification courses in online mode, 
    which include Multiphase Flows and Literature and Coping Skills. IIT BHU offers B.Tech, M.Tech, B.Arch, 
    Dual Degrees, M.Pharm, PhD, and many other courses at undergraduate, postgraduate, and doctoral levels.
  </p>

  <p style={pStyle}>
    IIT BHU courses are offered in streams of engineering and architecture, pharmacy, science, arts, 
    humanities, and social sciences. IIT BHU UG courses include B.Tech, B.Arch, and B.Tech M.Tech, while 
    IIT BHU Varanasi PG courses include M.Tech and M.Pharm. Candidates willing to get admission must take 
    part in the IIT Varanasi admissions 2024 process before the last date of application. To apply for 
    these courses, candidates must fulfill the basic eligibility criteria set by the institute. Candidates 
    can refer to the information below to know about IIT BHU popular programmes, IIT Varanasi eligibility, 
    and IIT BHU courses and fees.
  </p>
  
        <h3 style={th3Style}>Course Breakdown</h3>
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <table style={tableStyle}>
        <thead>
            <tr>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Number of Courses</th>
            </tr>
        </thead>
        <tbody>
            {[
            { course: "B.E./B.Tech", count: 24 },
            { course: "M.Pharma", count: 5 },
            { course: "M.E./M.Tech", count: 51 },
            { course: "M.Sc.", count: 2 },
            { course: "B.Arch", count: 1 },
            { course: "Ph.D", count: 2 },
            ].map((row, index) => (
            <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.count}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
        
        <br></br>
        <table style={tableStyle}>
        <thead>
            <tr>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Eligibility Criteria</th>
            </tr>
        </thead>
        <tbody>
            {[
            { course: "B.E./B.Tech", criteria: "10+2 with a minimum of 75% marks + JEE Advanced" },
            { course: "M.Pharma", criteria: "Passed B.Pharma with at least 55% marks" },
            { course: "M.E./M.Tech", criteria: "10+2 with 75% marks + Graduation with 60% marks + GATE, JEE Main, JEE Advanced, ICAR AIEEA, GPAT" },
            { course: "M.Sc.", criteria: "IIT JAM, CUET-PG" },
            { course: "B.Arch", criteria: "10+2 with JEE Advanced + For SC/ST/PWD candidates, 10% relaxation in marks" },
            { course: "Ph.D", criteria: "Master's degree in the relevant discipline with 60% marks or 6.0 CPI OR Bachelor's degree with 75% marks or 7.5 CPI" },
            ].map((row, index) => (
            <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.criteria}</td>
            </tr>
            ))}
        </tbody>
        </table>

        <h3 style={th3Style}>Fee Breakdown</h3>
        <table style={tableStyle}>
        <thead>
            <tr>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Tuition Fee</th>
            <th style={thStyle}>Hostel Fee (Without Mess)</th>
            <th style={thStyle}>One-Time Fee</th>
            <th style={thStyle}>Total Mess Fee</th>
            </tr>
        </thead>
        <tbody>
            {[
            { course: "B.Tech", tuition: "INR 3,17,464 – INR 8,50,800", hostel: "INR 32,000 – INR 39,500", oneTime: "INR 14,750 – INR 15,250", mess: "NA" },
            { course: "M.Tech", tuition: "INR 40,000", hostel: "INR 17,000", oneTime: "INR 11,250", mess: "NA" },
            { course: "B.Arch", tuition: "INR 3,96,830", hostel: "INR 39,500", oneTime: "INR 15,250", mess: "NA" },
            { course: "M.Pharma", tuition: "INR 40,000", hostel: "INR 17,000", oneTime: "INR 11,250", mess: "NA" },
            { course: "M.Sc.", tuition: "INR 40,000", hostel: "INR 17,000", oneTime: "INR 11,250", mess: "NA" },
            ].map((row, index) => (
            <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.tuition}</td>
                <td style={tdStyle}>{row.hostel}</td>
                <td style={tdStyle}>{row.oneTime}</td>
                <td style={tdStyle}>{row.mess}</td>
            </tr>
            ))}
        </tbody>
        </table>

        <br></br>
        <table style={tableStyle}>
        <thead>
            <tr>
            <th style={thStyle}>Course</th>
            <th style={thStyle}>Tuition Fees</th>
            <th style={thStyle}>Eligibility</th>
            <th style={thStyle}>Entrance Exams</th>
            </tr>
        </thead>
        <tbody>
            {[
            { course: "B.E./B.Tech (24 courses)", tuition: "₹8L - ₹10L", eligibility: "10+2 with 75% marks", exams: "JEE Main, JEE Advanced" },
            { course: "M.Pharma (5 courses)", tuition: "₹40K", eligibility: "-", exams: "GPAT" },
            { course: "M.E./M.Tech (51 courses)", tuition: "₹40K - ₹10L", eligibility: "10+2 with 75% marks, Graduation with 60% marks", exams: "GATE, JEE Main + 3 More" },
            { course: "M.Sc. (2 courses)", tuition: "₹40K", eligibility: "-", exams: "IIT JAM, CUET-PG" },
            { course: "B.Arch (1 course)", tuition: "₹10L", eligibility: "10+2 with 50% marks", exams: "JEE Advanced" },
            { course: "Ph.D. (2 courses)", tuition: "₹88.4K", eligibility: "-", exams: "-" },
            ].map((row, index) => (
            <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.tuition}</td>
                <td style={tdStyle}>{row.eligibility}</td>
                <td style={tdStyle}>{row.exams}</td>
            </tr>
            ))}
        </tbody>
        </table>

      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p>
            Indian Institute of Technology Banaras Hindu University, Varanasi (IIT BHU) offers admission to B.Tech, M.Tech, dual degrees, M.Pharma, and many other courses. The institute conducts B.Tech admissions based on valid JEE Advanced scores, and candidates must register for the JoSAA counselling process to secure a seat at IIT BHU. For M.Tech admissions, selection is based on the candidate’s performance in GATE. Similarly, the selection process for M.Pharm requires valid GPAT scores. IIT BHU PhD admissions are conducted based on GATE, GPAT, NET LS, CSIR, UGC NET JRF, ICMR JRF, DBT-JRF, or DST-INSPIRE fellowship. Candidates must meet the eligibility criteria set by the institute to secure admission. 
        </p>

        <p>
            The IIT BHU admission process for 2024 requires candidates to visit the official website of the respective entrance examination, fill out the application form with all necessary details, scan and upload the required documents, and finally pay the application fees. For PhD courses, candidates must visit the official website of IIT BHU and complete the application form there. At the undergraduate level, IIT BHU offers B.Tech, B.Arch, and B.Tech + M.Tech programs with course durations ranging from 4 to 5 years. The eligibility criteria and seat intake details are provided in the table below.
        </p>
        <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Course</th>
          <th style={thStyle}>Seat Intake</th>
          <th style={thStyle}>Eligibility Criteria</th>
        </tr>
      </thead>
      <tbody>
        {[
          { course: "B.Tech", seatIntake: "75 - 156", eligibility: "10+2 with 75% marks + JEE Advanced" },
          { course: "B.Arch", seatIntake: "26", eligibility: "10+2 qualified + JEE Advanced" },
          { course: "B.Tech + M.Tech", seatIntake: "17 - 52", eligibility: "10+2 qualified + JEE Advanced" },
        ].map((row, index) => (
          <tr key={index}>
            <td style={tdStyle}>{row.course}</td>
            <td style={tdStyle}>{row.seatIntake}</td>
            <td style={tdStyle}>{row.eligibility}</td>
          </tr>
        ))}
      </tbody>
    </table>

        <h3 style={th3Style}>Eligibility and Selection Criteria</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.Tech</td>
                <td style={tdStyle}>Passed class 12 with PCM, 75% marks</td>
                <td style={tdStyle}>JEE Advanced + JoSAA Counseling</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Tech</td>
                <td style={tdStyle}>B.Tech with 60% marks</td>
                <td style={tdStyle}>GATE + COAP Counseling</td>
              </tr>
              <tr>
                <td style={tdStyle}>MBA</td>
                <td style={tdStyle}>Bachelor's degree with 60% marks</td>
                <td style={tdStyle}>CAT + Interview</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Sc</td>
                <td style={tdStyle}>B.Sc with 55% marks</td>
                <td style={tdStyle}>IIT JAM</td>
              </tr>
            </tbody>
          </table>
        </div>

      
        <h3 style ={th3Style}>IIT BHU Varanasi UG Admission Process</h3>
      <ul>
        <li>The candidate must meet the IIT BHU Varanasi eligibility criteria.</li>
        <li>The candidate must appear and qualify for the JEE Advanced examination.</li>
        <li>If the candidate qualifies JEE Advanced, they must register for JoSAA counselling on the official website.</li>
        <li>The candidate must select IIT BHU Varanasi as the preferred college in the counselling process.</li>
        <li>Candidates must also qualify for the Architecture Aptitude Test (AAT) to enroll in the B.Arch programme.</li>
        <li>Seats will be allotted to candidates based on their performance in the entrance examination.</li>
        <li>Finally, the candidate must submit documents for verification and pay the IIT BHU Varanasi fees.</li>
      </ul>
      </section>
    </div>
  );
};

export default About;
