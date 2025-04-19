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
        The IIT Kharagpur cutoff depends upon various factors like the number of
        applicants, availability of seats, the difficulty of examination and many more. The
        Joint Seat Allocation Authority released the round-wise JoSAA cutoffs for various
        programmes offered at this institute. <br />
        The JEE Advanced counselling 2024 concluded after Round 5 of the Seat
        Allotment results for General, OBC, SC, ST, EWS, and PWD categories. During
        the IIT Kharagpur JEE Advanced cutoff 2024, the Last Round closing ranks
        ranged between 415 and 20427, wherein B.Tech. (Hons.)  in Computer Science
        and Engineering was the toughest course to get into IIT Kharagpur - Indian
        Institute of Technology for the students belonging to the General AI quota. In the
        first round, the IIT Kharagpur CSE cutoff 2024 was 414. <br />
        The second most competitive course was B.Tech. In Artificial Intelligence, with a
        last-round closing rank of 898. The less competitive course was Bachelor of
        Architecture (B.Arch. Hons.), with a closing cutoff of 20427 for the General AI
        category candidates. <br />
        For OBC category students, the cutoff of the last round of the B.Tech. (Hons.) in
        Computer Science and Engineering programme stood at 209. <br />
        For a detailed first and last-round IIT Kharagpur branch-wise cutoff 2024,
        students can refer to the table below:
      </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>R1 (Closing Rank)</th>
              <th style={thStyle}>Last Round (Closing Rank)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech. (Hons.) in Aerospace Engineering", "4385", "4745"],
              ["B.Tech. (Hons.) in Agricultural and Food Engineering", "9906", "10770"],
              ["B.Sc. in Applied Geology", "12024", "12893"],
              ["Bachelor of Architecture (B.Arch. Hons.)", "19348", "20427"],
              ["B.Tech. in Artificial Intelligence", "795", "898"],
              ["B.Tech. (Hons.) in Biotechnology and Biochemical Engineering", "7428", "7972"],
              ["B.Tech. (Hons.) in Chemical Engineering", "4590", "4848"],
              ["B.Sc. in Chemistry", "11179", "12488"],
              ["B.Tech. (Hons.) in Civil Engineering", "6465", "6992"],
              ["B.Tech. (Hons.) in Computer Science and Engineering", "414", "415"],
              ["B.Sc. in Economics", "5055", "5263"],
              ["B.Tech. (Hons.) in Electrical Engineering", "1880", "2016"],
              ["B.Tech. (Hons.) in Electronics and Electrical Communication Engineering", "1446", "1484"],
              ["B.Sc. in Exploration Geophysics", "10995", "12413"],
              ["B.Tech. (Hons.) in Industrial and Systems Engineering", "4099", "4364"],
              ["B.Tech. (Hons.) in Instrumentation", "2473", "2481"],
              ["B.Tech. (Hons.) in Manufacturing Science and Engineering", "5964", "6067"],
              ["B.Sc. in Mathematics and Computing", "1253", "1329"],
              ["B.Tech. (Hons.) in Mechanical Engineering", "3301", "3613"],
              ["B.Tech. (Hons.) in Metallurgical and Materials Engineering", "6784", "7104"],
              ["B.Tech. (Hons.) in Mining Engineering", "9225", "10218"],
              ["B.Tech. (Hons.) in Ocean Engineering and Naval Architecture", "8545", "9098"],
              ["B.Sc. in Physics", "6553", "9672"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style} id="gen">JEE Advanced Last Round Closing Rank (General-All India)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech. (Hons.) in Aerospace Engineering", "5297", "4773", "4745"],
              ["B.Tech. (Hons.) in Chemical Engineering", "4846", "4944", "4848"],
              ["B.Tech. (Hons.) in Computer Science and Engineering", "303", "279", "415"],
              ["B.Tech. (Hons.) in Electronics and Electrical Communication Engineering", "1145", "1205", "1484"],
              ["B.Tech. (Hons.) in Electrical Engineering", "1805", "1833", "2016"],
              ["B.Tech. (Hons.) in Instrumentation Engineering", "2533", "2335", "2481"],
              ["B.Tech. (Hons.) in Industrial and Systems Engineering", "3700", "3855", "4364"],
              ["B.Tech. (Hons.) in Mechanical Engineering", "3350", "3294", "3613"],
              ["Integrated B.Tech. (Hons.) + M.Tech. in Computer Science and Engineering", "526", "632", "—/—"],
              ["Integrated B.Tech. (Hons.) in Electrical Engineering + M.Tech. in Machines Drives and Power Electronics", "2314", "2242", "—/—"],
              ["Integrated B.Tech. (Hons.) in Electronics and Electrical Communication Engineering + M.Tech. in Telecommunication System Engineering", "1637", "1639", "—/—"],
              ["Integrated B.Tech. (Hons.) in Mechanical Engineering + M.Tech. in Manufacturing and Engineering", "5197", "4827", "—/—"],
              ["B.Sc. in Mathematics and Computing", "1335", "1416", "1329"],
              ["B.Tech in Artificial Intelligence", "-/-", "-/-", "898"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
                <td style={tdStyle}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style} id="obc">JEE Advanced Last Round Closing Rank (OBC-All India)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech. (Hons.) in Aerospace Engineering", "2302", "2497", "2598"],
              ["B.Tech. (Hons.) in Civil Engineering", "2670", "3007", "2991"],
              ["B.Tech. (Hons.) in Chemical Engineering", "1370", "1558", "1607"],
              ["B.Tech. (Hons.) in Computer Science and Engineering", "138", "160", "209"],
              ["B.Tech. (Hons.) in Electronics and Electrical Communication Engineering", "598", "760", "887"],
              ["B.Tech. (Hons.) in Electrical Engineering", "851", "856", "944"],
              ["B.Tech. (Hons.) in Instrumentation Engineering", "1104", "1354", "1302"],
              ["B.Tech. (Hons.) in Industrial and Systems Engineering", "2049", "1945", "2307"],
              ["B.Tech. (Hons.) in Mechanical Engineering", "1576", "1599", "1721"],
              ["B.Tech. (Hons.) in Manufacturing Science and Engineering", "3022", "3195", "3292"],
              ["B.Tech. (Hons.) in Metallurgical and Materials Engineering", "3093", "3412", "3378"],
              ["Integrated B.Tech. (Hons.) + M.Tech. in Aerospace Engineering", "2445", "2759", "—/—"],
              ["Integrated B.Tech. (Hons.) + M.Tech. in Computer Science and Engineering", "326", "345", "—/—"],
              ["Integrated B.Tech. (Hons.) in Civil Engineering + M.Tech. in Environmental Engineering and Management", "3070", "3275", "—/—"],
              ["Integrated B.Tech. (Hons.) + M.Tech. in Chemical Engineering", "2749", "3096", "—/—"],
              ["Integrated B.Tech. (Hons.) in Electrical Engineering + M.Tech. in Machines Drives and Power Electronics", "1151", "1163", "—/—"],
              ["Integrated B.Tech. (Hons.) in Electronics and Electrical Communication Engineering + M.Tech. in Telecommunication System Engineering", "889", "1087", "—/—"],
              ["Integrated B.Tech. (Hons.) in Industrial Engineering + M.Tech. in Industrial Engineering and Management", "2351", "2389", "—/—"],
              ["Integrated B.Tech. (Hons.) in Mechanical Engineering + M.Tech. in Manufacturing Science and Engineering", "2818", "2599", "—/—"],
              ["B.Sc. in Economics", "2850", "3076", "2736"],
              ["B.Sc. in Mathematics and Computing", "761", "746", "740"],
              ["B.Tech. in Artificial Intelligence", "—/—", "—/—", "412"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
                <td style={tdStyle}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>Given below table show you the last round closing ranks of B.Tech of top IITs of
        india: </p>

      <h3 style={th3Style}>B.Tech CSE Top IITs Comparison – JoSAA Last Round Closing Ranks</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Top IITs</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["IIT Kharagpur", "279", "415"],
              ["IIT Kanpur", "238", "252"],
              ["IIT Roorkee", "412", "481"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Kharagpur MBA cutoff is based on CAT scores. As per the previous cutoff,
        the minimum Overall CAT Percentile required for MBA is 90 whereas for PGDM
        is 85. Candidates should also meet the sectional cutoffs for MBA as well
        as PGDM. As per cutoff 2022, the required sectional CAT cutoff for MBA is 50
        Percentile, whereas for PGDM is 85 Percentile each. </p>

      <h3 style={th3Style}>Master of Business Administration (MBA) – VGSOM: CAT Percentile Cutoff (General-All India)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Section</th>
              <th style={thStyle}>2020</th>
              <th style={thStyle}>2021</th>
              <th style={thStyle}>2022</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Overall", "90", "90", "90"],
              ["Quants", "50", "50", "50"],
              ["VA-RC", "50", "50", "50"],
              ["DI-LR", "50", "50", "50"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
                <td style={tdStyle}>{row[3]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>Post Graduate Diploma in Business Analytics (PGDBA) – VGSOM: CAT Percentile Cutoff (General-All India)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Section</th>
              <th style={thStyle}>2021</th>
              <th style={thStyle}>2022</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Overall", "85", "85"],
              ["Quants", "85", "85"],
              ["VA-RC", "85", "85"],
              ["DI-LR", "85", "85"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>  
    </section>
  );
};

export default Cutoff;
