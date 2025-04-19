import React from "react";

const Placement = () => {
  const sectionStyle = {
    padding: "20px",

    fontFamily: "Segoe UI",
    lineHeight: "1.6",
    textAlign: "justify",
  };

  const tableStyle = {
    width: "80%",
    borderCollapse: "collapse",
    margin: "20px auto",
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

  return (
    <section id="placement" style={sectionStyle}>
      <h2
        style={{
          color: "rgb(0,0,255)",
          fontSize: "32px",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Placement
      </h2>
      <p style={pStyle}>
        During 2023-24 placements in IIT Indore, 96.86% as the highest
        percentage of B.Tech CSE students were placed with the highest salary of
        Rs 68 lakhs. In the year 2022-23, 89% of B.Tech students were placed as
        per the report of IIT Indore placement cell and the B.Tech. CS
        department stood up to the highest with the 95% students placed. The
        Indian Institute of Technology, Indore has a placement cell that
        provides employment opportunities to the students. The IIT Indore
        placement drive is organized by the placement cell. Various
        organizations take part in the placement drive. As per the Indian
        Institute of Technology Indore NIRF report 2024, 238 UG students were
        placed with an average salary of Rs 2.12 lakhs and 93 PG students were
        placed with the help of IIT Indore placement cell with a median salary
        of Rs 8.00 lakhs. The IIT Indore placement cell also provides training
        to the students so that they can get the best job opportunities during
        the placement drive. Many recruiters provide internship opportunities to
        the students at IIT Indore. Also, IIT Indore placement cell organizes
        training sessions and various skill-improving programmes for the
        students. The top recruiters participated in the IIT Indore placement
        drive programme. Top recruiters of IIT Indore are Google, TESCO, ISRO,
        Amazon, sales force and many more. The details of the IIT Indore
        placement report are given below.
      </p>
      <div>
        <h2>IIT Indore B.Tech Placement Percentage Branch Wise 2023-24</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Placement %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Btech CSE</td>
              <td style={tdStyle}>96.83%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Btech EE</td>
              <td style={tdStyle}>96.83%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Btech ME</td>
              <td style={tdStyle}>88.33%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Btech Civil</td>
              <td style={tdStyle}>71.05%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Btech MEMS</td>
              <td style={tdStyle}>88.89%</td>
            </tr>
          </tbody>
        </table>
        <h2>IIT Indore UG Placement Statistics 2023-24</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Maximum Salary Offered (Domestic)</th>
              <th style={thStyle}>Maximum Salary Offered (International)</th>
              <th style={thStyle}>Minimum Salary Offered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech CSE</td>
              <td style={tdStyle}>Rs 68 lakhs</td>
              <td style={tdStyle}>Rs 46 lakhs</td>
              <td style={tdStyle}>Rs 13.10 lakhs</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech EE</td>
              <td style={tdStyle}>Rs 36.5 lakhs</td>
              <td style={tdStyle}>Rs. 46 Lakhs</td>
              <td style={tdStyle}>Rs 6.00 lakhs </td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech ME</td>
              <td style={tdStyle}>Rs 40 lakhs</td>
              <td style={tdStyle}>Rs.46 Lakhs</td>
              <td style={tdStyle}>Rs 8.35 lakhs </td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil</td>
              <td style={tdStyle}>Rs 36.50 lakhs</td>
              <td style={tdStyle}>Rs. 46 Lakhs</td>
              <td style={tdStyle}>Rs 6.00 lakhs</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech MEMS</td>
              <td style={tdStyle}>Rs 36.50 lakhs</td>
              <td style={tdStyle}>Rs 68 lakhs</td>
              <td style={tdStyle}>Rs 6.00 lakhs</td>
            </tr>
          </tbody>
        </table>

        <h2>IIT Indore Top Recruiters 2023</h2>
        <p style={pStyle}></p>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={tdStyle}>Amazon</td>
              <td style={tdStyle}>Wipro</td>
              <td style={tdStyle}>Microsoft</td>
            </tr>
            <tr>
              <td style={tdStyle}>Samsung </td>
              <td style={tdStyle}>Jio </td>
              <td style={tdStyle}>Flipkart </td>
            </tr>
            <tr>
              <td style={tdStyle}>Flipkart </td>
              <td style={tdStyle}>Optum </td>
              <td style={tdStyle}>Oracle </td>
            </tr>
            <tr>
              <td style={tdStyle}>Walmart </td>
              <td style={tdStyle}>Qualcomm </td>
              <td style={tdStyle}>Samsung </td>
            </tr>
            <tr>
              <td style={tdStyle}>Accenture </td>
              <td style={tdStyle}>Larsen & Toubro </td>
              <td style={tdStyle}>Goldman Sachs</td>
            </tr>
          </tbody>
        </table>
        <h2>Particulars - Placement Statistics (2023)</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placement Statistics (2023)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Highest package</td>
              <td style={tdStyle}>INR 68 LPA (B.Tech), INR 40 LPA (PG)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Average package</td>
              <td style={tdStyle}>
                INR 25.45 LPA (B.Tech), INR 13.01 LPA (PG)
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Placement rate</td>
              <td style={tdStyle}>
                89.76% (B.Tech), 65.38% (M.Tech), 65% (MSc), 63.16% (MS)
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Top recruiters</td>
              <td style={tdStyle}>Amazon, Microsoft, Flipkart, Samsung</td>
            </tr>
          </tbody>
        </table>

        <h2>IIT Indore Placements 2024 Report</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placements Statistics d</th>
              <th style={thStyle}>Placements Statistics 2022</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Number of Recruiters</td>
              <td style={tdStyle}>NA</td>
              <td style={tdStyle}>110</td>
            </tr>
            <tr>
              <td style={tdStyle}>Placement Percentage</td>
              <td style={tdStyle}>90.12%</td>
              <td style={tdStyle}>89.22%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Highest Domestic Package</td>
              <td style={tdStyle}>INR 68 LPA</td>
              <td style={tdStyle}>INR 56 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Average Package</td>
              <td style={tdStyle}>INR 25.45 LPA</td>
              <td style={tdStyle}>INR 23.50 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Average Package(PG - All Branches)</td>
              <td style={tdStyle}>INR 13.01 LPA</td>
              <td style={tdStyle}>INR 14.71 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Median Package</td>
              <td style={tdStyle}>INR 19.10 LPA</td>
              <td style={tdStyle}>INR 21.20 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Top Recruiters</td>
              <td style={tdStyle}>
                Amazon, Goldman Sachs, Salesforce, Flipkart, Zomato
              </td>
              <td style={tdStyle}>
                Microsoft, Zomato, Amazon, Capgemini, Qualcomm
              </td>
            </tr>
          </tbody>
        </table>

        <h2>IIT Indore B.Tech Placements 2024</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>Median Package</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Civil Engineering</td>
              <td style={tdStyle}>71.05%</td>
              <td style={tdStyle}>INR 46 LPA</td>
              <td style={tdStyle}>INR 19.35 LPA</td>
              <td style={tdStyle}>INR 13.10 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Computer Science and Engineering</td>
              <td style={tdStyle}>96.83%</td>
              <td style={tdStyle}>INR 68 LPA</td>
              <td style={tdStyle}>INR 30.89 LPA</td>
              <td style={tdStyle}>INR 28.57 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Electrical Engineering</td>
              <td style={tdStyle}>96.88%</td>
              <td style={tdStyle}>INR 46 LPA</td>
              <td style={tdStyle}>INR 26.04 LPA</td>
              <td style={tdStyle}>INR 21.60 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>Mechanical Engineering</td>
              <td style={tdStyle}>88.33%</td>
              <td style={tdStyle}>INR 45 LPA</td>
              <td style={tdStyle}>INR 22.17 LPA</td>
              <td style={tdStyle}>INR 18.12 LPA</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                Metallurgical Engineering and Materials Science
              </td>
              <td style={tdStyle}>89.29%</td>
              <td style={tdStyle}>INR 38 LPA</td>
              <td style={tdStyle}>INR 18.22 LPA</td>
              <td style={tdStyle}>INR 13.10 LPA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
