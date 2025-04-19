import React from "react";

const Cutoff = () => {
  const sectionStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
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
    fontSize: "20px",
    fontWeight: "700",
  };

  return (
    <section id="cutoff" style={sectionStyle}>
      <h2 style={h2Style}>Cutoff</h2>
      <p style={pStyle}>
        IIT Goa's cutoff ranks for B.Tech programs are determined based on JEE Advanced scores. Below are the details of the closing ranks for General and OBC categories across various courses.
      </p>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Last Round Closing Rank (General - All India)
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
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>13031</td>
              <td style={tdStyle}>13483</td>
              <td style={tdStyle}>12066</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>3839</td>
              <td style={tdStyle}>4232</td>
              <td style={tdStyle}>5371</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>8630</td>
              <td style={tdStyle}>8909</td>
              <td style={tdStyle}>9603</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mathematics and Computing Engineering</td>
              <td style={tdStyle}>5555</td>
              <td style={tdStyle}>6568</td>
              <td style={tdStyle}>6685</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Last Round Closing Rank (OBC - All India)
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
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>4642</td>
              <td style={tdStyle}>4810</td>
              <td style={tdStyle}>4696</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>1443</td>
              <td style={tdStyle}>1753</td>
              <td style={tdStyle}>2002</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>3378</td>
              <td style={tdStyle}>3685</td>
              <td style={tdStyle}>3573</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mathematics and Computing Engineering</td>
              <td style={tdStyle}>2476</td>
              <td style={tdStyle}>2579</td>
              <td style={tdStyle}>2593</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;