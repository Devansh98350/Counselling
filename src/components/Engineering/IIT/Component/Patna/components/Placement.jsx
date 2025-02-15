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
        The average package offered during IIT Patna placements 2024 for BTech,
        M.Tech and MSc programs stood around INR 17 LPA, INR 15 LPA and INR 7
        LPA, respectively. Further, the placement rate recorded during BTech and
        M.Tech placements 2024 stood at 77.92% and 61.01%, respectively. It is
        to note that placements drive 2024 was ongoing at the time the placement
        rate was derived, hence it may vary after the final placements 2024
        process gets completed. Earlier, the highest package offered during IIT
        Patna placements 2023 stood at INR 82.05 LPA.
      </p>
      <p style={pStyle}>
        <strong>IIT Patna Placement Procedure</strong>
      </p>
      <ul style={ulStyle}>
        <li style={liStyle}>
          The Placement Office or Placement Cell of IIT Patna contacts companies
          and extends invitations with pertinent information.
        </li>
        <li style={liStyle}>
          After submitting the completed Job Announcement Forms (JAF) via email
          or fax, companies receive a unique login ID for the website. The JAFs
          are made available online, making it easier for students to sign up
          for the company.
        </li>
        <li style={liStyle}>
          The Placement Cell and the company finalize the date for pre-placement
          talks if necessary. Registered students submit their resumes for
          shortlisting.
        </li>
        <li style={liStyle}>
          A detailed schedule is prepared by the IIT Patna Placement Cell,
          evaluating job offers, prospects, and student intake, which is
          confirmed with all companies.
        </li>
        <li style={liStyle}>
          Companies visit the IIT Patna campus, meet registered or shortlisted
          students, and conduct interviews, tests, or group discussions as per
          their recruitment process.
        </li>
        <li style={liStyle}>
          The agreed-upon interview and recruitment schedule must be followed on
          the designated date.
        </li>
        <li style={liStyle}>
          Companies must prepare and submit the list of selected students with a
          written confirmation letter on the interview day.
        </li>
        <li style={liStyle}>
          The IIT Patna Placement Cell must receive employment offers promptly.
          Students receiving a job offer are not allowed to participate in
          further interviews or exams.
        </li>
      </ul>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics 2023</th>
            </tr>
          </thead>
          <tbody>
            {[
              { particulars: "No. of Students Registered", stats: "295" },
              { particulars: "No. of Students Placed", stats: "245" },
              { particulars: "No. of PPOs", stats: "72" },
              { particulars: "No. of Offers", stats: "413" },
              {
                particulars: "Highest Domestic Package",
                stats: "INR 82.05 LPA",
              },
              { particulars: "Average Salary", stats: "INR 23.90 LPA" },
              { particulars: "Median Package", stats: "INR 20 LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particulars}</td>
                <td style={tdStyle}>{row.stats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        During IIT Patna Placements 2023, the highest salary of INR 82.05 LPA
        was offered. The average salary stood at INR 23.90 LPA.
      </p>
      <p style={pStyle}>
        <strong>
          IIT Patna B.Tech Branch Wise Placement Statistics 2023-24
        </strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Maximum Salary Offered</th>
              <th style={thStyle}>Minimum Salary Offered</th>
              <th style={thStyle}>Average Salary Offered</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech ME",
                max: "Rs 18.8 lakhs",
                min: "Rs 3.00 lakhs",
                avg: "Rs 7.51 lakhs",
              },
              {
                course: "B.Tech EE",
                max: "Rs 18.00 lakhs",
                min: "Rs 4.5 lakhs",
                avg: "Rs 7.6 lakhs",
              },
              {
                course: "B.Tech CE",
                max: "Rs 19.00 lakhs",
                min: "Rs 4.5 lakhs",
                avg: "Rs 7.56 lakhs",
              },
              {
                course: "B.Tech ECE",
                max: "Rs 44.92 lakhs",
                min: "Rs 4.00 lakhs",
                avg: "Rs 11.42 lakhs",
              },
              {
                course: "B.Tech CSE",
                max: "Rs 34 lakhs",
                min: "Rs 4.00 lakhs",
                avg: "Rs 11.3 lakhs",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.max}</td>
                <td style={tdStyle}>{row.min}</td>
                <td style={tdStyle}>{row.avg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        <strong>IIT Patna B.Tech Placement Percentage 2023-24</strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Offers Accepted</th>
              <th style={thStyle}>Placement Percentage</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech ME", offers: "75", percentage: "81.52%" },
              { course: "B.Tech EE", offers: "61", percentage: "64.89%" },
              { course: "B.Tech CE", offers: "48", percentage: "46.60%" },
              { course: "B.Tech ECE", offers: "82", percentage: "53.24%" },
              { course: "B.Tech CSE", offers: "138", percentage: "65.09%" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.offers}</td>
                <td style={tdStyle}>{row.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        * the above data is taken from the official source of IIT Patna.
      </p>
      <p style={pStyle}>
        <strong>IIT Patna Placement Statistics NIRF 2023 - Overall</strong>
      </p>
      <p style={pStyle}>
        The below table shows the number of students placed by the IIT Patna
        placement cell and a comparison of placements year by year is provided
        below.
      </p>
      <p style={pStyle}>
        <strong>IIT Patna UG Placements 2023 (NIRF 2023)</strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              { particular: "Number of students in a batch", statistic: "250" },
              { particular: "Number of students graduating", statistic: "244" },
              { particular: "Number of students placed", statistic: "202" },
              {
                particular: "Median salary package offered",
                statistic: "Rs. 20,00,000",
              },
              {
                particular: "Number of students selected for higher studies",
                statistic: "41",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particular}</td>
                <td style={tdStyle}>{row.statistic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>
        <strong>IIT Patna PG Placements (NIRF 2023)</strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              { particular: "Number of students in a batch", statistic: "196" },
              { particular: "Number of students graduating", statistic: "163" },
              { particular: "Number of students placed", statistic: "96" },
              {
                particular: "Median salary package offered",
                statistic: "Rs. 12,00,000",
              },
              {
                particular: "Number of students selected for higher studies",
                statistic: "39",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particular}</td>
                <td style={tdStyle}>{row.statistic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p id="2023" style={pStyle}>
        <strong>IIT Patna B.Tech Placements 2023</strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Branch Name</th>
              <th style={thStyle}>Total Students Placed</th>
              <th style={thStyle}>Total Offers</th>
              <th style={thStyle}>Placement %</th>
              <th style={thStyle}>Offer %</th>
              <th style={thStyle}>Average Salary (LPA)</th>
              <th style={thStyle}>Median CTC (LPA)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                branch: "CCSE",
                studentsPlaced: "66",
                offers: "167",
                placement: "100%",
                offerPercentage: "162.12%",
                avgSalary: "38.79",
                medianCTC: "40",
              },
              {
                branch: "EE",
                studentsPlaced: "55",
                offers: "79",
                placement: "100%",
                offerPercentage: "143.64%",
                avgSalary: "33.04",
                medianCTC: "25.56",
              },
              {
                branch: "ME",
                studentsPlaced: "50",
                offers: "70",
                placement: "100%",
                offerPercentage: "140%",
                avgSalary: "18.22",
                medianCTC: "14.33",
              },
              {
                branch: "CE",
                studentsPlaced: "17",
                offers: "28",
                placement: "77.27%",
                offerPercentage: "17.27%",
                avgSalary: "17.02",
                medianCTC: "14",
              },
              {
                branch: "Chemical Engineering",
                studentsPlaced: "14",
                offers: "16",
                placement: "82.35%",
                offerPercentage: "94.12%",
                avgSalary: "12.91",
                medianCTC: "11",
              },
              {
                branch: "Total",
                studentsPlaced: "202",
                offers: "300",
                placement: "96.19%",
                offerPercentage: "142.86%",
                avgSalary: "28.86",
                medianCTC: "20",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.branch}</td>
                <td style={tdStyle}>{row.studentsPlaced}</td>
                <td style={tdStyle}>{row.offers}</td>
                <td style={tdStyle}>{row.placement}</td>
                <td style={tdStyle}>{row.offerPercentage}</td>
                <td style={tdStyle}>{row.avgSalary}</td>
                <td style={tdStyle}>{row.medianCTC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        <strong>IIT Patna Placements Comparison Data</strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Batch 2021</th>
              <th style={thStyle}>Batch 2023</th>
              <th style={thStyle}>% Growth</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                particulars: "Average Salary (B.Tech)",
                batch2021: "₹17.13 Lakh",
                batch2023: "₹28.59 Lakh",
                growth: "68.47%",
              },
              {
                particulars: "Average Salary (M.Tech)",
                batch2021: "₹12.22 Lakh",
                batch2023: "₹14.99 Lakh",
                growth: "22.66%",
              },
              {
                particulars: "Total Job Offers",
                batch2021: "239",
                batch2023: "412",
                growth: "72.38%",
              },
              {
                particulars: "Total Placed Students",
                batch2021: "239",
                batch2023: "286",
                growth: "48.18%",
              },
              {
                particulars: "No. of Companies Participated",
                batch2021: "125",
                batch2023: "154",
                growth: "23.20%",
              },
              {
                particulars: "No. of PPOs",
                batch2021: "25",
                batch2023: "50",
                growth: "100%",
              },
              {
                particulars: "% Placement (B.Tech)",
                batch2021: "93.33%",
                batch2023: "96.19%",
                growth: "3.06%",
              },
              {
                particulars: "% Placement (M.Tech)",
                batch2021: "82.85%",
                batch2023: "86.8%",
                growth: "4.41%",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particulars}</td>
                <td style={tdStyle}>{row.batch2021}</td>
                <td style={tdStyle}>{row.batch2023}</td>
                <td style={tdStyle}>{row.growth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle} id="2024">
        IIT Patna Average Package 2024
      </p>
      <p style={pStyle}>
        The course-wise average package offered during IT Patna placements 2024
        is presented below:
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Average Package (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech", package: "INR 17 LPA" },
              { course: "M.Tech", package: "INR 15 LPA" },
              { course: "M.Sc", package: "INR 7 LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        * The average package might vary slightly as the data labels were not
        present on the graphs of the placement brochure 2024-25.
      </p>
      <p style={pStyle}>
        The course-wise average salary trends witnessed during IIT Patna
        placements over the past three years is presented below:
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Average Package (2022)</th>
              <th style={thStyle}>Average Package (2023)</th>
              <th style={thStyle}>Average Package (2024)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech",
                package2022: "INR 28.86 LPA",
                package2023: "INR 24.9 LPA",
                package2024: "INR 17 LPA",
              },
              {
                course: "M.Tech",
                package2022: "INR 14.99 LPA",
                package2023: "INR 16 LPA",
                package2024: "INR 15 LPA",
              },
              {
                course: "M.Sc",
                package2022: "INR 6.86 LPA",
                package2023: "INR 9 LPA",
                package2024: "INR 7 LPA",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.package2022}</td>
                <td style={tdStyle}>{row.package2023}</td>
                <td style={tdStyle}>{row.package2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
        <strong>Top Recruiters</strong>
      </h3>
      <ul>
        {[
          "Google",
          "Oracle",
          "Amazon",
          "Optum",
          "TVS",
          "Bosch",
          "Paytm",
          "Mercedes Benz",
          "Texas Instruments",
          "Intel",
          "Bharat Electronics",
          "Bharat Petroleum",
        ].map((recruiter, index) => (
          <li key={index} style={liStyle}>
            {recruiter}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Placement;
