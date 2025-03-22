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
        IIT Dharwad cutoff was released in the form of opening and closing ranks. IIT
        Dharwad B.Tech admission is based on the JEE Advanced score, followed by the
        JoSAA Counselling process. The Joint Seat Allocation Authority released the
        round-wise JoSAA cutoffs for various programmes offered at this institute. <br />
        IIT Dharwad cutoff 2024 was released for admission to the B.Tech, Integrated
        B.Tech, and BArch courses across various specializations. The JEE Advanced
        counselling 2024 concluded after Round 5 of the Seat Allotment results for
        General, OBC, SC, ST, EWS, and PWD categories. During the IIT Dharwad JEE
        Advanced cutoff 2024, the Last Round closing ranks ranged
        between 6375 and 16968, wherein B.Tech. in Computer Science and
        Engineering was the toughest course to get into IIT Dharwad - Indian Institute of
        Technology for the students belonging to the General AI quota. In the first round,
        the IIT Dharwad CSE cutoff 2024 was 5577. <br />
        The second most competitive course was B.Tech. in Mathematics and Computing,
        with a last-round closing rank of 7381. The less competitive course was Integrated
        B.Sc.+  M.Sc. in Interdisciplinary Sciences, with a closing cutoff of 16968 for the
        General AI category candidates. <br />
        For OBC category students, the cutoff of the last round of the B.Tech. in Computer
        Science and Engineering programme stood at 2225. For a detailed first and last
        round IIT Dharwad as branch-wise cutoff 2024, students can refer to the table
        below:
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
              <th style={thStyle}>Course</th>
              <th style={thStyle}>R1 (Closing Rank)</th>
              <th style={thStyle}>Last Round (Closing Rank)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech. in Chemical and Biochemical Engineering</td>
              <td style={tdStyle}>14495</td>
              <td style={tdStyle}>15739</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Civil and Infrastructure Engineering</td>
              <td style={tdStyle}>14554</td>
              <td style={tdStyle}>15945</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>5577</td>
              <td style={tdStyle}>6375</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical and Electronics Engineering</td>
              <td style={tdStyle}>8881</td>
              <td style={tdStyle}>9778</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electronics and Communication Engineering</td>
              <td style={tdStyle}>8144</td>
              <td style={tdStyle}>8772</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Engineering Physics</td>
              <td style={tdStyle}>11121</td>
              <td style={tdStyle}>12851</td>
            </tr>
            <tr>
              <td style={tdStyle}>Integrated B.Sc.+ M.Sc. in Interdisciplinary Sciences</td>
              <td style={tdStyle}>15739</td>
              <td style={tdStyle}>16968</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mathematics and Computing</td>
              <td style={tdStyle}>6935</td>
              <td style={tdStyle}>7381</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>11402</td>
              <td style={tdStyle}>13435</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Dharwad JEE Advanced Cutoff Year Wise Comparison  between 2024,
          2023, 2022</strong>
      </h3>
      <p style={pStyle}>IIT Dharwad last three years' JEE Advanced cutoff data is available for
        Engineering and Architecture courses across various specializations. Considering
        the last round closing rank cutoff over the past three years, B.Tech in CSE
        remains the most competitive branch among the General AI category students. On
        the contrary, of  B.Tech. in Computer Science and Engineering has lost its charm
        over the years, as the closing ranks have continuously increased. This indicates
        that the course is no longer in demand among the students. <br />
        Irrespective of the course choice, if someone wants to get into IIT Dharwad -
        Indian Institute of Technology, they can consider Integrated B.Sc. +M.Sc. in
        Interdisciplinary Sciences, B.Tech. in Civil and Infrastructure
        Engineering and B.Tech. In Chemical and Biochemical Engineering these courses
        are less competitive for students belonging to the General AI category. <br />
        Students belonging to the OBC category can consider Integrated B.Sc. + M.Sc. in
        Interdisciplinary Sciences and B.Tech. in Chemical and Biochemical Engineering if
        they are not eligible for competitive courses such as CSE, Electrical, etc. to secure
        admission at IIT Dharwad - Indian Institute of Technology. </p>

      <h3 style={th3Style} id="gen">IIT Dharwad JEE Advanced Last Round Closing Rank (General-All India)</h3>
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
            <tr>
              <td style={tdStyle}>B.Tech. in Computer Science and Engineering</td>
              <td style={tdStyle}>4777</td>
              <td style={tdStyle}>5978</td>
              <td style={tdStyle}>6375</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical Engineering</td>
              <td style={tdStyle}>10950</td>
              <td style={tdStyle}>10267</td>
              <td style={tdStyle}>— / —</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mechanical Engineering</td>
              <td style={tdStyle}>13892</td>
              <td style={tdStyle}>14010</td>
              <td style={tdStyle}>13435</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Engineering Physics</td>
              <td style={tdStyle}>13582</td>
              <td style={tdStyle}>13387</td>
              <td style={tdStyle}>12851</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Chemical and Biochemical Engineering</td>
              <td style={tdStyle}>15903</td>
              <td style={tdStyle}>16106</td>
              <td style={tdStyle}>15739</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Mathematics and Computing</td>
              <td style={tdStyle}>7126</td>
              <td style={tdStyle}>7412</td>
              <td style={tdStyle}>7381</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Civil and Infrastructure Engineering</td>
              <td style={tdStyle}>15654</td>
              <td style={tdStyle}>16739</td>
              <td style={tdStyle}>15945</td>
            </tr>
            <tr>
              <td style={tdStyle}>Integrated B.Sc.+ M.Sc. in Interdisciplinary Sciences</td>
              <td style={tdStyle}>16615</td>
              <td style={tdStyle}>18027</td>
              <td style={tdStyle}>16968</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electronics and Communication Engineering</td>
              <td style={tdStyle}>-/-</td>
              <td style={tdStyle}>-/-</td>
              <td style={tdStyle}>8772</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Electrical and Electronics Engineering</td>
              <td style={tdStyle}>-/-</td>
              <td style={tdStyle}>-/-</td>
              <td style={tdStyle}>9778</td>
            </tr>
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
              { course: "B.Tech. in Computer Science and Engineering", rank2022: "1848", rank2023: "2386", rank2024: "2225" },
              { course: "B.Tech. in Electrical Engineering", rank2022: "3750", rank2023: "3966", rank2024: "— / —" },
              { course: "B.Tech. in Mechanical Engineering", rank2022: "4950", rank2023: "5158", rank2024: "5082" },
              { course: "B.Tech. in Engineering Physics", rank2022: "4998", rank2023: "5738", rank2024: "4957" },
              { course: "B.Tech. in Chemical and Biochemical Engineering", rank2022: "5352", rank2023: "5555", rank2024: "5830" },
              { course: "B.Tech. in Mathematics and Computing", rank2022: "2645", rank2023: "3090", rank2024: "2819" },
              { course: "B.Tech. in Civil and Infrastructure Engineering", rank2022: "5157", rank2023: "5548", rank2024: "5549" },
              { course: "Integrated B.Sc.+ M.Sc. in Interdisciplinary Sciences", rank2022: "5712", rank2023: "6538", rank2024: "6185" },
              { course: "B.Tech. in Electronics and Communication Engineering", rank2022: "— / —", rank2023: "— / —", rank2024: "3368" },
              { course: "B.Tech. in Electrical and Electronics Engineering", rank2022: "— / —", rank2023: "— / —", rank2024: "3823" },
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
      >
        <strong>IIT Dharwad JEE Advanced Cutoff comparison with Top IITs.</strong>
      </h3>
      <p style={pStyle}>JoSAA conducts counselling for IIT Dharwad B.Tech admissions based on JEE
        Advanced scores. The table below shows a comparative analysis of JoSAA's last
        round closing ranks for the most competitive B.Tech specialization with the
        previous year's last round cutoff for top IITs, including the Indian Institute of
        Technology Dharwad:</p>

      <h3 style={th3Style}>B.Tech CSE Top IITs Comparison – JoSAA Last Round Closing Ranks</h3>
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
              { iit: "IIT Dharwad", rank2023: "5978", rank2024: "6375" },
              { iit: "IIT Palakkad", rank2023: "5162", rank2024: "6199" },
              { iit: "IIT Bhilai", rank2023: "5791", rank2024: "6516" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.iit}</td>
                <td style={tdStyle}>{row.rank2023}</td>
                <td style={tdStyle}>{row.rank2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Dharwad Cutoff 2024 has been released by JoSAA for various B.Tech courses.
        IIT Dharwad JEE Advanced Cutoff 2024 for CSE is 3482 – 5577 for Round 1
        general category students. Students can check the table for IIT Dharwad B.Tech
        cutoff (Round 1): </p>
      <div
        style={{
          overflowX: "auto",
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
              { program: "Computer Science and Engineering", openRank: "3482", closeRank: "5577" },
              { program: "Chemical and Biochemical Engineering", openRank: "13172", closeRank: "14495" },
              { program: "Civil and Infrastructure Engineering", openRank: "13207", closeRank: "14554" },
              { program: "Electrical and Electronics Engineering", openRank: "7569", closeRank: "8881" },
              { program: "Electronics and Communication Engineering", openRank: "4752", closeRank: "8144" },
              { program: "Engineering Physics", openRank: "9839", closeRank: "11121" },
              { program: "Interdisciplinary Sciences (5 Years, Bachelor of Science and Master of Science (Dual Degree))", openRank: "9258", closeRank: "15739" },
              { program: "Mathematics and Computing", openRank: "4677", closeRank: "6935" },
              { program: "Mechanical Engineering", openRank: "8618", closeRank: "11402" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.program}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Dharwad JEE Advanced Cutoff 2024: Round 1 and Round 6 comparison</strong>
      </h3>
      <p style={pStyle}>IIT Dharwad JEE Advanced 2024 overall cutoff is not released for other rounds.
        Students can check the table below for last year cutoffs:
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
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 6</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science Engineering", round1: "5162", round6: "5978" },
              { course: "B.Tech Mathematics and Computing", round1: "6469", round6: "7412" },
              { course: "B.Tech Electrical Engineering", round1: "9289", round6: "10267" },
              { course: "B.Tech Engineering Physics", round1: "11408", round6: "13387" },
              { course: "B.Tech Mechanical Engineering", round1: "11980", round6: "14010" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.round1}</td>
                <td style={tdStyle}>{row.round6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Dharwad JEE Advanced Cutoff 2024: Year-wise comparison</strong>
      </h3>
      <p style={pStyle}>IIT Dharwad JEE Advanced 2024 overall cutoff is not released for other rounds.
        Students can check the table below for last year cutoffs:
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
              <th style={thStyle}>2023 (Cutoff by Rank)</th>
              <th style={thStyle}>2022 (Cutoff by Rank)</th>
              <th style={thStyle}>2021 (Cutoff by Rank)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science Engineering", year2023: "5978", year2022: "4777", year2021: "4718" },
              { course: "B.Tech Mathematics and Computing", year2023: "7412", year2022: "7126", year2021: "—" },
              { course: "B.Tech Electrical Engineering", year2023: "10267", year2022: "10950", year2021: "9463" },
              { course: "B.Tech Engineering Physics", year2023: "13387", year2022: "13582", year2021: "11851" },
              { course: "B.Tech Mechanical Engineering", year2023: "14010", year2022: "13892", year2021: "11851" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2022}</td>
                <td style={tdStyle}>{row.year2021}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2024 (Open Category - Round 1)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "16317", closeRank: "32038" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "17623", closeRank: "33977" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "11215", closeRank: "35822" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2024 (Open Category - Round 2)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "16600", closeRank: "34747" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "28213", closeRank: "36242" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "11215", closeRank: "38074" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2024 (Open Category - Round 3)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "16600", closeRank: "35168" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "28213", closeRank: "36708" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "11215", closeRank: "39084" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2024 (Open Category - Round 4)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "16600", closeRank: "35437" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "28213", closeRank: "36980" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "11215", closeRank: "39481" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2024 (Open Category - Round 5)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "24106", closeRank: "37419" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "28213", closeRank: "39077" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "11215", closeRank: "341143" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The IIT Dharwad JEE Main 2023 cutoff is available for 3 specializations of B.Tech
        courses: Computer Science, Data Science and Artificial Intelligence, and
        Electronics and Communication. Candidates can check the IIIT Dharwad JEE
        Main cutoff 2023 below.</p>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2024 (Open Category - Round 1)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "1377", closeRank: "28403" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "28487", closeRank: "31325" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "23258", closeRank: "33435" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2023 (EWS Category- Round 1)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "4632", closeRank: "5058" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "5032", closeRank: "5276" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "5412", closeRank: "5690" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2023 (OBC Category- Round 1)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "7787", closeRank: "11742" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "10380", closeRank: "12388" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "11165", closeRank: "13167" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2023 (SC Category- Round 1)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "1179", closeRank: "6840" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "2865", closeRank: "73333" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "7082", closeRank: "7720" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Dharwad JEE Main Cutoff 2023 (ST Category- Round 1)</h3>
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
              <th style={thStyle}>Opening Ranks</th>
              <th style={thStyle}>Closing Ranks</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech Computer Science and Engineering", openRank: "1752", closeRank: "2967" },
              { course: "B.Tech Data Science and Artificial Intelligence", openRank: "2074", closeRank: "3189" },
              { course: "B.Tech Electronics and Communication Engineering", openRank: "575", closeRank: "3393" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.openRank}</td>
                <td style={tdStyle}>{row.closeRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;
