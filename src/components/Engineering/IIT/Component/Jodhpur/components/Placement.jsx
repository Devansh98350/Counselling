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
        IIT Jodhpur has consistently achieved excellent placement results. The placement statistics for 2023 and 2022 are summarized below:
      </p>

      <h3 className="th3" style={th3Style}>
        IIT Jodhpur Placement Statistics
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
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placements Statistics 2023</th>
              <th style={thStyle}>Placements Statistics 2022</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>No. of Companies Visited</td>
              <td style={tdStyle}>180+</td>
              <td style={tdStyle}>200</td>
            </tr>
            <tr>
              <td style={tdStyle}>No. of Participating Students</td>
              <td style={tdStyle}>269</td>
              <td style={tdStyle}>NA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of International Offers</td>
              <td style={tdStyle}>0</td>
              <td style={tdStyle}>4</td>
            </tr>
            <tr>
              <td style={tdStyle}>Percentage of Students Placed</td>
              <td style={tdStyle}>88.85%</td>
              <td style={tdStyle}>55% (Phase 1)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of Students Placed</td>
              <td style={tdStyle}>239</td>
              <td style={tdStyle}>128 (Phase 1)</td>
            </tr>
            <tr>
              <td style={tdStyle}>No. of PPOs</td>
              <td style={tdStyle}>NA</td>
              <td style={tdStyle}>30</td>
            </tr>
            <tr>
              <td style={tdStyle}>Highest Salary</td>
              <td style={tdStyle}>INR 53 LPA</td>
              <td style={tdStyle}>INR 61 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Average Salary</td>
              <td style={tdStyle}>INR 21.30 LPA</td>
              <td style={tdStyle}>INR 24.38 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median Package</td>
              <td style={tdStyle}>INR 16.50 LPA</td>
              <td style={tdStyle}>INR 16 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Top Recruiters</td>
              <td style={tdStyle}>
                Tata 1mg, Samsung, Oracle, Flipkart, Publicis Sapient, Mercedes
                Benz, Adobe, etc.
              </td>
              <td style={tdStyle}>
                SMS Data Tech, Google, Goldman Sachs
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Jodhpur B.Tech Branch-Wise Placement Statistics 2023-24
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
              <th style={thStyle}>Students Registered</th>
              <th style={thStyle}>Students Placed</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>Median Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Bioengineering</td>
              <td style={tdStyle}>34</td>
              <td style={tdStyle}>20</td>
              <td style={tdStyle}>58.82%</td>
              <td style={tdStyle}>INR 37 LPA</td>
              <td style={tdStyle}>INR 18 LPA</td>
              <td style={tdStyle}>INR 16 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Computer Science and Engineering</td>
              <td style={tdStyle}>100</td>
              <td style={tdStyle}>97</td>
              <td style={tdStyle}>97%</td>
              <td style={tdStyle}>INR 53 LPA</td>
              <td style={tdStyle}>INR 23 LPA</td>
              <td style={tdStyle}>INR 22 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Electrical Engineering</td>
              <td style={tdStyle}>72</td>
              <td style={tdStyle}>68</td>
              <td style={tdStyle}>94.44%</td>
              <td style={tdStyle}>INR 51 LPA</td>
              <td style={tdStyle}>INR 22 LPA</td>
              <td style={tdStyle}>INR 17 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechanical Engineering</td>
              <td style={tdStyle}>63</td>
              <td style={tdStyle}>54</td>
              <td style={tdStyle}>85.71%</td>
              <td style={tdStyle}>INR 51 LPA</td>
              <td style={tdStyle}>INR 19 LPA</td>
              <td style={tdStyle}>INR 13 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Overall</td>
              <td style={tdStyle}>269</td>
              <td style={tdStyle}>239</td>
              <td style={tdStyle}>88.85%</td>
              <td style={tdStyle}>INR 53 LPA</td>
              <td style={tdStyle}>INR 21.30 LPA</td>
              <td style={tdStyle}>INR 16.50 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;