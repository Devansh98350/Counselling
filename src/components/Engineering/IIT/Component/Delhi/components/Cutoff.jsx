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
    marginBottom: "auto",
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
    fontSize: "32 px",
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
      <p id="gen" style={pStyle}>
        The JOSAA Round 5 seat allotment has been released, showing the opening
        and closing ranks for General, OBC, ST, SC, and PWD categories. This
        year, JOSAA counseling will be conducted after Round 5.
      </p>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Round 5 Closing Rank (General Category)
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
              <td style={tdStyle}>B.Tech in Mechanical Engineering</td>
              <td style={tdStyle}>1882</td>
              <td style={tdStyle}>1791</td>
              <td style={tdStyle}>1782</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Chemical Engineering</td>
              <td style={tdStyle}>2343</td>
              <td style={tdStyle}>2365</td>
              <td style={tdStyle}>2221</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Textile Engineering</td>
              <td style={tdStyle}>5796</td>
              <td style={tdStyle}>6690</td>
              <td style={tdStyle}>6102</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Civil Engineering</td>
              <td style={tdStyle}>4316</td>
              <td style={tdStyle}>4472</td>
              <td style={tdStyle}>4169</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Computer Science and Engineering
              </td>
              <td style={tdStyle}>102</td>
              <td style={tdStyle}>118</td>
              <td style={tdStyle}>116</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Electrical Engineering</td>
              <td style={tdStyle}>574</td>
              <td style={tdStyle}>576</td>
              <td style={tdStyle}>625</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Production and Industrial Engineering
              </td>
              <td style={tdStyle}>3589</td>
              <td style={tdStyle}>3273</td>
              <td style={tdStyle}>3089</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Electrical Engineering (Power and Automation)
              </td>
              <td style={tdStyle}>797</td>
              <td style={tdStyle}>828</td>
              <td style={tdStyle}>810</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Integrated B.Tech + M.Tech in Chemical Engineering
              </td>
              <td style={tdStyle}>3956</td>
              <td style={tdStyle}>4362</td>
              <td style={tdStyle}>3646</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Integrated B.Tech + M.Tech in Computer Science and Engineering
              </td>
              <td style={tdStyle}>196</td>
              <td style={tdStyle}>185</td>
              <td style={tdStyle}>204</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Integrated B.Tech + M.Tech in Mathematical and Computing
              </td>
              <td style={tdStyle}>401</td>
              <td style={tdStyle}>429</td>
              <td style={tdStyle}>417</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Biochemical Engineering and Biotechnology
              </td>
              <td style={tdStyle}>4797</td>
              <td style={tdStyle}>5687</td>
              <td style={tdStyle}>4849</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Engineering Physics</td>
              <td style={tdStyle}>2925</td>
              <td style={tdStyle}>2783</td>
              <td style={tdStyle}>2560</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Mathematics and Computing Engineering
              </td>
              <td style={tdStyle}>306</td>
              <td style={tdStyle}>350</td>
              <td style={tdStyle}>332</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Engineering and Computational Mechanics
              </td>
              <td style={tdStyle}>1314</td>
              <td style={tdStyle}>1255</td>
              <td style={tdStyle}>1194</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Material Engineering</td>
              <td style={tdStyle}>4259</td>
              <td style={tdStyle}>4055</td>
              <td style={tdStyle}>3797</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Energy Engineering</td>
              <td style={tdStyle}>2839</td>
              <td style={tdStyle}>2910</td>
              <td id="obc">2707</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Round 5 Closing Rank (OBC - India Rank)
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
              <td style={tdStyle}>B.Tech in Mechanical Engineering</td>
              <td style={tdStyle}>976</td>
              <td style={tdStyle}>1034</td>
              <td style={tdStyle}>1010</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Chemical Engineering</td>
              <td style={tdStyle}>1215</td>
              <td style={tdStyle}>1446</td>
              <td style={tdStyle}>1303</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Textile Engineering</td>
              <td style={tdStyle}>2935</td>
              <td style={tdStyle}>3443</td>
              <td style={tdStyle}>3185</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Civil Engineering</td>
              <td style={tdStyle}>1733</td>
              <td style={tdStyle}>2084</td>
              <td style={tdStyle}>2063</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Computer Science and Engineering
              </td>
              <td style={tdStyle}>87</td>
              <td style={tdStyle}>105</td>
              <td style={tdStyle}>89</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Electrical Engineering</td>
              <td style={tdStyle}>379</td>
              <td style={tdStyle}>456</td>
              <td style={tdStyle}>422</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Production and Industrial Engineering
              </td>
              <td style={tdStyle}>2151</td>
              <td style={tdStyle}>3428</td>
              <td style={tdStyle}>2191</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Electrical Engineering (Power and Automation)
              </td>
              <td style={tdStyle}>516</td>
              <td style={tdStyle}>578</td>
              <td style={tdStyle}>510</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Integrated B.Tech + M.Tech in Chemical Engineering
              </td>
              <td style={tdStyle}>1876</td>
              <td style={tdStyle}>1986</td>
              <td style={tdStyle}>2054</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Integrated B.Tech + M.Tech in Computer Science and Engineering
              </td>
              <td style={tdStyle}>161</td>
              <td style={tdStyle}>166</td>
              <td style={tdStyle}>169</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Integrated B.Tech + M.Tech in Mathematical and Computing
              </td>
              <td style={tdStyle}>335</td>
              <td style={tdStyle}>309</td>
              <td style={tdStyle}>298</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Biochemical Engineering and Biotechnology
              </td>
              <td style={tdStyle}>2460</td>
              <td style={tdStyle}>2880</td>
              <td style={tdStyle}>2749</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Engineering Physics</td>
              <td style={tdStyle}>1968</td>
              <td style={tdStyle}>2044</td>
              <td style={tdStyle}>1917</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Mathematics and Computing Engineering
              </td>
              <td style={tdStyle}>243</td>
              <td style={tdStyle}>231</td>
              <td style={tdStyle}>218</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Engineering and Computational Mechanics
              </td>
              <td style={tdStyle}>771</td>
              <td style={tdStyle}>812</td>
              <td style={tdStyle}>640</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Material Engineering</td>
              <td style={tdStyle}>2249</td>
              <td style={tdStyle}>2609</td>
              <td style={tdStyle}>2504</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Energy Engineering</td>
              <td style={tdStyle}>1910</td>
              <td style={tdStyle}>2065</td>
              <td style={tdStyle}>1957</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;
