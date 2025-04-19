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
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        The following tables provide the cutoff details for IIT Tirupati's B.Tech programs, including the closing ranks for 2024 and the opening and closing ranks for Round 1 and Round 5.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Tirupati B.Tech Cutoffs 2024 (General Male - Closing Ranks)
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
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>13,812</td>
              <td style={tdStyle}>12,416</td>
              <td style={tdStyle}>11,327</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>13,974</td>
              <td style={tdStyle}>13,138</td>
              <td style={tdStyle}>11,749</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>3,445</td>
              <td style={tdStyle}>3,746</td>
              <td style={tdStyle}>3,296</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>7,780</td>
              <td style={tdStyle}>7,790</td>
              <td style={tdStyle}>6,586</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>10,826</td>
              <td style={tdStyle}>10,368</td>
              <td style={tdStyle}>9,696</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        Round 1 Opening Rank & Round 5 Closing Rank
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
              <th style={thStyle}>Academic Program</th>
              <th style={thStyle}>Round 1 Opening Rank</th>
              <th style={thStyle}>Round 5 Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Computer Science and Engineering</td>
              <td style={tdStyle}>1,915</td>
              <td style={tdStyle}>5,024</td>
            </tr>
            <tr>
              <td style={tdStyle}>Chemical Engineering</td>
              <td style={tdStyle}>9,547</td>
              <td style={tdStyle}>14,341</td>
            </tr>
            <tr>
              <td style={tdStyle}>Civil Engineering</td>
              <td style={tdStyle}>11,383</td>
              <td style={tdStyle}>15,429</td>
            </tr>
            <tr>
              <td style={tdStyle}>Electrical Engineering</td>
              <td style={tdStyle}>6,236</td>
              <td style={tdStyle}>8,816</td>
            </tr>
            <tr>
              <td style={tdStyle}>Engineering Physics</td>
              <td style={tdStyle}>8,948</td>
              <td style={tdStyle}>12,605</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechanical Engineering</td>
              <td style={tdStyle}>9,340</td>
              <td style={tdStyle}>11,509</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;