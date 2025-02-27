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
        IIT Guwahati accepts B.Tech admission on the basis of JEE Advanced ranks of
        the candidates has to followed by JoSAA Counseling. Every year a total of 6
        rounds of cutoff lists are released by JoSAA for the IIT Guwahati B.Tech
        program. <br /><br />
        IIT Guwahati accepts M.Tech admission on the basis of the GATE Scores of the
        Candidates followed by COAP Counseling. IIT Guwahati also offers M.Sc.
        Program. The Cutoff for the M.Sc. program is based on the IIT JAM scores of
        the Candidates followed by JOAPS counseling. <br /><br />
        IIT Guwahati also offers a B.Des Program for Design enthusiasts, the cutoff for
        the B.Des Program is based on the UCEED scores of the Candidates.
        Candidates can check the Past year's cutoff analysis of various UG and PG
        programs of IIT Guwahati in the article below.
      </p>

      <h3 className="th3" style={th3Style} id="gen" >IIT Guwahati B.Tech Cutoff 2024 (Open Category)</h3>
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
              <th style={thStyle}>Courses Name</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Biosciences and Bioengineering",
                round1: 8400,
                round2: 8400,
              },
              {
                course: "B.Tech Chemical Engineering",
                round1: 5152,
                round2: 5253,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                round1: 6434,
                round2: 6549,
              },
              {
                course: "B.Tech Civil Engineering",
                round1: 7112,
                round2: 7137,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                round1: 607,
                round2: 612,
              },
              {
                course: "B.Tech Data Science and Artificial Intelligence",
                round1: 970,
                round2: 981,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                round1: 1610,
                round2: 1615,
              },
              {
                course: "B.Tech Electronics and Electrical Engineering",
                round1: 2093,
                round2: 2097,
              },
              {
                course: "B.Tech Energy Engineering",
                round1: 5462,
                round2: 5482,
              },
              {
                course: "B.Tech Engineering Physics",
                round1: 5270,
                round2: 5493,
              },
              {
                course: "B.Tech Mathematics and Computing",
                round1: 1000,
                round2: 1010,
              },
              {
                course: "B.Tech Mechanical Engineering",
                round1: 4185,
                round2: 4292,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.round1}</td>
                <td style={tdStyle}>{row.round2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Guwahati B.Tech Cutoff 2024 (General Category) (Round 3&4)</h3>
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
              <th style={thStyle}>Courses Name</th>
              <th style={thStyle}>Round 3</th>
              <th style={thStyle}>Round 4</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Biosciences and Bioengineering",
                round1: 6812,
                round2: 8400,
              },
              {
                course: "B.Tech Chemical Engineering",
                round1: 4515,
                round2: 5253,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                round1: 5331,
                round2: 6549,
              },
              {
                course: "B.Tech Civil Engineering",
                round1: 5869,
                round2: 7142,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                round1: 466,
                round2: 612,
              },
              {
                course: "B.Tech Data Science and Artificial Intelligence",
                round1: 829,
                round2: 981,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                round1: 1447,
                round2: 1615,
              },
              {
                course: "B.Tech Electronics and Electrical Engineering",
                round1: 1686,
                round2: 2126,
              },
              {
                course: "B.Tech Energy Engineering",
                round1: 4960,
                round2: 5482,
              },
              {
                course: "B.Tech Engineering Physics",
                round1: 3815,
                round2: 5493,
              },
              {
                course: "B.Tech Mathematics and Computing",
                round1: 621,
                round2: 1010,
              },
              {
                course: "B.Tech Mechanical Engineering",
                round1: 3130,
                round2: 4292,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.round1}</td>
                <td style={tdStyle}>{row.round2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Guwahati JEE Advanced Cutoff 2024 (General) (Round 5)</h3>
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
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Biosciences and Bioengineering",
                opening: 7410,
                closing: 9178,
              },
              {
                course: "B.Tech Chemical Engineering",
                opening: 4618,
                closing: 5363,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                opening: 5443,
                closing: 6834,
              },
              {
                course: "B.Tech Civil Engineering",
                opening: 5869,
                closing: 7670,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                opening: 466,
                closing: 623,
              },
              {
                course: "B.Tech Data Science and Artificial Intelligence",
                opening: 829,
                closing: 995,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                opening: 1462,
                closing: 1658,
              },
              {
                course: "B.Tech Electronics and Electrical Engineering",
                opening: 1686,
                closing: 2217,
              },
              {
                course: "B.Tech Energy Engineering",
                opening: 4960,
                closing: 5920,
              },
              {
                course: "B.Tech Engineering Physics",
                opening: 4302,
                closing: 5686,
              },
              {
                course: "B.Tech Mathematics and Computing",
                opening: 722,
                closing: 1021,
              },
              {
                course: "B.Tech Mechanical Engineering",
                opening: 3130,
                closing: 4523,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}><strong>Note: </strong>The above table shows the opening and closing rank for admission to
        B.Tech programmes as per the IIT Guwahati cutoff 2024. </p>

      <h3 style={th3Style}>
        IIT Guwahati JEE Advanced Cutoff
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
              <th style={thStyle}>Courses Name</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Biosciences and Bioengineering",
                rank2023: 9185,
                rank2022: 8578,
                rank2021: 8042,
              },
              {
                course: "B.Tech Chemical Engineering",
                rank2023: 5511,
                rank2022: 5611,
                rank2021: 5396,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                rank2023: 7828,
                rank2022: 7477,
                rank2021: 6880,
              },
              {
                course: "B.Tech Civil Engineering",
                rank2023: 7399,
                rank2022: 7300,
                rank2021: 6648,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                rank2023: 601,
                rank2022: 589,
                rank2021: 593,
              },
              {
                course: "B.Tech Data Science and Artificial Intelligence",
                rank2023: 974,
                rank2022: 924,
                rank2021: 954,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                rank2023: 1597,
                rank2022: 1690,
                rank2021: 1737,
              },
              {
                course: "B.Tech Electronics and Electrical Engineering",
                rank2023: 2056,
                rank2022: 2196,
                rank2021: 2115,
              },
              {
                course: "B.Tech Energy Engineering",
                rank2023: 6146,
                rank2022: 5836,
                rank2021: null,
              },
              {
                course: "B.Tech Engineering Physics",
                rank2023: 5954,
                rank2022: 5483,
                rank2021: 5202,
              },
              {
                course: "B.Tech Mathematics and Computing",
                rank2023: 1076,
                rank2022: 1041,
                rank2021: 1077,
              },
              {
                course: "B.Tech Mechanical Engineering",
                rank2023: 4251,
                rank2022: 4692,
                rank2021: 4132,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2022}</td>
                <td style={tdStyle}>{row.rank2021 || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}><strong>Note: </strong> The following table shows the details of the closing ranks of the IIT Guwahati cutoff 2023 for the gender-male category. Candidates can check the IIT Guwahati B.Tech cutoff analysis for the past 3 years.</p>

      <h3 style={th3Style}>IIT Guwahati JAM Cutoff 2022</h3>
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
              <th style={thStyle}>Chemistry (M.Sc.)</th>
              <th style={thStyle}>Mathematics and Computing (M.Sc.)</th>
              <th style={thStyle}>Physics (M.Sc.)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                category: "General",
                chemistryOpen: 123,
                chemistryClose: 232,
                mathOpen: 7,
                mathClose: 69,
                physicsOpen: 141,
                physicsClose: 241,
              },
              {
                category: "EWS",
                chemistryOpen: 245,
                chemistryClose: 323,
                mathOpen: 74,
                mathClose: 137,
                physicsOpen: 273,
                physicsClose: 319,
              },
              {
                category: "OBC-NCL",
                chemistryOpen: 346,
                chemistryClose: 594,
                mathOpen: 77,
                mathClose: 237,
                physicsOpen: 301,
                physicsClose: 511,
              },
              {
                category: "SC",
                chemistryOpen: 600,
                chemistryClose: 1118,
                mathOpen: 87,
                mathClose: 804,
                physicsOpen: 1099,
                physicsClose: 1757,
              },
              {
                category: "ST",
                chemistryOpen: 2427,
                chemistryClose: 3059,
                mathOpen: 619,
                mathClose: 2453,
                physicsOpen: 3857,
                physicsClose: 4511,
              },
              {
                category: "GEN-PwD",
                chemistryOpen: 2093,
                chemistryClose: 2093,
                mathOpen: 4821,
                mathClose: 5244,
                physicsOpen: 4164,
                physicsClose: 4164,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>
                  Opening Rank: {row.chemistryOpen} <br />
                  Closing Rank: {row.chemistryClose}
                </td>
                <td style={tdStyle}>
                  Opening Rank: {row.mathOpen} <br />
                  Closing Rank: {row.mathClose}
                </td>
                <td style={tdStyle}>
                  Opening Rank: {row.physicsOpen} <br />
                  Closing Rank: {row.physicsClose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Guwahati UCEED Cutoff 2022</h3>
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
              <th style={thStyle}>Merit List</th>
              <th style={thStyle}>Minimum % in Each Section (Part A & B)</th>
              <th style={thStyle}>Minimum Overall Marks</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                category: "Common Rank List (CRL)",
                minSection: "10%",
                minOverall: 100,
              },
              {
                category: "OBC - Non-creamy layer rank list",
                minSection: "9%",
                minOverall: 90,
              },
              {
                category: "SC - Rank list",
                minSection: "5%",
                minOverall: 50,
              },
              {
                category: "ST - Rank list",
                minSection: "5%",
                minOverall: 50,
              },
              {
                category: "PwD - Rank list",
                minSection: "5%",
                minOverall: 50,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.minSection}</td>
                <td style={tdStyle}>{row.minOverall}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Guwahati cutoff has been released for B.Tech, Integrated B.Tech and BArch
        courses in the form of opening and closing ranks. In Round 5, the closing ranks
        varies between 623 and 9178 wherein B.Tech. In CSE is highly competitive
        among General category students under the AI Quota. <br /><br />
        While comparing the IIT Guwahati CSE cutoff 2024 with the last two years, we
        can see that B.Tech. in CSE has shown a declining trend in its Round 5 closing
        ranks. The Round 5 cutoff for the same course was 614 in 2023 and 589 in 2022
        for the General category students for the AI Quota. <br /><br />
        For the OBC category, IIT Guwahati B.Tech cutoff 2024 ranged
        between 364 and 4051. As in the general category B.Tech. In CSE has the
        lowest cutoff for OBC category students, making it the most competitive course
        to get into IIT Guwahati - Indian Institute of Technology. Candidates can refer to
        the table below for the branch-wise cutoff for 2024, along with a comparison for
        2023 and 2022 for the General AI category students.The IIT Guwahati JEE
        Advanced cutoff 2024 has been announced for various B.Tech specializations.
        Among these, the B.Tech. in CSE stands out as the most competitive, with a
        closing rank of 623. The second toughest course to get admission in IIT
        Guwahati - Indian Institute of Technology is B.Tech. in Data Science and Artificial
        Intelligence, which has a Round 5 closing rank of 995 for the General category
        students under the AI Quota. <br /><br />
        Among OBC candidates, the most competitive course is B.Tech. in CSE, with a
        Round 5 closing rank of 364. The easiest B.Tech specialization to secure
        admission in is B.Tech. in Biosciences and Bioengineering, with a closing rank
        of 4051. <br /><br />
        For detailed branch, round, year, and category-wise IIT Guwahati cutoff,
        candidates must use the provided filters:</p>

      <h3 style={th3Style}>
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
              { course: "B.Tech. in Computer Science and Engineering", y2022: 589, y2023: 654, y2024: 623 },
              { course: "B.Tech. in Electronics and Communication Engineering", y2022: 1711, y2023: 1698, y2024: 1658 },
              { course: "B.Tech. in Electronics and Electrical Engineering", y2022: 2387, y2023: 2117, y2024: 2217 },
              { course: "B.Tech. in Chemical Science and Technology", y2022: 8099, y2023: 8413, y2024: 6834 },
              { course: "B.Tech. in Civil Engineering", y2022: 7859, y2023: 8453, y2024: 7670 },
              { course: "B.Tech. in Chemical Engineering", y2022: 6144, y2023: 5959, y2024: 5363 },
              { course: "B.Tech. in Mechanical Engineering", y2022: 5088, y2023: 4754, y2024: 4523 },
              { course: "B.Tech. in Mathematics and Computing Engineering", y2022: 1061, y2023: 1124, y2024: 1021 },
              { course: "B.Tech. in Engineering Physics", y2022: 6192, y2023: 6423, y2024: 5686 },
              { course: "B.Tech. in Biosciences and Bioengineering", y2022: 10112, y2023: 10455, y2024: 9178 },
              { course: "B.Tech. in Data Science and Artificial Intelligence", y2022: 951, y2023: 1027, y2024: 995 },
              { course: "B.Tech. in Energy Engineering", y2022: 6320, y2023: 6637, y2024: 5920 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.y2022}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style} id="obc">JEE Advanced Last Round Closing Rank (OBC-All India)</h3>
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
              { course: "B.Tech. in Computer Science and Engineering", y2022: 298, y2023: 267, y2024: 364 },
              { course: "B.Tech. in Electronics and Communication Engineering", y2022: 852, y2023: 832, y2024: 869 },
              { course: "B.Tech. in Electronics and Electrical Engineering", y2022: 1033, y2023: 1027, y2024: 1040 },
              { course: "B.Tech. in Chemical Science and Technology", y2022: 3473, y2023: 3658, y2024: 3307 },
              { course: "B.Tech. in Civil Engineering", y2022: 3065, y2023: 3376, y2024: 3258 },
              { course: "B.Tech. in Chemical Engineering", y2022: 2488, y2023: 2812, y2024: 2630 },
              { course: "B.Tech. in Mechanical Engineering", y2022: 2161, y2023: 2191, y2024: 2139 },
              { course: "B.Tech. in Mathematics and Computing Engineering", y2022: 497, y2023: 532, y2024: 614 },
              { course: "B.Tech. in Engineering Physics", y2022: 3284, y2023: 3507, y2024: 3222 },
              { course: "B.Tech. in Biosciences and Bioengineering", y2022: 3837, y2023: 4240, y2024: 4051 },
              { course: "B.Tech. in Data Science and Artificial Intelligence", y2022: 470, y2023: 379, y2024: 479 },
              { course: "B.Tech. in Energy Engineering", y2022: 2949, y2023: 2968, y2024: 2802 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.y2022}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>JoSAA Round 5 Seat Allotment is out. This year, JoSAA 2024 counselling will
        consist of 5 Rounds for admission to the Engineering and Architecture courses.
        Candidates qualified for JEE Advanced can refer to the table below</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati B.Tech Cutoff - Top IITs Comparison</strong>
      </h3>
      <p style={pStyle}>JoSAA conducts counseling for IIT Guwahati B.Tech admissions based on JEE
        Advanced scores.

        <h3 className="th3" style={th3Style}>
          BTech CSE Top IITs Comparison – JoSAA Last Round Closing Ranks
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
                { IIT: "IIT Guwahati", y2023: 654, y2024: 623 },
                { IIT: "IIT Roorkee", y2023: 412, y2024: 481 },
                { IIT: "IIT Hyderabad", y2023: 674, y2024: 656 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.IIT}</td>
                  <td style={tdStyle}>{row.y2023}</td>
                  <td style={tdStyle}>{row.y2024}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati JAM Cutoff Year Wise Comparison 2024, 2023, 2022 </strong>
      </h3>
      <p style={pStyle}>IIT Guwahati JAM 2024 cutoff for the last round ranged
        between 75 and 310 wherein M.Sc. in Mathematics and Computing stands out
        as the most competitive MSc specialization for the General AI category students.
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
                { course: "M.Sc. in Chemistry", y2022: 259, y2023: 275, y2024: 267 },
                { course: "M.Sc. in Physics", y2022: 318, y2023: 324, y2024: 310 },
                { course: "M.Sc. in Mathematics and Computing", y2022: 80, y2023: 53, y2024: 75 },
                { course: "M.Sc. in Mathematics", y2022: "-/-", y2023: "-/-", y2024: 193 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.y2022}</td>
                  <td style={tdStyle}>{row.y2023}</td>
                  <td style={tdStyle}>{row.y2024}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati B.Tech Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>Admission to IIT Guwahati B.Tech program is based on the JEE Advanced rank
        of the Candidates. Every Year, JoSAA releases a total of 6 Rounds of Cutoff for
        the IIT Guwahati B.Tech Program. IIT Guwahati JEE Advanced Cutoff 2024 for
        CS is 466 – 607 (Round 1) for general category students. IIT Guwahati JEE
        Advanced Cutoff 2024 is tabulated below: </p>

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
              <th style={thStyle}>Academic Program Name</th>
              <th style={thStyle}>Round 1 Opening Rank</th>
              <th style={thStyle}>Round 1 Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "Computer Science and Engineering", opening: 466, closing: 607 },
              { course: "Biosciences and Bioengineering", opening: 6812, closing: 8400 },
              { course: "Chemical Engineering", opening: 4515, closing: 5152 },
              { course: "Chemical Science and Technology", opening: 5331, closing: 6434 },
              { course: "Civil Engineering", opening: 5869, closing: 7112 },
              { course: "Data Science and Artificial Intelligence", opening: 829, closing: 970 },
              { course: "Electronics and Communication Engineering", opening: 1415, closing: 1610 },
              { course: "Electronics and Electrical Engineering", opening: 1686, closing: 2093 },
              { course: "Energy Engineering", opening: 4960, closing: 5462 },
              { course: "Engineering Physics", opening: 3815, closing: 5270 },
              { course: "Mathematics and Computing", opening: 621, closing: 1000 },
              { course: "Mechanical Engineering", opening: 2014, closing: 4185 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>*The table below contains an analysis of the IIT Guwahati B.Tech Program from
        the previous year.</p>

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
              <th style={thStyle}>2023 Cutoff By Rank</th>
              <th style={thStyle}>2022 Cutoff By Rank</th>
              <th style={thStyle}>2021 Cutoff By Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science Engineering", y2023: 654, y2022: 589, y2021: 600 },
              { course: "B.Tech Artificial Intelligence and Data Science", y2023: 1027, y2022: 951, y2021: 954 },
              { course: "B.Tech Mathematics and Computing", y2023: 1124, y2022: 1061, y2021: 1089 },
              { course: "B.Tech Electronics & Communication Engineering", y2023: 1698, y2022: 1711, y2021: 1891 },
              { course: "B.Tech Electrical and Electronics Engineering", y2023: 2117, y2022: 2387, y2021: 2221 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2022}</td>
                <td style={tdStyle}>{row.y2021}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati M.Tech Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati M.Tech admission is based on GATE scores. IIT Guwahati M.Tech
        CSE cutoff 2024 is out based on the CS GATE paper. The table below shows
        the IIT Guwahati GATE Cutoff 2024 for M.Tech CSE: </p>
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
              <th style={thStyle}>Category</th>
              <th style={thStyle}>GATE Cutoff Marks 2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: "Open/ General (EWS)", cutoff: 650 },
              { category: "OBC (NCL)", cutoff: 585 },
              { category: "SC/ ST/ PWD", cutoff: 433 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.cutoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati M.Sc. Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>Admission to the IIT Guwahati M.Sc. program is based on the candidate’s
        IIT-JAM scores, which are then followed by JOAPS counseling. Every year, the
        NTA publishes the four rounds of cutoff for IIT Guwahati. IIT Guwahati IIT JAM
        Cutoff 2024 for General Category is listed below. The overall cutoff rank for IIT
        JAM is 74 - 243 for round 1. </p>
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
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: "M.Sc. Mathematics and Computing", cutoff: 74 },
              { category: "M.Sc. Mathematics", cutoff: 189 },
              { category: "M.Sc. Chemistry", cutoff: 237 },
              { category: "M.Sc. Physics", cutoff: 243 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.cutoff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The table below contains an analysis of the IIT Guwahati M.Sc. Program from
        the previous year.</p>
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
              <th style={thStyle}>2023 Cutoff By Rank</th>
              <th style={thStyle}>2022 Cutoff By Rank</th>
              <th style={thStyle}>2021 Cutoff By Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "M.Sc. Mathematics and Computing", y2023: 288, y2022: 137, y2021: 225 },
              { course: "M.Sc. Chemistry", y2023: 344, y2022: 323, y2021: 370 },
              { course: "M.Sc. Physics", y2023: 356, y2022: 319, y2021: 473 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2022}</td>
                <td style={tdStyle}>{row.y2021}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati B.Des Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>For design Enthusiasts, IIT Guwahati offers a B.Des program. Candidates of the
        B.Des. program at IIT Guwahati must have UCEED scores. IIT Guwahati UCEED Cutoff 2024 for General Category is listed below. The
        overall cutoff rank for UCEED is 75 for round 1. </p>

      <h3 style={th3Style}>IIT Guwahati B.Des Cutoff 2024</h3>
      <p style={{ fontSize: "14px", marginBottom: "10px" }}>
        For design enthusiasts, IIT Guwahati offers a B.Des program. Candidates of the B.Des program must have UCEED scores.
      </p>
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
              <th style={thStyle}>2024</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Des</td>
              <td style={tdStyle}>75</td>
              <td style={tdStyle}>70</td>
              <td style={tdStyle}>59</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati, JEE Advanced Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>The overall cutoff rank for JEE Advanced is 607 – 8400.

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
                <th style={thStyle}>Round 1</th>
                <th style={thStyle}>Round 2</th>
                <th style={thStyle}>Round 3</th>
                <th style={thStyle}>Round 4</th>
                <th style={thStyle}>Round 5</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "B.Tech Computer Science Engineering", r1: 607, r2: 612, r3: 612, r4: 612, r5: 623 },
                { course: "B.Tech Artificial Intelligence and Data Science", r1: 970, r2: 981, r3: 981, r4: 981, r5: 995 },
                { course: "B.Tech Mathematics and Computing", r1: 1000, r2: 1010, r3: 1010, r4: 1010, r5: 1021 },
                { course: "B.Tech Electronics & Communication Engineering", r1: 1610, r2: 1615, r3: 1615, r4: 1615, r5: 1658 },
                { course: "B.Tech Electrical and Electronics Engineering", r1: 2093, r2: 2097, r3: 2097, r4: 2126, r5: 2217 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.r1}</td>
                  <td style={tdStyle}>{row.r2}</td>
                  <td style={tdStyle}>{row.r3}</td>
                  <td style={tdStyle}>{row.r4}</td>
                  <td style={tdStyle}>{row.r5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>
      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati, IIT JAM Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>IIT JAM Cutoff 2024 for EWS Category is listed below. The overall cutoff rank for
        IIT JAM is 171 - 367

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
                <th style={thStyle}>Round 1</th>
                <th style={thStyle}>Round 2</th>
                <th style={thStyle}>Round 3</th>
                <th style={thStyle}>Round 4</th>
                <th style={thStyle}>Round 5</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "M.Sc Mathematics and Computing", r1: 171, r2: 171, r3: 171, r4: 171, r5: 171 },
                { course: "M.Sc Mathematics", r1: 275, r2: 275, r3: 275, r4: 275, r5: 275 },
                { course: "M.Sc Chemistry", r1: 287, r2: 341, r3: 341, r4: 341, r5: 341 },
                { course: "M.Sc Physics", r1: 367, r2: 414, r3: 421, r4: 443, r5: 447 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.r1}</td>
                  <td style={tdStyle}>{row.r2}</td>
                  <td style={tdStyle}>{row.r3}</td>
                  <td style={tdStyle}>{row.r4}</td>
                  <td style={tdStyle}>{row.r5}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati, GATE Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati, GATE Cutoff 2024 for EWS Category is listed below. The overall
        cutoff marks for GATE is 650
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
                <th style={thStyle}>Round 1</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "M.Tech Computer Science and Engineering", r1: 650 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.r1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati, UCEED Cutoff 2024 </strong>
      </h3>
      <p style={pStyle}>UCEED Cutoff 2024 for EWS Category is listed below. The overall cutoff rank for
        UCEED is 15
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
                <th style={thStyle}>Round 1</th>
                <th style={thStyle}>Round 2</th>
                <th style={thStyle}>Round 3</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "B.Des", r1: 15, r2: 15, r3: 15 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.r1}</td>
                  <td style={tdStyle}>{row.r2}</td>
                  <td style={tdStyle}>{row.r3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati, CCMN Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati, CCMN Cutoff 2024 for EWS Category is listed below. The overall
        cutoff rank for CCMN is 171 - 421
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
                <th style={thStyle}>Round 3</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "M.Sc. Mathematics and Computing", r3: 171 },
                { course: "M.Sc. Mathematics", r3: 275 },
                { course: "M.Sc. Chemistry", r3: 341 },
                { course: "M.Sc. Physics", r3: 421 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.r3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>
    </section>
  );
};

export default Cutoff;
