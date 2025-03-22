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
        <h2 style={h2Style}>About IIT Roorkee</h2>
        <p style={pStyle}>
          Indian Institute of Technology Roorkee was established in 1847 as Thomason
          College of Civil Engineering, and is the seventh IIT recognized as an Institution of
          National Importance. IIT Roorkee is accredited by NAAC and approved
          by AICTE and UGC. IIT Roorkee is a public technical research university located in
          Uttarakhand. <br />
          IIT Roorkee is the oldest technical institution in Asia that was given university
          status in 1949. The main campus of IIT Roorkee is located in Roorkee, Haridwar
          District over an area of 358.5 acres. IIT Roorkee also has 2 other campuses, one
          in Saharanpur (around 30 Km from Roorkee) and another one in Greater Noida. <br />
          IIT Roorkee is ranked as #1 in the top architecture colleges in India by NIRF 2023.
          In the engineering category, IIT Roorkee has been ranked 5th in NIRF 2023
          Ranking. IIT Roorkee offer many degrees and courses at different levels like UG,
          PG, and Ph.D. <br />
          The most popular course at IIT Roorkee is B.Tech. JEE advanced score is
          considered for admission to the program and seats allocation is done via by
          JoSAA. Before taking admission in IIT Roorkee candidate must has to come under
          the eligibility criteria. <br />
          Fee structure varies from course to course and it depends on the course selected
          by the candidate. To get admission at IIT Roorkee the candidates must appear and
          secure a valid score in the entrance examinations such as /JAM/CEED.
          During IIT Roorkee placements, a placement rate of 100% was recorded. IIT
          Roorkee average package stood at INR 18.34 LPA. IIT Roorkee has separate boys
          and girls hostels, one coed hostel, and married couples' hostels.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          Indian Institute of Technology, Roorkee offers courses at undergraduate,
          postgraduate and doctoral levels. IIT Roorkee courses are offered in the streams of
          engineering and architecture, science, management and business administration,
          animation and design. IIT Roorkee courses include B.Tech, B.Arch., M.Tech,
          M.Arch, MBA, M.sc, M.Plan, and M.Des. IIT Roorkee courses are available online,
          full-time, and part-time study mode. IIT Roorkee offers more than ten
          undergraduate, postgraduate, certificate and doctoral-level courses.
          Given below table show the number of courses in different subjects :
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
                <th style={thStyle}>Subject</th>
                <th style={thStyle}>Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                { subject: "Certificate", courses: "79" },
                { subject: "B.E. / B.Tech", courses: "31" },
                { subject: "M.Sc.", courses: "12" },
                { subject: "M.E./M.Tech", courses: "70" },
                { subject: "B.Sc.", courses: "6" },
                { subject: "B.Arch.", courses: "1" },
                { subject: "M.Arch", courses: "1" },
                { subject: "MBA/PGDM", courses: "3" },
                { subject: "M.Plan", courses: "1" },
                { subject: "M.Des", courses: "1" },
                { subject: "Executive MBA/PGDM", courses: "1" },
                { subject: "Ph.D.", courses: "2" },
                { subject: "PG Diploma", courses: "3" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.subject}</td>
                  <td style={tdStyle}>{row.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>Given below table shows you the Course and their eligibility criteria.</p>

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
                <th style={thStyle}>Courses</th>
                <th style={thStyle}>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "Certificate", eligibility: "10+2 ; with 50%, CBSE 12th" },
                { course: "B.E. / B.Tech", eligibility: "10+2 with 75%, JEE Advanced, JEE Main" },
                { course: "M.Sc.", eligibility: "10+2 with 75%, Graduation : 60%, IIT JAM" },
                { course: "M.E./M.Tech", eligibility: "10+2 with 75%, Graduation : 60%, GATE, JEE Main + JEE Advance" },
                { course: "B.Sc.", eligibility: "10+2 with 75%" },
                { course: "B.Arch.", eligibility: "10+2 : 50%, NATA, AAT" },
                { course: "M.Arch", eligibility: "GATE" },
                { course: "MBA/PGDM", eligibility: "Graduation : 60%, CAT, GATE + JEE Advance" },
                { course: "M.Plan", eligibility: "GATE" },
                { course: "M.Des", eligibility: "CEED" },
                { course: "Executive MBA/PGDM", eligibility: "Graduation : 60%, CAT" },
                { course: "Ph.D.", eligibility: "— / —" },
                { course: "PG Diploma", eligibility: "Graduation : 60%, GATE" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>List of Courses and its tuition fee of IIT Roorkee.</p>

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
                <th style={thStyle}>Courses</th>
                <th style={thStyle}>Tuition Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "Certificate", tuition: "0-2L" },
                { course: "B.E. / B.Tech", tuition: "8L - 10.7L" },
                { course: "M.Sc.", tuition: "12K - 10.7L" },
                { course: "M.E./M.Tech", tuition: "20K - 10.7L" },
                { course: "B.Sc.", tuition: "10L - 10.7L" },
                { course: "B.Arch.", tuition: "20K" },
                { course: "M.Arch", tuition: "20K" },
                { course: "MBA/PGDM", tuition: "4L - 8L" },
                { course: "M.Plan", tuition: "20K" },
                { course: "M.Des", tuition: "20K" },
                { course: "Executive MBA/PGDM", tuition: "4L" },
                { course: "Ph.D.", tuition: "3.5K - 6.5K" },
                { course: "PG Diploma", tuition: "62.5K - 70.5K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Certificate fee details</h3>
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
                <th style={thStyle}>Fee Component</th>
                <th style={thStyle}>Amount (for 10 months)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "Tuition",
                  tuition: "INR 2L",
                },
                {
                  course: "Total fee",
                  tuition: "INR 2L",
                },

              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>B.E. / B.Tech Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 4 - 5 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 8L - 10.71L" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee.)", amount: "₹ 55K - 81K" },
                { component: "One-time Payment (One-time payment includes library deposit, institute caution deposit and at the time of admission payment )", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 8.64L - 11.61L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.Sc. Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 12K" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 36K" },
                { component: "One-time Payment (One-time payment includes library deposit, institute caution deposit and at the time of admission payment)", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 57K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.E./M.Tech Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 - 3 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 20K - 6.5L" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 36K - 2.74L" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 3K - 9K" },
                { component: "Total Fee", amount: "₹ 59K - 9.3L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>B.Sc. Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 5 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 10L - 10.71L" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 55K - 81K" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 10.64 L - 11.61L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>B.Arch. fee details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 5 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 10L" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 81K" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 10.9 L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.Arch Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 20K" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 36K" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 65K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>MBA/PGDM fee details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 4L-8L" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 36 K - 1.04 L" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹  4.45 L - 9.13 L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.Plan fee details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 20K" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹  1.24 L" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 1.53L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.Des Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 20K" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 36K" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 65K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Executive MBA/PGDM fee details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 4L" },
                { component: "Hostel (The fees might include components other than hostel fees.Meal Plan is not included in mentioned fee. )", amount: "₹ 36K" },
                { component: "One-time payment includes institute caution deposit and library deposit", amount: "₹ 9K" },
                { component: "Total Fee", amount: "₹ 4.45L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Ph.D. Fee Details</h3>
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
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 35.56K" },
                { component: "Total Fee", amount: "₹ 35.56K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>PG Diploma Fee Details</h3>
        <div
          style={{
            overflowX: "auto",
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
                { component: "Tuition Other Fees: INR 10000 The fees might include components other than tuition fees. This information is the latest available on the official website.", amount: "₹ 62.5K - 70.5K" },
                { component: "One-time Payment One-time Payment includes caution deposit, library deposit, and miscellaneous one-time payments.", amount: "₹ 8K" },
                { component: "Total Fee", amount: "₹ 70.5K - 78.5K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>
          You can check the table below to know about the fee range of some top IITs in India.
        </p>
        <h3 style={th3Style}>List of IITs with Fee Structure</h3>
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
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>UG Fees</th>
                <th style={thStyle}>PG Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                { college: "IIT Gandhinagar", ug: "Rs 8,79,000", pg: "-" },
                { college: "IIT Hyderabad", ug: "Rs 9,06,000", pg: "Rs 66,990 to Rs 1,18,000" },
                { college: "IIT Bhubaneswar", ug: "Rs 10,79,000 to Rs 11,58,000", pg: "Rs 36,680 to Rs 56,680" },
                { college: "IIT Ropar", ug: "Rs 8,69,000", pg: "Rs 33,540 to Rs 43,740" },
                { college: "IIT Guwahati", ug: "Rs 8,52,000", pg: "Rs 21,450" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.college}</td>
                  <td style={tdStyle}>{row.ug}</td>
                  <td style={tdStyle}>{row.pg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          Indian Institute of Technology, Roorkee, offers admissions to undergraduate,
          postgraduate, and doctoral courses. Eligible candidates can apply for IIT Roorkee
          admission to the desired course by visiting the official website. IIT Roorkee UG
          admissions are done based on the JEE Advanced scores. IIT Roorkee M.Tech
          admissions are based on the scores of GATE, whereas MBA admissions are
          based on the scores of CAT. IIT Roorkee offers more than 65 courses via its 23
          departments at UG, PG, and PhD levels. <br />
          IIT Roorkee M.Sc. admissions are based on JAM/GAT-B, and M.Des admissions
          are done based on CEED/GATE scores. IIT Roorkee PhD admissions are based
          on UGC NET, including lectureships and GATE, or through national-level
          examinations conducted by MHRD and its agencies and institutes.
          Other popular courses at IIT Roorkee are M.Tech, M.Arch, MURP, and Integrated
          programs at the post-graduate level. <br />
          IIT Roorkee also known as IITR has recently introduced two new postgraduate
          Courses (PGP), namely- a Master in Design (Industrial Design) and a Master in
          Innovation Management (MIM). Alongside, IITR has started two online certificate
          courses in Data Science, Machine Learning & AI. The institute's flagship course
          is B.Tech which is offered across 30+ specializations
        </p>


        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>How to fill out the IIT Roorkee application form?</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Eligible candidates can apply for admission by visiting the official website.</li>
          <li style={liStyle}>The candidate should fill out the IITR application form.</li>
          <li style={liStyle}> After filling out the details the next step of the IIT Roorkee application procedure is uploading the necessary documents.</li>
          <li style={liStyle}>To complete the application procedure the candidates should pay the IIT Roorkee application fee.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee B.Tech & BArch Admission</strong>
        </h3>
        <p style={pStyle}>Below steps are to be followed for admission to B.Tech and BArch at IIT
          Roorkee:
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Step 1: Application Process</strong>
          </h3>
          Candidates seeking admission at IIT Roorkee are required to complete the
          application form for the course-specific entrance exam. For example, for BArch,
          candidates are required to apply for JEE Main followed by JEE Advanced
          application. Similarly, for the MSc, IIT JAM application form is required to be
          completed.
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Step 2: Selection Criteria</strong>
          </h3>
          After the conclusion of the application process, students are required to take the
          course-specific entrance exam followed by other selection rounds (if applicable).
          After which, counselling rounds are carried out for some of the courses for the seat
          allotment process.
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Step 3: Admission Confirmation </strong>
          </h3>
          Candidates selected after all the selection rounds can confirm their admission /seat
          by paying the required amount of fee.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee MBA Admission</strong>
        </h3>
        <p style={pStyle}>For admission to the MBA programme, below admission process below will be followed:
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Step 1</strong>
          </h3>
          Apply for CAT for IIT Roorkee MBA admission and on the official website
          of IIT Roorkee for other courses' admission.
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Step 2</strong>
          </h3>
          Appear for CAT and or college-level selection rounds. <br />
          Candidates who are selected for MBA courses based on their Class 10, Class 12,
          CAT qualifying and CAT final cutoff are called for further selection rounds, such as
          the Written Ability Test and Personal Interview.
          After completion of the selection rounds, a category-wise merit list is released
          based on the Final Composite Score.
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Step 3</strong>
          </h3>
          Once the seat allocation is done, candidates can confirm the IIT Roorkee
          admission by paying the admission charges.
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
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "B.Tech", eligibility: "Class 12 or its equivalent with a minimum of 75% aggregate from a recognized board", selection: "JEE Advanced and JoSAA Counselling" },
                { course: "MSc", eligibility: "Graduation in a relevant Science discipline with a minimum aggregate of 60% from a recognized university", selection: "IIT JAM and CCMN Counselling" },
                { course: "M.Tech", eligibility: "Graduation with a minimum aggregate of 60% from a recognized university", selection: "GATE and COAP Counselling" },
                { course: "BSc", eligibility: "Class 12 with a minimum aggregate of 75% from a recognized board", selection: "JEE Advanced and JoSAA Counselling" },
                { course: "BArch", eligibility: "Class 12th with a minimum aggregate of 75% from a recognized board", selection: "JEE Advanced and JoSAA Counselling" },
                { course: "M.Arch", eligibility: "Graduation in the relevant discipline with a minimum of 60% aggregate", selection: "GATE and COAP Counselling" },
                { course: "MBA", eligibility: "Graduation in the relevant discipline or any relevant professional qualification with a minimum of 60% aggregate", selection: "CAT & PI round" },
                { course: "certificate", eligibility: "Class 12 or its equivalent with a minimum aggregate of 50% from a recognized board", selection: "Merit-based" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                  <td style={tdStyle}>{row.selection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee Seats</strong>
        </h3>
        <p style={pStyle}>Students are allotted seats at IIT Roorkee as per the JoSAA seat matrix. For seat
          allotment, candidates have to participate in the counselling procedure. Find below
          the IIT Roorkee seats intake for some of the courses:

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
                  <th style={thStyle}>Courses</th>
                  <th style={thStyle}>Seats</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { course: "BE/ B.Tech", seats: "1179" },
                  { course: "ME/ M.Tech", seats: "218" },
                  { course: "BArch", seats: "30" },
                  { course: "BSc", seats: "211" },
                  { course: "Executive MBA", seats: "95" },
                  { course: "M.Arch", seats: "NA" },
                  { course: "M.Des", seats: "NA" },
                  { course: "M.Plan", seats: "NA" },
                  { course: "MSc", seats: "405" },
                  { course: "MBA", seats: "20" },
                  { course: "PG Diploma", seats: "100" },
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{row.course}</td>
                    <td style={tdStyle}>{row.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          From below admission process and selection criteria are given on the basis of UG,
          PG, and Ph.D.
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Roorkee UG Admissions</strong>
          </h3>
          The college offers Courses at the undergraduate level. IIT Roorkee UG Courses
          include B.Tech, B. Arch. and Dual Courses. The duration of the courses lasts from
          4 years to 5 years. The IIT Roorkee UG courses are offered in full-time mode only.

          <h3 style={th3Style}>IIT Roorkee UG Courses Selection Criteria</h3>
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
                  <th style={thStyle}>IIT Roorkee Selection Criteria</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { course: "B.Tech", seats: "Eligibility Criteria: Class 10+2" },
                  { course: "B.Arch", seats: "Selection Criteria: JEE Advanced" },
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{row.course}</td>
                    <td style={tdStyle}>{row.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee Admission Procedure: B.Tech/B.Arch.</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}> The candidate must meet IIT Roorkee eligibility criteria to apply for the courses.</li>
          <li style={liStyle}>The candidate must qualify for  JEE Mains and JEE Advanced. </li>
          <li style={liStyle}>  After the declaration of the results, if the candidate meets the IIT Roorkee JEE
            Advanced Cutoff, then the candidate should apply for the Joint Seat Allocation
            Process (JoSAA).</li>
          <li style={liStyle}>The candidate has to select IIT Roorkee as the preferred college.</li>
          <li style={liStyle}>Finally, the candidate will get an offer letter for IIT Roorkee admissions.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee PG Admissions</strong>
        </h3>
        <p style={pStyle}>The college offers courses at the postgraduate level. IIT Roorkee PG courses
          include M.Tech, M.Arch, MBA, M.Sc., M.Plan, and M.Des. The duration of all the
          PG courses at the Indian Institute of Technology Roorkee is 2 years. All the IIT
          Roorkee PG courses are offered in full-time mode only.</p>

        <h3 style={th3Style}>IIT Roorkee PG Selection Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Seats</th>
                <th style={thStyle}>IIT Roorkee Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "M.Tech",
                  seats: "N/A",
                  criteria: "Eligibility Criteria: B.E/ B.Tech with a minimum of 60% marks (55% marks for SC/ST category) \nSelection Criteria: GATE"
                },
                {
                  course: "M.Arch",
                  seats: "9",
                  criteria: "Eligibility Criteria: Graduation with a minimum of 60% marks \nSelection Criteria: GATE"
                },
                {
                  course: "M.B.A",
                  seats: "95",
                  criteria: "Eligibility Criteria: Graduation with 60% marks (55% for SC/ST/PwD) \nSelection Criteria: CAT"
                },
                {
                  course: "M.Sc.",
                  seats: "30",
                  criteria: "Eligibility Criteria: Bachelor's degree in any relevant area of Biology/Biotechnology/Agriculture, Allied discipline with any biology subject with a minimum of 60% marks (5% marks relaxation for SC/ST) \nSelection Criteria: GAT-B (For M.Sc. Biotechnology)/JAM (For other departments of M.Sc.)"
                },
                {
                  course: "M.Des",
                  seats: "20",
                  criteria: "Eligibility Criteria: Graduation with a minimum of 60% marks (55% FOR SC/ST) \nSelection Criteria: CEED/GATE"
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.seats}</td>
                  <td style={tdStyle}>{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee Admission Process: M.Tech/ M.Arch </strong>
        </h3>
        <p style={pStyle}>To get admission into the IIT Roorkee candidates need to meet the eligibility
          criteria that are required. </p>
        <ul style={ulStyle}>
          <li style={liStyle}> The candidates must qualify for GATE.</li>
          <li style={liStyle}>The candidate can apply for a maximum of 4 departments but the selected
            candidates will be offered IIT Roorkee admission only in one programme
            depending on their preference and merit. </li>
          <li style={liStyle}>Regular B.Tech. degree holders from the IITs with CGPA greater than 8 and Sponsored
            students with relevant experience and written test/ interview are exempted
            from the GATE examination. </li>
          <li style={liStyle}>Then the candidates have to register in the Common Offer Acceptance Portal
            (COAP) and seats are allotted based on the students' performance in the
            entrance test. </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee MBA Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate has to meet IIT Roorkee eligibility criteria to apply for the
            courses. </li>
          <li style={liStyle}>The candidate has to appear and qualify for CAT.</li>
          <li style={liStyle}>IIT Graduates admitted through JEE Advanced with CGPA 7 and above are
            exempted from CAT. The selection is made based on the interview.</li>
          <li style={liStyle}>A common merit list shall be prepared on the basis of scores of selection
            criterion for IIT Roorkee admission to the M.B.A programme</li>
          <li style={liStyle}>Finally, the candidate will get an offer letter for IIT Roorkee MBA admissions.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee M.Des Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate has to meet IIT Roorkee eligibility criteria to apply for the
            courses. </li>
          <li style={liStyle}>Candidates should appear for the entrance test such as CEED/GATE and
            secure a valid score.</li>
          <li style={liStyle}>Qualified candidates should attend the counselling session.</li>
          <li style={liStyle}>The candidates will be shortlisted for IIT Roorkee admissions based on the
            scores obtained in the entrance exam.</li>
          <li style={liStyle}>Selected candidates will be notified regarding the seat allotment.</li>
          <li style={liStyle}>The candidates should submit the required documents.</li>
          <li style={liStyle}>To complete the IIT Roorkee admission process the candidates should pay
            the admission fee.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee M.Sc. Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate has to meet IIT Roorkee eligibility criteria to apply for the
            courses. </li>
          <li style={liStyle}>The candidate must qualify GAT-B for the admission in M.Sc. (Biotechnology)
            and for departments other than Biotechnology the candidate must qualify
            JAM. </li>
          <li style={liStyle}>Then the selected candidates must register themselves report to the
            concerned Head of the Department and submit the joining report. </li>
          <li style={liStyle}>The admission will be provisional until the candidate submits the documents
            and pays the IIT Roorkee fees. </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee Ph.D. Admissions</strong>
        </h3>
        <p style={pStyle}>The college offers Courses at doctoral levels. The duration of PhD lasts for 6
          years. IIT Roorkee PhD courses are offered in full-time mode only. </p>

        <h3 style={th3Style}>IIT Roorkee Ph.D. Selection Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>IIT Roorkee Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "PhD",
                  criteria: "Eligibility Criteria: Master's degree with 60% (55% marks for SC/ST category). Selection Criteria: UGC NET including lectureship and GATE. or through National Level Examinations conducted by MHRD and its Agencies and Institutes. "
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee PhD Admission Process</strong>
        </h3>

        <ul style={ulStyle}>
          <li style={liStyle}>The candidates must meet IIT Roorkee eligibility criteria to apply for the
            courses.</li>
          <li style={liStyle}> The candidate must qualify for UGC NET including lectureship and GATE or
            National Level Examinations conducted by MHRD and its Agencies and
            Institutes.  </li>
          <li style={liStyle}>Candidates in ISERS or P-ISIRS or P-ISERS category, Bachelor or Masters
            from IITs with a CGPA 8.0 and above on 10 scale point scale, MBBS / BDS
            degree from an Indian University / Institution shall have a minimum CGPA of
            6.0 on a 10 point scale, or 60% in the qualifying degree, irrespective of the
            category, Master of Surgery (MS)/ Doctor of Medicine (MD) degree from an
            Indian University / Institute,  are exempted from  GATE / GPAT / JRF / NET
            score.</li>
          <li style={liStyle}>Candidates with Master’s programmes in Engineering or Architecture /
            Planning in </li>
          <li style={liStyle}> IIT Roorkee with a CGPA of 8.50 or above shall have a choice of lateral entry
            to the Ph.D. programmes after completing the first two semesters of the
            Master’s programmes.</li>
          <li style={liStyle}> Shortlisting of the candidates is done based on the written test and interview. </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee Counselling Procedure</strong>
        </h3>
        <p style={pStyle}>For admissions to B.Tech and B.Arch. programmes, the IIT Roorkee counselling
          process is done in two modes- JOSAA - CSAB Counselling. For IIT Roorkee
          admissions to PG programmes, candidates must attend the respective counselling
          process. The counselling for Ph.D. programmes is conducted after completion of
          the entrance examination.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Roorkee Admissions- Documents Required</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Passport size photograph</li>
          <li style={liStyle}>Degree certificate</li>
          <li style={liStyle}>10th Marksheet</li>
          <li style={liStyle}>12th Marksheet</li>
          <li style={liStyle}>Scorecard of the entrance examination (GATE/NRF/JRF/JEE Advanced/ JAM/ GAT-B) </li>
          <li style={liStyle}>Caste Certificate</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
