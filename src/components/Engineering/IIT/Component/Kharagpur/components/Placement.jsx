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

  const ulStyle = {
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
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

  return (
    <section id="placement" style={sectionStyle}>
      <h2 style={h2Style}>Placement</h2>
      <p style={pStyle}>
        IIT Kharagpur Placements 2024 Phase 2 was held from the first week of January
        till the end of April 2024.  As per the IIT Kharagpur final placement report 2024,
        118 students were placed with an average salary package of Rs 20.83 lakhs. IIT
        Kharagpur highest salary package for MBA students stood at Rs 37.07 lakhs and
        the median salary package is Rs 20.65 lakhs. <br />
        The second phase of placements 2024 has started from the first week of Jan and
        will continue till April 2024. According to media reports, a total of 700 placement
        offers were made on the first day of placements 2023-24. Further, more than 19
        international offers were received by students. Importantly, 6 offers with a
        package of more than INR 1 crore per annum were offered during IIT
        Kharagpur placements 2024. Over 61 companies offered various job roles to
        students, mainly in Finance, Banking, Analytics, Software, Core Engineering and
        Consulting sectors. <br />
        Earlier, as per the official placement brochure 2023-24, 1,821 students were
        placed during the 2023 drive. BOSCH, Airbus, Accenture, Oracle, and many
        other renowned companies participated in IIT Kharagpur placements 2023.
      </p>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Kharagpur Placement Procedure</strong>
      </h3>
      <ul style={ulStyle}>
        <li style={liStyle}>The college invites the recruiter for the IIT Kharagpur placement drive.</li>
        <li style={liStyle}>The companies who want to participate in the recruiting at IIT Kharagpur must
          register with the institute.</li>
        <li style={liStyle}>Filling out job notifications by recruiter-like profile and preferred skill set.</li>
        <li style={liStyle}>Finalization of JNF and shortlisting of students.</li>
        <li style={liStyle}>The candidates will be invited for the test and interview process on campus.</li>
        <li style={liStyle}> Selected candidates will receive the offer letters.</li>
      </ul>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }} id="2024">
        <strong>Highlights of Placements 2024: </strong>
      </h3>

      <p style={pStyle}>The key highlights of IIT Kharagpur placements 2024 are presented below:
        The table below shows the placement highlights of IIT Kharagpur during 2024
        placements (Phase 2):</p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>IIT Kharagpur Placement 2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of Job Offers", "700"],
              ["International Offers", "19"],
              ["Students receiving CTC of more than INR 1 Crore Per Annum", "06"],
              ["Companies Participated", "61+"],
              ["Top Recruiters", "Apple, Airbus, EXL Services, Microsoft, Rubrik, Square Point"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}><b>NOTE</b>: The mentioned data is sourced from media reports. <br />
        The key highlights related to IIT Kharagpur placements 2023 and 2022 are
        tabulated below:
      </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022)</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["No. of students placed", "1,750", "1,821"],
              ["Highest package", "INR 2.40 crore per annum", "N/A"],
              ["Popular recruiters", "ITC Limited, Goldman Sachs, HUL", "Amazon, Barclays, KPMG"],
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

      <br />


      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2022-23) Phase 1</th>
              <th style={thStyle}>Placement Statistics (2021-22)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Number of Recruiters", "300", "245+"],
              ["Number of Offers", "1600", "1600"],
              ["Number of Internship Offers", "900", "—"],
              ["Number of PPOs", "500", "400+"],
              ["Number of International", "45", "35"],
              ["Number of Offers Above INR 50 LPA", "48"],
              ["Highest Package", "INR 2.6 CPA", "INR 2.4 CPA"],
              ["Top Recruiters", "Microsoft, Google, EXL Services", "Google, Microsoft, Honeywell"],
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

      <p style={pStyle} id="2023">Along with the above details, some of the media sources have also disclosed the
        2023 placement statistics, which are mentioned below: </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Offers made", "1600+"],
              ["International offers", "45"],
              ["Recruiters participated (on day one) ", "34"],
              ["Highest Package", "Above INR 2.68 crore per annum"],
              ["Total companies ", "300"],
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

      <p style={pStyle}><b>Note: </b>The mentioned details are collated from multiple media reports, hence,
        actual data might vary.</p>

      <h3 style={th3Style}>IIT Kharagpur Placements Branch-Wise 2023-2024</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Branches</th>
              <th style={thStyle}>No. of students placed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["B Tech", "616"],
              ["M.Tech", "765"],
              ["MCP", "49"],
              ["LLB/LLM", "32"],
              ["Dual Degree", "655"],
              ["BArch", "34"],
              ["MSc", "143"],
              ["Integrated MSc", "196"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Kharagpur UG Placements 2022-2023 (NIRF 2024) Overall</h3>
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
              ["No. of UG (3 years Programme) students placed", "19"],
              ["No. of UG (4 years Programme) students placed", "460"],
              ["No. of UG (5 years Programme) students placed", "663"],
              ["Median salary offered for UG (3 years Programme) students", "Rs 18,23,061"],
              ["Median salary offered for UG (4 years Programme) students", "Rs 24,00,000"],
              ["Median salary offered for UG (5 years Programme) students", "Rs 21,28,000"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Kharagpur PG Placements 2022-2023</h3>
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
              ["No. of PG (2 years Programme) students placed", "688"],
              ["No. of PG (3 years Programme) students placed", "22"],
              ["Median salary offered for PG (2 years Programme) students", "Rs 12,50,000"],
              ["Median salary offered for PG (3 years Programme) students", "Rs 18,00,000"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Kharagpur Placements 2023: UG</strong>
      </h3>
      <p style={pStyle}>The following table shows the details of the placement statistics for the year
        2021-2022 s per the overall NIRF 2023.</p>

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
              ["No. of students graduating in minimum stipulated time", "450"],
              ["No. of students placed", "422"],
              ["Median salary offered", "Rs 18.75 Lakhs"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>IIT Kharagpur Placements 2023 - PG (NIRF 2023)</h3>
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
              ["No. of PG (2 years programme) students placed", "396"],
              ["No. of PG Integrated students placed", "722"],
              ["Median salary for PG (2 years programme) students", "Rs 13.50 Lakhs"],
              ["Median salary for PG Integrated students", "Rs 17.0 Lakhs"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={th3Style}>Placements Top Recruiters of IIT Kharagpur</h3>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Company</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["MuSigma", "Ford"],
              ["ACT Fibernet", "Larsen & Toubro"],
              ["HCL", "Wipro"],
              ["ICICI Bank", "Berger Paints"],
              ["Flipkart", "Amazon"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}><b>Note: </b>The top recruiters will visit the IIT Kharagpur placement drive programme.</p>

      <h3 style={th3Style}>Top IITs Placements</h3>
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
              ["IIT Delhi", "Rs 20 LPA", "-"],
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

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Kharagpur Placement Comparison 2024: with other IITs</strong>
      </h3>
      <p style={pStyle}>The table below compares the 2023 placement statistics of IIT Kharagpur with
        other IITs: </p>

      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>IIT Name</th>
              <th style={thStyle}>No. of Offers (2023)</th>
              <th style={thStyle}>Highest Package (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["IIT Kharagpur", "1,821 (no. of students placed)", "INR 2.68 crore per annum*"],
              ["IIT Bombay", "1,788", "INR 3.67 crore per annum*"],
              ["IIT Kanpur", "1,200*", "INR 1.90 crore per annum*"],
              ["IIT Roorkee", "802", "INR 1.30 crore per annum (domestic)"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
                <td style={tdStyle}>{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={pStyle}><i>*The placement details are gathered from multiple media sources.</i></p>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Kharagpur Average Package 2024</strong>
      </h3>
      <p style={pStyle}>According to the NIRF report 2024, the median package 2023 offered to B.Tech
        and M.Tech students was INR 24 LPA and INR 12.50 LPA, respectively. For the
        IIT Kharagpur MBA, the median package 2023 stood at INR 24.50 LPA. The
        institute has released the median package 2023 for Engineering, Architecture,
        Management, and Law courses in the NIRF report 2024, which are tabulated
        below: </p>
      <h3 style={th3Style}>IIT Kharagpur Average Package 2024</h3>
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
              ["B.Arch.", "INR 16 LPA"],
              ["B.Tech", "INR 24 LPA"],
              ["LLB", "INR 18.23 LPA"],
              ["LLM", "INR 8 LPA"],
              ["M.Arch", "INR 7.70 LPA"],
              ["MBA", "INR 24.50 LPA"],
              ["M.Tech", "INR 12.50 LPA"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The median package for B.Tech courses has improved year-on-year from 2021
        to 2023. Likewise, the median package for BArch and LLB indicates an improving
        trend over the past three years  <br />
        Meanwhile, the above salary trends are depicted in the table below: </p>

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
              ["BArch", "INR 9 LPA", "INR 12.62 LPA", "INR 16 LPA"],
              ["BTech", "INR 15 LPA", "INR 18.75 LPA", "INR 24 LPA"],
              ["LLB", "INR 7 LPA", "INR 9 LPA", "INR 18.23 LPA"],
              ["LLM", "INR 6 LPA", "INR 12 LPA", "INR 8 LPA"],
              ["M.Arch", "INR 5 LPA", "INR 5.06 LPA", "INR 7.70 LPA"],
              ["MBA", "INR 19.20 LPA", "INR 18.08 LPA", "INR 24.50 LPA"],
              ["M.Tech", "INR 11.35 LPA", "INR 13.50 LPA", "INR 12.50 LPA"],
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

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>IIT Kharagpur Placements 2023: Top Recruiters</strong>
      </h3>

      <p style={pStyle}>Some of the leading companies that participated in IIT Kharagpur placements
        2023 are listed below: The table below compiles the participating recruiters in IIT Kharagpur placements 2024:</p>
      <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Company</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["BCG", "Honeywell"],
              ["American Express", "Zomato"],
              ["Microsoft", "IBM"],
              ["Goldman Sachs", "TATA AIG Insurance"],
              ["Flipkart", "citi bank"],
              ["Morgan Stanley", "HSBC"],
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row[0]}</td>
                <td style={tdStyle}>{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
