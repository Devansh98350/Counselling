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
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        IIT Tirupati Placements 2024 is in progress. According to media reports, the highest package stood at INR 41.68 LPA till now. A total of 83 students have already been placed during the 2024 placement drive. Some of the past recruiters of IIT Tirupati included Amazon, Accenture, IBM, Deloitte, ICICI Bank, LTI, and others.
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        IIT Tirupati Summer Internship Placements 2024 has concluded. The highest stipend stood at INR 2 Lakhs per month, while the average stipend was INR 29.25 K per month. Students received a total of 213 internship offers.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Tirupati Placements 2024 Report
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
              <th style={thStyle}>2024</th>
              <th style={thStyle}>2023</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Highest Package</td>
              <td style={tdStyle}>INR 41.68 LPA</td>
              <td style={tdStyle}>INR 46 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Lowest Package</td>
              <td style={tdStyle}>INR 6.5 LPA</td>
              <td style={tdStyle}>INR 6 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of Students Placed</td>
              <td style={tdStyle}>83</td>
              <td style={tdStyle}>179</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Tirupati Placement Branch-Wise Statistics 2023-24
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
              <th style={thStyle}>Maximum Salary Offered</th>
              <th style={thStyle}>Minimum Salary Offered</th>
              <th style={thStyle}>Placement Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech CHE</td>
              <td style={tdStyle}>₹13 LPA</td>
              <td style={tdStyle}>₹6.00 LPA</td>
              <td style={tdStyle}>33.33%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech CE</td>
              <td style={tdStyle}>₹13 LPA</td>
              <td style={tdStyle}>₹6.00 LPA</td>
              <td style={tdStyle}>13.33%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech CSE</td>
              <td style={tdStyle}>₹41.64 LPA</td>
              <td style={tdStyle}>₹18.39 LPA</td>
              <td style={tdStyle}>67.27%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech EE</td>
              <td style={tdStyle}>₹36.42 LPA</td>
              <td style={tdStyle}>₹16.65 LPA</td>
              <td style={tdStyle}>32.14%</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech ME</td>
              <td style={tdStyle}>₹41.64 LPA</td>
              <td style={tdStyle}>₹10.95 LPA</td>
              <td style={tdStyle}>41.86%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Tirupati Placements 2024 Top Recruiters
      </h3>
      <ul>
        {[
          "Accenture",
          "Amazon",
          "Adobe",
          "IBM",
          "Publicis Sapient",
          "ICICI Bank",
          "MathWorks",
          "Deloitte",
          "FactSet",
          "GEP",
          "Nation With Namo",
          "LTI",
          "Future First",
          "Arista",
          "Versa",
        ].map((recruiter, index) => (
          <li key={index} style={liStyle}>
            {recruiter}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Placement;