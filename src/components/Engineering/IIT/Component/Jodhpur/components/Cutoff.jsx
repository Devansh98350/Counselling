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
        IIT Jodhpur's cutoff ranks for B.Tech programs are determined based on JEE Advanced scores. Below are the details of the closing ranks for General and OBC categories across various courses.
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Jodhpur B.Tech Cutoff (General Male - Closing Ranks)
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
              <td style={tdStyle}>B.Tech Artificial Intelligence and Data Science</td>
              <td style={tdStyle}>3082</td>
              <td style={tdStyle}>3027</td>
              <td style={tdStyle}>3510</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Bioengineering</td>
              <td style={tdStyle}>14292</td>
              <td style={tdStyle}>13065</td>
              <td style={tdStyle}>12790</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>10458</td>
              <td style={tdStyle}>9905</td>
              <td style={tdStyle}>9802</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Chemistry with Specialization</td>
              <td style={tdStyle}>15176</td>
              <td style={tdStyle}>13747</td>
              <td style={tdStyle}>-</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil and Infrastructure Engineering</td>
              <td style={tdStyle}>12329</td>
              <td style={tdStyle}>11548</td>
              <td style={tdStyle}>11051</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>2270</td>
              <td style={tdStyle}>2378</td>
              <td style={tdStyle}>2717</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>6070</td>
              <td style={tdStyle}>6229</td>
              <td style={tdStyle}>5859</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Engineering</td>
              <td style={tdStyle}>13318</td>
              <td style={tdStyle}>12291</td>
              <td style={tdStyle}>12407</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>9206</td>
              <td style={tdStyle}>8750</td>
              <td style={tdStyle}>8169</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Physics with Specialization</td>
              <td style={tdStyle}>12830</td>
              <td style={tdStyle}>12212</td>
              <td style={tdStyle}>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Jodhpur B.Tech Cutoff (OBC - Closing Ranks)
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
              <td style={tdStyle}>B.Tech. in Artificial Intelligence and Data Science</td>
              <td style={tdStyle}>3698</td>
              <td style={tdStyle}>4182</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Bioengineering</td>
              <td style={tdStyle}>13824</td>
              <td style={tdStyle}>14666</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Chemical Engineering</td>
              <td style={tdStyle}>10103</td>
              <td style={tdStyle}>11036</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Sc. in Chemistry</td>
              <td style={tdStyle}>15166</td>
              <td style={tdStyle}>16381</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Civil and Infrastructure Engineering</td>
              <td style={tdStyle}>11967</td>
              <td style={tdStyle}>13316</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>2798</td>
              <td style={tdStyle}>3061</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>5852</td>
              <td style={tdStyle}>6346</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Materials Engineering</td>
              <td style={tdStyle}>12443</td>
              <td style={tdStyle}>13339</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>8780</td>
              <td style={tdStyle}>9488</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Sc. in Physics</td>
              <td style={tdStyle}>12136</td>
              <td style={tdStyle}>14641</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;