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
        A total of 1128 students accepted job offers including 208 pre-placement
        offers. More than 250 companies participated in the IIT Kanpur placement
        drive 2022-23, of which 5+ startups, participated in phase 1 campus
        hiring and offered 1200 jobs. 74 international offers were also made
        during IIT Kanpur placements. IIT Kanpur Placements 2024 (Phase 1) has
        been concluded with 989 job offers including 22 international offers.{" "}
        <br />
        <br />
        IIT Kanpur average salary stood at Rs 26.27 lakhs as per the placement
        statistics of December 2023. The IIT Kanpur's highest salary package
        (domestic) offered is Rs 1.9 Crores. <br />
        <br />
        Overall 33 offers above INR 1 Cr have been received from various
        international and national organizations during the IIT Kanpur
        placements 2022-2023. <br /> <br />
        As per IIT Kanpur NIRF 2024, 688 UG students were placed with a median
        salary of Rs 23.00 lakhs and 581 PG students were placed with an average
        salary of Rs 16.27 lakhs. <br />
        The details of the IIT Kanpur placement process are given below.
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>
            Indian Institute of Technology, Kanpur Placement Process
          </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            First students have to register with the Point of Contact (PoC),
            appointed through students’ placement offices or placement
            coordinators on the Recruitment Automation System (RAS).
          </li>
          <li style={liStyle}>
            Next, students have to fill out a Job Announcement Form
            (JAF)/Internship Proforma (IP) and share the profile details.
          </li>
          <li style={liStyle}>
            {" "}
            After the verification of details, job/internship openings are made
            visible on the portal by the PoC team.
          </li>
          <li style={liStyle}>
            After that, students are required to upload their resumes on the
            RAS.
          </li>
          <li style={liStyle}>
            With mutual consent from the placement team, companies conduct their
            PPT and tests/screening process.
          </li>
          <li style={liStyle}>
            Students will be shortlisted on the basis of their resume, have to
            appear for the interview process.
          </li>
          <li style={liStyle}>
            After the screening process, a list of selected and waitlisted
            candidates is released at the end of the interview.
          </li>
          <li style={liStyle}>
            Finally, selected students are given the offer letters.
          </li>
        </ul>
      </p>

      <h3 className="th3" style={th3Style} id="2024">
        IIT Kanpur UG Placement Statistics 2022-23 (NIRF 2024)
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
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>No of Students Placed </td>
              <td style={tdStyle}>688</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median Salary Offered</td>
              <td style={tdStyle}>INR 23 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                No of Students Selected for Higher Studies
              </td>
              <td style={tdStyle}>239</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="2024">
        IIT Kanpur PG Placement Statistics 2022-23 (NIRF 2024)
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
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>No of Students Placed </td>
              <td style={tdStyle}>581</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median Salary Offered</td>
              <td style={tdStyle}>INR 16.87 L</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                No of Students Selected for Higher Studies
              </td>
              <td style={tdStyle}>228</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="2024">
        IIT Kanpur Placement Highlights 2022-2023
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
              <th style={thStyle}>Placement Statistics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Number of companies visiting campus</td>
              <td style={tdStyle}>250+</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of startup companies</td>
              <td style={tdStyle}>35+</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of job offers accepted by students</td>
              <td style={tdStyle}>1128</td>
            </tr>
            <tr>
              <td style={tdStyle}>Number of international offers</td>
              <td style={tdStyle}>74</td>
            </tr>
            <tr>
              <td style={tdStyle}>Highest domestic CTC</td>
              <td style={tdStyle}>INR 1.9 CR</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="2024">
        IITs Placement Comparison 2024
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
              <th style={thStyle}>College Name</th>
              <th style={thStyle}>B.Tech Median Package</th>
              <th style={thStyle}>M.Tech Median Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>IIT Mandi</td>
              <td style={tdStyle}>INR 22 LPA </td>
              <td style={tdStyle}>INR 8 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>IIT Jodhpur</td>
              <td style={tdStyle}>INR 16 LPA </td>
              <td style={tdStyle}>INR 10 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>IIT Patna</td>
              <td style={tdStyle}>INR 20 LPA </td>
              <td style={tdStyle}>INR 12 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>IIT Gandhinagar</td>
              <td style={tdStyle}>INR 16 LPA </td>
              <td style={tdStyle}>INR 13.75 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        Students can check the table below to know IIT Kanpur placement details
        for 2024:{" "}
      </p>

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
              <th style={thStyle}>Placement Statistics (2023-24 - Phase I)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Job Offers</td>
              <td style={tdStyle}>989</td>
            </tr>
            <tr>
              <td style={tdStyle}>Students Placed</td>
              <td style={tdStyle}>913</td>
            </tr>
            <tr>
              <td style={tdStyle}>International Offers</td>
              <td style={tdStyle}>INR 26.27 LPA </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        The table shows the branch-wise placement statistics for IIT Kanpur
        B.Tech for the year 2024:
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Students Registered</th>
              <th style={thStyle}>Students Placed</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Average CTC (INR)</th>
              <th style={thStyle}>Median CTC (INR)</th>
            </tr>
            {[
              {
                branch: "AE",
                registered: 35,
                placed: 27,
                percentage: "77.1%",
                avgCTC: "20.1 LPA",
                medianCTC: "17.7 LPA",
              },
              {
                branch: "BSBE",
                registered: 24,
                placed: 12,
                percentage: "50.0%",
                avgCTC: "13.8 LPA",
                medianCTC: "14.7 LPA",
              },
              {
                branch: "CE",
                registered: 104,
                placed: 72,
                percentage: "69.2%",
                avgCTC: "16.3 LPA",
                medianCTC: "15.8 LPA",
              },
              {
                branch: "CHE",
                registered: 89,
                placed: 73,
                percentage: "82.0%",
                avgCTC: "18.9 LPA",
                medianCTC: "16.0 LPA",
              },
              {
                branch: "CSE",
                registered: 121,
                placed: 116,
                percentage: "95.9%",
                avgCTC: "52.8 LPA",
                medianCTC: "40.7 LPA",
              },
              {
                branch: "EE",
                registered: 163,
                placed: 139,
                percentage: "85.3%",
                avgCTC: "27.6 LPA",
                medianCTC: "23.5 LPA",
              },
              {
                branch: "ME",
                registered: 114,
                placed: 85,
                percentage: "74.6%",
                avgCTC: "19.7 LPA",
                medianCTC: "19.2 LPA",
              },
              {
                branch: "MSE",
                registered: 74,
                placed: 52,
                percentage: "70.3%",
                avgCTC: "17.3 LPA",
                medianCTC: "15.0 LPA",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.branch}</td>
                <td style={tdStyle}>{item.registered}</td>
                <td style={tdStyle}>{item.placed}</td>
                <td style={tdStyle}>{item.percentage}</td>
                <td style={tdStyle}>{item.avgCTC}</td>
                <td style={tdStyle}>{item.medianCTC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        The table shows the branch-wise placement statistics for IIT Kanpur
        M.Tech for the year of 2024:{" "}
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Students Registered</th>
              <th style={thStyle}>Students Placed</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Average CTC (INR)</th>
              <th style={thStyle}>Median CTC (INR)</th>
            </tr>
            {[
              {
                branch: "AE",
                registered: 46,
                placed: 18,
                percentage: "39.1%",
                avgCTC: "10.6 LPA",
                medianCTC: "10.7 LPA",
              },
              {
                branch: "BSBE",
                registered: 4,
                placed: 1,
                percentage: "25.0%",
                avgCTC: "12.2 LPA",
                medianCTC: "12.2 LPA",
              },
              {
                branch: "CE",
                registered: 50,
                placed: 32,
                percentage: "64.0%",
                avgCTC: "11.7 LPA",
                medianCTC: "9.0 LPA",
              },
              {
                branch: "CHE",
                registered: 37,
                placed: 26,
                percentage: "70.3%",
                avgCTC: "12.9 LPA",
                medianCTC: "10.4 LPA",
              },
              {
                branch: "CSE",
                registered: 74,
                placed: 55,
                percentage: "74.3%",
                avgCTC: "24.7 LPA",
                medianCTC: "21.4 LPA",
              },
              {
                branch: "EE",
                registered: 77,
                placed: 55,
                percentage: "71.4%",
                avgCTC: "28.0 LPA",
                medianCTC: "27.5 LPA",
              },
              {
                branch: "ES",
                registered: 12,
                placed: 3,
                percentage: "25.0%",
                avgCTC: "11.1 LPA",
                medianCTC: "11.0 LPA",
              },
              {
                branch: "ME",
                registered: 32,
                placed: 27,
                percentage: "84.4%",
                avgCTC: "10.9 LPA",
                medianCTC: "10.3 LPA",
              },
              {
                branch: "DOMS",
                registered: 16,
                placed: 7,
                percentage: "43.8%",
                avgCTC: "13.6 LPA",
                medianCTC: "14.8 LPA",
              },
              {
                branch: "MSE",
                registered: 16,
                placed: 12,
                percentage: "75.0%",
                avgCTC: "14.2 LPA",
                medianCTC: "13.1 LPA",
              },
              {
                branch: "MSP",
                registered: 5,
                placed: 1,
                percentage: "20.0%",
                avgCTC: "12.2 LPA",
                medianCTC: "12.2 LPA",
              },
              {
                branch: "PSE",
                registered: 4,
                placed: 1,
                percentage: "25.0%",
                avgCTC: "10.1 LPA",
                medianCTC: "10.1 LPA",
              },
              {
                branch: "SEE",
                registered: 14,
                placed: 9,
                percentage: "64.3%",
                avgCTC: "13.5 LPA",
                medianCTC: "12.7 LPA",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.branch}</td>
                <td style={tdStyle}>{item.registered}</td>
                <td style={tdStyle}>{item.placed}</td>
                <td style={tdStyle}>{item.percentage}</td>
                <td style={tdStyle}>{item.avgCTC}</td>
                <td style={tdStyle}>{item.medianCTC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        IIT Kanpur has been performing consistently well in terms of placements.
        The given below table shows the last few years' comparison table with
        the highest packages and average salary being paid to the students:{" "}
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
              <th style={thStyle}>Placement Year</th>
              <th style={thStyle}>Highest Salary</th>
              <th style={thStyle}>Average Salary</th>
            </tr>
            {[
              {
                year: "2023-24",
                highest: "NA",
                average: "INR 26.27 LPA (Placements ongoing)",
              },
              { year: "2022-23", highest: "INR 1.9 CPA", average: "NA" },
              {
                year: "2021-22",
                highest: "INR 2.3 CPA",
                average: "INR 28.7 LPA",
              },
              { year: "2020-21", highest: "INR 1.47 CPA", average: "NA" },
              { year: "2019-20", highest: "INR 62.28 LPA", average: "NA" },
              {
                year: "2017-19",
                highest: "INR 18.5 LPA",
                average: "INR 11.02 LPA",
              },
              {
                year: "2016-18",
                highest: "INR 18 LPA",
                average: "INR 10.48 LPA",
              },
              {
                year: "2015-17",
                highest: "INR 12.64 LPA",
                average: "INR 10.42 LPA",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.year}</td>
                <td style={tdStyle}>{item.highest}</td>
                <td style={tdStyle}>{item.average}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        Being in the top 10 IITs in India, IIT Kanpur also excelled in
        placements every year, placing the students in various international
        companies with a good amount of pay.
      </p>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Kanpur MBA Placements 2024 </strong>
      </h3>

      <p style={pStyle}>
        The institute has released summer internship placement 2024 report and
        the highest stipend in MBA stood at INR 1.7 Lakhs per month and the
        average stipend closed at INR 1.07 Lakhs per month. The below table
        represents the statistics of IIT Kanpur MBA Placements 2023:{" "}
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
              <th style={thStyle}>Placements Statistics 2023</th>
            </tr>
            {[
              { label: "Highest Package", value: "INR 24 LPA" },
              { label: "Average Package", value: "INR 18.14 LPA" },
              { label: "Top 50% Average Package", value: "INR 22.20 LPA" },
              { label: "Median Package", value: "INR 17.25 LPA" },
              { label: "Lowest Package", value: "INR 12.41 LPA" },
              { label: "Major Domains", value: "Analytics, IT/Consulting" },
              {
                label: "Profiles Offered",
                value:
                  "Data Scientist, Management Trainee, Programme Manager, Risk Analyst, Strategy Consultant etc.",
              },
              {
                label: "Top Recruiters",
                value:
                  "McKinsey & Company, Wells Fargo, Barclays, Tiger Analytics, PWC etc.",
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

      <p style={pStyle} id="2023">
        IIT Kanpur placement statistics of phase 1 of 2023 and 2024 are given
        below:{" "}
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
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2023) Phase-I</th>
              <th style={thStyle}>Placement Statistics (2024) Phase-I</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                particular: "Highest Package",
                phase2023: "INR 1.90 crore per annum (domestic)",
                phase2024: "N/A",
              },
              {
                particular: "Total Job Offers",
                phase2023: "1,200",
                phase2024: "989",
              },
              {
                particular: "Average Package",
                phase2023: "N/A",
                phase2024: "INR 26.27 LPA",
              },
              {
                particular: "Students Placed",
                phase2023: "1,128",
                phase2024: "913",
              },
              {
                particular: "International Offers",
                phase2023: "74",
                phase2024: "22",
              },
              {
                particular: "PPOs",
                phase2023: "208",
                phase2024: "N/A",
              },
              {
                particular: "Total Recruiters",
                phase2023: "250+",
                phase2024: "N/A",
              },
              {
                particular: "Top Recruiters",
                phase2023: "McKinsey & Company, Barclays, Deloitte",
                phase2024:
                  "Microsoft, Texas Instrument, Deutsche Bank, Navi, Qualcomm",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.particular}</td>
                <td style={tdStyle}>{item.phase2023}</td>
                <td style={tdStyle}>{item.phase2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        The key highlights of IIT Kanpur MBA placement 2024 in comparison to
        2023 are tabulated below:
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
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>MBA Placement Statistics (2023)</th>
              <th style={thStyle}>MBA Placement Statistics (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                particular: "Highest Package",
                mba2023: "INR 24 LPA",
                mba2024: "INR 24 LPA",
              },
              {
                particular: "Average Package",
                mba2023: "INR 18.14 LPA",
                mba2024: "INR 18.20 LPA",
              },
              {
                particular: "Median Package",
                mba2023: "INR 17.25 LPA",
                mba2024: "INR 19.90 LPA",
              },
              {
                particular: "Lowest Package",
                mba2023: "INR 12.41 LPA",
                mba2024: "INR 12.50 LPA",
              },
              {
                particular: "Top 50% Package",
                mba2023: "INR 22.20 LPA",
                mba2024: "INR 20.50 LPA",
              },
              {
                particular: "Total Recruiters",
                mba2023: "N/A",
                mba2024: "21",
              },
              {
                particular: "New Recruiters",
                mba2023: "N/A",
                mba2024: "11",
              },
              {
                particular: "Popular Recruiters",
                mba2023: "Mphasis Ltd., Tiger Analytics, Deloitte",
                mba2024: "Infosys, HDFC Bank, Intellus Direct",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.particular}</td>
                <td style={tdStyle}>{item.mba2023}</td>
                <td style={tdStyle}>{item.mba2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        The table below compares the IIT Kanpur placement statistics 2023 with
        other closely ranked IITs:
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
              <th style={thStyle}>IIT Name</th>
              <th style={thStyle}>Highest Package (2023)</th>
              <th style={thStyle}>Total Offers (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                name: "IIT Kanpur",
                highestPackage: "INR 1.90 crore per annum *",
                totalOffers: "1,200*",
              },
              {
                name: "IIT Bombay",
                highestPackage:
                  "INR 1.68 crore per annum (domestic) \n INR 3.67 crore per annum (international)",
                totalOffers: "1,788",
              },
              {
                name: "IIT Roorkee",
                highestPackage: "INR 27.94 LPA*",
                totalOffers: "N/A",
              },
              {
                name: "IIT Kharagpur",
                highestPackage: "Above INR 2.68 crore per annum*",
                totalOffers: "1,600+*",
              },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.name}</td>
                <td style={tdStyle}>
                  {item.highestPackage.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </td>
                <td style={tdStyle}>{item.totalOffers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        <strong>
          <i>*The placement data is fetched from multiple media reports.</i>
        </strong>
      </p>

      <p style={pStyle}>
        The overall average package details for phase-I placements 2024, which
        are mentioned below:
      </p>

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
            <tr style={{ backgroundColor: "#96b345", color: "white" }}>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2024) Phase-I</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Average package</td>
              <td style={tdStyle}>INR 26.27 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        The institute has released the branch-specific average package for the
        2024 drive. The table below depicts the branch-wise IIT Kanpur average
        package 2024:
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Average Package (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { branch: "MBA", package: "INR 18.20 LPA" },
              { branch: "AE*", package: "INR 20.10 LPA" },
              { branch: "BSBE*", package: "INR 13.80 LPA" },
              { branch: "CE*", package: "INR 16.30 LPA" },
              { branch: "CHE*", package: "INR 18.90 LPA" },
              { branch: "CSE*", package: "INR 52.80 LPA" },
              { branch: "EE*", package: "INR 27.60 LPA" },
              { branch: "ME*", package: "INR 19.70 LPA" },
              { branch: "MSE*", package: "INR 17.30 LPA" },
            ].map((item, index) => (
              <tr key={index}>
                <td style={tdStyle}>{item.branch}</td>
                <td style={tdStyle}>{item.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        <strong>
          <i>
            *The statistics mentioned above are gathered from public sources and
            are for B.Tech only and it may vary.
          </i>
        </strong>
      </p>

      <p style={pStyle}>
        Some of the eminent companies that participated in IIT Kanpur placements
        2024 are listed below:
      </p>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong> Top Recruiters </strong>
      </h3>

      <ul style={ulStyle}>
        <li style={liStyle}>ICICI Bank</li>
        <li style={liStyle}>Texas Instruments</li>
        <li style={liStyle}>NVIDIA</li>
        <li style={liStyle}>HDFC Bank </li>
        <li style={liStyle}>Trident Group</li>
        <li style={liStyle}>HPCL</li>
        <li style={liStyle}>Bajaj Auto</li>
        <li style={liStyle}>LUMIQ</li>
        <li style={liStyle}>Infosys</li>
        <li style={liStyle}>Cognizant</li>
        <li style={liStyle}>Deloitte</li>
        <li style={liStyle}>Tata Steel</li>
      </ul>
    </section>
  );
};

export default Placement;
