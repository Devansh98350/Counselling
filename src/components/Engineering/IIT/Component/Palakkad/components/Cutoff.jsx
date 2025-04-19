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
        IIT Palakkad's cutoff ranks for B.Tech programs are determined based on JEE Advanced scores. Below are the details of the closing ranks for General and OBC categories across various courses.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Palakkad B.Tech Cutoffs (General Category - Closing Ranks)
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
              <th style={thStyle}>2024</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>15812</td>
              <td style={tdStyle}>16487</td>
              <td style={tdStyle}>15714</td>
              <td style={tdStyle}>14227</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>6199</td>
              <td style={tdStyle}>5162</td>
              <td style={tdStyle}>4718</td>
              <td style={tdStyle}>5227</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Data Science and Engineering</td>
              <td style={tdStyle}>8084</td>
              <td style={tdStyle}>7108</td>
              <td style={tdStyle}>6502</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>9625</td>
              <td style={tdStyle}>9766</td>
              <td style={tdStyle}>9835</td>
              <td style={tdStyle}>9435</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>13086</td>
              <td style={tdStyle}>13278</td>
              <td style={tdStyle}>12351</td>
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
              <th style={thStyle}>2024</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech. in Civil Engineering</td>
              <td style={tdStyle}>5565</td>
              <td style={tdStyle}>5730</td>
              <td style={tdStyle}>5379</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>2069</td>
              <td style={tdStyle}>1735</td>
              <td style={tdStyle}>1612</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>3764</td>
              <td style={tdStyle}>3664</td>
              <td style={tdStyle}>3201</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>4625</td>
              <td style={tdStyle}>4812</td>
              <td style={tdStyle}>4439</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Data Science and Engineering</td>
              <td style={tdStyle}>2788</td>
              <td style={tdStyle}>2625</td>
              <td style={tdStyle}>2180</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;