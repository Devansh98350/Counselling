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
        The Indian Institute of Technology, Roorkee releases fresh cut-offs every year. In
        order to get admission into the UG courses, the candidate must meet the IIT
        Roorkee Cutoff. If the candidate meets the IIT Roorkee cutoff 2024, then the
        candidate should apply for the Joint Seat Allocation Process (JoSAA). <br />
        IIT Roorkee JEE Advanced Cutoff depends on various factors, like previous years’
        JEE Advanced cutoff trends, the number of seats in the courses offered by the
        institute, the number of candidates who appeared, and the difficulty level of
        the JEE Advanced entrance examination. IIT Roorkee JEE Advanced cutoff
        2024 will be categorized into opening and closing ranks. <br />
        IIT Roorkee cutoff for B.Tech based on the JEE Advanced score, followed by the
        JoSAA Counselling process. The Joint Seat Allocation Authority releases the
        round-wise JEE Advanced cutoffs for B.Tech programmes offered at the institute.
        IIT Roorkee cutoff 2024 was released for admission to the B.Tech, Integrated
        B.Tech, and BArch courses across various specializations. The JEE Advanced
        counselling 2024 concluded after Round 5 of the Seat Allotment results for
        General, OBC, SC, ST, EWS, and PWD categories. During the IIT Roorkee JEE
        Advanced cutoff 2024, the Last Round closing ranks ranged
        between 481 and 19885, wherein B.Tech. in Computer Science and
        Engineering was the toughest course to get into IIT Roorkee - Indian Institute of
        Technology for the students belonging to the General AI quota. In the first round,
        the IIT Roorkee CSE cutoff 2024 was 481. <br />
        The second most competitive course was B.Tech. in Data Science and Artificial
        Intelligence, with a last-round closing rank of 680. The less competitive course was
        Bachelor of Architecture (B.Arch.), with a closing cutoff of 19885 for the General AI
        category candidates. <br />
        For OBC category students, the cutoff for the last round of the B.Tech. in Computer
        Science and Engineering programme stood at 236. For a detailed first and last
        round IIT Roorkee branch-wise cutoff 2024, students can refer to the table below
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
              ["Bachelor of Architecture (B.Arch.)", "16381", "19898"],
              ["B.Tech. Biosciences and Bioengineering", "7521", "7286"],
              ["B.Tech. in Chemical Engineering", "4512", "4689"],
              ["B.Sc. + M.Sc. in Chemical Sciences", "10146", "11647"],
              ["B.Tech. in Civil Engineering", "6134", "6194"],
              ["B.Tech. in Computer Science and Engineering", "481", "680"],
              ["B.Tech. in Data Science and Artificial Intelligence", "677", "680"],
              ["Integrated B.Sc. + M.Sc. in Economics", "5080", "5312"],
              ["B.Tech. in Electrical Engineering", "1976", "2033"],
              ["B.Tech. in Electronics and Communication Engineering", "1410", "1424"],
              ["B.Tech. in Energy Engineering", "4637", "4818"],
              ["B.Tech. in Engineering Physics", "3689", "3960"],
              ["Integrated M.Tech. in Geological Technology", "9616", "9977"],
              ["Integrated M.Tech. in Geophysical Technology", "8889", "9210"],
              ["B.Sc. + M.Sc. in Mathematics and Computing", "1501", "1512"],
              ["B.Tech. in Mechanical Engineering", "3437", "3672"],
              ["B.Tech. in Metallurgical and Materials Engineering", "6754", "7051"],
              ["Integrated B.Sc. + M.Sc. in Physics", "7714", "9079"],
              ["B.Tech. in Production and Industrial Engineering", "5166", "5365"],
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

      <h3 style={th3Style} id="gen">JEE Advanced Last Round Closing Rank (General - All India)</h3>
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
              ["B.Tech. in Chemical Engineering", "5075", "5015", "4689"],
              ["B.Tech. in Civil Engineering", "6853", "7100", "6293"],
              ["B.Tech. in Electrical Engineering", "2135", "2037", "2033"],
              ["B.Tech. in Electronics and Communication Engineering", "1443", "1429", "1424"],
              ["B.Tech. in Computer Science and Engineering", "413", "412", "481"],
              ["B.Tech. in Mechanical Engineering", "4189", "3854", "3672"],
              ["B.Tech. in Metallurgical and Materials Engineering", "7246", "7945", "7051"],
              ["B.Tech. in Production and Industrial Engineering", "5786", "5889", "5365"],
              ["B.Tech. in Engineering Physics", "7855", "7893", "3960"],
              ["B.Tech. Biosciences and Bioengineering", "4901", "4535", "3951"],
              ["Integrated B.Sc. + M.Sc. in Physics", "8679", "9574", "9079"],
              ["B.Sc. + M.Sc. in Mathematics and Computing", "1680", "1523", "1512"],
              ["B.Tech. in Data Science and Artificial Intelligence", "822", "715", "680"],
              ["B.Tech. in Energy Engineering", "N/A", "N/A", "4818"],
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

      <h3 style={th3Style} id="obc">JEE Advanced Last Round Closing Rank (OBC - All India)</h3>
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
              ["Bachelor of Architecture (B.Arch.)", "5783", "7288", "6973"],
              ["B.Tech. in Chemical Engineering", "2307", "2465", "2386"],
              ["B.Tech. in Civil Engineering", "2811", "3026", "2899"],
              ["B.Tech. in Electrical Engineering", "982", "1049", "1012"],
              ["B.Tech. in Electronics and Communication Engineering", "600", "656", "732"],
              ["B.Tech. in Computer Science and Engineering", "213", "196", "236"],
              ["B.Tech. in Mechanical Engineering", "1776", "1942", "1784"],
              ["B.Tech. in Metallurgical and Materials Engineering", "3187", "3508", "3349"],
              ["B.Tech. in Production and Industrial Engineering", "2922", "3097", "2936"],
              ["B.Tech. in Engineering Physics", "2648", "2359", "2690"],
              ["Integrated B.Sc. + M.Sc. in Physics", "4520", "5307", "4243"],
              ["Integrated M.Tech. in Geophysical Technology", "4177", "4237", "3834"],
              ["Integrated M.Tech. in Geological Technology", "4406", "4862", "4209"],
              ["B.Tech. Biosciences and Bioengineering", "3393", "3899", "3549"],
              ["Integrated B.Sc. + M.Sc. in Economics", "3227", "3326", "2552"],
              ["B.Sc. + M.Sc. in Mathematics and Computing", "902", "919", "857"],
              ["B.Sc. + M.Sc. in Chemical Sciences", "4884", "5311", "4818"],
              ["B.Tech. in Data Science and Artificial Intelligence", "416", "372", "421"],
              ["B.Tech. in Energy Engineering", "N/A", "N/A", "2521"],
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

      <p style={pStyle}>JoSAA conducts counselling for IIT Roorkee B.Tech admissions based on JEE
        advanced scores. The table below shows a comparative analysis of JoSAA's last
        round closing ranks for the most competitive B.Tech specialisation with the
        previous year's last round cutoff for top IITs, including the Indian Institute of
        Technology Roorkee:</p>

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
              ["IIT Roorkee", "412", "481"],
              ["IIT Kharagpur", "279", "415"],
              ["IIT Guwahati", "654", "623"],
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

      <h3 style={th3Style}>IIT Roorkee Cut-Off 2023 (Gender Male)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Arch.", "General -", "9523", "20728"],
              ["B.Tech Biosciences and Bioengineering", "General -", "7037", "8689"],
              ["B.Tech Chemical Engineering", "General -", "3642", "5015"],
              ["B.Tech Civil Engineering", "General -", "4590", "7100"],
              ["B.Tech Computer Science and Engineering", "General -", "263", "412"],
              ["B.Tech Data Science and Artificial Intelligence", "General -", "469", "715"],
              ["B.Tech Electrical Engineering", "General -", "1047", "2037"],
              ["B.Tech Electronics and Communication Engineering", "General -", "797", "1429"],
              ["B.Tech Engineering physics", "General -", "2685", "4535"],
              ["B.Tech Mechanical Engineering", "General -", "1996", "3854"],
              ["B.Tech Metallurgical and Materials Engineering", "General -", "5789", "7945"],
              ["B.Tech Production and Industrial Engineering", "General -", "3709", "5889"],
              ["BS MS Chemical Sciences", "General -", "8746", "12928"],
              ["BS MS Economics", "General -", "4275", "5652"],
              ["BS MS Mathematics and Computing", "General -", "1109", "1523"],
              ["BS MS Physics", "General -", "5480", "9574"],
              ["M.Tech Geological Technology Integrated", "General -", "7535", "10563"],
              ["M.Tech Geophysical Technology Integrated", "General -", "7641", "9824"],
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

      <p style={pStyle}><i>*Disclaimer: The cut off trends have been calculated as per the inputs from
        students, historical data. IIT academy does not take responsibility for any
        difference between the actual cut-off data and the one displayed/predicted on this
        page. </i><br /> <br />
        The Indian Institute of Technology, Roorkee releases fresh cut-offs every year. In
        order to get admission into the UG courses, the candidate must meet the IIT
        Roorkee Cutoff. If the candidate meets the IIT Roorkee cutoff 2024, then the
        candidate should apply for the Joint Seat Allocation Process (JoSAA).  <br />
        IIT Roorkee JEE Advanced Cutoff depends on various factors, like previous years’
        JEE Advanced cutoff trends, the number of seats in the courses offered by the
        institute, the number of candidates who appeared, and the difficulty level of
        the JEE Advanced entrance examination. IIT Roorkee JEE Advanced cutoff
        2024 will be categorized into opening and closing ranks.
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>JEE Advanced Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>JEE advanced results 2024 have been released on June 9, 2024. Candidates can
        refer to the table below to know the IIT Roorkee cutoff 2024 round 1, 2 ,3, 4 and 5
        for admission to B.Tech programmes.</p>

      <h3 style={th3Style}>IIT Roorkee B.Tech Cutoff – 2024 (Open Category)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B. Arch", "16381", "16381"],
              ["B.Tech Biosciences and Bioengineering", "7251", "7253"],
              ["B.Tech Chemical Engineering", "4512", "4545"],
              ["BS MS Chemical Sciences", "10416", "10421"],
              ["B.Tech Civil Engineering", "5931", "6144"],
              ["B.Tech Computer Science and Engineering", "481", "481"],
              ["B.Tech Data Science and Artificial Intelligence", "677", "678"],
              ["BS MS Economics", "5080", "5224"],
              ["B.Tech Electrical Engineering", "1976", "1981"],
              ["B.Tech Electronics and Communication Engineering", "1410", "1424"],
              ["B.Tech Engineering Physics", "4637", "3809"],
              ["M.Tech Geological Technology Integrated", "9616", "9620"],
              ["M.Tech Geophysical Technology Integrated", "8889", "9064"],
              ["BS MS Mathematics and Computing", "1501", "1501"],
              ["B.Tech Mechanical Engineering", "3437", "3504"],
              ["B.Tech Metallurgical and Materials Engineering", "6754", "6815"],
              ["BS MS Physics", "7714", "8245"],
              ["B.Tech Production and Industrial Engineering", "5166", "5166"],
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

      <h3 style={th3Style}>IIT Roorkee Cutoff 2024 – JEE Advanced (General) (Round 3 & 4)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
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
              ["B. Arch", "16381", "16381"],
              ["B.Tech Biosciences and Bioengineering", "7253", "7253"],
              ["B.Tech Chemical Engineering", "4545", "4545"],
              ["BS MS Chemical Sciences", "10421", "10427"],
              ["B.Tech Civil Engineering", "6144", "6148"],
              ["B.Tech Computer Science and Engineering", "481", "481"],
              ["B.Tech Data Science and Artificial Intelligence", "678", "678"],
              ["BS MS Economics", "5224", "5224"],
              ["B.Tech Electrical Engineering", "1981", "1992"],
              ["B.Tech Electronics and Communication Engineering", "1424", "1424"],
              ["B.Tech Energy Engineering", "4637", "4637"],
              ["B.Tech Engineering Physics", "3809", "3809"],
              ["M.Tech Geological Technology Integrated", "9620", "9620"],
              ["M.Tech Geophysical Technology Integrated", "9064", "9064"],
              ["BS MS Mathematics and Computing", "1501", "1501"],
              ["B.Tech Mechanical Engineering", "3504", "3504"],
              ["B.Tech Metallurgical and Materials Engineering", "6815", "6815"],
              ["BS MS Physics", "8245", "8245"],
              ["B.Tech Production and Industrial Engineering", "5166", "5166"],
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

      <h3 style={th3Style}>IIT Roorkee JEE Advanced Cutoff 2024 (General Category) (Round 5)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B. Arch", "3105", "19885"],
              ["B.Tech Biosciences and Bioengineering", "5871", "7286"],
              ["B.Tech Chemical Engineering", "3531", "4689"],
              ["BS MS Chemical Sciences", "8062", "11647"],
              ["B.Tech Civil Engineering", "4202", "6293"],
              ["B.Tech Computer Science and Engineering", "277", "481"],
              ["B.Tech Data Science and Artificial Intelligence", "503", "680"],
              ["BS MS Economics", "3233", "5312"],
              ["B.Tech Electrical Engineering", "1495", "2033"],
              ["B.Tech Electronics and Communication Engineering", "987", "1424"],
              ["B.Tech Energy Engineering", "3834", "4818"],
              ["B.Tech Engineering Physics", "2456", "3951"],
              ["M.Tech Geological Technology Integrated", "7985", "9797"],
              ["M.Tech Geophysical Technology Integrated", "6436", "9210"],
              ["BS MS Mathematics and Computing", "1089", "1512"],
              ["B.Tech Mechanical Engineering", "2526", "3672"],
              ["B.Tech Metallurgical and Materials Engineering", "6173", "7051"],
              ["BS MS Physics", "6021", "9079"],
              ["B.Tech Production and Industrial Engineering", "4457", "5365"],
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
      <p style={pStyle}><i>Note: The above cutoff table shows the opening and closing ranks for IIT Roorkee
        B.Tech programmes.</i></p>

      <h3 style={th3Style}>IIT Roorkee B.Tech Cutoff</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B. Arch", "16703", "16096", "14859"],
              ["B.Tech Biosciences and Bioengineering", "7945", "7164", "6945"],
              ["B.Tech Chemical Engineering", "4840", "4818", "4306"],
              ["BS MS Chemical Sciences", "11186", "10945", "10194"],
              ["B.Tech Civil Engineering", "6777", "6421", "5931"],
              ["B.Tech Computer Science and Engineering", "396", "408", "414"],
              ["B.Tech Data Science and Artificial Intelligence", "687", "822", "-"],
              ["BS MS Economics", "5434", "5956", "5884"],
              ["B.Tech Electrical Engineering", "1965", "2130", "1945"],
              ["B.Tech Electronics and Communication Engineering", "1382", "1408", "1383"],
              ["B.Tech Engineering Physics", "4179", "4780", "3906"],
              ["M.Tech Geological Technology Integrated", "9925", "9635", "9131"],
              ["M.Tech Geophysical Technology Integrated", "9509", "8913", "8887"],
              ["BS MS Mathematics and Computing", "1519", "1556", "1532"],
              ["B.Tech Mechanical Engineering", "3570", "3685", "3379"],
              ["B.Tech Metallurgical and Materials Engineering", "7209", "6833", "6343"],
              ["BS MS Physics", "8420", "7939", "6423"],
              ["B.Tech Production and Industrial Engineering", "5582", "5422", "4886"],
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

      <h3 style={th3Style}>IIT Roorkee B.Tech Cutoff 2022</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Arch.", "14934", "17464"],
              ["B.Tech Biosciences and Bioengineering", "6480", "7855"],
              ["B.Tech Chemical Engineering", "2540", "5075"],
              ["B.Tech Civil Engineering", "4433", "6853"],
              ["B.Tech Computer Science and Engineering", "17", "413"],
              ["B.Tech Data Science and Artificial Intelligence", "88", "822"],
              ["B.Tech Electrical Engineering", "154", "2135"],
              ["B.Tech Electronics and Communication Engineering", "72", "1443"],
              ["B.Tech Engineering Physics", "2972", "3980"],
              ["B.Tech Mechanical Engineering", "2172", "4189"],
              ["B.Tech Metallurgical and Materials Engineering", "5559", "7426"],
              ["B.Tech Production and Industrial Engineering", "3697", "5786"],
              ["BS MS Chemical Sciences", "10030", "12342"],
              ["BS MS Economics", "4863", "6382"],
              ["BS MS Mathematics and Computing", "89", "767"],
              ["BS MS Physics", "4916", "8679"],
              ["M.Tech Geological Technology Integrated", "7680", "11246"],
              ["M.Tech Geophysical Technology Integrated", "7426", "9913"],
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

      <h3 style={th3Style}>IIT Roorkee JEE Advanced Cutoff 2021</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course Name</th>
              <th style={thStyle}>Opening Rank</th>
              <th style={thStyle}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Arch.", "10314", "15122"],
              ["B.Tech Biosciences and Bioengineering", "5995", "7326"],
              ["B.Tech Chemical Engineering", "3472", "4724"],
              ["B.Tech Civil Engineering", "4215", "6418"],
              ["B.Tech Computer Science and Engineering", "21", "414"],
              ["B.Tech Data Science and Artificial Intelligence", "-", "-"],
              ["B.Tech Electrical Engineering", "100", "2074"],
              ["B.Tech Electronics and Communication Engineering", "83", "1421"],
              ["B.Tech Engineering Physics", "2319", "4541"],
              ["B.Tech Mechanical Engineering", "2246", "3759"],
              ["B.Tech Metallurgical and Materials Engineering", "5745", "6509"],
              ["B.Tech Production and Industrial Engineering", "4200", "5608"],
              ["BS MS Chemical Sciences", "5347", "10486"],
              ["BS MS Economics", "4529", "6308"],
              ["BS MS Mathematics and Computing", "1315", "1589"],
              ["BS MS Physics", "5961", "7699"],
              ["M.Tech Geological Technology Integrated", "7519", "8991"],
              ["M.Tech Geophysical Technology Integrated", "7481", "8928"],
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

      <p style={pStyle}><i>Note: Every year the IIT Roorkee cutoff varies for each course and each
        programme. </i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee BArch Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>Candidates can check the previous year cutoff to get an insight on the expected
        cutoff this year. The Department of Architecture and Planning offers a Bachelor of
        Architecture (B. Arch.) degree and provides high-quality education in the
        professional subjects of Architecture and Planning. </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Categories</th>
              <th style={thStyle}>2023 (Cutoff by Rank)</th>
              <th style={thStyle}>2022 (Cutoff by Rank)</th>
              <th style={thStyle}>2021 (Cutoff by Rank)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["EWS", "2574", "2386", "2322"],
              ["General", "16703", "16096", "14859"],
              ["OBCNCL", "6248", "5749", "6033"],
              ["SC", "3182", "3162", "3289"],
              ["ST", "156", "1382", "NA"],
              ["GeneralPwD", "241", "NA", "NA"],
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

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee CAT Cutoff Year Wise Comparison</strong>
      </h3>
      <p style={pStyle}>IIT Roorkee offers admission to MBA through DOMS IIT Roorkee based on CAT
        scores. As per the previous year's cutoff ranks, candidates having a minimum
        overall percentile of 95 in CAT for General category candidates belonging to All
        India Quota are eligible for admission to IIT Roorkee. Further, the sectional CAT
        cutoff of 50 Percentile each is required for candidates. Tabulated below are
        the CAT year-wise percentiles for IIT Roorkee cutoff: </p>

      <h3 style={th3Style}>(MBA) - DOMS IIT Roorkee: CAT Percentile Cutoff (General-All India)</h3>
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
              ["Overall", "95", "95", "95"],
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

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee JAM Cutoff 2024 - Round 1 and Last Round Closing Ranks</strong>
      </h3>
      <p style={pStyle}>The IIT Roorkee MSc cutoff 2024 was concluded after Round 5 of the IIT JAM Seat
        Allotment results. Among all the MSc courses, M.Sc. in Applied Geology was the
        toughest course in the last round for students belonging to the General AI
        category. The Round 1 closing rank of the same course was 52 and the last round
        cutoff was 52. <br />
        During the IIT JAM last-round cutoff in 2024, the least competitive course
        was M.Sc. in Physics. The Round 1 and the Last Round closing ranks for the
        course stood at 178 and 232, respectively. Candidates can refer to the table below
        to check out the IIT Roorkee MSc branch-wise cutoff 2024 for both Round 1 and
        the Last Round. The cutoff data tabulated below is for the General AI category: </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
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
              ["M.Sc. in Applied Geology", "52", "52"],
              ["M.Sc. in Chemistry", "206", "221"],
              ["M.Sc. in Economics", "27", "64"],
              ["M.Sc. in Mathematics", "210", "215"],
              ["M.Sc. in Physics", "178", "232"],
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

      <p style={pStyle}>The cutoff was released for the General, OBC, SC, ST, EWS, and PWD
        categories as opening and closing ranks. IIT Roorkee JAM 2024 cutoff for the last
        round ranged between 52 and 232 wherein M.Sc. in Applied Geology stands out as
        the most competitive MSc specialisation for the General AI category students.
        Considering the cutoff data over the past three years, M.Sc. in Applied Geology
        remains the first choice among the students at IIT Roorkee. <br />
        Students who want to pursue an MSc course at IIT Roorkee (irrespective of the
        course choice) can also consider M.Sc. in Physics, M.Sc. in Chemistry, M.Sc. in
        Mathematics, as these MSc specializations are comparatively easy to get into for
        General category students. <br />
        For OBC category students, the last round cutoff varies between 109 and 420. For
        a detailed year, round and category-wise MSc cutoff, candidates can use the filters
        provided below: </p>

      <h3 style={th3Style}>IIT JAM Last Round Closing Rank (General-All India)</h3>
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
              ["M.Sc. in Physics", "234", "291", "232"],
              ["M.Sc. in Chemistry", "199", "224", "221"],
              ["M.Sc. in Applied Geology", "62", "70", "52"],
              ["M.Sc. in Mathematics", "229", "204", "215"],
              ["M.Sc. in Economics", "28", "33", "64"],
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

      <p style={pStyle}>As per the IIT Roorkee B.Des cutoff 2024, the Round 5 cutoff is 110 for the
        General AI category. The UCEED counselling is being conducted online as a Joint
        Seat Allotment process with five seat-allotment rounds. The table below shows the
        last round closing ranks of UCEED for 2023 and 2022, as well as the latest round
        UCEED cutoff for 2024, for your reference. To check out the round and category
        wise UCEED cutoff ranks, candidates can use the filters provided below. </p>

      <h3 style={th3Style}>UCEED Last Round Closing Rank (General-All India)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Bachelor of Design (B.Des.)</td>
              <td style={tdStyle}>110</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Roorkee M.Des cutoff 2024 is based on CEED scores 2024 followed by the
        round-wise CEED Counselling. IIT Roorkee CEED cutoff 2024 is out for Part A.
        The mean and standard deviation for CEED 2024 Part A are 41.90 and 16.72,
        respectively. Refer to the table given below to check out the CEED Part A cutoff
        2024 for IIT Roorkee. </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Cutoff Type</th>
              <th style={thStyle}>CEED Cutoff 2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Mean", "41.90"],
              ["Standard Deviation", "16.72"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee M.Sc. Cutoff 2024</strong>
      </h3>
      <p style={pStyle}>IIT Roorkee also offers M.Sc. Program on the basis of IIT-JAM Scores of the
        Candidates. IIT Roorkee IIT JAM Cutoff 2024 for General Category is listed below.
        The overall cutoff rank for IIT JAM is 27 - 210 for round 1 </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["M.Sc. Economics", "27"],
              ["M.Sc. Bioscience", "45"],
              ["M.Sc. Applied Geology", "52"],
              ["M.Sc. Physics", "178"],
              ["M.Sc. Chemistry", "206"],
              ["M.Sc. Mathematics", "210"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee M.Sc. Cutoff: Previous Year’s Cutoff</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>2023 Cutoff By Rank</th>
              <th style={thStyle}>2022 Cutoff By Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["M.Sc. Economics", "67", "66"],
              ["M.Sc. Applied Geology", "149", "75"],
              ["M.Sc. Mathematics", "272", "389"],
              ["M.Sc. Chemistry", "298", "331"],
              ["M.Sc. Physics", "404", "334"],
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
