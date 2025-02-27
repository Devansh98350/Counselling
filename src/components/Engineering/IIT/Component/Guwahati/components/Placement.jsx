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
  const ulStyle = {
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };
  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  return (
    <section id="placement" style={sectionStyle}>
      <h2 style={h2Style}>Placement</h2>
      <p style={pStyle}>
        According to media reports, a total of 712 students were placed till Dec 6 during
        IIT Guwahati placements 2024.
        Further,the highest international and domestic package offered during IIT
        Guwahati placements 2024 stood at INR 2.05 Crore per annum and INR 1.20
        Crore per annum, respectively. Further, a total of 250 companies visited the
        campus during IIT Guwahati placements 2024. Other than this, 38% of the
        total students were placed in the Core sector followed by 36% placement
        distribution in Software Development and Product during IIT Guwahati
        placements 2024. In addition, 26% of students received offers for Finance and
        Analyst profiles. <br /> <br />
        Earlier, a total of 246 companies from various sectors participated in the 2022-23
        placement process. The overall placement rate stood at 78.04%. Out of 1,425
        registered students, 1,112 were placed successfully. In addition to this, 20
        international offers were grabbed. Of all the programmes, M.Des recorded the
        highest placement percentage of 89.66%. The highest domestic package offered
        during IIT Guwahati placements 2023 was INR 1.20 crore per annum and
        the highest international package stood at INR 2.40 crore per annum. <br /><br />
        According to media reports, the <strong>highest stipend</strong> offered during IIT
        Guwahati <strong>internships 2023</strong> was <strong>INR 1.60 LPA</strong>. Further, a total of <strong>15 internship
          offers</strong> were made to <strong>B.Tech</strong> students The key highlights of the first day of phase
        1 IIT Guwahati placements 2023-24 are presented below:
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2023-24)</th>
            </tr>
            <tr>
              <td style={tdStyle}>Number of offers</td>
              <td style={tdStyle}>712 (students placed)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Companies visited</td>
              <td style={tdStyle}>250</td>
            </tr>
            <tr>
              <td style={tdStyle}>Highest package</td>
              <td style={tdStyle}>
                Domestic: INR 2.05 Crore per annum <br />
                International: INR 1.20 Crore per annum
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>PPOs received</td>
              <td style={tdStyle}>250</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}><strong>Note: </strong>The aforementioned data is sourced from media reports. <br /><br />
        The key highlights of IIT Guwahati placements 2023 and 2022 are tabulated below:
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
            {[
              {
                particular: "Highest domestic package",
                stats2022: "UG: INR 1.20 Crore per annum | PG: INR 44 LPA",
                stats2023: "UG: INR 1.20 Crore per annum | PG: INR 51.32 LPA",
              },
              {
                particular: "Highest international package",
                stats2022: "UG: INR 72 LPA | PG: INR 2.05 Crore per annum",
                stats2023: "UG: INR 2.40 Crore per annum | PG: INR 57.70 LPA",
              },
              { particular: "No. of students registered", stats2022: "1,243", stats2023: "1,425" },
              { particular: "No. of students placed", stats2022: "921", stats2023: "1,112" },
              { particular: "PPOs offered", stats2022: "179", stats2023: "215" },
              { particular: "PPOs accepted", stats2022: "157", stats2023: "166" },
              { particular: "Companies participated", stats2022: "180", stats2023: "246" },
              { particular: "No. of international offers", stats2022: "28", stats2023: "20" },
              { particular: "Placement rate", stats2022: "74.09%", stats2023: "78.04%" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.particular}</td>
                <td style={tdStyle}>{item.stats2022}</td>
                <td style={tdStyle}>{item.stats2023}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placement Comparison with other IITs</strong>
      </h3>
      <p style={pStyle}>The comparative analysis of IIT Guwahati placement data 2023 with other
        closely ranked IITs is depicted below: </p>

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
          <tbody>
            <tr>
              <th style={thStyle}>IIT Name</th>
              <th style={thStyle}>Highest Package (2023)</th>
              <th style={thStyle}>Companies Visited (2023)</th>
            </tr>
            {[
              {
                name: "IIT Guwahati",
                package: "INR 1.20 crore per annum (domestic) | INR 2.40 crore per annum (international)",
                companies: "246",
              },
              {
                name: "IIT Roorkee",
                package: "INR 1.30 crore per annum (domestic)* | INR 1.06 crore per annum (international)*",
                companies: "N/A",
              },
              {
                name: "IIT Bombay",
                package: "INR 1.68 crore per annum (domestic) | INR 3.67 crore per annum (international)",
                companies: "384",
              },
              {
                name: "IIT Madras",
                package: "INR 1.31 crore per annum",
                companies: "480+",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>{item.package}</td>
                <td style={tdStyle}>{item.companies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}><i>*The details are gathered from multiple media sources.</i></p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }} id="2023"
      >
        <strong>IIT Guwahati Average Package 2023</strong>
      </h3>
      <p style={pStyle}>The institute has released the course-wise average package details for the 2023
        drive. At the UG level, the average package stood at INR 25.75 LPA and at the
        PG level, the highest average package offered was INR 16.51 LPA. Further, the
        IIT Guwahati CSE average package was the highest among all the B.Tech/
        B.Des branches and the amount stood at INR 42.10 LPA. The following table
        represents the UG and PG IIT Guwahati average package 2023: </p>

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
          <tbody>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Average Package (2023)</th>
            </tr>
            {[
              { course: "B.Tech and B.Des", package: "INR 25.75 LPA" },
              { course: "M.Tech and M.Des", package: "INR 16.51 LPA" },
              { course: "MSc", package: "INR 10.86 LPA" },
              { course: "MS (R)", package: "INR 14.72 LPA" },
              { course: "MA", package: "INR 7.11 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.course}</td>
                <td style={tdStyle}>{item.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>Looking at the past three years' statistics, a fluctuating trend was recorded in the
        average package of B.Tech & B.Des and M.Tech & M.Des courses. The 2021
        average package for some of the PG courses is unavailable.
        The average package trends for all the courses are depicted below: </p>

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
          <tbody>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Average Package (2021)</th>
              <th style={thStyle}>Average Package (2022)</th>
              <th style={thStyle}>Average Package (2023)</th>
            </tr>
            {[
              {
                course: "B.Tech and B.Des",
                package2021: "INR 21.06 LPA",
                package2022: "INR 26.27 LPA",
                package2023: "INR 25.75 LPA",
              },
              {
                course: "M.Tech and M.Des",
                package2021: "INR 16.63 LPA",
                package2022: "INR 17.47 LPA",
                package2023: "INR 16.51 LPA",
              },
              {
                course: "MSc",
                package2021: "N/A",
                package2022: "INR 15.38 LPA",
                package2023: "INR 10.86 LPA",
              },
              {
                course: "MS (R)",
                package2021: "N/A",
                package2022: "INR 12.76 LPA",
                package2023: "INR 14.72 LPA",
              },
              {
                course: "MA",
                package2021: "N/A",
                package2022: "INR 5.04 LPA",
                package2023: "INR 7.11 LPA",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.course}</td>
                <td style={tdStyle}>{item.package2021}</td>
                <td style={tdStyle}>{item.package2022}</td>
                <td style={tdStyle}>{item.package2023}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placements 2023: Top Recruiters</strong>
      </h3>
      <p style={pStyle}>Some of the top regular recruiters who were part of IIT Guwahati placements in
        recent years are as follows: </p>
      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>Top Recruiters</strong>
      </h3>
      <ul style={ulStyle}>
        {[
          "Google",
          "JP Morgan Chase ",
          "Microsoft",
          "Goldman Sachs",
          "Schlumberger",
          "Qualcomm",
          "Uber",
          "Apple",
          "Texas Instrument",
        ].map((recruiter, index) => (
          <li key={index} style={liStyle}>
            {recruiter}
          </li>
        ))}
      </ul>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati (IITG) Placements</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati median package offered to UG students is Rs 21, 60,000. At the
        same time, the median package offered for PG candidates is Rs 12, 00,000
        during the IIT Guwahati placements as per the information available from the
        NIRF Report 2024. The statistics of IIT Guwahati placements CSE is the lowest
        package offered is Rs 8.0 Lakhs. <br /> <br />
        .The IIT Guwahati placements will be organized every year for final-year
        students on campus. The Placement Cell of IIT Guwahati conducts training and
        grooming sessions for students to enhance their employability skills and
        confidence. The certification drive would be organized by the IIT Guwahati
        placement cell. <br /> <br />

        The following table shows the IIT Guwahati placement data for the academic
        2022-2023.

        <h3 className="th3" style={th3Style} >IIT Guwahati Placements 2022-2023</h3>
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
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Statistics</th>
              </tr>
              {[
                { label: "Total no. of students registered", value: "1425" },
                { label: "Total no. of students placed", value: "1112" },
                { label: "Total female students registered", value: "294" },
                { label: "Total male students registered", value: "1131" },
                { label: "Total no. of PPOs offered", value: "215" },
                { label: "Percentage of male students placed", value: "77.81%" },
                { label: "Percentage of female students placed", value: "78.91%" },
                { label: "Total female students placed", value: "232" },
                { label: "Total male students placed", value: "880" },
                { label: "Total number of PPOs accepted", value: "166" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
                  <td style={tdStyle}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placements 2022-2023 (NIRF 2024)</strong>
      </h3>
      <p style={pStyle}>The following table shows the details of placement details for the year
        2022-2023 as per the NIRF report 2024 (overall).

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
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Statistics</th>
              </tr>
              {[
                { label: "No. of UG students placed", value: "639" },
                { label: "No. of PG students placed", value: "473" },
                {
                  label: "Median salary offered for UG students",
                  value: "Rs 21,60,000",
                },
                {
                  label: "Median salary offered for PG students",
                  value: "Rs 12,00,000",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
                  <td style={tdStyle}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3 className="th3" style={th3Style}>IIT Guwahati Top Recruiters</h3>
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
          <tbody>
            <tr>
              <th style={thStyle}>Signion</th>
              <th style={thStyle}>Toppr Technologies</th>
            </tr>
            {[
              ["Simplilearn", "UpGrad"],
              ["StatWig", "Zaloni"],
              ["Wipro", "ZS Associates"],
              ["Tekion", "Thought Works"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}><strong>Note: </strong>The IIT Guwahati placement cell acts as a bridge between the students
        and the companies.</p>

      <h3 className="th3" style={th3Style}>Top IITs Placements</h3>
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
          <tbody>
            <tr>
              <th style={thStyle}>College Name</th>
              <th style={thStyle}>B.Tech Median Package</th>
              <th style={thStyle}>M.Tech Median Package</th>
            </tr>
            {[
              { college: "IIT Patna", btech: "Rs 20 LPA", mtech: "Rs 12 LPA" },
              {
                college: "IIT Gandhinagar",
                btech: "Rs 16 LPA",
                mtech: "Rs 13.75 LPA",
              },
              {
                college: "IIT Hyderabad",
                btech: "Rs 21 LPA",
                mtech: "Rs 15 LPA",
              },
              {
                college: "IIT Bhubaneswar",
                btech: "Rs 15.98 LPA",
                mtech: "Rs 12 LPA",
              },
              { college: "IIT Ropar", btech: "Rs 20 LPA", mtech: "Rs 12 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>
                  <strong>{item.college}</strong>
                </td>
                <td style={tdStyle}>{item.btech}</td>
                <td style={tdStyle}>{item.mtech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The above-mentioned table shows the details of the placements of top IITs.
        <strong>Key takeaways from IIT Guwahati (IITG)'s Placement Statistics</strong>
        <ul style={ulStyle}>
          <li style={liStyle}>The Placement Percentage of IIT Guwahati (IITG) has increased by 15.53
            % </li>
          <li style={liStyle}>The Median salary of IIT Guwahati (IITG) has increased by 16.89 % </li>
          <li style={liStyle}>The Placement Percentage of IIT Guwahati (IITG) is better than 4 colleges
            that are ranked higher </li>
          <li style={liStyle}>The Median salary of IIT Guwahati (IITG) is better than 6 colleges that are
            ranked higher </li>
        </ul>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placements Report</strong>
      </h3>

      <p style={pStyle}>Here are some highlights on IIT Guwahati Placement 2023.</p>
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics 2023</th>
            </tr>
            {[
              { label: "Total Students Registered", value: "1425" },
              { label: "Total Students Offers", value: "1112" },
              { label: "Total Students Placed", value: "1112" },
              { label: "PPOs Offered", value: "215" },
              { label: "PPOs Accepted", value: "166" },
              { label: "Total International Offers", value: "20" },
              { label: "No. of companies visited", value: "246" },
              { label: "Placement Percentage", value: "78.04%" },
              { label: "Top Job Roles", value: "Core Engineering, IT Software, Finance Sectors, etc." },
              { label: "Highest CTC Offered (International)", value: "INR 2.40 CPA" },
              { label: "Highest CTC Offered (Domestic)", value: "INR 1.20 CPA" },
              {
                label: "Popular recruiters",
                value: "HPCL, Navi, Qualcomm, Texas Instruments, Schlumberger, Piramal, TVS R&D, GAIL, etc.",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.label}</td>
                <td style={tdStyle}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>With the highest international CTC of INR 2.4 CPA and the highest domestic
        package of INR 1.1 CPA, students received 215 PPOs during the IIT Guwahati
        Placements 2023. During IIT Guwahati Placements 2022, 180 recruiters took
        part in the placement drive. Microsoft, Google, Apple, and JP Morgan were
        among the major recruiters. A total of 1243 students registered for the
        placement drive, with 910 of them being placed. <br /> <br />
        The highest international package was INR 2.5 CPA, which the M.Tech & M.Des
        batch received. B.Tech & B.Des students received the highest domestic package
        of INR 1.2 CPA. Students pursuing M.Tech and M.Des degrees received an
        average of INR 17.77 LPA.</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }} id="2024"
      >
        <strong>IIT Guwahati Highest Package 2024: Course-Wise</strong>
      </h3>

      <p style={pStyle}>IIT Guwahati Placement 2024 report is yet to be released. Students can check
        the table below for course-wise highest packages of IIT Guwahati:
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
            <tbody>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Highest Package</th>
              </tr>
              {[
                { course: "DoD", package: "INR 51.32 LPA" },
                { course: "CL", package: "INR 51.65 LPA" },
                { course: "BSBE", package: "INR 39.31 LPA" },
                { course: "Chemistry", package: "INR 1.06 CPA" },
                { course: "CS", package: "INR 32 LPA" },
                { course: "CSE", package: "INR 2.40 CPA" },
                { course: "EEE", package: "INR 51.32 LPA" },
                { course: "Maths", package: "INR 62.75 LPA" },
                { course: "Mechanical", package: "INR 51.65 LPA" },
                { course: "Physics", package: "INR 40.92 LPA" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.course}</td>
                  <td style={tdStyle}>{item.package}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Average Package 2024: Course-Wise</strong>
      </h3>

      <p style={pStyle}>IIT Guwahati Placement 2024 report is yet to be released. Students can check
        the table below for course-wise average packages of IIT Guwahati:
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
            <tbody>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Average Package</th>
              </tr>
              {[
                { course: "DoD", package: "INR 20.59 LPA" },
                { course: "CL", package: "INR 19.33 LPA" },
                { course: "BSBE", package: "INR 18.06 LPA" },
                { course: "Chemistry", package: "INR 21.46 LPA" },
                { course: "CS", package: "INR 17.73 LPA" },
                { course: "CSE", package: "INR 42.10 LPA" },
                { course: "EEE", package: "INR 26.20 LPA" },
                { course: "Maths", package: "INR 29 LPA" },
                { course: "Mechanical", package: "INR 19.8 LPA" },
                { course: "Physics", package: "INR 22.6 LPA" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.course}</td>
                  <td style={tdStyle}>{item.package}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <p style={pStyle}>The table below represents the Top IITs Placements comparison:
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
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Highest Salary</th>
                <th style={thStyle}>Average Salary</th>
              </tr>
              {[
                { iit: "IIT Guwahati", highest: "INR 1.24 CPA", average: "NA" },
                { iit: "IIT Madras", highest: "INR 1.98 CPA", average: "INR 21.48 LPA" },
                { iit: "IIT Delhi", highest: "INR 2 CPA", average: "INR 1.25 CPA" },
                { iit: "IIT Bombay", highest: "INR 2.1 CPA", average: "INR 25 LPA" },
                { iit: "IIT Kharagpur", highest: "INR 2.4 CPA", average: "NA" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.iit}</td>
                  <td style={tdStyle}>{item.highest}</td>
                  <td style={tdStyle}>{item.average}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati CSE Placements 2024</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati's CSE Batch had the highest amount of placement offers in the
        years 2023 and 2022. The B.Tech/B.Des and M.Tech/M.Des programs have
        received the most placement offers in this course. The following data is provided
        for the CSE course B.Tech program: </p>
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>IIT Guwahati CSE Placements 2023</th>
            </tr>
            {[
              { label: "Batch Size", value: "108" },
              { label: "Highest Package", value: "INR 2.40 CPA" },
              { label: "Average Package", value: "INR 42.10 LPA" },
              { label: "Students Placed", value: "84" },
              { label: "Placement Percentage", value: "96.30%" },
              { label: "Top Recruiters", value: "Microsoft, Apple, Uber, Google, Cisco" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.label}</td>
                <td style={tdStyle}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placements 2024: Job Roles Offered</strong>
      </h3>
      <p style={pStyle}>The below table represents the sector-wise job roles offered to the students:</p>
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
          <tbody>
            <tr>
              <th style={thStyle}>Sector</th>
              <th style={thStyle}>Job Roles Offered</th>
            </tr>
            {[
              { sector: "IT/Software", roles: "Software Development Engineer, Member Technical Staff, Design, R&D, Developers, Data Science" },
              { sector: "Finance", roles: "Algorithmic Trader, Quant" },
              { sector: "Non-tech Profiles", roles: "Business Analyst, Associate Product Manager, Marketing Manager" },
              { sector: "Analyst", roles: "Quant, Data Science" },
              { sector: "Core Engg.", roles: "Graduate Engineer Trainee, Post Graduate Trainee, Technical Executive" },
              { sector: "Education", roles: "Teaching" },
              { sector: "Design", roles: "Product Designer, Graphic Designer, UX/UI" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.sector}</td>
                <td style={tdStyle}>{item.roles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placements 2024: Course - Wise</strong>
      </h3>
      <p style={pStyle}>The below table represents the course-wise placement statistics offered to the
        students: </p>

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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>B.Tech & B.Des</th>
              <th style={thStyle}>M.Tech & M.Des</th>
              <th style={thStyle}>M.Sc</th>
            </tr>
            {[
              { label: "Number of students", btech: "769", mtech: "479", msc: "106" },
              { label: "Number of students Placed", btech: "639", mtech: "354", msc: "69" },
              { label: "Placement percentage", btech: "83.09%", mtech: "73.90%", msc: "65.09%" },
              { label: "Highest International Package", btech: "INR 2.40 CPA", mtech: "INR 57.70 LPA", msc: "NA" },
              { label: "Highest Domestic Package", btech: "INR 1.20 CPA", mtech: "INR 51.32 LPA", msc: "INR 37.69 LPA" },
              { label: "Average Package", btech: "INR 25.75 LPA", mtech: "INR 16.51 LPA", msc: "INR 10.86 LPA" },
              { label: "Median Package", btech: "INR 21.63 LPA", mtech: "INR 13.12 LPA", msc: "INR 7.25 LPA" },
              { label: "Lowest Package", btech: "INR 5.32 LPA", mtech: "INR 4.20 LPA", msc: "INR 7 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.label}</td>
                <td style={tdStyle}>{item.btech}</td>
                <td style={tdStyle}>{item.mtech}</td>
                <td style={tdStyle}>{item.msc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>During IIT Guwahati Placements 2023, the highest package was bagged by the
        B.Tech & B.Des batch. The average salary & median salary were also the
        highest for the B.Tech & B.Des students. The highest  number of students were
        placed from the B.Tech & B.Des batch and the lowest from the MS(R) program.
        The placement percentage was also the highest for the B.Tech & B.Des batch.</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati B.Tech & B.Des Placements 2024</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati Placement 2024 Report has not been released yet, it will be
        updated here once released. The below table represents the highlights of B.Tech
        & B.Des Placements 2023: </p>

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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placements Statistics</th>
            </tr>
            {[
              { particular: "Number of students registered", statistics: "769" },
              { particular: "Number of students Placed", statistics: "639" },
              { particular: "Placement percentage", statistics: "83.09%" },
              { particular: "Highest International Package", statistics: "INR 2.40 CPA" },
              { particular: "Highest Domestic Package", statistics: "INR 1.20 CPA" },
              { particular: "Average Package", statistics: "INR 25.75 LPA" },
              { particular: "Median Package", statistics: "INR 21.63 LPA" },
              { particular: "Lowest Package", statistics: "INR 5.32 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.particular}</td>
                <td style={tdStyle}>{item.statistics}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>During IIT Guwahati B.Tech & B.Des Placements 2022, 769 students registered
        out of which 639 students were placed. The placement percentage was 83.09%.
        The highest international salary was INR 2.40 CPA & the highest domestic
        salary was INR 1.20 CPA.</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati B.Tech & B.Des Placements 2024: Branch - Wise</strong>
      </h3>
      <p style={pStyle}>The below table shows the branch-wise data of IIT Guwahati B.Tech & B.Des
        Placements 2023:</p>
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
          <tbody>
            <tr>
              <th style={thStyle}>Branches</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Number of Students Registered</th>
              <th style={thStyle}>Number of Students Placed</th>
            </tr>
            {[
              { branch: "CSE", placement: "96.30%", registered: "108", placed: "84" },
              { branch: "ECE", placement: "91.30%", registered: "62", placed: "56" },
              { branch: "EEE", placement: "93.55%", registered: "31", placed: "29" },
              { branch: "ME", placement: "86.14%", registered: "101", placed: "87" },
              { branch: "CE", placement: "60.26%", registered: "78", placed: "47" },
              { branch: "BSBE", placement: "64.29%", registered: "56", placed: "36" },
              { branch: "CL", placement: "86.96%", registered: "46", placed: "40" },
              { branch: "EP", placement: "59.52%", registered: "42", placed: "25" },
              { branch: "CST", placement: "83.72%", registered: "43", placed: "36" },
              { branch: "MNC", placement: "95.59%", registered: "68", placed: "65" },
              { branch: "DOD", placement: "74%", registered: "50", placed: "37" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.branch}</td>
                <td style={tdStyle}>{item.placement}</td>
                <td style={tdStyle}>{item.registered}</td>
                <td style={tdStyle}>{item.placed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>During IIT Guwahati B.Tech & B.Des Placements 2023, the highest number of
        students was placed from the CSE branch followed by the MNC and EEE
        branch.</p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati B.Tech & B.Des Placements 2024: Year-Wise Trends</strong>
      </h3>
      <p style={pStyle}>IIT Guwahati Placement 2024 Report has not been released yet, it will be
        updated here once released. The below table shows the year-wise trends of IIT
        Guwahati B.Tech & B.Des Placements:</p>
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
            </tr>
            {[
              { label: "Number of students registered", year2022: "653", year2023: "769" },
              { label: "Number of students placed", year2022: "575", year2023: "639" },
              { label: "Placement percentage", year2022: "88.05%", year2023: "83.09%" },
              { label: "Highest salary", year2022: "INR 1.2 CPA", year2023: "INR 2.4 CPA" },
              { label: "Average salary", year2022: "INR 26.33 LPA", year2023: "INR 25.75 LPA" },
              { label: "Median salary", year2022: "INR 22 LPA", year2023: "INR 21.63 LPA" },
              { label: "Lowest salary", year2022: "INR 6.5 LPA", year2023: "INR 5.32 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.label}</td>
                <td style={tdStyle}>{item.year2022}</td>
                <td style={tdStyle}>{item.year2023}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>During IIT Guwahati B.Tech & B.Des Placements 2023, the following trends
        have been observed:
        <ul style={ulStyle}>
          <li style={liStyle}>The number of students registered increased from 653 to 769.</li>
          <li style={liStyle}>The number of students placed increased from 575 to 639.</li>
          <li style={liStyle}>The placement percentage decreased from 88.05% to 83.09% </li>
          <li style={liStyle}>The highest salary increased from INR 1.2 CPA to INR 2.4 CPA.</li>
          <li style={liStyle}>The average salary decreased from INR 26.33 LPA to INR 25.75 LPA.</li>
          <li style={liStyle}>The median salary saw a decreasing trend from INR 22 LPA to INR 21.63
            LPA </li>
          <li style={liStyle}>The lowest salary also decreased from INR 6.5 LPA to INR 5.32 LPA.</li>
        </ul>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati M.Tech & M.Des Placements 2024: Year-Wise Trends</strong>
      </h3>
      <p style={pStyle}>The below table shows the year-wise trends of IIT Guwahati M.Tech & M.Des
        Placements year-wise trends:
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
          <tbody>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
            </tr>
            {[
              { label: "Number of students registered", year2022: "432", year2023: "479" },
              { label: "Number of students placed", year2022: "282", year2023: "354" },
              { label: "Placement percentage", year2022: "65.27%", year2023: "73.90%" },
              { label: "Highest salary", year2022: "INR 1.2 CPA", year2023: "INR 57.70 LPA" },
              { label: "Average salary", year2022: "INR 17.77 LPA", year2023: "INR 16.51 LPA" },
              { label: "Median salary", year2022: "INR 15 LPA", year2023: "INR 12.13 LPA" },
              { label: "Lowest salary", year2022: "INR 6.5 LPA", year2023: "INR 4.20 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.label}</td>
                <td style={tdStyle}>{item.year2022}</td>
                <td style={tdStyle}>{item.year2023}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>During IIT Guwahati M.Tech & M.Des Placements 2023, the following trends
        have been observed:
        <ul style={ulStyle}>
          <li style={liStyle}>The number of students registered increased from 432 to 479.</li>
          <li style={liStyle}>The number of students placed increased from 284 to 354.</li>
          <li style={liStyle}>The placement percentage increased from 65.27% to 73.90% </li>
          <li style={liStyle}>The highest salary increased from INR 44 LPA to INR 57.70 LPA.</li>
          <li style={liStyle}>The average salary declined from INR 17.77 LPA to INR 16.51 LPA.</li>
          <li style={liStyle}>The median salary declined from INR 15 LPA to INR 12.13 LPA</li>
          <li style={liStyle}>The lowest salary also declined from INR 6.5 LPA to INR 4.20 LPA.</li>
        </ul>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati M.Sc. Placements 2024</strong>
      </h3>
      <p style={pStyle}>The below table represents the highlights of IIT Guwahati M.Sc. Placements
        2023:

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
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Placements Statistics 2023</th>
              </tr>
              {[
                { label: "Number of students registered", value: "106" },
                { label: "Number of students placed", value: "69" },
                { label: "Placement percentage", value: "65.09%" },
                { label: "Highest Domestic Salary", value: "INR 37.69 LPA" },
                { label: "Average Salary", value: "INR 10.86 LPA" },
                { label: "Median Salary", value: "INR 7.25 LPA" },
                { label: "Lowest Salary", value: "INR 7 LPA" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
                  <td style={tdStyle}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </p>

      <p style={pStyle}>During IIT Guwahati M.Sc. Placements 2023, saw a declining trend. A total of
        106 students registered out of which 69 students got placed. The placement
        percentage was 65.09%. The highest domestic salary stood at INR 37.69 LPA.
        Students received an average salary of INR 10.86 LPA. The median salary stood
        at INR 7.25 LPA. The lowest salary received was INR 7 LPA. </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati M.Sc. Placements 2024: Year-Wise Trends</strong>
      </h3>
      <p style={pStyle}>Over time, the percentage of M.Sc. placements has increased. It was 18% in
        2021 and 70% in 2022, but it dropped in 2023, with a placement percentage of
        65.09%. The table below details the placement trends of IIT Guwahati M.Sc
        Placements:
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
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>2022</th>
                <th style={thStyle}>2023</th>
              </tr>
              {[
                { label: "Number of students registered", year2022: "47", year2023: "106" },
                { label: "Number of students placed", year2022: "33", year2023: "69" },
                { label: "Placement percentage", year2022: "70.21%", year2023: "65.09%" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
                  <td style={tdStyle}>{item.year2022}</td>
                  <td style={tdStyle}>{item.year2023}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        The number of registered students increased from 47 to 106. And, the number of
        students placed increased from 33 to 69. <br /><br />
        The below table represents the year-wise trends of IIT Guwahati Placements:
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
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>2020-21</th>
                <th style={thStyle}>2021-22</th>
                <th style={thStyle}>2022-23</th>
              </tr>
              {[
                { label: "Number of students registered", year2020: "1200", year2021: "1243", year2022: "1,425" },
                { label: "Number of students placed", year2020: "731", year2021: "910", year2022: "1,112" },
                { label: "Overall Placement Percentage", year2020: "57.16%", year2021: "73.72%", year2022: "78.04%" },
                { label: "Total Number of Recruiters", year2020: "140", year2021: "180", year2022: "246" },
                { label: "Highest CTC", year2020: "INR 70 LPA", year2021: "INR 2.0 CPA", year2022: "INR 2.4 CPA" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
                  <td style={tdStyle}>{item.year2020}</td>
                  <td style={tdStyle}>{item.year2021}</td>
                  <td style={tdStyle}>{item.year2022}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        During IIT Guwahati Placements 2023, the following placement trends have
        been observed:
        <ul style={ulStyle}>
          <li style={liStyle}>The number of students registered for the placement drive increased from
            1243 to 1425.</li>
          <li style={liStyle}>The number of students placed increased from 910 to 1112. </li>
          <li style={liStyle}>The placement percentage increased from 73.2% in 2022 to 78.04% in
            2023.</li>
          <li style={liStyle}>The number of recruiters increased from 180 to 246.</li>
          <li style={liStyle}>The average salary declined from INR 17.77 LPA to INR 16.51 LPA.</li>
          <li style={liStyle}>The median salary declined from INR 15 LPA to INR 12.13 LPA</li>
          <li style={liStyle}>The highest salary increased from INR 2.0 LPA in 2022 to INR 2.4 CPA.</li>
        </ul>
      </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Guwahati Placements 2024: Top Recruiters</strong>
      </h3>
      <ul style={ulStyle}>
        {[
          "Texas Instrument",
          "GAIL",
          "Navi",
          "HPCL",
          "Piramal",
          "Qualcomm",
          "Schlumberger ",
          "TVS R&D",
          "Bajaj",
        ].map((recruiter, index) => (
          <li key={index} style={liStyle}>
            {recruiter}
          </li>
        ))}
      </ul>
    </section >
  );
};

export default Placement;
