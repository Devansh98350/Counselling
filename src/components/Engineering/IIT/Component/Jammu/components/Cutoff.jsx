import React from "react";

const Cutoff = () => {
  const sectionStyle = {
    padding: "20px",
    paddingTop: "0px",
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
        IIT Jammu cutoff refers to the opening and closing ranks required for admission to B.Tech and M.Tech programs offered by the institute. The cutoff is based on JEE Advanced scores for B.Tech programs and varies by program and category. The cutoff is released online and is calculated based on various factors, which change every year.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Jammu Cutoff - JEE Advanced (General - Closing Ranks)
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
              <td style={tdStyle}>Chemical Engineering</td>
              <td style={tdStyle}>14,298</td>
              <td style={tdStyle}>13,116</td>
              <td style={tdStyle}>12,804</td>
            </tr>
            <tr>
              <td style={tdStyle}>Civil Engineering</td>
              <td style={tdStyle}>14,583</td>
              <td style={tdStyle}>13,515</td>
              <td style={tdStyle}>12,909</td>
            </tr>
            <tr>
              <td style={tdStyle}>Computer Science and Engineering</td>
              <td style={tdStyle}>4,458</td>
              <td style={tdStyle}>4,568</td>
              <td style={tdStyle}>4,774</td>
            </tr>
            <tr>
              <td style={tdStyle}>Electrical Engineering</td>
              <td style={tdStyle}>9,001</td>
              <td style={tdStyle}>8,676</td>
              <td style={tdStyle}>9,078</td>
            </tr>
            <tr>
              <td style={tdStyle}>Materials Engineering</td>
              <td style={tdStyle}>15,146</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mathematics and Computing</td>
              <td style={tdStyle}>7,530</td>
              <td style={tdStyle}>-</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechanical Engineering</td>
              <td style={tdStyle}>11,770</td>
              <td style={tdStyle}>13,945</td>
              <td style={tdStyle}>10,975</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Jammu Branch-Wise Cutoff 2024 (First and Last Round)
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
              <th style={thStyle}>R1 (Closing Rank)</th>
              <th style={thStyle}>Last Round (Closing Rank)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech. in Chemical Engineering</td>
              <td style={tdStyle}>13,494</td>
              <td style={tdStyle}>15,048</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Civil Engineering</td>
              <td style={tdStyle}>14,566</td>
              <td style={tdStyle}>15,583</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>5,555</td>
              <td style={tdStyle}>6,310</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>8,313</td>
              <td style={tdStyle}>10,005</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Materials Engineering</td>
              <td style={tdStyle}>14,948</td>
              <td style={tdStyle}>16,439</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mathematics and Computing</td>
              <td style={tdStyle}>7,085</td>
              <td style={tdStyle}>7,956</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>11,816</td>
              <td style={tdStyle}>12,483</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;