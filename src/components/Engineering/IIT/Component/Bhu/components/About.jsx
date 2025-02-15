import React from "react";

const About = () => {
  const sectionStyle = {
    padding: "20px",
    backgroundColor: "#ffffff",
    fontFamily: "Segoe UI",
    lineHeight: "1.6",
    textAlign: "justify",
    overflowX: "hidden",
  };

  const h2Style = {
    color: "rgb(0,0,255)",
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "48px",
  };

  const pStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };
  const ulStyle = {
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
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
  const th3Style = { marginLeft: "5%", fontSize: "24px", fontWeight: "700" };
  const liStyle = { fontSize: "16px", lineHeight: "1.6" };

  return (
    <div style={sectionStyle}>
      <section id="about">
        <h2 style={h2Style}>About IIT Delhi</h2>
        <p style={pStyle}>
          IIT Delhi, popularly known as the Indian Institute of Technology
          Delhi, is one of the most prestigious IIT institutions in India.
          Established in 1961 as an engineering college, IIT Delhi was later
          declared an institution of national importance under the Institutes of
          Technology (Amendment) Act of 1963. It is one of the 23 IITs in the
          country and was founded with the mission to be a center of excellence
          for training, research, and development across various disciplines,
          including engineering, science, technology, and humanities.
        </p>
        <p style={pStyle}>
          In terms of rankings, IIT Delhi has consistently been recognized as
          one of the top institutions in India and the world:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Ranked 2nd by the NIRF 2023 in the Engineering category.
          </li>
          <li style={liStyle}>Ranked 3rd overall by NIRF 2023.</li>
          <li style={liStyle}>
            Ranked 150th by the QS World University Ranking 2025, rising 47
            places from its previous rank of 197.
          </li>
          <li style={liStyle}>
            Ranked 1st by India Today 2023 in both the Engineering (Government)
            category and overall Engineering category.
          </li>
        </ul>
        <p style={pStyle}>
          IIT Delhi accepts various national-level entrance exams for admission,
          including JEE Main, JEE Advanced, GATE, UCEED, IIT JAM, and CAT, among
          others.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          The fee structure at IIT Delhi is composed of various components such
          as tuition fees, hostel fees, library fees, canteen fees, etc. Some
          components are charged only once, while others, like the tuition fee,
          are paid semester-wise or annually. The total cost of fees depends on
          the chosen course. The table below shows the fee breakdown for various
          courses:
        </p>
        <h3 style={th3Style}>Fee Breakdown</h3>
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
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Tuition Fee</th>
                <th style={thStyle}>Hostel Fee</th>
                <th style={thStyle}>One-time Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.Tech",
                  tuition: "INR 8-10L",
                  hostel: "INR 4.58L",
                  oneTime: "INR 16,000",
                },
                {
                  course: "M.Tech",
                  tuition: "INR 3L",
                  hostel: "INR 2.29L",
                  oneTime: "INR 16,000",
                },
                {
                  course: "MA",
                  tuition: "INR 3L",
                  hostel: "INR 2.29L",
                  oneTime: "INR 16,000",
                },
                {
                  course: "B.Des",
                  tuition: "INR 8L",
                  hostel: "INR 4.32L",
                  oneTime: "INR 16,000",
                },
                {
                  course: "M.Des",
                  tuition: "INR 3L",
                  hostel: "INR 2.29L",
                  oneTime: "INR 16,000",
                },
                {
                  course: "MBA",
                  tuition: "INR 11.20L",
                  hostel: "INR 2.29L",
                  oneTime: "INR 16,000",
                },
                {
                  course: "MSc",
                  tuition: "INR 30,000-3L",
                  hostel: "INR 2.29L",
                  oneTime: "INR 16,000",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                  <td style={tdStyle}>{row.hostel}</td>
                  <td style={tdStyle}>{row.oneTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>One-Time Charges (For Every Fresh Allotment)</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Seat Allotment Charges (Non-refundable): INR 7,000
          </li>
          <li style={liStyle}>Security Deposit (Refundable): INR 15,000</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Per-Semester Charges</strong>
        </h3>
        <p style={pStyle}>
          Note: No pro-rata is applicable due to hostel operations being fully
          cooperative in nature.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>
              Hostel Mess Charges (Include food, kitchen consumables, human
              resources, IGL, and associated costs):
            </strong>
          </li>
          <ul style={ulStyle}>
            <li style={liStyle}>Old Hostel (Non-A/C): INR 35,000</li>
            <li style={liStyle}>
              New Hostels (Centralized A/C, only for non-MSc PG students): INR
              35,000
            </li>
          </ul>
          <li style={liStyle}>
            <strong>Additional Charges:</strong>
          </li>
          <ul style={ulStyle}>
            <li style={liStyle}>All students in old hostels: INR 8,600</li>
            <li style={liStyle}>
              All students in new hostels: INR 23,600 (Break-up: INR 8,600 + INR
              15,000)
            </li>
          </ul>
        </ul>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          Admission to IIT Delhi is based on national entrance tests. The
          institute offers a variety of programs at the undergraduate (UG),
          postgraduate (PG), and doctoral levels. Admission to the B.Tech
          program is determined by JEE Advanced scores, followed by JoSAA
          counseling. For B.Des at the UG level, students can apply through
          UCEED.
        </p>
        <p style={pStyle}>
          IIT Delhi also offers M.Tech, MSc, M.Des, and MBA programs. Admission
          to these programs requires qualifying exams like GATE, IIT JAM, UCEED,
          and CAT, respectively. The institute also offers EMBA and MPP programs
          at the PG level, where selection is based on an interview round. For
          Ph.D. programs, IIT Delhi accepts GATE, CSIR, UGC NET, CEED, ICAR, and
          DST INSPIRE fellowship scores.
        </p>

        <h3 style={th3Style}>Eligibility and Selection Criteria</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.Tech</td>
                <td style={tdStyle}>
                  Passed class 10+2 with PCM with a minimum of 75% from a
                  recognized board
                </td>
                <td style={tdStyle}>
                  JEE Main + JEE Advanced + JoSAA Counseling
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>B.Des</td>
                <td style={tdStyle}>
                  Passed class 10+2 with a minimum of 60% marks (40% for
                  reserved categories)
                </td>
                <td style={tdStyle}>UCEED scores + Counseling</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Tech</td>
                <td style={tdStyle}>
                  Minimum of 60% marks or 6.00 CGPA on a 10-point scale (5%
                  relaxation for SC/ST/PWD)
                </td>
                <td style={tdStyle}>
                  GATE score + COAP counseling + Written Test + Interview
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>MS</td>
                <td style={tdStyle}>
                  Minimum of 60% marks or 6.00 CGPA on a 10-point scale (5%
                  relaxation for SC/ST/PWD)
                </td>
                <td style={tdStyle}>GATE</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Sc.</td>
                <td style={tdStyle}>
                  At least 55% marks or 5.5 CGPA (5% relaxation for SC/ST/PH)
                </td>
                <td style={tdStyle}>IIT JAM + JOAPS Counseling</td>
              </tr>
              <tr>
                <td style={tdStyle}>MBA</td>
                <td style={tdStyle}>
                  Bachelor's degree or its equivalent with at least 60% marks
                </td>
                <td style={tdStyle}>
                  CAT scores + Group Discussion + Interview Round
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Des</td>
                <td style={tdStyle}>
                  B.Tech/B.Des/B.Arch or equivalent with at least 60% marks
                </td>
                <td style={tdStyle}>CEED score + Interview</td>
              </tr>
              <tr>
                <td style={tdStyle}>Ph.D.</td>
                <td style={tdStyle}>
                  At least 60% marks or 6.00 CGPA (5% relaxation for SC/ST/PWD)
                  in master's degree or an equivalent
                </td>
                <td style={tdStyle}>
                  GATE/CSIR/UGC NET/ICAR/ICMR/CEED/DST-INSPIRE fellowship +
                  Written Test + Interview
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Application Process</strong>
        </h3>
        <p style={pStyle}>
          The application process for IIT Delhi is as follows:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Fill in the application form on the IIT Delhi official website.
          </li>
          <li style={liStyle}>Pay the application fee.</li>
          <li style={liStyle}>Submit the necessary documents.</li>
          <li style={liStyle}>
            Attend the counseling session (if applicable).
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
