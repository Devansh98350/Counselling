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
        IIT Ropar cutoff 2024 was released for admission to the B.Tech, Integrated
        B.Tech, and BArch courses across various specializations. The JEE Advanced
        counselling 2024 concluded after Round 5 of the Seat Allotment results for
        General, OBC, SC, ST, EWS, and PWD categories. During the IIT Ropar JEE
        Advanced cutoff 2024, the Last Round closing ranks ranged
        between 2379 and 13009, wherein B.Tech. in Computer Science and
        Engineering was the toughest course to get into IIT Ropar - Indian Institute of
        Technology for the students belonging to the General AI quota. In the first round,
        the IIT Ropar CSE cutoff 2024 was 2234. <br />
        The second most competitive course was B.Tech. in Artificial Intelligence and
        Data Engineering, with a last-round closing rank of 2656. The less competitive
        course was B.Tech. in Metallurgical and Materials Engineering, with a closing
        cutoff of 13009 for the General AI category candidates. <br />
        For OBC category students, the cutoff for the last round of the B.Tech. in
        Computer Science and Engineering programme stood at 1084. For a detailed first
        and last-round IIT Ropar branch-wise cutoff 2024, students can refer to the table
        below:
      </p>

      <div style={{ overflowX: "auto" }}>
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
              ["B.Tech. in Artificial Intelligence and Data Engineering", "2405", "2656"],
              ["B.Tech. in Chemical Engineering", "9603", "10097"],
              ["B.Tech. in Civil Engineering", "10771", "11365"],
              ["B.Tech. in Computer Science and Engineering", "2234", "2379"],
              ["B.Tech. in Electrical Engineering", "5209", "5528"],
              ["B.Tech. in Engineering Physics", "8763", "9142"],
              ["B.Tech. in Mathematics and Computing", "2974", "3518"],
              ["B.Tech. in Mechanical Engineering", "7844", "8636"],
              ["B.Tech. in Metallurgical and Materials Engineering", "11313", "13009"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>JEE Advanced Cutoff Year Wise Comparison 2024, 2023, 2022</strong>
      </h3>
      <p style={pStyle}>IIT Ropar last three years' JEE Advanced cutoff data is available for Engineering
        and Architecture courses across various specializations. Considering the last
        round closing rank cutoff over the past three years, B.Tech in CSE remains the
        most competitive branch among the General AI category students. <br />
        If someone wants to get into IIT, they can consider B.Tech. in Metallurgical and
        Materials Engineering, B.Tech. in Civil Engineering and B.Tech. in Chemical
        Engineering as these courses are less competitive for students belonging to the
        General AI category.  <br />
        Students belonging to the OBC category can consider B.Tech. in Metallurgical
        and Materials Engineering and B.Tech. in Civil Engineering if they are not eligible
        for competitive courses such as CSE, Electrical, etc. to secure admission at IIT
        Ropar - Indian Institute of Technology. For more courses, year and category-wise
        JEE Advanced cutoff ranks, candidates must use the filters provided below:</p>

      <h3 style={th3Style} id="gen">JEE Advanced Last Round Closing Rank (General - All India)</h3>
      <div style={{ overflowX: "auto" }}>
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
              ["B.Tech. in Computer Science and Engineering", "1883", "1859", "2379"],
              ["B.Tech. in Electrical Engineering", "5529", "5832", "5528"],
              ["B.Tech. in Mechanical Engineering", "8199", "8926", "8636"],
              ["B.Tech. in Civil Engineering", "11890", "13078", "11365"],
              ["B.Tech. in Chemical Engineering", "10413", "11041", "10097"],
              ["B.Tech. in Metallurgical and Materials Engineering", "13034", "14524", "13009"],
              ["B.Tech. in Mathematics and Computing", "3199", "3082", "3518"],
              ["B.Tech. in Engineering Physics", "11278", "9822", "9142"],
              ["B.Tech. in Artificial Intelligence and Data Engineering", "– / –", "2496", "2656"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style} id="obc">JEE Advanced Last Round Closing Rank (OBC - All India)</h3>
      <div style={{ overflowX: "auto" }}>
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
              ["B.Tech. in Computer Science and Engineering", "1089", "901", "1084"],
              ["B.Tech. in Electrical Engineering", "2506", "2477", "2590"],
              ["B.Tech. in Mechanical Engineering", "3697", "3984", "3810"],
              ["B.Tech. in Civil Engineering", "4427", "4747", "4371"],
              ["B.Tech. in Chemical Engineering", "4254", "4293", "4203"],
              ["B.Tech. in Metallurgical and Materials Engineering", "5084", "5465", "4968"],
              ["B.Tech. in Mathematics and Computing", "1424", "1740", "1724"],
              ["B.Tech. in Engineering Physics", "4840", "4920", "4310"],
              ["B.Tech. in Artificial Intelligence and Data Engineering", "– / –", "1500", "1308"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>GATE Last Round Score (General - All India, 2024)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["M.Tech. in Computational Mechanics", "451"],
              ["M.Tech. in Power Engineering", "499"],
              ["M.Tech. in Communication and Signal Processing", "554"],
              ["M.Tech. in Computer Science Engineering", "723"],
              ["M.Tech. in Chemical Engineering", "325"],
              ["M.Tech. in BioMedical Engineering", "555"],
              ["M.Tech. in Microelectronics and VLSI Design", "573"],
              ["M.Tech. in Artificial Intelligence", "707"],
              ["M.Tech. in Manufacturing Engineering", "453"],
              ["M.Tech. in Mechanics Design", "547"],
              ["M.Tech. on Thermal and Fluids Engineering (TF)", "481"],
              ["M.Tech. in Water Resources and Environment", "497"],
              ["M.Tech. in Structural Engineering and Geomechanics", "532"],
              ["M.Tech. in Metallurgical and Materials Engineering", "447"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>JAM Cutoff 2024 - Round 1 and Last Round Closing Ranks</strong>
      </h3>
      <p style={pStyle}>The IIT Ropar MSc cutoff 2024 was concluded after Round 5 of the IIT JAM Seat
        Allotment results. Among all the MSc courses, M.Sc. in Mathematics was the
        toughest course in the last round for students belonging to the General AI
        category. The Round 1 closing rank of the same course was 425 and the last
        round cutoff was 470.  <br />
        During the IIT JAM last-round cutoff in 2024, the least competitive course
        was M.Sc. in Physics. The Round 1 and the Last Round closing ranks for the
        course stood at 415 and 554, respectively. Candidates can refer to the table
        below to check out the IIT Ropar MSc branch-wise cutoff 2024 for both Round 1
        and the Last Round. The cutoff data tabulated below is for the General AI
        category: </p>

      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>First Round (Closing Rank)</th>
              <th style={thStyle}>Last Round (Closing Rank)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["M.Sc. in Mathematics", "425", "470"],
              ["M.Sc. in Chemistry", "406", "472"],
              ["M.Sc. in Physics", "415", "554"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Ropar JAM Cutoff Year Wise Comparison 2024, 2023, 2022</strong>
      </h3>
      <p style={pStyle}>IIT Ropar JAM 2024 cutoff for the last round ranged
        between 470 and 554 wherein M.Sc. in Mathematics stands out as the most
        competitive MSc specialisation for the General AI category students. Considering
        the cutoff data over the past three years, M.Sc. in Mathematics remains the first
        choice among the students at IIT Ropar</p>

      <h3 style={th3Style}>IIT JAM Last Round Closing Rank (General - All India)</h3>
      <div style={{ overflowX: "auto" }}>
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
              ["M.Sc. in Chemistry", "445", "532", "472"],
              ["M.Sc. in Mathematics", "420", "445", "470"],
              ["M.Sc. in Physics", "593", "514", "554"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>COAP Cutoff Year Wise Comparison 2024, 2023, 2022 </strong>
      </h3>
      <p style={pStyle}>IIT Ropar accepts GATE COAP scores for admission to the M.Tech courses. IIT
        Ropar GATE cutoff 2024 have been released, students selected under this round
        can exercise the option of Accept & Freeze, Retain & Wait and Reject & Wait. As
        per the GATE COAP Round 5 cutoff, the M.Tech cutoff ranged
        between 324 and 675 for the General AII India Quota.  <br />
        Candidates seeking admission can refer to the table below to check out the latest
        round IIT Ropar M.Tech cutoff 2024, as well as the last round cutoff for 2023 and
        2022:</p>

      <h3 style={th3Style}>COAP Last Round Score (General - All India)</h3>
      <div style={{ overflowX: "auto" }}>
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
              ["M.Tech. in Computational Mechanics", "567", "554", "451"],
              ["M.Tech. in Power Engineering", "560", "500", "499"],
              ["M.Tech. in Communication and Signal Processing", "525", "571", "524"],
              ["M.Tech. in Computer Science Engineering", "675", "694", "723"],
              ["M.Tech. in Chemical Engineering", "419", "392", "325"],
              ["M.Tech. in BioMedical Engineering", "535", "549", "555"],
              ["M.Tech. in Microelectronics and VLSI Design", "653", "629", "573"],
              ["M.Tech. in Artificial Intelligence", "653", "667", "707"],
              ["M.Tech. in Manufacturing Engineering", "476", "535", "453"],
              ["M.Tech. in Mechanics Design", "621", "592", "547"],
              ["M.Tech. on Thermal and Fluids Engineering (TF)", "582", "547", "481"],
              ["M.Tech. in Water Resources and Environment", "517", "532", "497"],
              ["M.Tech. in Structural Engineering and Geomechanics", "-\-", "617", "532"],
              ["M.Tech. in Metallurgical and Materials Engineering", "-\-", "-\-", "447"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Ropar (IIT-RPR) Cut-Off 2023 (Gender Male - General)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech Artificial Intelligence and Data Engineering", "2141", "2496"],
              ["B.Tech Chemical Engineering", "9456", "11041"],
              ["B.Tech Civil Engineering", "10039", "13078"],
              ["B.Tech Computer Science and Engineering", "1048", "1859"],
              ["B.Tech Electrical Engineering", "3348", "5832"],
              ["B.Tech Engineering Physics", "6677", "9822"],
              ["B.Tech Mathematics and Computing", "1885", "3082"],
              ["B.Tech Mechanical Engineering", "6916", "8926"],
              ["B.Tech Metallurgical and Materials Engineering", "9520", "14524"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The Joint Seat Allocation Authority (JoSAA) releases the JEE Advanced IIT
        cutoff. To proceed with the next stage of the admission process of B.Tech the
        candidates must meet the IIT Ropar Cutoff. The IIT Ropar cutoff changes from
        course to course and for each category every year. <br />
        Candidates can check the IIT Ropar cutoff in the form of the opening and closing
        ranks. The authorities release the JEE Advanced cutoff for IIT Ropar separately
        for different courses and categories of candidates. While preparing for the IIT
        Ropar cutoff, the authorities consider many factors such as the difficulty level of
        the exam, the total number of applicants, the previous years JEE Advanced cutoff
        trends, availability of seats, and much more. <br />
        The following table shows the details of the IIT Ropar JEE Advanced cutoff 2024
        for the open category</p>

      <h3 style={th3Style}>IIT Ropar B.Tech Cutoff 2024 (General Category)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech Artificial Intelligence and Data Engineering", "2405", "2576"],
              ["B.Tech Chemical Engineering", "9603", "9615"],
              ["B.Tech Civil Engineering", "10771", "10771"],
              ["B.Tech Computer Science and Engineering", "2234", "2258"],
              ["B.Tech Electrical Engineering", "5209", "5249"],
              ["B.Tech Engineering Physics", "8763", "8763"],
              ["B.Tech Mathematics and Computing", "2974", "3188"],
              ["B.Tech Mechanical Engineering", "7844", "7983"],
              ["B.Tech Metallurgical and Materials Engineering", "11313", "11313"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Ropar JEE Advanced Cutoff 2024 (General – Round 3 & 4)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Round 3</th>
              <th style={thStyle}>Round 4</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech Artificial Intelligence and Data Engineering", "2576", "2576"],
              ["B.Tech Chemical Engineering", "9615", "9615"],
              ["B.Tech Civil Engineering", "10771", "10771"],
              ["B.Tech Computer Science and Engineering", "2258", "2262"],
              ["B.Tech Electrical Engineering", "5249", "5249"],
              ["B.Tech Engineering Physics", "8763", "8826"],
              ["B.Tech Mathematics and Computing", "3188", "3378"],
              ["B.Tech Mechanical Engineering", "7983", "8005"],
              ["B.Tech Metallurgical and Materials Engineering", "11314", "11377"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Ropar B.Tech Cutoff 2024 (General - Round 5)</h3>
      <div style={{ overflowX: "auto" }}>
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
              ["B.Tech Artificial Intelligence and Data Engineering", "2254", "2656"],
              ["B.Tech Chemical Engineering", "8597", "10097"],
              ["B.Tech Civil Engineering", "10126", "11365"],
              ["B.Tech Computer Science and Engineering", "1158", "2379"],
              ["B.Tech Electrical Engineering", "3406", "5528"],
              ["B.Tech Engineering Physics", "8158", "9142"],
              ["B.Tech Mathematics and Computing", "1755", "3518"],
              ["B.Tech Mechanical Engineering", "6919", "8636"],
              ["B.Tech Metallurgical and Materials Engineering", "11211", "13009"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The below table shows the details of the IIT Ropar B.Tech cutoff analysis for
        the past three years.</p>
      <h3 style={th3Style}>IIT Ropar B.Tech Cutoff Trend (2022–2024)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Names</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech Artificial Intelligence and Data Engineering", "2486", "-", "-"],
              ["B.Tech Chemical Engineering", "10032", "9385", "8223"],
              ["B.Tech Civil Engineering", "10849", "10727", "9159"],
              ["B.Tech Computer Science and Engineering", "1763", "1803", "1827"],
              ["B.Tech Electrical Engineering", "5045", "5255", "4731"],
              ["B.Tech Engineering Physics", "8839", "9550", "-"],
              ["B.Tech Mathematics and Computing", "2926", "2843", "2395"],
              ["B.Tech Mechanical Engineering", "8344", "7839", "7052"],
              ["B.Tech Metallurgical and Materials Engineering", "11813", "11613", "10358"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>GATE Opening and Closing Score for Admission into M.Tech (General)</h3>
      <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Programme Name</th>
              <th style={thStyle}>Opening Score</th>
              <th style={thStyle}>Closing Score</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["M.Tech Thermal Engineering", "728", "567"],
              ["M.Tech Manufacturing Engineering", "681", "445"],
              ["M.Tech Mechanics and Design", "728", "621"],
              ["M.Tech Computational Mechanics", "751", "582"],
              ["M.Tech Power Engineering", "725", "543"],
              ["M.Tech Communication and Signal Processing", "725", "512"],
              ["M.Tech Microelectronics and VLSI Design", "793", "653"],
              ["M.Tech Artificial Intelligence", "828", "653"],
              ["M.Tech Computer Science and Engineering", "1000", "675"],
              ["M.Tech Structural Engineering and Geomechanics", "720", "514"],
              ["M.Tech Water Resources and Environment", "771", "515"],
              ["M.Tech Biomedical Engineering", "815", "534"],
              ["M.Tech Chemical Engineering", "587", "419"],
            ].map((row, index) => (
              <tr key={index}>
                {row.map((cell, i) => (
                  <td key={i} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;
