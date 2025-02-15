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
        <h2 style={h2Style}>About IIT Patna</h2>
        <p style={pStyle}>
          Indian Institute of Technology Patna, or IIT Patna, is one of the 8
          new IITs set up by the Ministry of Human Resource Development,
          Government of India, in 2008. Like its peer IITs, IIT Patna is an
          Institute of National Importance (INL). IIT Patna is approved by UGC
          and AICTE. It is among the second-generation IIT's, founded by an Act
          of the Indian Parliament on August 6, 2008. IIT Patna is one of the
          leading engineering and premier institution, excels in engineering and
          technology education in India.
        </p>
        <p style={pStyle}>
          Indian Institute of Technology Patna is an esteemed Engineering
          institute in the country. IIT Patna has secured ranks from various
          national and international bodies. The institute has been ranked 41st
          in the Engineering category and 66th in the Overall category by NIRF
          2023. Additionally, the institute is INDIAN INSTITUTE OF TECHNOLOGY
          PATNA ranked by several international ranking bodies. IIT Patna has
          been ranked 106th in the Southern Asia University category and 401-450
          in the Asia category by the QS World Rankings 2024.
        </p>

        <p style={pStyle}>
          IIT Patna offers Undergraduate, Postgraduate, and PhD courses across
          ten departments and various streams. The departments are Computer
          Science and Engineering, Electrical Engineering, Mechanical
          Engineering, Chemical and Biochemical Engineering, Civil and
          Environmental Engineering, Materials Science and Engineering,
          Chemistry, Physics, Mathematics and Humanities, and Social Science.
        </p>

        <p style={pStyle}>
          IIT Patna offers a variety of BS, B.Tech, M.Tech, M.Sc, and Ph.D.
          programs in eleven departments and streams. IIT Patna's popular
          programmes are B.Tech and M.Tech with various specialisations are
          offered for 2024 admissions. IIT Patna admissions 2024 are through
          online registrations. Candidates can fill the application form before
          the last date of application. Admissions to B.Tech in IIT Patna are
          based on JEE Advanced score and JoSAA counselling. IIT Patna M.Tech
          admissions are based on GATE scores and COAP rounds. For PhD
          admissions should have the required academic records for direct
          admission in IIT Patna.
        </p>
        <p style={pStyle}>
          Indian Institute of Technology Patna course admission is based on
          entrance exams, such as JEE Main, JEE Advanced, IIT JAM, GATE, etc.
          During IIT Patna placements, the average package stood at INR 22.23
          LPA. The institute is spread over an area of 501 acres; the IIT Patna
          campus is well-equipped with basic amenities for its students. In
          collaboration with the Bombay Stock Exchange, IIT Patna offers a
          one-year PG certificate in Data Analytics and Business Intelligence.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          IIT Patna offers BS, BTech, M.Tech, MSc, and PhD courses across ten
          departments and various streams. The departments are Computer Science
          and Engineering, Electrical Engineering, Mechanical Engineering,
          Chemical and Biochemical Engineering, Civil and Environmental
          Engineering, Materials Science and Engineering, Chemistry, Physics,
          Mathematics and Humanities, and Social Science. Tabulated below are
          few programmes along with their Fees and eligibility:
        </p>
        <p style={pStyle}>
          Here are few table related to IIT Patna like number of course in
          different streams, eligibility criteria, exam accepted for their
          particular course are given below:
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
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>No. of Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stream: "B.E./B.Tech", courses: 33 },
                { stream: "B.Sc.", courses: 3 },
                { stream: "M.E./M.Tech", courses: 26 },
                { stream: "BBA", courses: 1 },
                { stream: "MBA/PGDM", courses: 13 },
                { stream: "M.Sc.", courses: 4 },
                { stream: "DMLT", courses: 1 },
                { stream: "Executive MBA/PGDM", courses: 1 },
                { stream: "Certificate", courses: 31 },
                { stream: "PG Diploma", courses: 1 },
                { stream: "Ph.D.", courses: 1 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>Exam Accepted</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  stream: "B.E./B.Tech",
                  exam: "JEE MAIN, JEE ADVANCE + JoSAA Counselling",
                },
                {
                  stream: "B.Sc.",
                  exam: "BITSAT, CUET, NTSE, KVPY, INSPIRE SCHOLARSHIP",
                },
                {
                  stream: "B.Tech-M.Tech",
                  exam: "JEE Advanced + JoSAA Counselling",
                },
                {
                  stream: "M.E./M.Tech",
                  exam: "GATE, JEE MAIN, JEE ADVANCE, COAP",
                },
                {
                  stream: "BBA",
                  exam: "BITSAT, CUET, NTSE, KVPY, INSPIRE SCHOLARSHIP",
                },
                { stream: "MBA/PGDM", exam: "JEE MAIN, JEE ADVANCE" },
                { stream: "M.Sc.", exam: "IIT JAM + JOAPS Counselling" },
                { stream: "DMLT", exam: "CBSE 12TH, ISC, BSEB 12TH" },
                { stream: "Executive MBA/PGDM", exam: "-" },
                { stream: "Certificate", exam: "-" },
                { stream: "PG Diploma", exam: "-" },
                {
                  stream: "Ph.D.",
                  exam: "GATE, UGC NET, CSIR NET / Written Test + Interview",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>Tuition Fee (INR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stream: "B.E./B.Tech", tuition: "8L-10L" },
                { stream: "B.Sc.", tuition: "2.5L-10L" },
                { stream: "M.E./M.Tech", tuition: "1L-10L" },
                { stream: "BBA", tuition: "2.5L" },
                { stream: "MBA/PGDM", tuition: "10L" },
                { stream: "M.Sc.", tuition: "60K" },
                { stream: "DMLT", tuition: "1K" },
                { stream: "Executive MBA/PGDM", tuition: "2L" },
                { stream: "Certificate", tuition: "50K-60K" },
                { stream: "PG Diploma", tuition: "50K" },
                { stream: "Ph.D.", tuition: "2L-3L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stream: "B.E./B.Tech", eligibility: "10+2 with 60% marks" },
                { stream: "B.Sc.", eligibility: "B.Sc Degree with 60% marks" },
                {
                  stream: "M.Tech",
                  eligibility:
                    "B.Tech/ B.E. or equivalent degree with 60% marks",
                },
                { stream: "M.E./M.Tech", eligibility: "10+2 with 60% marks" },
                { stream: "BBA", eligibility: "10+2 with 60% marks" },
                { stream: "MBA/PGDM", eligibility: "10+2 with 75% marks" },
                { stream: "M.Sc.", eligibility: "IIT JAM" },
                { stream: "DMLT", eligibility: "CBSC 12TH, ISC, BSEB 12TH" },
                { stream: "Executive MBA/PGDM", eligibility: "-" },
                { stream: "Certificate", eligibility: "-" },
                { stream: "PG Diploma", eligibility: "-" },
                {
                  stream: "Ph.D.",
                  eligibility: "Post-graduation with 60% marks",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={th3Style}>B.E. / B.Tech fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 4 - 5 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹8L - 10L (Tuition fee is calculated on the basis of 1st Semester. Actual amount may vary.)",
                },
                {
                  component: "Hostel",
                  amount:
                    "₹46.5K - 56.5K (The fees might include components other than hostel fees. Meal Plan is not included in mentioned fee.)",
                },
                {
                  component: "One-time Payment",
                  amount:
                    " ₹20K (One-time payment includes Academic Fee (Refundable).)",
                },
                {
                  component: "Other Fees",
                  amount: "₹ 1.27 L - 1.56 L",
                },
                {
                  component: "Total Fee",
                  amount: "₹ 9.94 L - 12.33 L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>B.Sc. fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 3 - 5 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹2.4L - 10L (The fees might include components other than tuition fees.)",
                },
                {
                  component: "Hostel",
                  amount: "₹56.5K",
                },
                {
                  component: "One-time Payment",
                  amount: "₹20K",
                },
                {
                  component: "Other Fees",
                  amount: "₹1.56L",
                },
                {
                  component: "Total Fee",
                  amount: "₹4.73L - 12.33L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>M.E./M.Tech fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹80K - 2.36L (Tuition fee is calculated on the basis of 1st year. Actual amount may vary.)",
                },
                {
                  component: "Hostel",
                  amount:
                    "₹28K (The fees might include components other than hostel fees. Hostel fee is calculated on the basis of 1st year. Actual amount may vary. Meal Plan is not included in mentioned fee.)",
                },
                {
                  component: "One-time Payment",
                  amount: "₹6K - 20K (One-time payment includes academic fee.)",
                },
                {
                  component: "Total Fee",
                  amount: "₹1.14L - 2.84L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>BBA fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 3 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹2.4L (The fees might include components other than tuition fees.)",
                },
                {
                  component: "Total Fee",
                  amount: "₹2.4L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>M.Sc. fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹60K (Tuition fee is calculated on the basis of 1st year. Actual amount may vary.)",
                },
                {
                  component: "Hostel",
                  amount:
                    "₹28K (The fees might include components other than hostel fees. Meal Plan is not included in mentioned fee.)",
                },
                {
                  component: "One-time Payment",
                  amount: "₹20K (One-time payment includes academic fee.)",
                },
                {
                  component: "Total Fee",
                  amount: "₹1.08L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>DMLT fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹80K (The fees might include components other than tuition fees.)",
                },
                {
                  component: "Total Fee",
                  amount: "₹80K",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>Executive MBA/PGDM fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹2.04 L (The fees might include components other than tuition fees.)",
                },
                {
                  component: "Total Fee",
                  amount: "₹2.04 L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>Certificate fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 80 hours - 10 months)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹40K - 60K (The fees might include components other than tuition fees. For reservation candidates INR 50,000/-)",
                },
                {
                  component: "Total Fee",
                  amount: "₹40K - 60K",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
        <h3 style={th3Style}>PG Diploma fee details 2025</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 1 year)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  component: "Tuition",
                  amount:
                    "₹40K (The fees might include components other than tuition fees.)",
                },
                {
                  component: "Total Fee",
                  amount: "₹40K",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>*These are estimated fees information. Actual values may differ</p>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Patna admission is offered via various national-level exams. For
          admission to the IIT Patna flagship B.Tech program, applicants are
          required to secure a valid rank in JEE Advanced followed by JoSAA
          counselling. Allocation of seats for B.Tech course is done online via
          JoSAA counselling, based on the applicant’s rank, category,
          availability of seats, and other factors.
        </p>
        <p style={pStyle}>
          It also offers admission to PG courses such as M.Tech, M.Sc, etc. To
          secure a seat in these popular programs, students should obtain valid
          scores in the national-level entrance exams including IIT JAM, and
          GATE, followed by the PI round. Candidates qualified for the IIT Patna
          M.Tech course through GATE score are required to participate in the
          COAP counselling for their final seat allotment. IIT Patna also offers
          one year Post Graduate Certificate in Data Analytics and Business
          Intelligence in collaboration with the Bombay Stock Exchange. The
          program is conducted every weekend for 3 hours per session.
        </p>
        <p style={pStyle}>
          Along with UG and PG programs, IIT Patna provides Ph.D. programs under
          various disciplines. Shortlisting criteria for Ph.D. admission are
          done on the basis of an entrance exam conducted by the institute and
          PI round. However, candidates having valid scores in GATE/ CEED/ UGC/
          CSIR Exams are also considered eligible for IIT Patna Ph.D. program.
        </p>
        <p style={pStyle}>
          <strong>How to apply for IIT Patna Admissions 2024?</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Visit the official website of IIT Patna.</li>
          <li style={liStyle}>
            Then, candidates have to select their preferred course.
          </li>
          <li style={liStyle}>
            Candidates are required to log in to fill out the IIT Patna
            application form.
          </li>
          <li style={liStyle}>
            Fill up the IIT Patna application form with the required details.
          </li>
          <li style={liStyle}>
            Candidates need to upload the documents carefully.
          </li>
          <li style={liStyle}>
            Submit or save the IIT Patna application form.
          </li>
          <li style={liStyle}>
            Further, pay the IIT Patna application fee through SBI-collect.
          </li>
          <li style={liStyle}>
            Later, take a printout of the application form for future reference.
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
                <th style={thStyle}>Course Name</th>
                <th style={thStyle}>Accepted Entrance Exam</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "BTech",
                  exam: "Eligibility: Class 12 with 75% aggregate\nSelection: JEE Main + JEE Advanced + JoSAA Counselling",
                },
                {
                  course: "M.Tech",
                  exam: "Eligibility: Any 4-year UG degree\nSelection: GATE + COAP Counselling",
                },
                {
                  course: "BS (or BSc)",
                  exam: "Eligibility: Class 12 with 75% aggregate\nSelection: JEE Main + JEE Advanced + JoSAA Counselling",
                },
                {
                  course: "MSc",
                  exam: "Eligibility: Any UG degree\nSelection: IIT-JAM + CCMN Counselling",
                },
                {
                  course: "PhD",
                  exam: "Eligibility: PG degree with 55% aggregate\nSelection: Admission Test + Interview\nExemption from test: Valid score in GRE/GMAT/GATE/JMET/CAT/XAT/MAT/ATMA/UGC or CSIR/NET/JRF",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle} whiteSpace="pre-line">
                    {row.exam}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={th3Style}>IIT Patna B.Tech Admission 2025</h3>
        <p style={pStyle}>
          Indian Institute of Technology, Patna offers B.Tech under 8
          departments, namely - Computer Science & Engineering, Electrical
          Engineering, Mechanical Engineering, Civil & Environmental
          Engineering, Chemical and Biochemical Engineering, Metallurgical and
          Materials Engineering etc.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna B.Tech Eligibility Criteria</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates should have passed 10+2 in the science stream with a
            minimum of 75% marks.
          </li>
          <li style={liStyle}>
            Candidates of SC/ST must have scored 65% in 10+2. Alternatively,
            candidates in the top 20 percentile in class 12 can also apply for
            B.Tech admission.
          </li>
          <li style={liStyle}>
            Candidates must have a valid JEE Advanced Score.
          </li>
        </ul>
        <p style={pStyle}>
          <strong>IIT Patna B.Tech Selection Criteria</strong>
        </p>
        <p style={pStyle}>
          IIT Patna Offers the final selection through JoSAA Counselling based
          on the rank obtained in JEE Advanced. Only registered candidates can
          participate in the JoSAA Counselling process. Candidates are allotted
          seats in seven rounds of JoSAA Counselling. The seat allotment depends
          upon the choice of course and college made while registration.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna UG Admission Process</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates have to clear JEE Main and appear for JEE Advanced and
            obtain a valid rank.
          </li>
          <li style={liStyle}>
            Next, students have to register with JOSAA for participation in the
            counselling process.
          </li>
          <li style={liStyle}>
            Candidates have to select IIT Patna as their preferred college.
          </li>
          <li style={liStyle}>
            Further, candidates have to participate in the counselling session
            of the Joint Seat Allocation Authority (JoSAA).
          </li>
          <li style={liStyle}>
            The IIT Patna admissions are done based on the scores obtained in
            the entrance examinations.
          </li>
          <li style={liStyle}>
            Later, candidates are allotted seats after verification of documents
            and IIT Patna admission fee payment.
          </li>
        </ul>
        <p style={pStyle}>
          <strong>IIT Patna Counselling 2025</strong>
        </p>
        <p style={pStyle}>
          Candidates who are applying for IIT Patna admissions, must register
          for JEE Advanced examination and should secure valid ranks for
          admission. Then the candidates have to register for counselling
          process, During the counselling candidates must select the IIT Patna
          as the preferred college.
        </p>
        <h3 style={th3Style}>IIT Patna B.S Admission 2025</h3>
        <p style={pStyle}>
          IIT Patna is currently offering BS Programme in BS in Mathematics &
          Computing discipline. This program is designed to cover a wide range
          of courses with the motive that the students would be well-equipped
          with the basic techniques of mathematics and computer science.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna B.S Eligibility Criteria</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates must have passed his/her 10+2 with 75% aggregate marks.
          </li>
          <li style={liStyle}>
            Candidate must have passed 10+2 with PCB/PCM from a recognized
            board.
          </li>
        </ul>
        <p style={pStyle}>
          <strong>IIT Patna B.S Selection Criteria</strong>
        </p>
        <p style={pStyle}>
          The admission to the four-year (Eight Semester) B.S. (Mathematics and
          Computing) program will be through the Joint Entrance Examination
          (JEEAdvance) conducted by IITs.
        </p>
        <h3 style={th3Style}>IIT Patna M.Tech Admission 2025</h3>
        <p style={pStyle}>
          IIT Patna offers a two-year M.Tech program in 15 specializations
          solely on the basis of the GATE scores. Further, candidates are
          required to register for the COAP counselling to reserve a seat at the
          institute. Given below are the IIT Patna M.Tech program’s eligibility
          & selection criteria:
        </p>
        <p style={pStyle}>
          <strong>IIT Patna M.Tech Eligibility Criteria</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            B.E/B.Tech degree in a relevant discipline from a recognized
            university.
          </li>
          <li style={liStyle}>
            Students must have at least 60% marks or a CGPA of 6.0 on a 10-point
            scale in graduation (For SC/ST 55% marks).
          </li>
          <li style={liStyle}>A valid GATE score.</li>
        </ul>
        <p style={pStyle}>
          * Candidates who have completed B.Tech from IITs with a CGPA of 8.0
          and above are exempted from submitting the GATE scores.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna M.Tech Selection Criteria</strong>
        </p>
        <p style={pStyle}>
          Candidates will be shortlisted for the M.Tech program on the basis of
          their GATE score. Then, there will be an interview round conducted by
          the institute. For the final merit list for admissions, 70% weightage
          will be given to the GATE scores and 30% to the interview.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna M.Tech Admission Process 2024</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates need to meet the eligibility criteria for IIT Patna
            M.Tech admission.
          </li>
          <li style={liStyle}>Secure a valid score in GATE.</li>
          <li style={liStyle}>
            Meet the qualifying GATE cut-off after the result declaration.
          </li>
          <li style={liStyle}>
            Participate in the GATE counselling and admission process conducted
            by COAP.
          </li>
          <li style={liStyle}>
            Shortlisting is based on academic background and GATE score.
          </li>
          <li style={liStyle}>
            Shortlisted candidates are called for a written test followed by an
            interview.
          </li>
          <li style={liStyle}>
            Final admission is confirmed after document verification and course
            fee payment.
          </li>
        </ul>
        <h3 style={th3Style}>IIT Patna M.Sc Admission 2025</h3>
        <p style={pStyle}>
          IIT Patna offers a two-year M.Sc program in three specializations,
          namely, Physics, Chemistry, and Mathematics with each having a total
          intake of 90 students. For admission to the program, candidates need
          to appear for the IIT JAM entrance exam.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna M.Sc Eligibility Criteria</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates must have a Bachelor’s degree in the relevant discipline
            to be eligible for admission.
          </li>
          <li style={liStyle}>A minimum of 55% aggregate marks is required.</li>
        </ul>
        <p style={pStyle}>
          * There is a 5% relaxation in the eligibility criteria for SC/ST
          candidates
        </p>
        <p style={pStyle}>
          <strong>IIT Patna M.Sc Selection Criteria</strong>
        </p>
        <p style={pStyle}>
          Selection of the candidates is done through the IIT JAM counseling
          process in which four rounds of admission are conducted. Seats are
          allocated on the basis of scores obtained in the JAM entrance test,
          choice filling, availability of seats, categories, and other factors.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna M.Sc Admission Process 2025</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates are required to fulfill the eligibility criteria for IIT
            Patna M.Sc admission.
          </li>
          <li style={liStyle}>
            Candidates have to secure a valid score in the entrance exam - JAM.
          </li>
          <li style={liStyle}>
            Candidates who qualify for the entrance exam are called to IIT JAM
            counselling.
          </li>
          <li style={liStyle}>
            IIT Patna admission is offered based on the candidates’ performance
            in JAM.
          </li>
          <li style={liStyle}>
            The last step includes the verification of documents and IIT Patna
            admission fee payment.
          </li>
        </ul>
        <p style={pStyle}>
          <strong>IIT Patna MSc Seats 2025</strong>
        </p>
        <p style={pStyle}>
          Given below is the intake capacity for the students admitted in the
          MSc program. The total seats include all the categories of students
          i.e., General, EWS, OBC NCL, SC, and ST. The table below shows
          specialization-wise seat intake for the MSc program:
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
                <th style={thStyle}>Seats</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "Chemistry", seats: "30" },
                { course: "Mathematics", seats: "30" },
                { course: "Physics", seats: "30" },
                { course: "Total", seats: "90" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 style={th3Style}>IIT Patna Ph.D Admission 2025</h3>
        <p style={pStyle}>
          Indian Institute of Technology offers Ph.D. programs under three
          departments, namely - Engineering, Science, Humanities, and Social
          Sciences for which admissions are on the basis of GATE, NET entrance
          test scorecard which is further followed by the interview. Candidates
          must have a Bachelor's or Master's degree in order to be considered
          eligible for admission.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna Ph.D Eligibility Criteria</strong>
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
                <th style={thStyle}>Specializations</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  specialization: "PhD in Engineering",
                  criteria: (
                    <>
                      Candidate needs to fulfill any one of the below criteria:
                      <ul style={ulStyle}>
                        <li style={liStyle}>
                          Completed M. Tech/ME engineering degree with at least
                          60% marks
                        </li>
                        <li style={liStyle}>
                          UG degree in engineering with at least 75% marks
                        </li>
                        <li style={liStyle}>
                          UG degree from IIT in relevant stream with at least
                          CPI of 7.0
                        </li>
                        <li style={liStyle}>
                          Degree of masters in science in relevant stream with
                          at least 70% marks
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  specialization: "PhD in Science",
                  criteria: (
                    <>
                      For admission in the science department, students need to
                      fulfill any one of the below criteria:
                      <ul style={ulStyle}>
                        <li style={liStyle}>
                          M.Phil./degree of masters in science with at least 60%
                        </li>
                        <li style={liStyle}>
                          Degree of masters in engineering in relevant stream
                          with 60%
                        </li>
                        <li style={liStyle}>
                          UG degree in engineering from IIT with a minimum 7.0
                          CPI
                        </li>
                        <li style={liStyle}>
                          UG degree in engineering in relevant stream with 75%
                        </li>
                      </ul>
                    </>
                  ),
                },
                {
                  specialization: "PhD in Humanities and Social Sciences",
                  criteria: (
                    <ul style={ulStyle}>
                      <li style={liStyle}>
                        M.Phil./degree of masters in science/arts/commerce in
                        relevant stream with at least 55%
                      </li>
                      <li style={liStyle}>
                        Degree of masters in engineering/design/technology in
                        relevant stream with at least 60%
                      </li>
                      <li style={liStyle}>
                        UG degree from IIT in relevant stream with at least 7.0
                        CPI
                      </li>
                      <li style={liStyle}>
                        UG degree in engineering in relevant stream with 70%
                      </li>
                    </ul>
                  ),
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.specialization}</td>
                  <td style={tdStyle}>{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={pStyle}>
          <strong>IIT Patna PhD Admission Criteria 2025</strong>
        </p>
        <p style={pStyle}>
          The Final admission in PhD program at IIT Patna is based on entrance
          scores of GATE/NET along with interview. International candidates will
          be evaluated for a written test/interview based on their scores in
          TOEFL.
        </p>
        <p style={pStyle}>
          <strong>IIT Patna PhD Admission process</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Candidates seeking admission to the IIT Patna PhD programme must
            meet the eligibility criteria.
          </li>
          <li style={liStyle}>
            Eligible candidates should fill in the application form at the
            official website of the Indian Institute of Technology Patna.
          </li>
          <li style={liStyle}>
            The shortlisted candidates will be invited for the interview/viva
            voce process.
          </li>
          <li style={liStyle}>
            Candidates will be shortlisted for IIT Patna admissions based on
            scores obtained in past academics and performance in the interview.
          </li>
          <li style={liStyle}>
            Final admission is confirmed after verification of documents and
            course fee payment.
          </li>
        </ul>
        <p style={pStyle}>
          <strong>IIT Patna Admissions-Documents Required</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Passport size photographs</li>
          <li style={liStyle}>Class 10th certificate and mark sheet</li>
          <li style={liStyle}>Class 12th certificate and mark sheet</li>
          <li style={liStyle}>
            Bachelor's degree certificate (for PG admission)
          </li>
          <li style={liStyle}>
            Master's degree certificate (for Ph.D admission)
          </li>
          <li style={liStyle}>Entrance exam scorecard</li>
          <li style={liStyle}>ID proof</li>
          <li style={liStyle}>Migration/transfer certificate</li>
          <li style={liStyle}>Caste Certificate</li>
          <li style={liStyle}>Sponsorship letter</li>
          <li style={liStyle}>No objection certificate</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
