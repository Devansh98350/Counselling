import React from "react";

const Ranking = () => {
  const sectionStyle = {
    padding: "20px",
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
    fontSize: "1.2rem",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  return (
    <div style={sectionStyle}>
      <section id="ranking">
        <h2 style={h2Style}>Ranking</h2>
        <p style={pStyle}>
          As of 2025, IIT Goa has not been featured in prominent national or international rankings. The National Institutional Ranking Framework (NIRF) 2024 does not list IIT Goa among its ranked institutions. Similarly, IIT Goa does not appear in the QS World University Rankings 2025.
        </p>
        <p style={pStyle}>
          It is important to note that newer institutions like IIT Goa may take time to establish themselves in such rankings. Factors such as academic performance, research output, and participation in ranking surveys influence these standings. As IIT Goa continues to grow and develop its programs, it may gain recognition in future assessments.
        </p>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Goa offers scholarships to support meritorious and needy students, encouraging them to enroll in the institute's top programs. Below are the details of the scholarships:
        </p>
        <h3 style={th3Style}>Merit cum Means Scholarship</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Awarded to a maximum of 25% of students admitted to the B.Tech program.
          </li>
          <li style={liStyle}>
            Based on family income and candidates' scores in entrance exams and 12th standard.
          </li>
          <li style={liStyle}>
            Benefits include full tuition fee exemption and a pocket allowance of INR 1000 per month.
          </li>
          <li style={liStyle}>
            SC/ST students receive free messing benefits under this scholarship.
          </li>
        </ul>
        <h3 style={th3Style}>Central Sector Scholarship Scheme for Top Class Education for SC Students</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            A total of 12 scholarships are awarded to Engineering and Technology students and 10 to Management students.
          </li>
          <li style={liStyle}>
            Annual family income should not exceed INR 4.5 lakhs.
          </li>
          <li style={liStyle}>
            Required documents include caste certificate, proof of admission, hostel fee receipt, and income proof.
          </li>
        </ul>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus</h2>
        <p style={pStyle}>
          IIT Goa provides a range of facilities for undergraduate and postgraduate students. The campus includes a library, classrooms, hostels, and cafeterias. Below are the key facilities available:
        </p>
        <h3 style={th3Style}>Infrastructure and Facilities</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Conference and seminar halls</li>
          <li style={liStyle}>Air-conditioned classrooms</li>
          <li style={liStyle}>Library with full-time internet connectivity</li>
          <li style={liStyle}>Hostel facilities for boys and girls</li>
        </ul>
        <h3 style={th3Style}>Sports Complex</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Badminton Court</li>
          <li style={liStyle}>Basketball Court</li>
          <li style={liStyle}>Cricket Ground</li>
          <li style={liStyle}>Football Ground</li>
          <li style={liStyle}>Table Tennis</li>
        </ul>
        <h3 style={th3Style}>Laboratories</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Chemistry Lab</li>
          <li style={liStyle}>Computer Lab</li>
          <li style={liStyle}>Electrical Lab</li>
          <li style={liStyle}>Electronics Lab</li>
          <li style={liStyle}>Mechanical Lab</li>
        </ul>
        <h3 style={th3Style}>Other Facilities</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Cafeteria</li>
          <li style={liStyle}>Hospital / Medical Facilities</li>
          <li style={liStyle}>Wi-Fi Campus</li>
          <li style={liStyle}>Guest House</li>
          <li style={liStyle}>Seminar Hall</li>
          <li style={liStyle}>Cultural, Technical, and Non-Academic Activities</li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Notable Alumni</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Year</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Achievement</th>
              <th style={thStyle}>Event/Organization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>Mr. Chinraj S</td>
              <td style={tdStyle}>Best Poster Award</td>
              <td style={tdStyle}>33rd CRSI National Symposium on Chemistry</td>
            </tr>
            <tr>
              <td style={tdStyle}>2023</td>
              <td style={tdStyle}>Dr. Sreenath Balakrishnan & Team</td>
              <td style={tdStyle}>Best Student Paper Award</td>
              <td style={tdStyle}>International Robotics Conference, NYU Abu Dhabi</td>
            </tr>
            <tr>
              <td style={tdStyle}>2023</td>
              <td style={tdStyle}>Prof. B.K. Mishra</td>
              <td style={tdStyle}>Ranked 11th worldwide in Mining & Metallurgy</td>
              <td style={tdStyle}>Stanford University Rankings</td>
            </tr>
            <tr>
              <td style={tdStyle}>2023</td>
              <td style={tdStyle}>Dr. Bidhan Pramanic & PhD Student</td>
              <td style={tdStyle}>Best Poster Award</td>
              <td style={tdStyle}>International Nanoscience Conference</td>
            </tr>
            <tr>
              <td style={tdStyle}>2022</td>
              <td style={tdStyle}>Prof. Bidyadhar Subudhi</td>
              <td style={tdStyle}>Elected as Fellow</td>
              <td style={tdStyle}>Asia Pacific Artificial Intelligence Association</td>
            </tr>
            <tr>
              <td style={tdStyle}>2022</td>
              <td style={tdStyle}>Dr. Sharad Sinha</td>
              <td style={tdStyle}>ACM/IEEE William J. McCalla ICCAD Best Paper Award</td>
              <td style={tdStyle}>ACM/IEEE ICCAD Conference</td>
            </tr>
            <tr>
              <td style={tdStyle}>2021</td>
              <td style={tdStyle}>Himanshu Marwah & Team</td>
              <td style={tdStyle}>1st Place - Student Mechanical Design Competition</td>
              <td style={tdStyle}>iNaCoMM</td>
            </tr>
            <tr>
              <td style={tdStyle}>2021</td>
              <td style={tdStyle}>Kranthi Panuganti</td>
              <td style={tdStyle}>Awarded PMRF Fellowship</td>
              <td style={tdStyle}>Prime Minister’s Research Fellowship</td>
            </tr>
            <tr>
              <td style={tdStyle}>2021</td>
              <td style={tdStyle}>Prachi Kashikar & Pavitra Bhade</td>
              <td style={tdStyle}>GHC Student Scholarship</td>
              <td style={tdStyle}>Grace Hopper Celebration</td>
            </tr>
            <tr>
              <td style={tdStyle}>2020</td>
              <td style={tdStyle}>Prof. B.K. Mishra</td>
              <td style={tdStyle}>Eminent Engineer Award</td>
              <td style={tdStyle}>Institution of Engineers (India)</td>
            </tr>
            <tr>
              <td style={tdStyle}>2020</td>
              <td style={tdStyle}>Dr. Sharad Sinha</td>
              <td style={tdStyle}>Appointed Editor-in-Chief</td>
              <td style={tdStyle}>IEEE Potentials Magazine</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Ranking;