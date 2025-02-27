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
      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>
        IIT Bombay Cutoff 2024 for JEE-Advanced, IIT JAM & UCEED has been released. IIT Bombay JEE Advanced
        Cutoff 2024 for CS is 1 – 68(Round 1) for general category students.
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay JEE Advanced Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>The authorities at the institute released the IIT JEE Advanced
        cutoff for IIT Bombay. The IIT Bombay cutoff is the minimum and maximum ranks that candidates need to
        secure to be eligible for admission to the institute. The IIT Bombay JEE advanced cutoff is made available to
        candidates as opening and closing ranks. Candidates who secure ranks within the specified range are eligible
        to apply for admission at IIT Bombay. <br />
        The authorities determine the IIT Bombay JEE Advanced cutoff 2024 for Computer Science Engineering and
        other branches based on various factors such as the total number of candidates who applied for admissions,
        the difficulty level of JEE Advanced and so on. IIT Bombay cutoff is updated here in this article for the
        previous year released by the authorities.</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay B.Tech Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>The IIT Bombay Cutoff 2024 round 5 for all categories has been out. IIT Bombay round 3 cutoff 2024 closing
        rank ranges from 68 to 3987 and IIT Bombay B.Tech CSE cutoff 2024 opening and closing rank ranges from 1
        to 68 for general categories. <br />
        IIT Bombay JEE Advanced Cutoff 2024 is tabulated below: </p>

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
              <th style={thStyle}>Program Name</th>
              <th style={thStyle}>Round 1 Opening Rank</th>
              <th style={thStyle}>Round 1 Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { program: "Computer Science and Engineering", opening: 1, closing: 68 },
              { program: "BS in Mathematics", opening: 585, closing: 2388 },
              { program: "Chemical Engineering", opening: 631, closing: 1191 },
              { program: "Chemistry", opening: 650, closing: 2507 },
              { program: "Civil Engineering", opening: 5268, closing: 6969 },
              { program: "Aerospace Engineering", opening: 2244, closing: 3986 },
              { program: "Economics", opening: 1421, closing: 2282 },
              { program: "Electrical Engineering", opening: 15, closing: 464 },
              { program: "Electrical Engineering (5 Years, Bachelor and Master of Technology (Dual Degree))", opening: 496, closing: 934 },
              { program: "Energy Engineering", opening: 1687, closing: 2557 },
              { program: "Engineering Physics", opening: 92, closing: 1532 },
              { program: "Environmental Science and Engineering", opening: 3424, closing: 4716 },
              { program: "Industrial Engineering and Operations Research", opening: 1042, closing: 1726 },
              { program: "Mechanical Engineering", opening: 666, closing: 1685 },
              { program: "Metallurgical Engineering and Materials Science", opening: 2690, closing: 4175 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.program}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Bombay JEE Advanced Cutoff 2024 (General Category-Round 4)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Opening All India Ranks</th>
              <th style={thStyle}>Closing All India Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { program: "B.Tech Aerospace Engineering", opening: 817, closing: 2394 },
              { program: "B.Tech Chemical Engineering ", opening: 650, closing: 2529 },
              { program: "B.Tech Civil Engineering ", opening: 2244, closing: 3987 },
              { program: "B.Tech Computer Science and Engineering", opening: 1, closing: 68 },
              { program: "B.Tech Electrical Engineering", opening: 15, closing: 464 },
              { program: "B.Tech Electrical Engineering (Dual Degree)", opening: 496, closing: 934 },
              { program: "B.Tech Energy Engineering", opening: 1687, closing: 2557 },
              { program: "B.Tech Engineering Physics", opening: 92, closing: 1569 },
              { program: "B.Tech Environmental Science and Engineering ", opening: 3424, closing: 4718 },
              { program: "B.Tech Industrial Engineering and Operations Research", opening: 1042, closing: 1726 },
              { program: "B.Tech Mechanical Engineering", opening: 666, closing: 1685 },
              { program: "B.Tech Metallurgical Engineering and Materials Science", opening: 2690, closing: 4175 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.program}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}><strong>Note</strong>: Round 2 and Round 3 cutoffs are same as the IIT Bombay seats are filled in round 2. </p>
      <h3 className="th3" style={th3Style}>
        IIT Bombay JEE Advanced Cutoff 2024 (General Category-Round 3)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Opening All India Ranks</th>
              <th style={thStyle}>Closing All India Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { program: "B.Tech Aerospace Engineering", opening: 817, closing: 2394 },
              { program: "B.Tech Chemical Engineering ", opening: 650, closing: 2529 },
              { program: "B.Tech Civil Engineering ", opening: 2244, closing: 3987 },
              { program: "B.Tech Computer Science and Engineering", opening: 1, closing: 68 },
              { program: "B.Tech Electrical Engineering", opening: 15, closing: 464 },
              { program: "B.Tech Electrical Engineering (Dual Degree)", opening: 496, closing: 934 },
              { program: "B.Tech Energy Engineering", opening: 1687, closing: 2557 },
              { program: "B.Tech Engineering Physics", opening: 92, closing: 1569 },
              { program: "B.Tech Environmental Science and Engineering ", opening: 3424, closing: 4718 },
              { program: "B.Tech Industrial Engineering and Operations Research", opening: 1042, closing: 1726 },
              { program: "B.Tech Mechanical Engineering", opening: 666, closing: 1685 },
              { program: "B.Tech Metallurgical Engineering and Materials Science", opening: 2690, closing: 4175 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.program}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}><strong>Note</strong>: Round 2 and Round 3 cutoffs are same as the IIT Bombay seats are filled in round 2.</p>
      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay JEE Advanced Cutoff 2024 (General Category-Round 2)</strong>
      </h3>
      <p style={pStyle}>JoSAA has released IIT Bombay round 2 cutoff 2024 for all categories and courses. Below table shows IIT
        Bombay cutoff 2024 in the form of opening and closing ranks.</p>
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Opening All India Ranks</th>
              <th style={thStyle}>Closing All India Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { program: "B.Tech Aerospace Engineering", opening: 817, closing: 2394 },
              { program: "B.Tech Chemical Engineering ", opening: 650, closing: 2529 },
              { program: "B.Tech Civil Engineering ", opening: 2244, closing: 3987 },
              { program: "B.Tech Computer Science and Engineering", opening: 1, closing: 68 },
              { program: "B.Tech Electrical Engineering", opening: 15, closing: 464 },
              { program: "B.Tech Electrical Engineering (Dual Degree)", opening: 496, closing: 934 },
              { program: "B.Tech Energy Engineering", opening: 1687, closing: 2557 },
              { program: "B.Tech Engineering Physics", opening: 92, closing: 1569 },
              { program: "B.Tech Environmental Science and Engineering ", opening: 3424, closing: 4718 },
              { program: "B.Tech Industrial Engineering and Operations Research", opening: 1042, closing: 1726 },
              { program: "B.Tech Mechanical Engineering", opening: 666, closing: 1685 },
              { program: "B.Tech Metallurgical Engineering and Materials Science", opening: 2690, closing: 4175 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.program}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Bombay Cutoff 2024 (General Category- Round 1)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Opening All India Ranks</th>
              <th style={thStyle}>Closing All India Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { program: "B.Tech Aerospace Engineering", opening: 585, closing: 2388 },
              { program: "B.Tech Environmental Science and Engineering", opening: 3424, closing: 4716 },
              { program: "B.Tech Civil Engineering", opening: 2244, closing: 3986 },
              { program: "B.Tech Industrial Engineering and Operations Research", opening: 1042, closing: 1726 },
              { program: "B.Tech Chemical Engineering ", opening: 650, closing: 2507 },
              { program: "B.Tech Mechanical Engineering", opening: 666, closing: 1685 },
              { program: "B.Tech Chemistry", opening: 5268, closing: 6969 },
              { program: "B.Tech Metallurgical Engineering and Materials Science", opening: 2690, closing: 4175 },
              { program: "B.Tech Computer Science and Engineering", opening: 1, closing: 68 },
              { program: "B.Tech Energy Engineering", opening: 1687, closing: 2557 },
              { program: "B.Tech Engineering Physics", opening: 92, closing: 1532 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.program}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        IIT Bombay JEE Advanced Cutoff 2023 (General Male)
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
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Aerospace Engineering", rank2023: 2568, rank2022: 2119, rank2021: 2003 },
              { course: "BS Mathematics", rank2023: 1567, rank2022: 1557, rank2021: 1602 },
              { course: "B.Tech Chemical Engineering", rank2023: 2605, rank2022: 2081, rank2021: 2109 },
              { course: "BS Chemistry", rank2023: 7253, rank2022: 5323, rank2021: 5764 },
              { course: "B.Tech Civil Engineering", rank2023: 4134, rank2022: 3418, rank2021: 3216 },
              { course: "B.Tech Computer Science and Engineering", rank2023: 66, rank2022: 60, rank2021: 66 },
              { course: "BS Economics", rank2023: 2102, rank2022: 2107, rank2021: 1910 },
              { course: "B.Tech Electrical Engineering", rank2023: 463, rank2022: 369, rank2021: 420 },
              { course: "B.Tech and M.Tech Electrical Engineering Dual Degree", rank2023: 966, rank2022: 843, rank2021: 795 },
              { course: "B.Tech Energy Engineering", rank2023: 2694, rank2022: 2381 },
              { course: "B.Tech Engineering Physics", rank2023: 1125, rank2022: 1397, rank2021: 1210 },
              { course: "B.Tech Environmental Science and Engineering", rank2023: 5221 },
              { course: "B.Tech Mechanical Engineering", rank2023: 1691, rank2022: 1382, rank2021: 1217 },
              { course: "B.Tech Metallurgical Engineering and Materials Science", rank2023: 4428, rank2022: 3766, rank2021: 3766 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2022 || "-"}</td>
                <td style={tdStyle}>{row.rank2021 || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style} id="obc">
        JEE Advanced 2020 Cutoff for IIT Bombay
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
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Gender Neutral</th>
              <th style={thStyle}>Female Only</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "Aerospace Engineering (OBC)", genderNeutral: 1375, femaleOnly: 2911 },
              { course: "Aerospace Engineering (EWS)", genderNeutral: 595, femaleOnly: 1594 },
              { course: "Aerospace Engineering (General)", genderNeutral: 2070, femaleOnly: 5240 },
              { course: "Aerospace Engineering (SC)", genderNeutral: 591, femaleOnly: 1141 },
              { course: "Aerospace Engineering (ST)", genderNeutral: 528, femaleOnly: 617 },
              { course: "Chemical Engineering (OBC)", genderNeutral: 1238, femaleOnly: 3305 },
              { course: "Chemical Engineering (EWS)", genderNeutral: 523, femaleOnly: 1536 },
              { course: "Chemical Engineering (General)", genderNeutral: 2000, femaleOnly: 5882 },
              { course: "Chemical Engineering (SC)", genderNeutral: 867, femaleOnly: 1324 },
              { course: "Chemical Engineering (ST)", genderNeutral: 466, femaleOnly: 506 },
              { course: "Civil Engineering (OBC)", genderNeutral: 1645, femaleOnly: 3589 },
              { course: "Civil Engineering (EWS)", genderNeutral: 747, femaleOnly: 1725 },
              { course: "Civil Engineering (General)", genderNeutral: 3388, femaleOnly: 7845 },
              { course: "Civil Engineering (SC)", genderNeutral: 843, femaleOnly: 1602 },
              { course: "Civil Engineering (ST)", genderNeutral: 156, femaleOnly: 244 },
              { course: "Computer Science and Engineering (OBC)", genderNeutral: 44, femaleOnly: 338 },
              { course: "Computer Science and Engineering (EWS)", genderNeutral: 18, femaleOnly: 167 },
              { course: "Computer Science and Engineering (General)", genderNeutral: 66, femaleOnly: 248 },
              { course: "Computer Science and Engineering (SC)", genderNeutral: 29, femaleOnly: 107 },
              { course: "Computer Science and Engineering (ST)", genderNeutral: 13, femaleOnly: 27 },
              { course: "Electrical Engineering (OBC)", genderNeutral: 240, femaleOnly: 1005 },
              { course: "Electrical Engineering (EWS)", genderNeutral: 67, femaleOnly: 87 },
              { course: "Electrical Engineering (General)", genderNeutral: 298, femaleOnly: 924 },
              { course: "Electrical Engineering (SC)", genderNeutral: 183, femaleOnly: 372 },
              { course: "Electrical Engineering (ST)", genderNeutral: 92, femaleOnly: 92 },
              { course: "Engineering Physics (OBC)", genderNeutral: 1415, femaleOnly: 3762 },
              { course: "Engineering Physics (EWS)", genderNeutral: 587, femaleOnly: 1361 },
              { course: "Engineering Physics (General)", genderNeutral: 1113, femaleOnly: 3168 },
              { course: "Engineering Physics (SC)", genderNeutral: 923, femaleOnly: 1944 },
              { course: "Engineering Physics (ST)", genderNeutral: 803, femaleOnly: 803 },
              { course: "Mechanical Engineering (OBC)", genderNeutral: 768, femaleOnly: 2367 },
              { course: "Mechanical Engineering (EWS)", genderNeutral: 289, femaleOnly: 1302 },
              { course: "Mechanical Engineering (General)", genderNeutral: 1129, femaleOnly: 3802 },
              { course: "Mechanical Engineering (SC)", genderNeutral: 386, femaleOnly: 842 },
              { course: "Mechanical Engineering (ST)", genderNeutral: 304, femaleOnly: 606 },
              { course: "Metallurgical Engineering and Materials Science (OBC)", genderNeutral: 2185, femaleOnly: 4385 },
              { course: "Metallurgical Engineering and Materials Science (EWS)", genderNeutral: 807, femaleOnly: 2285 },
              { course: "Metallurgical Engineering and Materials Science (General)", genderNeutral: 3720, femaleOnly: 8056 },
              { course: "Metallurgical Engineering and Materials Science (SC)", genderNeutral: 1421, femaleOnly: 2065 },
              { course: "Metallurgical Engineering and Materials Science (ST)", genderNeutral: 588, femaleOnly: 888 },
              { course: "Environmental Science and Engineering (OBC)", genderNeutral: 3235, femaleOnly: 6261 },
              { course: "Environmental Science and Engineering (EWS)", genderNeutral: 1162, femaleOnly: 2552 },
              { course: "Environmental Science and Engineering (General)", genderNeutral: 5872, femaleOnly: 8897 },
              { course: "Environmental Science and Engineering (SC)", genderNeutral: 2048, femaleOnly: 2048 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.genderNeutral}</td>
                <td style={tdStyle}>{row.femaleOnly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        JEE Advanced 2019 Cutoff for IIT Bombay
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
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Gender Neutral</th>
              <th style={thStyle}>Female Only</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "Aerospace Engineering (OBC)", genderNeutral: 1330, femaleOnly: 2727 },
              { course: "Aerospace Engineering (EWS)", genderNeutral: 180, femaleOnly: "-" },
              { course: "Aerospace Engineering (General)", genderNeutral: 2082, femaleOnly: 4550 },
              { course: "Aerospace Engineering (SC)", genderNeutral: 564, femaleOnly: 1025 },
              { course: "Aerospace Engineering (ST)", genderNeutral: 285, femaleOnly: 567 },
              { course: "Chemical Engineering (OBC)", genderNeutral: 1118, femaleOnly: 2363 },
              { course: "Chemical Engineering (EWS)", genderNeutral: 165, femaleOnly: 705 },
              { course: "Chemical Engineering (General)", genderNeutral: 1739, femaleOnly: 3952 },
              { course: "Chemical Engineering (SC)", genderNeutral: 604, femaleOnly: 1266 },
              { course: "Chemical Engineering (ST)", genderNeutral: 501, femaleOnly: 1176 },
              { course: "Civil Engineering (OBC)", genderNeutral: 1208, femaleOnly: 3061 },
              { course: "Civil Engineering (EWS)", genderNeutral: 337, femaleOnly: 794 },
              { course: "Civil Engineering (General)", genderNeutral: 3005, femaleOnly: 5464 },
              { course: "Civil Engineering (SC)", genderNeutral: 661, femaleOnly: 799 },
              { course: "Civil Engineering (ST)", genderNeutral: 132, femaleOnly: 355 },
              { course: "Computer Science and Engineering (OBC)", genderNeutral: 37, femaleOnly: 122 },
              { course: "Computer Science and Engineering (EWS)", genderNeutral: 6, femaleOnly: 26 },
              { course: "Computer Science and Engineering (General)", genderNeutral: 63, femaleOnly: 313 },
              { course: "Computer Science and Engineering (SC)", genderNeutral: 21, femaleOnly: 105 },
              { course: "Computer Science and Engineering (ST)", genderNeutral: 15, femaleOnly: 77 },
              { course: "Electrical Engineering (OBC)", genderNeutral: 175, femaleOnly: 756 },
              { course: "Electrical Engineering (EWS)", genderNeutral: 24, femaleOnly: "-" },
              { course: "Electrical Engineering (General)", genderNeutral: 296, femaleOnly: 1058 },
              { course: "Electrical Engineering (SC)", genderNeutral: 100, femaleOnly: 219 },
              { course: "Electrical Engineering (ST)", genderNeutral: 58, femaleOnly: 101 },
              { course: "Engineering Physics (OBC)", genderNeutral: 1186, femaleOnly: 2924 },
              { course: "Engineering Physics (EWS)", genderNeutral: 150, femaleOnly: "-" },
              { course: "Engineering Physics (General)", genderNeutral: 1290, femaleOnly: 2689 },
              { course: "Engineering Physics (SC)", genderNeutral: 797, femaleOnly: "-" },
              { course: "Engineering Physics (ST)", genderNeutral: 469, femaleOnly: "-" },
              { course: "Mechanical Engineering (OBC)", genderNeutral: 477, femaleOnly: 2219 },
              { course: "Mechanical Engineering (EWS)", genderNeutral: 100, femaleOnly: 529 },
              { course: "Mechanical Engineering (General)", genderNeutral: 999, femaleOnly: 3536 },
              { course: "Mechanical Engineering (SC)", genderNeutral: 250, femaleOnly: 945 },
              { course: "Mechanical Engineering (ST)", genderNeutral: 135, femaleOnly: 432 },
              { course: "Metallurgical Engineering and Materials Science (OBC)", genderNeutral: 1910, femaleOnly: 4016 },
              { course: "Metallurgical Engineering and Materials Science (EWS)", genderNeutral: 378, femaleOnly: 868 },
              { course: "Metallurgical Engineering and Materials Science (General)", genderNeutral: 3501, femaleOnly: 6574 },
              { course: "Metallurgical Engineering and Materials Science (SC)", genderNeutral: 1034, femaleOnly: 2275 },
              { course: "Metallurgical Engineering and Materials Science (ST)", genderNeutral: 635, femaleOnly: 1160 },
              { course: "Environmental Science and Engineering (OBC)", genderNeutral: 3012, femaleOnly: 4480 },
              { course: "Environmental Science and Engineering (EWS)", genderNeutral: 457, femaleOnly: "-" },
              { course: "Environmental Science and Engineering (General)", genderNeutral: 4869, femaleOnly: 8834 },
              { course: "Environmental Science and Engineering (SC)", genderNeutral: 1642, femaleOnly: 2228 },
              { course: "Environmental Science and Engineering (ST)", genderNeutral: 829, femaleOnly: "-" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.genderNeutral}</td>
                <td style={tdStyle}>{row.femaleOnly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        JEE Advanced 2018 Cutoff for IIT Bombay
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
              <th style={thStyle}>Programme</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { programme: "Aerospace Engineering", category: "General", opening: 1040, closing: 2053 },
              { programme: "Aerospace Engineering", category: "OBC NCL", opening: 703, closing: 1074 },
              { programme: "Aerospace Engineering", category: "SC", opening: 158, closing: 492 },
              { programme: "Aerospace Engineering", category: "ST", opening: 56, closing: 230 },
              { programme: "Chemical Engineering", category: "General", opening: 144, closing: 332 },
              { programme: "Chemical Engineering", category: "OBC NCL", opening: 539, closing: 975 },
              { programme: "Chemical Engineering", category: "SC", opening: 211, closing: 626 },
              { programme: "Chemical Engineering", category: "ST", opening: 144, closing: 332 },
              { programme: "Civil Engineering", category: "General", opening: 1443, closing: 2544 },
              { programme: "Civil Engineering", category: "OBC NCL", opening: 601, closing: 1086 },
              { programme: "Civil Engineering", category: "SC", opening: 172, closing: 439 },
              { programme: "Civil Engineering", category: "ST", opening: 93, closing: 139 },
              { programme: "Computer Science and Engineering", category: "General", opening: 1, closing: 59 },
              { programme: "Computer Science and Engineering", category: "OBC NCL", opening: 9, closing: 37 },
              { programme: "Computer Science and Engineering", category: "SC", opening: 1, closing: 14 },
              { programme: "Computer Science and Engineering", category: "ST", opening: 1, closing: 9 },
              { programme: "Electrical Engineering", category: "General", opening: 43, closing: 265 },
              { programme: "Electrical Engineering", category: "OBC NCL", opening: 50, closing: 177 },
              { programme: "Electrical Engineering", category: "SC", opening: 17, closing: 76 },
              { programme: "Electrical Engineering", category: "ST", opening: 14, closing: 45 },
              { programme: "Engineering Physics", category: "General", opening: 85, closing: 993 },
              { programme: "Engineering Physics", category: "OBC NCL", opening: 107, closing: 1002 },
              { programme: "Engineering Physics", category: "SC", opening: 93, closing: 330 },
              { programme: "Engineering Physics", category: "ST", opening: 279, closing: 459 },
              { programme: "Mechanical Engineering", category: "General", opening: 305, closing: 848 },
              { programme: "Mechanical Engineering", category: "OBC NCL", opening: 117, closing: 449 },
              { programme: "Mechanical Engineering", category: "SC", opening: 38, closing: 180 },
              { programme: "Mechanical Engineering", category: "ST", opening: 11, closing: 67 },
              { programme: "Metallurgical Engineering and Materials Science", category: "General", opening: 1010, closing: 3154 },
              { programme: "Metallurgical Engineering and Materials Science", category: "OBC NCL", opening: 1134, closing: 1603 },
              { programme: "Metallurgical Engineering and Materials Science", category: "SC", opening: 667, closing: 1027 },
              { programme: "Metallurgical Engineering and Materials Science", category: "ST", opening: 503, closing: 633 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.programme}</td>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced 2017 Cutoff for IIT Bombay
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
              <th style={thStyle}>Programme</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { programme: "Aerospace Engineering", category: "General", opening: 749, closing: 2036 },
              { programme: "Aerospace Engineering", category: "OBC NCL", opening: 383, closing: 1037 },
              { programme: "Aerospace Engineering", category: "SC", opening: 157, closing: 425 },
              { programme: "Aerospace Engineering", category: "ST", opening: 173, closing: 231 },
              { programme: "Chemical Engineering", category: "General", opening: 830, closing: 1507 },
              { programme: "Chemical Engineering", category: "OBC NCL", opening: 500, closing: 910 },
              { programme: "Chemical Engineering", category: "SC", opening: 267, closing: 631 },
              { programme: "Chemical Engineering", category: "ST", opening: 238, closing: 327 },
              { programme: "Civil Engineering", category: "General", opening: 1046, closing: 2308 },
              { programme: "Civil Engineering", category: "OBC NCL", opening: 602, closing: 976 },
              { programme: "Civil Engineering", category: "SC", opening: 203, closing: 511 },
              { programme: "Civil Engineering", category: "ST", opening: 52, closing: 117 },
              { programme: "Computer Science and Engineering", category: "General", opening: 1, closing: 62 },
              { programme: "Computer Science and Engineering", category: "OBC NCL", opening: 9, closing: 45 },
              { programme: "Computer Science and Engineering", category: "SC", opening: 1, closing: 22 },
              { programme: "Computer Science and Engineering", category: "ST", opening: 4, closing: 15 },
              { programme: "Electrical Engineering", category: "General", opening: 74, closing: 266 },
              { programme: "Electrical Engineering", category: "OBC NCL", opening: 60, closing: 158 },
              { programme: "Electrical Engineering", category: "SC", opening: 14, closing: 80 },
              { programme: "Electrical Engineering", category: "ST", opening: 3, closing: 27 },
              { programme: "Engineering Physics", category: "General", opening: 64, closing: 1223 },
              { programme: "Engineering Physics", category: "OBC NCL", opening: 156, closing: 786 },
              { programme: "Engineering Physics", category: "SC", opening: 166, closing: 579 },
              { programme: "Engineering Physics", category: "ST", opening: 201, closing: 272 },
              { programme: "Mechanical Engineering", category: "General", opening: 297, closing: 738 },
              { programme: "Mechanical Engineering", category: "OBC NCL", opening: 110, closing: 363 },
              { programme: "Mechanical Engineering", category: "SC", opening: 80, closing: 163 },
              { programme: "Mechanical Engineering", category: "ST", opening: 33, closing: 104 },
              { programme: "Metallurgical Engineering and Materials Science", category: "General", opening: 498, closing: 3039 },
              { programme: "Metallurgical Engineering and Materials Science", category: "OBC NCL", opening: 1106, closing: 1493 },
              { programme: "Metallurgical Engineering and Materials Science", category: "SC", opening: 676, closing: 960 },
              { programme: "Metallurgical Engineering and Materials Science", category: "ST", opening: 433, closing: 634 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.programme}</td>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced 2016 Cutoff for IIT Bombay
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
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "Aerospace Engineering", category: "General", opening: 838, closing: 1841 },
              { course: "Aerospace Engineering", category: "General_PWD", opening: 42, closing: 94 },
              { course: "Aerospace Engineering", category: "OBC-NCL", opening: 408, closing: 1098 },
              { course: "Aerospace Engineering", category: "OBC-NCL_PWD", opening: 45, closing: 45 },
              { course: "Aerospace Engineering", category: "SC", opening: 285, closing: 468 },
              { course: "Aerospace Engineering", category: "ST", opening: 79, closing: 133 },
              { course: "Chemical Engineering", category: "General", opening: 422, closing: 1479 },
              { course: "Chemical Engineering", category: "General_PWD", opening: 51, closing: 75 },
              { course: "Chemical Engineering", category: "OBC-NCL", opening: 447, closing: 974 },
              { course: "Chemical Engineering", category: "OBC-NCL_PWD", opening: 40, closing: 40 },
              { course: "Chemical Engineering", category: "SC", opening: 257, closing: 572 },
              { course: "Chemical Engineering", category: "SC_PWD", opening: 3, closing: 3 },
              { course: "Chemical Engineering", category: "ST", opening: 133, closing: 335 },
              { course: "Chemistry", category: "OBC-NCL", opening: 1753, closing: 2596 },
              { course: "Chemistry", category: "SC", opening: 261, closing: 1743 },
              { course: "Chemistry", category: "ST", opening: 661, closing: 697 },
              { course: "Civil Engineering", category: "General", opening: 897, closing: 2251 },
              { course: "Civil Engineering", category: "General_PWD", opening: 19, closing: 19 },
              { course: "Civil Engineering", category: "OBC-NCL", opening: 356, closing: 1007 },
              { course: "Civil Engineering", category: "OBC-NCL_PWD", opening: 21, closing: 21 },
              { course: "Civil Engineering", category: "SC", opening: 76, closing: 441 },
              { course: "Civil Engineering", category: "ST", opening: 57, closing: 108 },
              { course: "Computer Science Engineering", category: "General", opening: 1, closing: 60 },
              { course: "Computer Science Engineering", category: "General_PWD", opening: 2, closing: 2 },
              { course: "Computer Science Engineering", category: "OBC-NCL", opening: 8, closing: 44 },
              { course: "Computer Science Engineering", category: "OBC-NCL_PWD", opening: 1, closing: 1 },
              { course: "Computer Science Engineering", category: "SC", opening: 2, closing: 15 },
              { course: "Computer Science Engineering", category: "ST", opening: 1, closing: 15 },
              { course: "Electrical Engineering", category: "General", opening: 22, closing: 583 },
              { course: "Electrical Engineering", category: "General_PWD", opening: 9, closing: 24 },
              { course: "Electrical Engineering", category: "OBC-NCL", opening: 64, closing: 404 },
              { course: "Electrical Engineering", category: "OBC-NCL_PWD", opening: 2, closing: 2 },
              { course: "Electrical Engineering", category: "SC", opening: 18, closing: 226 },
              { course: "Electrical Engineering", category: "SC_PWD", opening: 1, closing: 1 },
              { course: "Electrical Engineering", category: "ST", opening: 19, closing: 130 },
              { course: "Engineering Chemistry", category: "General", opening: 3323, closing: 4880 },
              { course: "Engineering Chemistry", category: "General_PWD", opening: 49, closing: 49 },
              { course: "Engineering Chemistry", category: "OBC-NCL", opening: 1753, closing: 2596 },
              { course: "Engineering Chemistry", category: "SC", opening: 261, closing: 1743 },
              { course: "Engineering Chemistry", category: "ST", opening: 661, closing: 697 },
              { course: "Engineering Physics", category: "General", opening: 6, closing: 1843 },
              { course: "Engineering Physics", category: "General_PWD", opening: 43, closing: 43 },
              { course: "Engineering Physics", category: "OBC-NCL", opening: 283, closing: 928 },
              { course: "Engineering Physics", category: "OBC-NCL_PWD", opening: 50, closing: 50 },
              { course: "Engineering Physics", category: "SC", opening: 360, closing: 812 },
              { course: "Engineering Physics", category: "812", opening: 204, closing: 368 },
              { course: "Mechanical Engineering", category: "General", opening: 26, closing: 901 },
              { course: "Mechanical Engineering", category: "General_PWD", opening: 13, closing: 13 },
              { course: "Mechanical Engineering", category: "OBC-NCL", opening: 104, closing: 484 },
              { course: "Mechanical Engineering", category: "OBC-NCL_PWD", opening: 7, closing: 8 },
              { course: "Mechanical Engineering", category: "SC", opening: 33, closing: 284 },
              { course: "Mechanical Engineering", category: "ST", opening: 29, closing: 133 },
              { course: "Metallurgical and Materials Engineering", category: "General", opening: 1657, closing: 3450 },
              { course: "Metallurgical and Materials Engineering", category: "General_PWD", opening: 60, closing: 60 },
              { course: "Metallurgical and Materials Engineering", category: "OBC-NCL", opening: 1015, closing: 1885 },
              { course: "Metallurgical and Materials Engineering", category: "SC", opening: 575, closing: 1126 },
              { course: "Metallurgical and Materials Engineering", category: "ST", opening: 333, closing: 580 },
              { course: "Power Engineering", category: "General", opening: 1374, closing: 2250 },
              { course: "Power Engineering", category: "OBC-NCL", opening: 809, closing: 1524 },
              { course: "Power Engineering", category: "SC", opening: 338, closing: 848 },
              { course: "Power Engineering", category: "ST", opening: 415, closing: 706 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay JEE Advanced Cutoff 2024 - Round 5 (Out)</strong>
      </h3>
      <p style={pStyle}><strong>IIT Bombay cutoff 2024</strong> has been released for B.Tech, Integrated B.Tech and BArch courses in the form of
        opening and closing ranks. In Round 5, the closing ranks varied between <strong>68</strong> and <strong>7430</strong> wherein <strong>B.Tech. In CSE</strong> is highly competitive among General category students under the AI Quota. <br /> <br />
        While comparing the IIT Bombay CSE cutoff 2024 with the last two years, we can see that <strong>B.Tech. In
          CSE</strong> has shown a declining trend in its Round 5 closing ranks. The Round 5 cutoff for the same course
        was <strong>67</strong> in 2023 and <strong>60</strong> in 2022 for the General category students for the AI Quota. <br /> <br />
        For the OBC category, IIT Bombay B.Tech cutoff 2024 ranged between <strong>50</strong> and <strong>3506</strong>. As in the general
        category, B.Tech. In CSE has the lowest cutoff for OBC category students, making it the most competitive
        course to get into IIT Bombay - Indian Institute of Technology. Candidates can refer to the table below for the
        branch-wise cutoff for 2024, along with a comparison for 2023 and 2022 for the General AI category students. </p>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Round 5 Closing Rank (General-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech. in Aerospace Engineering", year2022: 2119, year2023: 2694, year2024: 2394 },
              { course: "B.Tech. in Chemical Engineering", year2022: 2081, year2023: 2824, year2024: 2545 },
              { course: "B.Tech. in Civil Engineering", year2022: 3471, year2023: 4371, year2024: 4046 },
              { course: "B.Tech. in Computer Science and Engineering", year2022: 60, year2023: 67, year2024: 68 },
              { course: "B.Tech. in Electrical Engineering", year2022: 369, year2023: 469, year2024: 496 },
              { course: "B.Tech. in Metallurgical Engineering and Materials Science", year2022: 3783, year2023: 4649, year2024: 4193 },
              { course: "B.Tech. in Mechanical Engineering", year2022: 1406, year2023: 1736, year2024: 1685 },
              { course: "B.S. in Chemistry", year2022: 5500, year2023: 9064, year2024: 7430 },
              { course: "B.S. in Economics", year2022: 2107, year2023: 2102, year2024: 2408 },
              { course: "Integrated B.Tech. in Electrical Engineering + M.Tech. in Microelectronics", year2022: 843, year2023: 968, year2024: 973 },
              { course: "B.S. in Mathematics", year2022: 2143, year2023: 1704, year2024: 1191 },
              { course: "B.Tech. in Energy Engineering", year2022: 2381, year2023: 2855, year2024: 2689 },
              { course: "B.Tech. in Environmental Science and Engineering", year2022: "— / —", year2023: 5401, year2024: 4718 },
              { course: "B.Tech. in Industrial Engineering and Operations Research", year2022: "— / —", year2023: "— / —", year2024: 1726 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.year2022}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Round 5 Closing Rank (OBC-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech. in Aerospace Engineering", year2022: 1211, year2023: 1588, year2024: 1577 },
              { course: "B.Tech. in Chemical Engineering", year2022: 1161, year2023: 1449, year2024: 1338 },
              { course: "B.Tech. in Civil Engineering", year2022: 1619, year2023: 2020, year2024: 1979 },
              { course: "B.Tech. in Computer Science and Engineering", year2022: 51, year2023: 58, year2024: 50 },
              { course: "B.Tech. in Electrical Engineering", year2022: 294, year2023: 386, year2024: 325 },
              { course: "B.Tech. in Metallurgical Engineering and Materials Science", year2022: 2075, year2023: 2461, year2024: 2207 },
              { course: "B.Tech. in Mechanical Engineering", year2022: 836, year2023: 972, year2024: 958 },
              { course: "B.Tech. in Engineering Physics", year2022: 1569, year2023: 1546, year2024: 1578 },
              { course: "B.S. in Chemistry", year2022: 3138, year2023: 3976, year2024: 3506 },
              { course: "B.S. in Economics", year2022: 1159, year2023: 1330, year2024: 1255 },
              { course: "Integrated B.Tech. in Electrical Engineering + M.Tech. in Microelectronics", year2022: 542, year2023: 683, year2024: 571 },
              { course: "B.S. in Mathematics", year2022: 2029, year2023: 1779, year2024: 1291 },
              { course: "B.Tech. in Energy Engineering", year2022: 1710, year2023: 1827, year2024: 1650 },
              { course: "B.Tech. in Environmental Science and Engineering", year2022: "— / —", year2023: 3037, year2024: 2716 },
              { course: "B.Tech. in Industrial Engineering and Operations Research", year2022: "— / —", year2023: "— / —", year2024: 1196 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.year2022}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay JEE Advanced Cutoff Year Wise Comparison 2024, 2023, 2022</strong>
      </h3>
      <p style={pStyle}>The IIT Bombay JEE Advanced cutoff 2024 has been announced for various B.Tech specializations. Among
        these, the B.Tech. In CSE stands out as the most competitive, with a closing rank of <strong>68</strong>. The second toughest
        course to get admission in IIT Bombay - Indian Institute of Technology is B.Tech. In Electrical Engineering, this
        has a Round 5 closing rank of 496 for the General category students under the AI Quota. <br /><br />
        Among OBC candidates, the most competitive course is B.Tech. in CSE, with a Round 5 closing rank of <strong>50</strong>.
        The easiest B.Tech specialization to secure admission in is B.S. in Chemistry, with a closing rank of <strong>3506</strong>. </p>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Last Round Closing Rank (General-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech. in Aerospace Engineering", year2022: 2119, year2023: 2694, year2024: 2394 },
              { course: "B.Tech. in Chemical Engineering", year2022: 2081, year2023: 2824, year2024: 2545 },
              { course: "B.Tech. in Civil Engineering", year2022: 3471, year2023: 4371, year2024: 4046 },
              { course: "B.Tech. in Computer Science and Engineering", year2022: 61, year2023: 67, year2024: 68 },
              { course: "B.Tech. in Electrical Engineering", year2022: 369, year2023: 481, year2024: 496 },
              { course: "B.Tech. in Metallurgical Engineering and Materials Science", year2022: 3783, year2023: 4649, year2024: 4193 },
              { course: "B.Tech. in Mechanical Engineering", year2022: 1406, year2023: 1736, year2024: 1685 },
              { course: "B.Tech. in Engineering Physics", year2022: 1452, year2023: 1749, year2024: 1719 },
              { course: "B.S. in Chemistry", year2022: 5500, year2023: 9064, year2024: 7430 },
              { course: "B.S. in Economics", year2022: 2107, year2023: 2102, year2024: 2408 },
              { course: "Integrated B.Tech. in Electrical Engineering + M.Tech. in Microelectronics", year2022: 866, year2023: 981, year2024: 973 },
              { course: "Integrated B.Tech. in Mechanical Engineering + M.Tech. in Computer Integrated Manufacturing", year2022: 1492, year2023: "— / —", year2024: "— / —" },
              { course: "B.S. in Mathematics", year2022: 2158, year2023: 1704, year2024: 1191 },
              { course: "Discontinued (Jul 2023) Integrated B.Tech. + M.Tech. in Environmental Science and Engineering", year2022: 4736, year2023: "— / —", year2024: "— / —" },
              { course: "B.Tech. in Energy Engineering", year2022: 2381, year2023: 2855, year2024: 2689 },
              { course: "B.Tech. in Environmental Science and Engineering", year2022: "— / —", year2023: 5401, year2024: 4718 },
              { course: "B.Tech. in Industrial Engineering and Operations Research", year2022: "— / —", year2023: "— / —", year2024: 1726 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.year2022}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        JEE Advanced Last Round Closing Rank (OBC-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech. in Aerospace Engineering", year2022: 1211, year2023: 1588, year2024: 1577 },
              { course: "B.Tech. in Chemical Engineering", year2022: 1173, year2023: 1449, year2024: 1338 },
              { course: "B.Tech. in Civil Engineering", year2022: 1633, year2023: 2034, year2024: 1979 },
              { course: "B.Tech. in Computer Science and Engineering", year2022: 51, year2023: 58, year2024: 50 },
              { course: "B.Tech. in Electrical Engineering", year2022: 304, year2023: 388, year2024: 325 },
              { course: "B.Tech. in Metallurgical Engineering and Materials Science", year2022: 2075, year2023: 2461, year2024: 2207 },
              { course: "B.Tech. in Mechanical Engineering", year2022: 836, year2023: 972, year2024: 952 },
              { course: "B.Tech. in Engineering Physics", year2022: 1569, year2023: 1546, year2024: 1578 },
              { course: "B.S. in Chemistry", year2022: 3138, year2023: 4004, year2024: 3506 },
              { course: "B.S. in Economics", year2022: 1191, year2023: 1330, year2024: 1255 },
              { course: "Integrated B.Tech. in Electrical Engineering + M.Tech. in Microelectronics", year2022: 542, year2023: 683, year2024: 571 },
              { course: "Integrated B.Tech. in Mechanical Engineering + M.Tech. in Computer Integrated Manufacturing", year2022: 991, year2023: "— / —", year2024: "— / —" },
              { course: "B.S. in Mathematics", year2022: 2029, year2023: 1779, year2024: 1291 },
              { course: "B.Tech. in Energy Engineering", year2022: 1710, year2023: 1827, year2024: 1650 },
              { course: "B.Tech. in Environmental Science and Engineering", year2022: "— / —", year2023: "3152", year2024: 2716 },
              { course: "B.Tech. in Industrial Engineering and Operations Research", year2022: "— / —", year2023: "— / —", year2024: 1196 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.year2022}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        B.Tech CSE Top IITs Comparison – JoSAA Last Round Closing Ranks
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
              <th style={thStyle}>Top IITs</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { iit: "IIT Bombay", year2023: 67, year2024: 68 },
              { iit: "IIT Delhi", year2023: 118, year2024: 116 },
              { iit: "IIT Madras ", year2023: 148, year2024: 159 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.iit}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay GATE COAP Cutoff 2024 - Round 1 (Out)</strong>
      </h3>
      <p style={pStyle}>IIT Bombay GATE COAP Round 1 cutoff 2024 has been released for admission to the M.Tech courses. As per
        the IIT Bombay M.Tech cutoff 2024, Geoinformatics has become the most competitive specialization with a
        closing rank of <strong>325</strong> for the General AI category students. Comparing the latest year-round 1 cutoff with the
        previous two years, there has been no change in the closing ranks for the round 1 cutoff. <br /> <br />
        The most competitive M.Tech specialization for the OBC category students is Geoinformatics and Natural
        Resources Engineering with a round 1 closing cutoff <strong>315</strong> under the AII India Quota. Candidates can refer to
        the table below to check out the latest round cutoff for 2024 with the round 1 cutoff of 2023 and 2022</p>

      <h3 className="th3" style={th3Style}>
        COAP Round 1 score (General-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "M.Tech. in Biomedical Engineering", rank2022: 400, rank2023: 400, rank2024: 400 },
              { course: "M.Tech. in Chemical Engineering", rank2022: 600, rank2023: 600, rank2024: 600 },
              { course: "M.Tech. in Computer Science and Engineering", rank2022: 700, rank2023: 750, rank2024: 750 },
              { course: "M.Tech. in Energy Systems Engineering", rank2022: 500, rank2023: 500, rank2024: 500 },
              { course: "M.Tech. in Materials Science", rank2022: 450, rank2023: 450, rank2024: 400 },
              { course: "M.Tech. in Materials, Manufacturing and Modeling", rank2022: 400, rank2023: 400, rank2024: 400 },
              { course: "M.Tech. in Geoinformatics and Natural Resources Engineering", rank2022: 350, rank2023: 350, rank2024: 350 },
              { course: "M.Tech. in Industrial Engineering and Operations Research", rank2022: 650, rank2023: 650, rank2024: 650 },
              { course: "M.Tech. in Systems and Control Engineering", rank2022: 650, rank2023: 650, rank2024: 500 },
              { course: "M.Tech. in Environmental Science and Engineering", rank2022: 500, rank2023: 500, rank2024: 500 },
              { course: "M.Tech. in Technology and Development", rank2022: 550, rank2023: 500, rank2024: 500 },
              { course: "M.S. by Research in Computer Science and Engineering", rank2022: "— / —", rank2023: "— / —", rank2024: 600 },
              { course: "M.S. by Research in Data Science and Artificial Intelligence", rank2022: "— / —", rank2023: "— / —", rank2024: 650 },
              { course: "M.Tech. in Aerospace Engineering", rank2022: "— / —", rank2023: "— / —", rank2024: 500 },
              { course: "MS by Research in Healthcare Informatics", rank2022: "— / —", rank2023: "— / —", rank2024: 630 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.rank2022}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay GATE COAP Cutoff Year Wise Comparison 2024, 2023, 2022</strong>
      </h3>

      <p style={pStyle}>IIT Bombay accepts GATE COAP scores for admission to the M.Tech courses. IIT Bombay GATE cutoff 2024
        has been released. As per the GATE COAP round 1 cutoff, the M.Tech cutoff ranged between <strong>25 and
          750</strong> for the General AII India Quota. <br /> <br />
        Candidates seeking admission can refer to the table below to check out the latest round IIT Bombay M.Tech
        cutoff 2024, as well as the last round cutoff for 2023 and 2022: </p>

      <h3 className="th3" style={th3Style}>
        COAP Last Round score (General-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "M.Tech. in Biomedical Engineering", rank2022: 400, rank2023: 400, rank2024: 400 },
              { course: "M.Tech. in Chemical Engineering", rank2022: 600, rank2023: 600, rank2024: 600 },
              { course: "M.Tech. in Computer Science and Engineering", rank2022: 700, rank2023: 750, rank2024: 750 },
              { course: "M.Tech. in Energy Systems Engineering", rank2022: 500, rank2023: 500, rank2024: 500 },
              { course: "M.Tech. in Materials Science", rank2022: 450, rank2023: 450, rank2024: 400 },
              { course: "M.Tech. in Materials, Manufacturing and Modeling", rank2022: 400, rank2023: 400, rank2024: 400 },
              { course: "M.Tech. in Geoinformatics and Natural Resources Engineering", rank2022: 350, rank2023: 350, rank2024: 350 },
              { course: "M.Tech. in Industrial Engineering and Operations Research", rank2022: 650, rank2023: 650, rank2024: 650 },
              { course: "M.Tech. in Systems and Control Engineering", rank2022: 650, rank2023: 650, rank2024: 500 },
              { course: "M.Tech. in Environmental Science and Engineering", rank2022: 500, rank2023: 500, rank2024: 500 },
              { course: "M.Tech. in Technology and Development", rank2022: 550, rank2023: 500, rank2024: 500 },
              { course: "M.Tech. in Urban Systems", rank2022: 600, rank2023: 500, rank2024: "— / —" },
              { course: "M.S. by Research in Computer Science and Engineering", rank2022: "— / —", rank2023: "— / —", rank2024: 600 },
              { course: "M.S. by Research in Data Science and Artificial Intelligence", rank2022: "— / —", rank2023: "— / —", rank2024: 650 },
              { course: "M.Tech. in Aerospace Engineering", rank2022: "— / —", rank2023: "— / —", rank2024: 500 },
              { course: "MS by Research in Healthcare Informatics", rank2022: "— / —", rank2023: "— / —", rank2024: 630 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.rank2022}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>The cutoff was released for the General, OBC, SC, ST, EWS, and PWD categories as opening and closing
        ranks. IIT Bombay JAM 2024 cutoff for the last round ranged between 17 and 670 wherein M.Sc. in Applied
        Geology stands out as the most competitive MSc specialization for the General AI category students.
        Considering the cutoff data over the past three years, M.Sc. in Applied Geology remains the first choice
        among the students at IIT Bombay. <br />
        For a detailed year, round and category-wise MSc cutoff, candidates can use the filters provided below:</p>

      <h3 className="th3" style={th3Style}>
        IIT JAM Last Round Closing Rank (General-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "M.Sc. in Physics", rank2022: 45, rank2023: 57, rank2024: 43 },
              { course: "M.Sc. in Biotechnology", rank2022: 28, rank2023: 24, rank2024: 33 },
              { course: "M.Sc. in Applied Geology", rank2022: 16, rank2023: 18, rank2024: 17 },
              { course: "M.Sc. in Applied Geophysics", rank2022: 392, rank2023: 303, rank2024: 257 },
              { course: "M.Sc. + Ph.D. in Operations Research", rank2022: "— / —", rank2023: 36, rank2024: "— / —" },
              { course: "M.Sc. + Ph.D. in Environmental Science and Engineering", rank2022: "— / —", rank2023: 662, rank2024: 657 },
              { course: "M.Sc. in Mathematics", rank2022: 42, rank2023: 42, rank2024: 52 },
              { course: "M.Sc. in Applied Statistics and Informatics", rank2022: 22, rank2023: 26, rank2024: 29 },
              { course: "M.Sc. in Chemistry", rank2022: 33, rank2023: 25, rank2024: 29 },
              { course: "M.Sc. + Ph.D. in Energy Science and Engineering", rank2022: 567, rank2023: 606, rank2024: 670 },
              { course: "M.Sc. in Operations Research", rank2022: "— / —", rank2023: "— / —", rank2024: 40 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.rank2022}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Bombay B.Des cutoff 2024 has been concluded with the release of the UCEED Round 5 Seat Allotment
        result. The IIT Bombay Cutoff 2024 for the last-round was <strong>14</strong>, for the General AI category candidates. In a
        comparison of the IIT Bombay UCEED cutoff 2024 with that of the last two years, it’s observed that B.Des has
        experienced a fluctuating pattern in its closing ranks. The Last Round cutoff for the same course stood at <strong>16</strong> in
        2023 and <strong>15</strong> in 2022. <br /><br />
        Table given below UCEED last-round closing ranks for the B.Des course for the years 2024, 2023, and 2022
        for students belonging to the General AI category. </p>

        <h3 className="th3" style={th3Style}>
        UCEED Last Round Closing Rank (General-All India)
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "Bachelor of Design (B.Des.)", rank2022: 15, rank2023: 16, rank2024: 14 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.rank2022}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default Cutoff;
