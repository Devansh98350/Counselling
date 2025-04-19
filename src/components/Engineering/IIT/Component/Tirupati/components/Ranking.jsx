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

  return (
    <div style={sectionStyle}>
      <section id="ranking">
        <h2 style={h2Style}>Ranking</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          IIT Tirupati is an autonomous technical university funded by the Indian Government. The institute has been steadily improving its rankings in recent years and is expected to continue this trend in the future.
        </p>

        <h3 style={th3Style}>IIT Tirupati Rankings</h3>
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
                <th style={thStyle}>Ranking Body</th>
                <th style={thStyle}>Latest Rank (2023)</th>
                <th style={thStyle}>Previous Rank (2022)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>NIRF Engineering Ranking</td>
                <td style={tdStyle}>59</td>
                <td style={tdStyle}>56</td>
              </tr>
              <tr>
                <td style={tdStyle}>IIRF Ranking</td>
                <td style={tdStyle}>54</td>
                <td style={tdStyle}>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>IIT Tirupati Rankings (Overall & B.Tech)</h3>
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
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>2024 Ranking</th>
                <th style={thStyle}>2023 Ranking</th>
                <th style={thStyle}>2022 Ranking</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Overall</td>
                <td style={tdStyle}>#101-150 in India, #4th in Andhra Pradesh</td>
                <td style={tdStyle}>-</td>
                <td style={tdStyle}>-</td>
              </tr>
              <tr>
                <td style={tdStyle}>B.Tech</td>
                <td style={tdStyle}>#61 in India, #2nd in Andhra Pradesh</td>
                <td style={tdStyle}>#59 in India, #2nd in Andhra Pradesh</td>
                <td style={tdStyle}>#56 in India, #2nd in Andhra Pradesh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <h3 style={th3Style}>Financial Aid for B.Tech Students</h3>
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
                <th style={thStyle}>Type of Scholarship</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Merit-cum-Means Scholarship</td>
                <td style={tdStyle}>Family income less than INR 4.5 Lakhs</td>
                <td style={tdStyle}>Full tuition fee waiver</td>
              </tr>
              <tr>
                <td style={tdStyle}>SC/ST Scholarship</td>
                <td style={tdStyle}>SC/ST category students</td>
                <td style={tdStyle}>
                  - Mess charge discount up to INR 8,000 per semester <br />
                  - Free lodging <br />
                  - INR 250 per month pocket allowance
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Financial Aid for Ph.D. Scholars</h3>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Full-time Ph.D. scholars are eligible for the Half-Time Teaching/Research Assistantship (HTRA). Scholars must work for 8 hours per week, and the renewal of the assistantship is based on research performance. Students can also apply for scholarships like UGC/CSIR-JRF, AICTE, and ICMR. The fellowship amount is decided as per the norms of the funding institution.
        </p>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Established on 5 August 2015, IIT Tirupati is located in Yerpedu, near Renigunta and Srikalahasti. The permanent campus is under construction, while the transit campus (50 acres) includes hostels, classrooms, a library, labs, sports facilities, a gym, and a cafeteria.
        </p>
        <h3 style={th3Style}>Facilities</h3>
        <ul>
          <li style={liStyle}>
            <strong>Hostels:</strong> Separate hostels for boys & girls with TV, washing machines, Wi-Fi, and recreational facilities
          </li>
          <li style={liStyle}>
            <strong>Library:</strong> Equipped with books, journals, e-resources; uses KOHA & OPAC software
          </li>
          <li style={liStyle}>
            <strong>Sports:</strong> Indoor & outdoor sports like football, cricket, basketball, badminton, chess, and table tennis
          </li>
          <li style={liStyle}>
            <strong>IT Infrastructure:</strong> High-speed Wi-Fi, computer labs with the latest software like AutoCAD, MATLAB, and COMSOL
          </li>
          <li style={liStyle}>
            <strong>Medical:</strong> First aid available; tie-up with Sri Venkateswara Institute of Medical Sciences (SVIMS)
          </li>
          <li style={liStyle}>
            <strong>Cafeteria:</strong> 24/7 facility with hygienic food
          </li>
          <li style={liStyle}>
            <strong>Gym:</strong> Well-equipped gym for students
          </li>
          <li style={liStyle}>
            <strong>Classrooms:</strong> Smart classrooms with projectors, Wi-Fi, and audio-video systems
          </li>
          <li style={liStyle}>
            <strong>Auditorium:</strong> Spacious hall with modern equipment
          </li>
          <li style={liStyle}>
            <strong>Laboratories:</strong> Well-equipped labs for practical experiments and research
          </li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network</h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          IIT Tirupati has a growing alumni network with graduates working in various reputed organizations. Below is a snapshot of the alumni distribution:
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
                <th style={thStyle}>Name of Organization</th>
                <th style={thStyle}>Number of Alumni</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>IIT Tirupati</td>
                <td style={tdStyle}>111</td>
              </tr>
              <tr>
                <td style={tdStyle}>ICICI Bank</td>
                <td style={tdStyle}>25</td>
              </tr>
              <tr>
                <td style={tdStyle}>Digital Wizards</td>
                <td style={tdStyle}>15</td>
              </tr>
              <tr>
                <td style={tdStyle}>Career Development Center - IIT Tirupati</td>
                <td style={tdStyle}>13</td>
              </tr>
              <tr>
                <td style={tdStyle}>Deloitte</td>
                <td style={tdStyle}>12</td>
              </tr>
              <tr>
                <td style={tdStyle}>Amazon</td>
                <td style={tdStyle}>12</td>
              </tr>
              <tr>
                <td style={tdStyle}>E-cell, IIT Tirupati</td>
                <td style={tdStyle}>12</td>
              </tr>
              <tr>
                <td style={tdStyle}>MathWorks</td>
                <td style={tdStyle}>10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Ranking;