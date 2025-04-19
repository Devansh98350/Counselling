import React from "react";

const Placement = () => {
  const sectionStyle = {
    padding: "20px",
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

  return (
    <section id="placement" style={sectionStyle}>
      <h2 style={h2Style}>Placement</h2>
      <p style={pStyle}>
        IIT Palakkad has shown remarkable placement performance in recent years. Below are the highlights of the placement statistics for 2023 and 2024:
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Palakkad Placement Highlights 2024
      </h3>
      <p style={pStyle}>
        The highest and average package offered during IIT Palakkad B.Tech placements 2024 stood at INR 41.6 LPA and INR 15.88 LPA, respectively. Further, 6 international offers were made during the placement drive. As per the NIRF report 2024, the median package for B.Tech and M.Tech placements 2023 stood at INR 14.1 LPA and INR 9.5 LPA, respectively.
      </p>
      <p style={pStyle}>
        During IIT Palakkad placements 2023, the overall highest and average packages were INR 47 LPA and INR 13.95 LPA, respectively, with a placement rate of 90.05%. A total of 206 offers were made, and 158 companies visited the campus. Notable recruiters included Accenture Japan, Web Staff, and ICICI Bank, which made the highest number of offers (20).
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Palakkad B.Tech Branch-Wise Placement Statistics 2023-24
      </h3>
      <div
        className="table-wrapper"
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Maximum Salary Offered</th>
              <th style={thStyle}>Minimum Salary Offered</th>
              <th style={thStyle}>Placement Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>INR 20.00 LPA</td>
              <td style={tdStyle}>INR 6.00 LPA</td>
              <td style={tdStyle}>42.31%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering (CSE)</td>
              <td style={tdStyle}>INR 41.6 LPA</td>
              <td style={tdStyle}>INR 6.00 LPA</td>
              <td style={tdStyle}>64%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>INR 20.00 LPA</td>
              <td style={tdStyle}>INR 6.00 LPA</td>
              <td style={tdStyle}>40.43%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>INR 36.72 LPA</td>
              <td style={tdStyle}>INR 6.00 LPA</td>
              <td style={tdStyle}>62.50%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Palakkad Placement Report 2024: Highlights
      </h3>
      <div
        className="table-wrapper"
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Overall highest package</td>
              <td style={tdStyle}>INR 120 LPA</td>
              <td style={tdStyle}>INR 47 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Overall average package</td>
              <td style={tdStyle}>INR 13.93 LPA</td>
              <td style={tdStyle}>INR 13.95 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Overall lowest package</td>
              <td style={tdStyle}>INR 3.6 LPA</td>
              <td style={tdStyle}>INR 6 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Batch size</td>
              <td style={tdStyle}>251</td>
              <td style={tdStyle}>250</td>
            </tr>
            <tr>
              <td style={tdStyle}>Registered students</td>
              <td style={tdStyle}>193</td>
              <td style={tdStyle}>211</td>
            </tr>
            <tr>
              <td style={tdStyle}>Students placed</td>
              <td style={tdStyle}>176</td>
              <td style={tdStyle}>190</td>
            </tr>
            <tr>
              <td style={tdStyle}>Overall placement rate</td>
              <td style={tdStyle}>91.19%</td>
              <td style={tdStyle}>90.05%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Offers made</td>
              <td style={tdStyle}>208</td>
              <td style={tdStyle}>206</td>
            </tr>
            <tr>
              <td style={tdStyle}>PPOs made</td>
              <td style={tdStyle}>26</td>
              <td style={tdStyle}>38</td>
            </tr>
            <tr>
              <td style={tdStyle}>Companies visited</td>
              <td style={tdStyle}>215</td>
              <td style={tdStyle}>158</td>
            </tr>
            <tr>
              <td style={tdStyle}>Students opted for higher studies</td>
              <td style={tdStyle}>12</td>
              <td style={tdStyle}>43</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;