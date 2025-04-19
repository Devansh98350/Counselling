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
        IIT Bhilai cutoff refers to the opening and closing ranks required for admission to its B.Tech programs. The cutoff is based on JEE Advanced scores and varies by program and category. Below are the details of the previous years' closing ranks for General and OBC categories.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Bhilai Cutoff - JEE Advanced (General - Previous Years Closing Rank)
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
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Computer Science and Engineering</td>
              <td style={tdStyle}>5393</td>
              <td style={tdStyle}>4928</td>
              <td style={tdStyle}>4903</td>
            </tr>
            <tr>
              <td style={tdStyle}>Data Science and Artificial Intelligence</td>
              <td style={tdStyle}>5974</td>
              <td style={tdStyle}>5535</td>
              <td style={tdStyle}>5272</td>
            </tr>
            <tr>
              <td style={tdStyle}>Electrical Engineering</td>
              <td style={tdStyle}>9408</td>
              <td style={tdStyle}>9616</td>
              <td style={tdStyle}>8605</td>
            </tr>
            <tr>
              <td style={tdStyle}>Materials Science and Metallurgical Engineering</td>
              <td style={tdStyle}>14554</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechanical Engineering</td>
              <td style={tdStyle}>12484</td>
              <td style={tdStyle}>11885</td>
              <td style={tdStyle}>10849</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechatronics Engineering</td>
              <td style={tdStyle}>10302</td>
              <td style={tdStyle}>9835</td>
              <td style={tdStyle}>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Last Round Closing Rank (OBC-All India)
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
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>1967</td>
              <td style={tdStyle}>2468</td>
              <td style={tdStyle}>2470</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>4044</td>
              <td style={tdStyle}>4094</td>
              <td style={tdStyle}>3999</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>4913</td>
              <td style={tdStyle}>4905</td>
              <td style={tdStyle}>4803</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Data Science and Artificial Intelligence</td>
              <td style={tdStyle}>2145</td>
              <td style={tdStyle}>2824</td>
              <td style={tdStyle}>2811</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechatronics Engineering</td>
              <td style={tdStyle}>5025</td>
              <td style={tdStyle}>4731</td>
              <td style={tdStyle}>4511</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;