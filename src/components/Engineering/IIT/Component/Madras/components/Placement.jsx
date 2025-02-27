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
        IITM is one the reputed institute in the field of technological education and
        research in India. The institute has always been a favorite destination of
        recruitments for many firms either domestic or international. <br /><br />
        The first phase of the placement in IIT Madras were conducted on 14th Dec,
        22023 by setting milestone as the 50% student were selected on the opening
        day. In phase 1 with the median package of INR 19 LPA in the below table
        there are few highlight s of IIT Madras placement 2024 of phase 1 are:-
      </p>

      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <table style={tableStyle} id="2024">
          <tbody>
            <tr>
              <th style={thStyle}>Particular</th>
              <th style={thStyle}>Placement statistic (phase 1)(2024)</th>
            </tr>
            {[
              {
                particular: "Median package",
                statistic: "INR 19 LPA",
              },
              {
                particular: "Internship offers",
                statistic: "19% increased",
              },
              {
                particular: "Placement rate",
                statistic: "50% student placed",
              },
              {
                particular: "Top recruiters",
                statistic: "Adobe, JP, Morgan chase etc.",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.particular}</td>
                <td style={tdStyle}>{item.statistic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The highest package in MBA is 29 LPA; lowest is 16.93 LPA and average
        package is 20.40 LPA. In the MS highest package is 21.63 LPA and the
        average is 19.31LPA <br />
        Top recruiters of IIT Madras are Amazon, Deloitte, TCS, Accenture, Dell, etc. <br />
        There is a remarkable placement in MBA in 2024 with 37% PPO. The
        placement of 2023 and 2024 of IIT madras are given below.</p>

      <h3 className="th3" style={th3Style}>
        Placement Statistics (2023 vs 2024)
      </h3>
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
              <th style={thStyle}>Parameter</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
              <th style={thStyle}>Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                parameter: "Highest package",
                data2023: [
                  "INR 30.60 LPA (MBA)",
                  "INR 21.63 LPA (MS)",
                  "INR 22 LPA (Tech-MBA)",
                ],
                data2024: [
                  "INR 29.65 LPA (MBA)",
                  "INR 20 LPA (MS)",
                  "INR 48.29 LPA (Tech-MBA)",
                ],
              },
              {
                parameter: "Average package",
                data2023: [
                  "INR 20.19 LPA (MBA)",
                  "INR 19.31 LPA (MS)",
                  "INR 18.90 LPA (Tech-MBA)",
                ],
                data2024: [
                  "INR 16.93 LPA (MBA)",
                  "INR 14.37 LPA (MS)",
                  "INR 27.37 LPA (Tech-MBA)",
                ],
              },
              {
                parameter: "Median package",
                data2023: ["NA"],
                data2024: [
                  "INR 16.39 LPA (MBA)",
                  "INR 14.75 LPA (MS)",
                  "INR 21.59 LPA (Tech-MBA)",
                ],
              },
              {
                parameter: "Companies visited (MBA)",
                data2023: ["26"],
                data2024: ["32"],
              },
              {
                parameter: "PPO (MBA)",
                data2023: ["42%"],
                data2024: ["37%"],
              },
              {
                parameter: "Placement rate",
                data2023: ["100%"],
                data2024: ["100%"],
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.parameter}</td>
                <td style={tdStyle}>
                  {row.data2023.map((item, i) => (
                    <div key={i}>- {item}</div>
                  ))}
                </td>
                <td style={tdStyle}>
                  {row.data2024.map((item, i) => (
                    <div key={i}>- {item}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>Average Package (2024)</h3>
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
              <th style={thStyle}>Average Package (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "MBA",
                package: [
                  "INR 16.93 LPA (overall)",
                  "INR 21.89 LPA (top 25%)",
                ],
              },
              {
                course: "TECH MBA",
                package: ["INR 27.37 LPA"],
              },
              {
                course: "MS",
                package: ["INR 14.37 LPA"],
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>
                  {row.package.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>Comparison between placement packages of IIT Madras of last 3 years</h3>
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
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
              <th style={thStyle}>Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "MBA", stats: ["INR 16.66 LPA", "INR 20.19 LPA", "INR 16.93 LPA"] },
              { course: "MS", stats: ["INR 18.98 LPA", "INR 19.31 LPA", "INR 14.37 LPA"] },
              { course: "Tech MBA", stats: ["NA", "INR 18.90 LPA", "INR 27.37 LPA"] },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                {row.stats.map((item, i) => (
                  <td key={i} style={tdStyle}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>Here are the top recruiters of IIT Madras:- </p>
      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>DOMS IIT Madras Top Recruiters </strong>
      </h3>
      <ul>
        {[
          "Accenture",
          "Cognizant",
          "Dell",
          "Deloitte ",
          "IBM",
          "ICICI Bank",
          "Morgan Stanley",
          "P&G",
          "Mahindra",
        ].map((recruiter, index) => (
          <li key={index} style={liStyle}>
            {recruiter}
          </li>
        ))}
      </ul>

      <p style={pStyle}>Currently 1091 students  were placed in the phase 1 and phase 2 of
        2023-2024 placement in this 235ppos were accepted out of 300, and the total
        count of companies which are participating stood at 256 in which 44
        international offers were made. </p>

      <h3 style={th3Style}>Placement Statistics (2022-2023)</h3>
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
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "No. of offers", stats: ["1,491", "1,612"] },
              { label: "Companies visited", stats: ["480+", "480+"] },
              { label: "PPOs", stats: ["231", "350"] },
              { label: "Highest package", stats: ["INR 2.14 crore per annum", "INR 1.31 crore per annum"] },
              { label: "Lowest package", stats: ["INR 3 LPA", "INR 5.40 LPA"] },
              { label: "Offers above INR 30 LPA", stats: ["203", "172"] },
              { label: "Offers between INR 25 LPA - INR 30 LPA", stats: ["75", "48"] },
              { label: "Offers between INR 20 LPA - INR 25 LPA", stats: ["134", "135"] },
              { label: "Offers between INR 15 LPA - INR 20 LPA", stats: ["264", "312"] },
              { label: "Offers between INR 10 LPA - INR 15 LPA", stats: ["342", "226"] },
              { label: "Offers between INR 5 LPA - INR 10 LPA", stats: ["154", "152"] },
              { label: "Offers less than INR 5 LPA", stats: ["4", "N/A"] },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.label}</td>
                {row.stats.map((item, i) => (
                  <td key={i} style={tdStyle}>{item}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>There are comparison between some other IITs of India</p>

      <h3 style={th3Style} id="2023">IIT Placement Statistics (2023)</h3>
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
              <th style={thStyle}>IIT University Name</th>
              <th style={thStyle}>Highest Package (2023)</th>
              <th style={thStyle}>No. of Offers (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { university: "IIT Madras", highestPackage: "INR 1.31 crore per annum", offers: "1,612" },
              { university: "IIT Delhi", highestPackage: "INR 2.40 crore per annum (international)", offers: "1,300" },
              { university: "IIT Bombay", highestPackage: "INR 3.67 crore per annum (international), INR 1.68 crore per annum (domestic)", offers: "1,788" },
              { university: "IIT Kanpur", highestPackage: "INR 1.90 crore per annum (domestic)*", offers: "1,200*" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.university}</td>
                <td style={tdStyle}>{row.highestPackage}</td>
                <td style={tdStyle}>{row.offers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Madras placement report of last five in which see the gradual increase in
        the number of student got selected are given below:- </p>
      <h3 style={th3Style}>Student Selection Statistics</h3>
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
              <th style={thStyle}>Year</th>
              <th style={thStyle}>No. of Students Selected</th>
            </tr>
          </thead>
          <tbody>
            {[
              { year: "2022-2023", students: "1612" },
              { year: "2021-2022", students: "1491" },
              { year: "2020-2021", students: "1047" },
              { year: "2019-2020", students: "1078" },
              { year: "2018-2019", students: "1151" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.year}</td>
                <td style={tdStyle}>{row.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
