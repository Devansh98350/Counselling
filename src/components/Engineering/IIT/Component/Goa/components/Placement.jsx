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
        IIT Goa placements 2024 concluded with an overall placement rate of 90.6%. A total of 161 recruiters participated in the placement process, offering roles in new-age job profiles. The overall average package offered during IIT Goa placements 2024 stood at INR 15.41 LPA. The average package for B.Tech students was INR 15.92 LPA, while M.Tech students received an average package of INR 11.72 LPA. Top recruiters included Microsoft, Google, Amazon, Intel, and Goldman Sachs.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Goa Placements Report 2024: Highlights
      </h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Particulars</th>
            <th style={thStyle}>Statistics</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Number of Companies Visited</td>
            <td style={tdStyle}>161</td>
          </tr>
          <tr>
            <td style={tdStyle}>No. of International Offers</td>
            <td style={tdStyle}>6</td>
          </tr>
          <tr>
            <td style={tdStyle}>Overall Placement Percentage</td>
            <td style={tdStyle}>90.6%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Average CTC Offered</td>
            <td style={tdStyle}>INR 15.41 LPA</td>
          </tr>
          <tr>
            <td style={tdStyle}>B.Tech Average CTC</td>
            <td style={tdStyle}>INR 15.92 LPA</td>
          </tr>
          <tr>
            <td style={tdStyle}>M.Tech Average CTC</td>
            <td style={tdStyle}>INR 11.72 LPA</td>
          </tr>
          <tr>
            <td style={tdStyle}>Median CTC</td>
            <td style={tdStyle}>INR 11.50 LPA</td>
          </tr>
        </tbody>
      </table>

      <h3 className="th3" style={th3Style}>
        IIT Goa Placements 2023 vs 2024
      </h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Particulars</th>
            <th style={thStyle}>Placement Statistics (2023)</th>
            <th style={thStyle}>Placement Statistics (2024)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Placement Percentage</td>
            <td style={tdStyle}>B.Tech: 99%, M.Tech: 90%, Overall: 97.6%</td>
            <td style={tdStyle}>B.Tech: 90.7%, M.Tech: 90%, Overall: 90.6%</td>
          </tr>
          <tr>
            <td style={tdStyle}>Highest Package</td>
            <td style={tdStyle}>INR 60 LPA</td>
            <td style={tdStyle}>NA</td>
          </tr>
          <tr>
            <td style={tdStyle}>Average Package</td>
            <td style={tdStyle}>
              B.Tech: INR 17.19 LPA, M.Tech: INR 10.68 LPA, Overall: INR 16.30
              LPA
            </td>
            <td style={tdStyle}>
              B.Tech: INR 15.92 LPA, M.Tech: INR 11.72 LPA, Overall: INR 15.41
              LPA
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Median Package</td>
            <td style={tdStyle}>
              B.Tech: INR 15 LPA, M.Tech: INR 9.25 LPA, Overall: INR 14.05 LPA
            </td>
            <td style={tdStyle}>
              B.Tech: INR 13 LPA, M.Tech: INR 8 LPA, Overall: INR 11.50 LPA
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>Total Recruiters</td>
            <td style={tdStyle}>126</td>
            <td style={tdStyle}>161</td>
          </tr>
          <tr>
            <td style={tdStyle}>Total Students</td>
            <td style={tdStyle}>160</td>
            <td style={tdStyle}>163</td>
          </tr>
          <tr>
            <td style={tdStyle}>Total Students Placed</td>
            <td style={tdStyle}>122</td>
            <td style={tdStyle}>116</td>
          </tr>
        </tbody>
      </table>

      <h3 className="th3" style={th3Style}>
        Top Recruiters
      </h3>
      <ul style={{ fontSize: "16px", lineHeight: "1.6", marginLeft: "20px" }}>
        <li>Microsoft</li>
        <li>Google</li>
        <li>Amazon</li>
        <li>Intel</li>
        <li>Goldman Sachs</li>
      </ul>
    </section>
  );
};

export default Placement;