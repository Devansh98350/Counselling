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
        IIT Delhi has an outstanding placement record across all levels of
        students. In the latest placement drive for 2024, a total of 1,000
        students were selected, with 1,050 offers made during Phase 1. More than
        50 international offers, including PPOs, were secured from 20
        international companies. Top recruiters include Air India, Microsoft,
        Bajaj Auto, and others. IIT Delhi's placement offers have seen a 20%
        increase from 2023, with around 400 national and international
        organizations offering more than 800 job profiles in various sectors.
      </p>
      <p style={pStyle}>
        According to the NIRF 2024 report, 676 UG (4-year) students were placed
        with an average salary of INR 20 lakhs, 92 PG (5-year) students were
        placed with a median salary of INR 22 lakhs, and 432 PG students were
        placed with an average salary of INR 17 lakhs. Over 50 students received
        domestic salary packages exceeding INR 1 crore during the IIT Delhi
        placement program.
      </p>
      <p style={pStyle}>
        IIT Delhi MBA Placements 2023 concluded with 100% placements. The
        highest package was INR 41.13 LPA, and the average package was INR 25.82
        LPA. The MBA Summer Internship Placements for 2024 also concluded with
        100% internship success, with the highest stipend standing at INR 4.04
        lakhs per month and the average stipend at INR 2.63 lakhs per month for
        the MBA batch.
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
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Program Name</th>
              <th style={thStyle}>Placement (%)</th>
            </tr>
            {[
              {
                program: "Biochemical Engineering and Biotechnology (4-Year)",
                rate: "82.61%",
              },
              { program: "Civil Engineering (4-Year)", rate: "84.13%" },
              { program: "Chemical Engineering (4-Year)", rate: "91.04%" },
              {
                program: "Computer Science and Engineering (4-Year)",
                rate: "98.95%",
              },
              { program: "Electrical Engineering (4-Year)", rate: "96.84%" },
              {
                program:
                  "Electrical Engineering (Power and Automation) (4-Year)",
                rate: "95.92%",
              },
              { program: "Mechanical Engineering (4-Year)", rate: "82.86%" },
              {
                program: "Production and Industrial Engineering (4-Year)",
                rate: "91.18%",
              },
              { program: "Mathematics and Computing (4-Year)", rate: "97.01%" },
              { program: "Engineering Physics (4-Year)", rate: "82.93%" },
              { program: "Textile Technology (4-Year)", rate: "80.00%" },
              { program: "Overall B.Tech. (4-Year)", rate: "90.01%" },
              {
                program:
                  "Biochemical Engineering and Biotechnology (5-Year Dual Degree)",
                rate: "87.50%",
              },
              {
                program: "Chemical Engineering (5-Year Dual Degree)",
                rate: "84.21%",
              },
              {
                program:
                  "Computer Science and Engineering (5-Year Dual Degree)",
                rate: "93.10%",
              },
              {
                program: "Mathematics and Computing (5-Year Dual Degree)",
                rate: "95.83%",
              },
              { program: "Overall Dual Degree", rate: "89.90%" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.program}</td>
                <td style={tdStyle}>{item.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        Package Offered
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
          <tbody>
            <tr>
              <th style={thStyle}>Domestic Placements</th>
              <th style={thStyle}>Amount (in LPA)</th>
            </tr>
            <tr>
              <td style={tdStyle}>Median Gross Salary</td>
              <td style={tdStyle}>17.40</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median CTC</td>
              <td style={tdStyle}>19.50</td>
            </tr>
          </tbody>
        </table>

        <h3 className="th3" style={th3Style}>
          Average Package Offered
        </h3>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Domestic Placements</th>
              <th style={thStyle}>Amount (in LPA)</th>
            </tr>
            <tr>
              <td style={tdStyle}>Average Gross Salary</td>
              <td style={tdStyle}>18.60</td>
            </tr>
            <tr>
              <td style={tdStyle}>Average CTC</td>
              <td style={tdStyle}>21.90</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>Top Recruiters</strong>
      </h3>
      <ul>
        {[
          "Allen Career Institute",
          "American Express",
          "EXL Analytics",
          "FIITJEE",
          "HCL Technologies",
          "Intel",
          "Jio Platforms",
          "Navi Technologies",
          "Praxis Global",
          "Reliance Industries",
        ].map((recruiter, index) => (
          <li key={index} style={liStyle}>
            {recruiter}
          </li>
        ))}
      </ul>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Delhi Placements 2024 Highlights</strong>
      </h3>
      <p style={pStyle}>The key highlights of IIT Delhi placements 2024 are:</p>
      <ul>
        <li style={liStyle}>Total offers: 1,050</li>
        <li style={liStyle}>International offers: 50+</li>
        <li style={liStyle}>
          Top recruiting sector: Core (Technical) with 42% placement
          distribution
        </li>
        <li id="2023" style={liStyle}>
          Top recruiters: Microsoft, Goldman Sachs, Texas Instruments
        </li>
      </ul>

      <h3 className="th3" style={th3Style}>
        IIT Delhi Placements 2023 Highlights
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
            <tr>
              <td style={tdStyle}>Total job offers received</td>
              <td style={tdStyle}>1,300</td>
              <td style={tdStyle}>1,300</td>
            </tr>
            <tr>
              <td style={tdStyle}>No. of unique job offers</td>
              <td style={tdStyle}>1,100</td>
              <td style={tdStyle}>1,150</td>
            </tr>
            <tr>
              <td style={tdStyle}>Total PPOs</td>
              <td style={tdStyle}>230</td>
              <td style={tdStyle}>260</td>
            </tr>
            <tr>
              <td style={tdStyle}>No. of international offers</td>
              <td style={tdStyle}>NA</td>
              <td style={tdStyle}>30</td>
            </tr>
            <tr>
              <td style={tdStyle}>No. of companies</td>
              <td style={tdStyle}>600</td>
              <td style={tdStyle}>500</td>
            </tr>
            <tr>
              <td style={tdStyle}>Placement rate</td>
              <td style={tdStyle}>82%</td>
              <td id="2024" style={tdStyle}>
                84.94%
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Delhi MBA Placements 2024
      </h3>
      <p style={pStyle}>
        The highlights of IIT Delhi MBA placements 2024 are as follows:
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
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics 2023</th>
            </tr>
            <tr>
              <td style={tdStyle}>Placement Percentage</td>
              <td style={tdStyle}>100%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Highest Package</td>
              <td style={tdStyle}>INR 41.13 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mean Package</td>
              <td style={tdStyle}>INR 25.82 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median Package</td>
              <td style={tdStyle}>INR 24.45 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mean Package of Fresher’s</td>
              <td style={tdStyle}>INR 24.01 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Major Domain</td>
              <td style={tdStyle}>IT & Analytics, Sales & Marketing</td>
            </tr>
            <tr>
              <td style={tdStyle}>Top Recruiters</td>
              <td style={tdStyle}>
                Accenture, Adani, Amazon, Barclays, Capgemini, Dell, etc.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Delhi Average Package 2023
      </h3>
      <p style={pStyle}>
        The batch of 2023 received a total of 260 pre-placement offers. A total
        of 1,300 job offers were made, with 1,150 students selected. Below is a
        trend of the median packages offered over the past three years:
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
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Median Package (2020)</th>
              <th style={thStyle}>Median Package (2021)</th>
              <th style={thStyle}>Median Package (2022)</th>
            </tr>
            <tr>
              <td style={tdStyle}>UG 4-year (B.Tech)</td>
              <td style={tdStyle}>INR 15.50 LPA</td>
              <td style={tdStyle}>INR 17.60 LPA</td>
              <td style={tdStyle}>INR 20.50 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>UG 5-year (B.Tech + M.Tech)</td>
              <td style={tdStyle}>INR 18.10 LPA</td>
              <td style={tdStyle}>INR 22 LPA</td>
              <td style={tdStyle}>INR 20 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>PG 2-year (M.Tech)</td>
              <td style={tdStyle}>INR 11 LPA</td>
              <td style={tdStyle}>INR 15 LPA</td>
              <td style={tdStyle}>INR 12.50 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
