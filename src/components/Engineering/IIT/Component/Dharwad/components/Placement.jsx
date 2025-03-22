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
        According to media reports, the highest and average package offered during IIT
        Dharwad placements 2024 stood at INR 52 LPA and INR 12.63 LPA, respectively.
        Further, according to IIT Dharwad NIRF report 2024, the median package offered
        during B.Tech placements 2023 stood at INR 14.85 LPA. In addition, a total of 77
        students were placed and 12 students opted for higher studies out of total 125
        students during IIT Dharwad B.Tech placements 2023.
      </p>

      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        whiteSpace: "nowrap",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <table style={tableStyle} id="2024">
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics 2024 (Ongoing)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Highest Package", value: "INR 52 LPA" },
              { label: "Average Package", value: "INR 12.63 LPA" },
              { label: "Median Package", value: "INR 10 LPA" },
              { label: "Students registered for placements", value: "200" },
              { label: "Students Placed", value: "63" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.label}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Dharwad B.Tech Placements 2024: Branch-Wise</strong>
      </h3>
      <p style={pStyle}>IIT Dharwad Placement 2024 overall report has not been released on the official
        website. Till then students can check the previous year’s statistics given below:
      </p>

      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        whiteSpace: "nowrap",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>B.Tech Branches</th>
              <th style={thStyle}>Students Registered</th>
              <th style={thStyle}>Students Placed</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>Median Package</th>
            </tr>
          </thead>
          <tbody>
            {[
              { branch: "Computer Science and Engineering", registered: "43", placed: "40", percentage: "93.02%", highest: "INR 40 LPA", average: "INR 18.53 LPA", median: "INR 16.50 LPA" },
              { branch: "Electrical Engineering", registered: "32", placed: "30", percentage: "93.75%", highest: "INR 40 LPA", average: "INR 12.56 LPA", median: "INR 14.13 LPA" },
              { branch: "Mechanical Engineering", registered: "30", placed: "22", percentage: "73.33%", highest: "INR 16.50 LPA", average: "INR 9.44 LPA", median: "INR 8.25 LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.branch}</td>
                <td style={tdStyle}>{row.registered}</td>
                <td style={tdStyle}>{row.placed}</td>
                <td style={tdStyle}>{row.percentage}</td>
                <td style={tdStyle}>{row.highest}</td>
                <td style={tdStyle}>{row.average}</td>
                <td style={tdStyle}>{row.median}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="2023"
      >
        <strong>IIT Dharwad Placement Report 2024: Highlights</strong>
      </h3>
      <p style={pStyle}>The key highlights of IIT Dharwad placements 2024 as compared with 2023 are
        presented below:
      </p>

      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        whiteSpace: "nowrap",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
              <th style={thStyle}>Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "Highest Package", year2023: "INR 52 LPA", year2024: "INR 52 LPA" },
              { label: "Average Package", year2023: "INR 16.41 LPA", year2024: "INR 12.63 LPA" },
              { label: "Median Package", year2023: "INR 16 LPA", year2024: "INR 10 LPA" },
              { label: "Students Registered", year2023: "132", year2024: "200" },
              { label: "Students Placed", year2023: "79", year2024: "53" },
              { label: "Students not Placed", year2023: "53", year2024: "137" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.label}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>Note: <i>The above-mentioned placement data is sourced from media reports hence
        it may vary. </i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="2023"
      >
        <strong>Placement Comparison between Top IITs</strong>
      </h3>
      <p style={pStyle}>Refer the below-mentioned table for IIT Dharwad placement statistics 2023 as
        compared with other similar IITs such as IIT Palakkad, IIT Jammu and IIT Bhilai: </p>

      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        whiteSpace: "nowrap",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>IIT Name</th>
              <th style={thStyle}>Highest Package (2023)</th>
              <th style={thStyle}>Average Package (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "IIT Dharwad", highest: "INR 52 LPA", average: "INR 16.41 LPA" },
              { name: "IIT Palakkad", highest: "INR 47 LPA", average: "INR 13.95 LPA" },
              { name: "IIT Jammu", highest: "INR 53 LPA", average: "INR 17 LPA" },
              { name: "IIT Bhilai", highest: "INR 48.64 LPA", average: "INR 14 LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.name}</td>
                <td style={tdStyle}>{row.highest}</td>
                <td style={tdStyle}>{row.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>Note: <i>IIT Dharwad placement data is sourced from media reports, hence may
        vary.</i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="2023"
      >
        <strong>IIT Dharwad Average Package 2024</strong>
      </h3>

      <p style={pStyle}>The overall average package offered during IIT Dharwad placements 2024 stood
        at INR 12.63 LPA. Further, a fluctuating trend was witnessed in the average
        package offered over the past three years during IIT Dharwad placements, which
        is presented below: </p>

      <div style={{
        overflowX: "auto",
        WebkitOverflowScrolling: "touch",
        whiteSpace: "nowrap",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
              <th style={thStyle}>Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Average Package</td>
              <td style={tdStyle}>INR 15.17 LPA</td>
              <td style={tdStyle}>INR 16.41 LPA</td>
              <td style={tdStyle}>INR 12.63 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={pStyle}><i>*The above-mentioned placement data is sourced from media reports, hence may vary. </i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="2023"
      >
        <strong>Top Recruiters  of IIT Dharwad 2024</strong>
      </h3>
      <p style={pStyle}>The list of top recruiters during IIT Dharwad placements in recent past is
        presented below: </p>

      <div style={{
        overflowX: "auto",
        webkitOverflowScrolling: "touch",
        whiteSpace: "nowrap",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle} colSpan="2">IIT Dharwad Top Recruiters 2023</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["IBM", "Tiger Analytics"],
              ["Air Asia", "ICICI Bank"],
              ["Texas Instruments", "HCL"],
              ["Paytm", "Capgemini"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
