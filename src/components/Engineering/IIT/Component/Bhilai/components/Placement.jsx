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
        IIT Bhilai has shown remarkable placement performance across its branches. The institute has achieved high placement percentages and impressive salary packages in recent years. Below are the branch-wise placement statistics for 2024:
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Bhilai Placements 2024: Branch-Wise
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>Median Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>CSE (Computer Science & Engineering)</td>
              <td style={tdStyle}>77.78%</td>
              <td style={tdStyle}>INR 48.64 LPA</td>
              <td style={tdStyle}>INR 18.93 LPA</td>
              <td style={tdStyle}>INR 17 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>EE (Electrical Engineering)</td>
              <td style={tdStyle}>87.18%</td>
              <td style={tdStyle}>INR 28.10 LPA</td>
              <td style={tdStyle}>INR 14.03 LPA</td>
              <td style={tdStyle}>INR 14.85 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>ME (Mechanical Engineering)</td>
              <td style={tdStyle}>82.61%</td>
              <td style={tdStyle}>INR 41.8 LPA</td>
              <td style={tdStyle}>INR 12.57 LPA</td>
              <td style={tdStyle}>INR 12 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Bhilai Placements Year-Wise Trends
      </h3>
      <p style={pStyle}>
        The placement trends at IIT Bhilai have shown consistent improvement over the years. Below is a summary of the year-wise highest and average salary packages:
      </p>
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
              <th style={thStyle}>Year</th>
              <th style={thStyle}>Highest Salary (INR LPA)</th>
              <th style={thStyle}>Average Salary (INR LPA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>2019-20</td>
              <td style={tdStyle}>20 LPA</td>
              <td style={tdStyle}>11 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>2020-21</td>
              <td style={tdStyle}>36 LPA</td>
              <td style={tdStyle}>12 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>2021-22</td>
              <td style={tdStyle}>27.43 LPA</td>
              <td style={tdStyle}>14 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>2022-23</td>
              <td style={tdStyle}>48.64 LPA</td>
              <td style={tdStyle}>14 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;