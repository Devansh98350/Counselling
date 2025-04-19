import React from "react";

const Placement = () => {
  const sectionStyle = {
    padding: "20px",
    // paddingTop: "calc(20px + 50px)",
    backgroundColor: "#ffffff",
    fontFamily: "Segoe UI",
    lineHeight: "1.6",
    textAlign: "justify",
    overflowX: "hidden",
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

  const pStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const h2Style = {
    color: "rgb(0,0,255)",
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "48px",
  };

  const th3Style = {
    marginLeft: "5%",
    fontSize: "24px",
    fontWeight: "700",
  };

  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  return (
    <section id="placement" style={sectionStyle}>
      <h2 style={h2Style}>Placement</h2>
      <p style={pStyle}>
        Indian Institute of Technology (IIT), Ropar has an Office of Career Services
        (OCS) that handles the entire campus placement drive. Every year various
        organizations like HP, Microsoft, Deshaw, Amazon and Accolite participate in
        the IIT Ropar placement drive. IIT Ropar placements drive programme will be
        conducted every year. According to the NIRF 2023 data provided, a total of 229
        students from the UG were placed in the campus drive, whereas 108 students
        were placed in the PG 2-year programme. <br />
        IIT Ropar placement median salary package for UG 4-year course is found to be
        Rs. 17, 14,000. Whereas, the median salary package for the PG 5-year integrated
        programme stood at Rs. 35, 25,000. IIT Ropar placements are offered by various
        companies with a good package. The placement cell conducts training sessions
        for students before going for the IIT Ropar placements programme. <br />

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>IIT Ropar Placement Procedure</strong>
        </h3>
        <ul>
          {[
            "The IIT Ropar placement cell invites the top recruiters.",
            "The IITRPR and recruiters will schedule the placement drive programme.",
            "The company will organise the pre-placement talks.",
            "Interested candidates should send their resume",
            "he recruiter will begin the written test, group discussion, and interview process.",
            "The list of selected candidates will be sent to the IIT Ropar placement cell. ",
          ].map((list, index) => (
            <li key={index} style={liStyle}>
              {list}
            </li>
          ))}
        </ul>

        IIT Ropar Placements 2024 is ongoing and the average package so far stood at
        INR 22.92 LPA. Till now, a total of 254 students were placed out of 452 students.
        In the previous year, IIT Ropar recorded 82.21% placements for the B.Tech batch
        & 56.44% placements for M.Tech. Some of the notable recruiters of IIT Ropar
        Placements included Goldman Sachs, Amazon, Infosys etc. Apart from this, the
        average package offered during IIT Ropar PG placements 2024 stood at INR
        11.79 LPA. Other than this, the placement rate recorded during IIT Ropar PG
        placements 2024 stood at 56.3%.

        <ul>
          <li style={liStyle}>A rise of over 6% was witnessed in the B.Tech average package offered in 2024
            as compared with 2023</li>
          <li style={liStyle}>Fall of over 9% was witnessed in the B.Tech placement rate recorded in 2024
            as compared with 2023</li>
        </ul>
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>B.Tech Placement Statistics (2023)</th>
              <th style={thStyle}>B.Tech Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Average package", "INR 20.99 LPA", "INR 22.27 LPA"],
              ["Placement rate", "82.21%", "73.15%"],
              ["Students registered", "281", "298"],
              ["Students placed", "231", "218"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <br />

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>M.Tech / MSc Placement Statistics (2023)</th>
              <th style={thStyle}>M.Tech / MSc Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Average package", "INR 13.31 LPA", "INR 11.79"],
              ["Placement rate", "56.44%", "56.3%"],
              ["Students registered", "163", "135"],
              ["Students placed", "92", "76"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }} id="2024">
        <strong>IIT Ropar Average Package 2024</strong>
      </h3>
      <p style={pStyle}>The course-wise IIT Ropar average package 2024 offered for B.Tech and PG
        courses is presented below:</p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Average Package (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech", "INR 22.27 LPA"],
              ["M.Tech / MSc", "INR 11.79"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>Further, an improving trend was witnessed in the average package offered over
        the past three years during IIT Ropar B.Tech placements, which is presented
        below:
        The course-wise average salary trends witnessed during IIT Ropar placements
        over the past three years are presented below: </p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Average Package (2022)</th>
              <th style={thStyle}>Average Package (2023)</th>
              <th style={thStyle}>Average Package (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech", "INR 20.24 LPA", "INR 20.99 LPA", "INR 22.27 LPA"],
              ["M.Tech/MSc", "NA", "INR 13.31 LPA", "INR 11.79 LPA"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Ropar Top Recruiters </strong>
      </h3>
      <p style={pStyle}>The list of top recruiters during IIT Ropar placements in recent past is presented
        below: </p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <th style={thStyle} colSpan={2}>IIT Ropar Top Recruiters</th>
          </thead>
          <tbody>
            {[
              ["Google", "Amazon"],
              ["Uber", "Microsoft"],
              ["Deloitte", "Intel"],
              ["Oracle", "Zomato"],
              ["Paytm", "Wipro"],
              ["Infosys", "Jio"],
              ["GoldmanSachs", "Airtel"],
              ["Texas Instrument", "Honeywell"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Ropar Placements 2024 Top Recruiters</strong>
      </h3>

      <h3 style={th3Style}>IIT Ropar Alumni Network</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name of Organization</th>
              <th style={thStyle}>Number of Alumni</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Indian Institute of Technology, Ropar", "344"],
              ["Career Development Cell, IIT Ropar", "105"],
              ["Amazon", "85"],
              ["Google", "46"],
              ["Microsoft", "44"],
              ["Coding Club, IIT Ropar", "36"],
              ["IIT Ropar, Punjab", "32"],
              ["FinCom, IIT Ropar", "28"],
              ["Enactus IIT Ropar", "26"],
              ["Society of Women Engineers", "26"],
              ["Chegg Inc.", "22"],
              ["Zomato", "22"],
              ["Flipkart", "21"],
              ["Pehchaan Ek Safar, IIT Ropar", "21"],
              ["Chegg India", "20"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style} id="2023">Placement Statistics of IIT Ropar (2022 & 2023)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placements Statistics 2023</th>
              <th style={thStyle}>Placements Statistics 2022</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Highest Salary", "INR 55 LPA", "INR 50 LPA"],
              ["Average Salary", "INR 22.49 LPA", "INR 28.54 LPA"],
              ["Median Salary", "INR 16.62 LPA", "INR 24 LPA"],
              ["Top Recruiters", "Google, Amazon, Ericsson", "Goldman Sachs, Amazon, Infosys"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Ropar Placements 2024: Course-Wise</strong>
      </h3>
      <p style={pStyle}>IIT Ropar Placement 2024 report is yet to be released. Candidates can check the
        table below for the previous year’s placement statistics:</p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>Median Package</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech", "82.21%", "INR 55 LPA", "INR 22.49 LPA", "INR 16.62 LPA"],
              ["Dual Degree (Mechanical Engineering)", "56.44%", "INR 41 LPA", "INR 19.85 LPA", "INR 15 LPA"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Ropar Placements 2024: Branch-Wise</strong>
      </h3>
      <p style={pStyle}>IIT Ropar Placement 2024 report is yet to be released. Candidates can check the
        table below for the previous year’s placement statistics:</p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Branches</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Median Package</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Chemical Engineering", "78.95%", "INR 15.76 LPA", "INR 41 LPA", "INR 19.70 LPA"],
              ["Civil Engineering", "48.28%", "INR 13.60 LPA", "INR 45.03 LPA", "INR 17.43 LPA"],
              ["Computer Science and Engineering", "94.59%", "INR 28.86 LPA", "INR 55 LPA", "INR 28.72 LPA"],
              ["Electrical Engineering", "86.76%", "INR 16.81 LPA", "INR 55 LPA", "INR 23.12 LPA"],
              ["Mathematics and Computing", "88.24%", "INR 14 LPA", "INR 32.85 LPA", "INR 18.20 LPA"],
              ["Mechanical Engineering", "73.33%", "INR 14 LPA", "INR 42 LPA", "INR 17.14 LPA"],
              ["Metallurgical and Materials Engineering", "73.33%", "INR 12.88 LPA", "INR 20.63 LPA", "INR 12.55 LPA"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
