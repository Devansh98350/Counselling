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
        IIT Jammu has a structured placement procedure managed by its Career Development Centre. The placement cell invites top companies for the placement drive, conducts pre-placement talks, and facilitates group discussions and personal interviews. The final list of selected candidates is shared with the placement cell.
      </p>
      <p style={pStyle}>
        Every year, IIT Jammu offers ample placement and internship opportunities to its students. The placement cell acts as a bridge between students and recruiters, ensuring students are well-prepared for the placement drive.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Jammu Placement Statistics
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
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placements 2023</th>
              <th style={thStyle}>Placements 2022</th>
              <th style={thStyle}>Placements 2021</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Number of recruiters</td>
              <td style={tdStyle}>129</td>
              <td style={tdStyle}>120+</td>
              <td style={tdStyle}>95</td>
            </tr>
            <tr>
              <td style={tdStyle}>Batch Strength</td>
              <td style={tdStyle}>222</td>
              <td style={tdStyle}>155</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of offers</td>
              <td style={tdStyle}>230</td>
              <td style={tdStyle}>220+</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>Placement percentage</td>
              <td style={tdStyle}>85%</td>
              <td style={tdStyle}>83%</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>Highest salary</td>
              <td style={tdStyle}>INR 53 LPA</td>
              <td style={tdStyle}>INR 52 LPA</td>
              <td style={tdStyle}>INR 32 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Average salary</td>
              <td style={tdStyle}>INR 17.6 LPA</td>
              <td style={tdStyle}>INR 19.34 LPA</td>
              <td style={tdStyle}>INR 11.36 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median salary</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>INR 16 LPA</td>
              <td style={tdStyle}>INR 9 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Jammu B.Tech Placements 2024 (Branch-Wise)
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Highest Salary</th>
              <th style={thStyle}>Average Salary</th>
              <th style={thStyle}>Median Salary</th>
              <th style={thStyle}>Minimum Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>CSE</td>
              <td style={tdStyle}>INR 53 LPA</td>
              <td style={tdStyle}>INR 24 LPA</td>
              <td style={tdStyle}>INR 19 LPA</td>
              <td style={tdStyle}>INR 8 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>EE</td>
              <td style={tdStyle}>INR 43 LPA</td>
              <td style={tdStyle}>INR 19 LPA</td>
              <td style={tdStyle}>INR 16 LPA</td>
              <td style={tdStyle}>INR 8 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>ME</td>
              <td style={tdStyle}>INR 47 LPA</td>
              <td style={tdStyle}>INR 14 LPA</td>
              <td style={tdStyle}>INR 9 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Chemical</td>
              <td style={tdStyle}>INR 27.5 LPA</td>
              <td style={tdStyle}>INR 15 LPA</td>
              <td style={tdStyle}>INR 16 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Civil</td>
              <td style={tdStyle}>INR 40 LPA</td>
              <td style={tdStyle}>INR 14 LPA</td>
              <td style={tdStyle}>INR 16 LPA</td>
              <td style={tdStyle}>INR 6 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Material</td>
              <td style={tdStyle}>INR 20 LPA</td>
              <td style={tdStyle}>INR 14 LPA</td>
              <td style={tdStyle}>INR 10 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Jammu M.Tech Placements 2024 (Branch-Wise)
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Highest Salary</th>
              <th style={thStyle}>Average Salary</th>
              <th style={thStyle}>Median Salary</th>
              <th style={thStyle}>Minimum Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>CSE</td>
              <td style={tdStyle}>INR 43 LPA</td>
              <td style={tdStyle}>INR 21 LPA</td>
              <td style={tdStyle}>INR 16 LPA</td>
              <td style={tdStyle}>INR 6 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>EE</td>
              <td style={tdStyle}>INR 19 LPA</td>
              <td style={tdStyle}>INR 13 LPA</td>
              <td style={tdStyle}>INR 11.5 LPA</td>
              <td style={tdStyle}>INR 7 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Thermal Engineering</td>
              <td style={tdStyle}>INR 10 LPA</td>
              <td style={tdStyle}>INR 7 LPA</td>
              <td style={tdStyle}>INR 6.5 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Computer Technology</td>
              <td style={tdStyle}>INR 36 LPA</td>
              <td style={tdStyle}>INR 28 LPA</td>
              <td style={tdStyle}>INR 27 LPA</td>
              <td style={tdStyle}>INR 21 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Tunnel</td>
              <td style={tdStyle}>INR 5 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
              <td style={tdStyle}>INR 5 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;