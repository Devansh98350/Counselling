import React from "react";

const Placement = () => {
  const sectionStyle = {
    padding: "20px",
    // paddingTop: "calc(20px + 50px)",
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
    fontSize: "24px",
    fontWeight: "700",
  };

  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };
  const imageContainerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
    maxWidth: "800px", // Adjust the width as needed
    width: "100%", // Makes it responsive within the container
    maxWidth: "800px", // Adjust the image size
    height: "auto",
  };

  return (
    <section id="placement" style={sectionStyle}>
      <h2 style={h2Style}>Placement</h2>
      <p style={pStyle}>
        Indian Institute of Technology, Roorkee has a separate placement cell that handles
        all the placement activities on campus. The IIT Roorkee provides various types of
        placement opportunities to students studying in their final year. IIT Roorkee
        Placement Cell organizes training and grooming sessions for students to enhance
        their skills. <br />
        IIT Roorkee Placements 2024 (Phase 1) has been concluded. According to the
        media reports, IIT Roorkee students got 802 job offers from 172 companies. During
        2024 placements, students achieved 23 international offers and a US Software
        company named Data bricks offered an annual CTC of INR 2.05 Crores. Some of
        the top recruiters of IIT Roorkee Placements 2024 are Accenture Japan, American
        Express, Google, Microsoft, Reliance Industries,
        etc. <br />
        According to the NIRF 2024 reports, the median salary offered to IIT Roorkee
        B.Tech and M.Tech students is INR 19.69 LPA and INR 12 LPA respectively. For
        MBA, the median package of IIT Roorkee is INR 18.09 LPA. During 2023
        placements, the median package for B.Arch. and M.Arch stood at INR 9.25 LPA. <br />
        In the year 2023, IIT Roorkee MBA placements concluded with a 100% placement
        rate. More than 50 recruiters visited the campus and made offers to 64 students.
        IIT Roorkee average package for MBA stood at INR 18.34 LPA and IIT Roorkee
        MBA highest package stood at INR 27.94 LPA for the 2023 batch. Most of the
        students were placed in the Operations, IT & Analytics domain with an average
        package of INR 19.39 LPA.
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee Placement Process 2024</strong>
      </h3>
      <p style={pStyle}>The placement process is divided into three phases. <br />

        <b>Phase 1</b>: The company and placement cell takes care of shortlisting pre-
        Placement talks, and visits and also offers internships. <br />
        <b>Phase 2</b>: For conducting the interviews, the students apply for the company’s
        available position. The company uses the students’ resumes and
        negotiates the appropriate dates with the Placement Cell. <br />
        <b>Phase 3</b>:  Students are selected for the appropriate job profile and selections are
        based on the interview process and assessments. Selected students
        are offered job letters or offers of employment.
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee Placements 2024</strong>
      </h3>
      <p style={pStyle}>The following table shows the details of IIT Roorkee placements for the batch
        2022-2023 as per the overall NIRF 2024 report.</p>

      <h3 style={th3Style} id="2023">IIT Roorkee UG Placements 2022-2023</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of UG (4-years programme) students placed", "733"],
              ["No. of UG (5-years programme) students placed", "9"],
              ["Median salary offered for UG (4-year programme) students", "Rs 19,69,000"],
              ["Median salary offered for UG (5-year programme) students", "Rs 9,25,000"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee PG Placements 2022-2023</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of PG (2-year programme) students placed", "349"],
              ["No. of PG-Integrated students placed", "86"],
              ["Median salary offered for PG (2-year programme) students", "Rs 13,11,333"],
              ["Median salary offered for PG-Integrated students", "Rs 23,20,000"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee Placement Report for UG 4-Year Programme (NIRF 2023)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particular</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of students in a batch", "879"],
              ["No. of students eligible", "861"],
              ["No. of students graduating", "824"],
              ["No. of students placed", "764"],
              ["Median salary package offered", "Rs. 17,00,000"],
              ["No. of students selected for higher education", "60"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee Placement Report for UG 5-Year Programme (NIRF 2023)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particular</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of students in a batch", "30"],
              ["No. of students eligible", "30"],
              ["No. of students graduating", "30"],
              ["No. of students placed", "27"],
              ["Median salary package offered", "Rs. 10,00,000"],
              ["No. of students selected for higher education", "3"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee Placement Report for PG 2-Year Programme (NIRF 2023)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particular</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of students in a batch", "884"],
              ["No. of students eligible", "773"],
              ["No. of students graduating", "620"],
              ["No. of students placed", "311"],
              ["Median salary package offered", "Rs. 12,00,000"],
              ["No. of students selected for higher education", "309"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee Placement Report for PG Integrated 5-Year Programme (NIRF 2023)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particular</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of students in a batch", "130"],
              ["No. of students eligible", "126"],
              ["No. of students graduating", "123"],
              ["No. of students placed", "95"],
              ["Median salary package offered", "Rs. 22,54,000"],
              ["No. of students selected for higher education", "28"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Roorkee Placements - Top Recruiters</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Recruiters</th>
              <th style={thStyle}>Recruiters</th>
              <th style={thStyle}>Recruiters</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["IBM", "TATA Motors", "Outlook"],
              ["NABARD", "Bajaj Capital", "Berger"],
              ["Infosys", "HCL", "Cognizant"],
              ["ICICI Bank", "IFFCO", "NatWest"],
              ["Deloitte", "Paytm", "GAIL"],
              ["ZS Associates", "Vedanta", "AJIO"],
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

      <h3 style={th3Style}>List of Top IITs Placements</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>College Name</th>
              <th style={thStyle}>B.Tech Median Package</th>
              <th style={thStyle}>M.Tech Median Package</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["IIT Delhi", "Rs 20 LPA", "NA"],
              ["IIT Banaras", "Rs 20 LPA", "Rs 12 LPA"],
              ["IIT Indore", "Rs 21.20 LPA", "Rs 8 LPA"],
              ["IIT Mandi", "Rs 22 LPA", "Rs 8 LPA"],
              ["IIT Jodhpur", "Rs 16 LPA", "Rs 10 LPA"],
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

      <p style={pStyle}><i>*The above table explains the details of the median package offered for UG and
        PG students in top IITs.</i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="2024"
      >
        <strong>IIT Roorkee Placement Report 2024: Highlights</strong>
      </h3>
      <p style={pStyle}>According to media reports, the key highlights of IIT Roorkee placements 2024 as
        compared with 2023 are presented below:</p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
              <th style={thStyle}>Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Highest domestic package", "INR 1.30 crore per annum", "NA"],
              ["Highest international package", "INR 1.06 crore per annum", "INR 2.05 crore per annum"],
              ["Companies visited", "63+", "172"],
              ["Students placed", "500+", "802"],
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

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee Placement Report 2024: Highlights</strong>
      </h3>
      <p style={pStyle}>IIT Roorkee MBA Placement 2024 report is not available on the official website.
        Students can check the previous year’s placement statistics below: </p>

      <div style={{
        overflowX: "auto",
      }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics 2023</th>
              <th style={thStyle}>Placement Statistics 2022</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of Recruiters", "50+", "53"],
              ["Batch Size", "66", "69"],
              ["No. of Students Registered for Placement", "64", "NA"],
              ["No. of PPOs", "24 (37.50%)", "NA"],
              ["Highest CTC", "INR 27.94 LPA", "INR 25 LPA"],
              ["Average CTC", "INR 18.34 LPA", "INR 16.80 LPA"],
              ["Average CTC of 25% of Students", "INR 22.85 LPA", "NA"],
              ["Average CTC of 50% of Students", "INR 21.18 LPA", "NA"],
              ["Median CTC", "INR 18.09 LPA", "INR 18 LPA"],
              ["Lowest CTC", "INR 11.60 LPA", "NA"],
              ["Roles Offered ", "Management Trainee, IT Solution Advisor, Assistant Manager, Associate, Product Manager, Area Sales Manager,Portfolio Manager, Senior Financial Associate, etc. ", "Team Lead, Senior Consultant, Product Manager, Business Analyst, Business, Development, Associate, Marketing Manager, Financial Advisory, etc. "],
              ["Placement Domains ", "Operations, IT & Analytics, General Management, Marketing, Finance, etc. ", "Operations, IT, Marketing, Consultancy, Finance, Data Analytics, Product Management "],
              ["Top Companies", "Adani, Bank of America, Barclays, Cognizant, EXL, Deloitte, EY, Godrej, HCL, IBM, Hero, etc.", "Goldman Sachs, Barclays, Paytm, KPMG, Deloitte, EY, Dabur, Amazon, Wipro, Infosys, Digit, TATA Power, Hexaware, etc."],
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

      <p style={pStyle}>The MBA batch 2021-23 has a total of 66 students, but only 64 of them participated
        in the placement drive. More than 50 recruiters visited the campus including the
        new and legacy corporate recruiters. The average CTC stood at INR 18.34 LPA
        and the highest CTC stood at INR 27.94 LPA. 24 students received PPO, which is
        about 37.50% of the batch. Some of the top recruiters included Adani, Bank of
        America, Barclays, Cognizant, EXL, Deloitte, EY, Godrej, HCL, IBM, Hero, etc. </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee MBA Placements 2024: Domain Wise</strong>
      </h3>
      <p style={pStyle}>The domain-wise placement details are mentioned below for IIT Roorkee MBA
        placements 2023:</p>

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
              <th style={thStyle}>Domains</th>
              <th style={thStyle}>Percentage of Students Placed</th>
              <th style={thStyle}>Average CTC</th>
            </tr>
          </thead>
          <tbody>
            {[
              { domain: "Operations, IT & Analytics", percent: "33%", ctc: "INR 19.39 LPA " },
              { domain: "General Management", percent: "24%", ctc: "INR 18.39 LPA " },
              { domain: "Marketing", percent: "29%", ctc: "INR 18.29 LPA" },
              { domain: "Finance", percent: "14%", ctc: "INR 15.98 LPA" },

            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.domain}</td>
                <td style={tdStyle}>{row.percent}</td>
                <td style={tdStyle}>{row.ctc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>Most of the students are placed in the Operations, IT & Analytics domain with an
        average package of INR 19.39 LPA.</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee Placements 2024: Year-Wise Trends</strong>
      </h3>
      <p style={pStyle}>Here is the last 10 years of record of placement offers received during the IIT
        Roorkee Placement. The below graph represents the number of placement offers
        received during IIT Roorkee Placements:</p>

      <img src="/year-wise.png" alt="year wise trends" style={imageContainerStyle} />

      <p style={pStyle}>As we can see from the above graph, every year, 800+ placement offers were
        made. The 2023 placement drive is in progress. Till now, students received 500
        placement offers. <br />
        The below table represents the year-wise placement trends of IIT Roorkee: </p>

      <h3 style={th3Style}>IIT Roorkee Placement Statistics (2021-2023)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of Recruiters", "63", "265", "260"],
              ["No. of Offers", "500", "1200+", "818"],
              ["Highest CTC", "INR 1.3 CPA", "INR 2.15 CPA", "INR 70 LPA"],
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
        <strong>IIT Roorkee Placements 2024: Top Recruiters</strong>
      </h3>
      <p style={pStyle}>IIT Roorkee Placement 2024 report is not available on the official website.
        Students can check the table given below to know the list of recruiters who
        participates in IIT Roorkee Placements: </p>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <tbody>
            {[
              ["Accenture Strategy", "Paytm", "Adani", "Bank of America"],
              ["Axtria", "HCL", "Barclays", "Bristlecone"],
              ["Cognizant", "Hero", "CyberTech", "DELL"],
              ["Deloitte", "HSBC", "Dunhumby", "EXL"],
              ["EY", "IBM", "HDFC Bank", "Gail"],
              ["ICICI Bank", "Morgan Stanley", "Jubilant FoodWorks", "Infosys"],
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

      <h3 style={th3Style}>IIT Roorkee Alumni Network</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name of the Organizations</th>
              <th style={thStyle}>Number of Alumni</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Indian Institute of Technology, Roorkee", "1485"],
              ["Amazon", "450"],
              ["Microsoft", "420"],
              ["Google", "300"],
              ["NSS IIT Roorkee", "199"],
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
        <strong>IIT Roorkee Placement Comparison 2023: Top IITs</strong>
      </h3>
      <p style={pStyle}>The below-mentioned comparison table showcases IIT Roorkee placement 2023
        statistics in comparison to other top IITs such as IIT Bombay, IIT Delhi and IIT
        Madras: </p>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Institution</th>
              <th style={thStyle}>Highest Package (2023)</th>
              <th style={thStyle}>Average Package (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["IIT Roorkee", "INR 1.30 crore per annum", "INR 17 LPA"],
              ["IIT Delhi", "INR 1.5 crore per annum", "INR 17.60 LPA"],
              ["IIT Bombay", "INR 3.67 crore per annum", "INR 21.82 LPA"],
              ["IIT Madras", "INR 1.31 crore per annum", "INR 17 LPA (median package)"],
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

      <p style={pStyle}><i>* IIT Delhi and IIT Roorkee average package data are not released. The median
        package offered during IIT Delhi and IIT Roorkee B.Tech placements 2022 it is
        based on NIRF report 2023. </i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Roorkee Average Package 2024</strong>
      </h3>
      <p style={pStyle}>IIT Roorkee average package data is not released. However, according to IIT
        Roorkee stream-wise NIRF reports 2024, the course-wise median package offered
        during IIT Roorkee placements 2023 is presented below: </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Median Package (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech", "INR 19.69 LPA"],
              ["M.Tech", "INR 12 LPA"],
              ["Integrated B.Tech", "INR 23.20 LPA"],
              ["B.Arch", "INR 9.25 LPA"],
              ["M.Arch", "INR 9.25 LPA"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>Further, an improving trend was witnessed in the median package offered over the
        past three years during IIT Roorkee B.Tech placements. The course-wise median
        salary trends witnessed during IIT Roorkee placements over the past three years is
        presented below:</p>

      <h3 style={th3Style}>IIT Roorkee B.Tech Median Salary Trends (2021-2023)</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Median Package (2021)</th>
              <th style={thStyle}>Median Package (2022)</th>
              <th style={thStyle}>Median Package (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B.Tech", "INR 16.72 LPA", "INR 17 LPA", "INR 19.69 LPA"],
              ["M.Tech", "INR 7.1 LPA", "INR 12.7 LPA", "INR 12 LPA"],
              ["Integrated B.Tech", "INR 20.55 LPA", "INR 22.54 LPA", "INR 23.20 LPA"],
              ["B.Arch", "INR 10 LPA", "INR 10 LPA", "INR 9.25 LPA"],
              ["M.Arch", "INR 5.15 LPA", "INR 8.2 LPA", "INR 9.25 LPA"],
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
    </section>
  );
};

export default Placement;
