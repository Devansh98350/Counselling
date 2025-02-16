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
        <h2 style={h2Style}>About IIT Kanpur</h2>
        <p style={pStyle}>
          Founded in 1959, the Indian Institute of Technology, Kanpur is one of
          the most prestigious institutes established by the Indian government.
          IIT Kanpur offers various courses across five different fields at the
          undergraduate, postgraduate and doctoral levels. As per the NIRF
          Ranking 2023, IIT Kanpur is ranked 4 by the NIRF under the Engineering
          category. The institution is also ranked 3 by India Today 2023 under
          Engineering (Government), and Engineering categories. For research and
          academic endeavors, IIT Kanpur has collaborations/ tie-ups with the
          majority of the world's leading institutes and universities such as
          Imperial College of London, Deakin University, Melbourne School of
          Engineering, etc.
        </p>
        <p style={pStyle}>In terms of rankings, IIT Kanpur has been ranked:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>4th by NIRF 2023 in the Engineering category.</li>
          <li style={liStyle}>
            It has also been ranked 263rd in the overall category by QS World
            University Rankings 2025
          </li>
        </ul>
        <p style={pStyle}>
          IIT Kanpur is known for its Engineering and Computer Science Courses.
          B.Tech is the most sought-after program at IIT Kanpur.
        </p>
        <p style={pStyle}>
          IIT Kanpur JEE Advanced cutoff rank 2024 for CSE is 248 for the
          general category students in Round 1. Furthermore, IIT Kanpur GATE
          Cutoff 2024 saw a variation of 600 to 935 marks for Round 1 general
          category applicants. IIT Kanpur Placements 2023-24 (Phase I) recorded
          989 offers including 22 international job offers. IIT Kanpur's average
          package for CSE is INR 52.80 LPA. Some of the top recruiters who
          participated in IIT Kanpur Placements are Microsoft, Fujitsu, Samsung,
          Reliance, Goldman Sachs, McKinsey, Texas Instruments, Qualcomm, EXL,
          HPCL, etc.
        </p>
        <p style={pStyle}>
          IIT Kanpur boasts many academic resources with 20 departments, 18
          centers, 2 schools, and 3 interdisciplinary programs. IIT Kanpur
          actively collaborates with various entities to foster Innovation &
          Research, including MIT, Princeton University, and others. The Techno
          park at IIT Kanpur serves as a hub for industry-academia
          collaborations.
        </p>
        <p style={pStyle}>
          Every year the IIT Kanpur cutoff varies for each programme and each
          category. The IIT Kanpur scholarships include Merit-cum-Means
          Scholarship, Free Basic Mess Scholarship, Sports Scholarship, Inspire
          Scholarship, Convocation Medals/Prizes/Awards, Academic Excellence
          Awards, Donor Scholarships and many more. The IIT Kanpur highest
          salary package (domestic) offered is Rs 1.9 Crores
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          Indian Institute of Technology Kanpur offers B.Tech, B.Tech-M.Tech,
          Integrated M.Sc., M.Sc.-Ph.D. (Dual Degree), and MBA, M.Des, M.Tech,
          DIIT, Ph.D. and part-time PG programmes. The IIT Kanpur courses are
          offered in streams of engineering, management, science, animation,
          design, arts, humanities and social sciences. The UG courses at IIT
          Kanpur include B.Tech. and B.S. that last for 4 years. The IIT Kanpur
          courses include dual degrees like B.Tech, M.Tech, M.Sc., Ph.D., and
          many more. PG courses include M.Tech, M.S., M.Sc., M.B.A., and M.Des.
          The postgraduate courses last two years and also offers a 6-year Ph.D.
          programme The candidate must meet IIT Kanpur eligibility criteria to
          apply for the courses. The IIT Kanpur fees vary from course to course.
          The IIT Kanpur hostel fee structure depends on various parameters. IIT
          Kanpur streams and no. of courses and its tuition fee are given below:
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
                <th style={thStyle}>Courses</th>
                <th style={thStyle}>No.of Courses</th>
                <th style={thStyle}>Tuition fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Courses: "Certificate(47 courses) ",
                  No_of_Courses: "47",
                  Tuition_fees: "-/-",
                },
                {
                  Courses: "B.E. / B.Tech(8 courses) ",
                  No_of_Courses: "8",
                  Tuition_fees: "INR 8L",
                },
                {
                  Courses: "B.Sc.(8 courses)",
                  No_of_Courses: "8",
                  Tuition_fees: "INR 8L",
                },
                {
                  Courses: "M.E./M.Tech(34 courses) ",
                  No_of_Courses: "34",
                  Tuition_fees: "INR 20 K - 8 L",
                },
                {
                  Courses: "M.Sc.(31 courses) ",
                  No_of_Courses: "31",
                  Tuition_fees: "INR 12 K - 20 K",
                },
                {
                  Courses: "Ph.D.(22 courses) ",
                  No_of_Courses: "22",
                  Tuition_fees: "INR 48.5 K",
                },
                {
                  Courses: "MBA/PGDM(4 courses)",
                  No_of_Courses: "4",
                  Tuition_fees: "INR 2.8 L - 13.5 L",
                },
                {
                  Courses: "M.Des(1 course)",
                  No_of_Courses: "1",
                  Tuition_fees: "INR 94.9 K",
                },
                {
                  Courses: "MMS(12 courses)",
                  No_of_Courses: "12",
                  Tuition_fees: "INR 5.4 L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Courses}</td>
                  <td style={tdStyle}>{row.No_of_Courses}</td>
                  <td style={tdStyle}>{row.Tuition_fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>
          This institution offers various courses at each level .The following
          table show the detail of fee and eligibility criteria of the following
          courses:
        </p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Fees</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.E/B.Tech",
                  fees: "INR 12.25 L",
                  eligibility_criteria:
                    "The candidates must have passed 10+2 with Physics,Math’s and Chemistry ascompulsory subjects. +JEE Advanced ",
                },
                {
                  course: "B.S",
                  fees: "INR 12.25 L",
                  eligibility_criteria:
                    "The candidates must have passed 10+2 with Physics,Math’s and Chemistry ascompulsory subjects. +JEE Advanced ",
                },
                {
                  course: "M.Tech",
                  fees: "INR 41.50 K",
                  eligibility_criteria:
                    "The candidate must have 4 years of bachelor’s degree or master's degree in the relevant streams with a minimum of 55% marks or 5.5 CPI. + GATE score.",
                },
                {
                  course: "M.S by Research Cyber Security",
                  fees: "INR 41.50 K",
                  eligibility_criteria:
                    "The candidate must have a minimum of 75% marks/7.5 CPI in B.Sc. or equivalent.  +GATE/ CSIR/JRF/NET/COGJET score ",
                },
                {
                  course: "M.S by Research Aerospace Engineering",
                  fees: "INR 41.50 K",
                  eligibility_criteria:
                    "The candidate must have a bachelor’s degree in Engineering or Science or a master’s degree in Science with a minimum of 55% marks or 5.5 CPI ",
                },
                {
                  course:
                    "M.S by Research Electrical Engineering/M.S by Research Mechanical Engineering",
                  fees: "INR 41.50 K",
                  eligibility_criteria:
                    "The candidate must have a bachelor’s degree in Engineering or Science or a master’s degree in Science with a minimum of 55% marks or 5.5 CPI ",
                },
                {
                  course: "M.S by Research Cognitive Science",
                  fees: "INR 41.50 K",
                  eligibility_criteria:
                    "The candidate must have a B.E/B.Tech/B.S/M.B.B.S with a minimum of 60% marks or 6 CPI.  +GATE/CSIR/JRF/NET/COGJETL",
                },
                {
                  course: "M.Sc.",
                  fees: "INR 34 K",
                  eligibility_criteria:
                    "The candidate must have passed a B.Sc. degree in the relevant streams. +Valid JAM",
                },
                {
                  course: "M.Des.",
                  fees: "INR 41.45 K",
                  eligibility_criteria:
                    "The candidate must have a bachelor's degree in engineering or a 4-year bachelor's degree in science, Design or Architecture with a minimum of 55% marks or 5.5 CPI  +valid GATE/CEED score",
                },
                {
                  course: "M.B.A",
                  fees: "INR 3 L",
                  eligibility_criteria:
                    "The candidates must have a Bachelor's degree in Engineering with a minimum 60 per cent mark/6.0 CPI. +Valid CAT score ",
                },
                {
                  course: "Ph.D. Engineering ",
                  fees: "N/A",
                  eligibility_criteria:
                    "The candidate must have a Master’s Degree in Engineering with a minimum 55% mark or 5.5 CPI  Or The candidate must have a Master’s Degree in Science with a minimum 65% marks or 6.5 CPI and first division in bachelor's degree and JRF/ GATE with 95 percentile or higher.",
                },
                {
                  course: "Ph.D. Biological Sciences and Bioengineering",
                  fees: "N/A",
                  eligibility_criteria:
                    "The candidate must have a Master’s Degree in Engineering with a minimum 55% mark or 5.5 CPI  Or The candidate must have a Master’s Degree in Science with a minimum 65% marks or 6.5 CPI and first division in bachelor's degree and JRF/ GATE with 95 percentile or higher.",
                },
                {
                  course: "Ph.D. Sciences",
                  fees: "N/A",
                  eligibility_criteria:
                    "The candidate must have a Master’s Degree in Engineering with a minimum 55% mark or 5.5 CPI  Or The candidate must have a Master’s Degree in Science with a minimum 65% marks or 6.5 CPI and first division in bachelor's degree and JRF/ GATE with 95 percentile or higher.",
                },
                {
                  course: "Ph.D. Humanities and Social Sciences",
                  fees: "N/A",
                  eligibility_criteria:
                    "The candidate must have a Master’s Degree in Engineering with a minimum 55% mark or 5.5 CPI  Or The candidate must have a Master’s Degree in Science with a minimum 65% marks or 6.5 CPI and first division in bachelor's degree and JRF/ GATE with 95 percentile or higher.",
                },
                {
                  course: "Ph.D. Design",
                  fees: "N/A",
                  eligibility_criteria:
                    "The candidate must have a Master’s Degree in Engineering with a minimum 55% mark or 5.5 CPI  Or The candidate must have a Master’s Degree in Science with a minimum 65% marks or 6.5 CPI and first division in bachelor's degree and JRF/ GATE with 95 percentile or higher.",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.fees}</td>
                  <td style={tdStyle}>{row.eligibility_criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>
          The table below shows the popular courses of IIT Kanpur
        </p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Courses</th>
                <th style={thStyle}>Eligibility</th>
                <th style={thStyle}>Selection Criteria</th>
                <th style={thStyle}>Tuition Fees (First Year)</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  courses: "B.Tech",
                  eligibility:
                    "Passed 10+2 (PCM) from a recognized board with 75% marks",
                  selection_criteria: "JEE Advanced + JoSAA Counseling ",
                  tuition_fees: "INR 2.27 L",
                },
                {
                  courses: "M.Tech",
                  eligibility:
                    "Bachelor's degree in Engineering/ or science or a Master's degree in science with a minimum aggregate of 55% marks",
                  selection_criteria: "GATE Score + COAP Counseling ",
                  tuition_fees: "INR 28.7 K",
                },
                {
                  courses: "M.Sc.",
                  eligibility:
                    "Bachelor's degree in Science with a minimum aggregate of 55% marks",
                  selection_criteria: "IIT JAM + JOAPS Counseling ",
                  tuition_fees: "INR 35.2 K",
                },
                {
                  courses: "MBA",
                  eligibility: "Graduation with 60% marks ",
                  selection_criteria:
                    "CAT + Group Discussion + Personal Interview ",
                  tuition_fees: "INR 1.59 L",
                },
                {
                  courses: "Ph.D. ",
                  eligibility:
                    "Master's degree in engineering/ or master's degree in any relevant program with 55 % marks ",
                  selection_criteria: "GATE Score/ JRF/NET/ Written Test",
                  tuition_fees: "INR 23.7 K",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.courses}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                  <td style={tdStyle}>{row.selection_criteria}</td>
                  <td style={tdStyle}>{row.tuition_fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>
          Here are the list of entrance exam accepted by IIT Kanpur 2025
        </p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Programs</th>
                <th style={thStyle}>Entrance exam accepted</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  program: "B.Tech/ B.Tech-M.Tech/ Integrated M.Sc.",
                  entrance: "JEE Advanced ",
                },
                {
                  program: "M.Tech",
                  entrance: "GATE",
                },
                {
                  program: "M.Sc./ M.Sc.-Ph.D.",
                  entrance: "IIT JAM",
                },
                {
                  program: "MBA",
                  entrance: "CAT",
                },
                {
                  program: "Ph.D.",
                  entrance: "GATE/ UGC-NET/ CSIR-NET",
                },
                {
                  program: "M.Des",
                  entrance: "CEED",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.program}</td>
                  <td style={tdStyle}>{row.entrance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>FEES</strong>
        </h3>

        <h3 style={th3Style}>Certificate</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 11 months) </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Tuition </td>
                <td style={tdStyle}>INR 1.53 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 1.53 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>B.E. / B.Tech fee details 2025</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 4 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (Tuition fee is calculated on the basis of 1st semester.
                  Actual amount may vary.)
                </td>
                <td style={tdStyle}>INR 8 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Hostel <br />
                  (Hostel fee is calculated on the basis of 1st semester. Actual
                  amount may vary Meal Plan is included in mentioned fee.)
                </td>
                <td style={tdStyle}>INR 1.02 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  One-time Payment <br /> (One-time Payment includes Admission
                  Fee and security deposit){" "}
                </td>
                <td style={tdStyle}>INR 19.95 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 9.22 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>B.Sc. fee details 2025 </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 4 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (Tuition fee is calculated on the basis of 1st semester.
                  Actual amount may vary.)
                </td>
                <td style={tdStyle}>INR 8 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Hostel <br />
                  (Hostel fee is calculated on the basis of 1st semester. Actual
                  amount may vary Meal Plan is included in mentioned fee.)
                </td>
                <td style={tdStyle}>INR 1.02 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  One-time Payment <br /> (One-time Payment includes Admission
                  Fee and security deposit){" "}
                </td>
                <td style={tdStyle}>INR 19.95 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 9.22 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.E./M.Tech fee details 2025</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (Tuition fee is calculated on the basis of 1st semester.
                  Actual amount may vary.)
                </td>
                <td style={tdStyle}>INR 20 K - 8 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Hostel <br />
                  (Hostel fee is calculated on the basis of 1st semester. Actual
                  amount may vary Meal Plan is included in mentioned fee.)
                </td>
                <td style={tdStyle}>INR 25.75 K - 61.44 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  One-time Payment <br /> (One-time Payment includes Admission
                  Fee and security deposit){" "}
                </td>
                <td style={tdStyle}>INR 19.95 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 65.7 K - 8.81 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.Sc. fee details 2025</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (Tuition fee is calculated on the basis of 1st semester.
                  Actual amount may vary.)
                </td>
                <td style={tdStyle}>INR 12 K - 20 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Hostel <br />
                  (Hostel fee is calculated on the basis of 1st semester. Actual
                  amount may vary Meal Plan is included in mentioned fee.)
                </td>
                <td style={tdStyle}>INR 24.35 K - 63.4 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  One-time Payment <br /> (One-time Payment includes Admission
                  Fee and security deposit){" "}
                </td>
                <td style={tdStyle}>INR 9.45 K - 19.95 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 45.8 K - 1.03 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Ph.D. fee details 2025</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 3 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (General Day Scholar students (Regular/ Non-sponsored). The
                  total fee also includes Hostel Seat Rent (Rs.1250 per sem)
                  which is mandatory for all Day Scholar students. The tuition
                  fee for 1st sem Sponsored / Part-time students is Rs. 25000 In
                  addition to the above hostel fee, students will have to pay
                  Hostel Caution Money Rs.10000 and Hostel Admission Fee Rs.500
                  )
                </td>
                <td style={tdStyle}>INR 48.55 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Hostel</td>
                <td style={tdStyle}>INR 25.75 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 74.3 K</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>MBA/PGDM fee details 2025</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 1-2 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (Tuition fee is calculated on the basis of 1st semester.
                  Actual amount may vary.)
                </td>
                <td style={tdStyle}>INR 2.8 L - 13.5L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Hostel <br />
                  (Hostel fee is calculated on the basis of 1st semester. Actual
                  amount may vary Meal Plan is included in mentioned fee.)
                </td>
                <td style={tdStyle}>INR 61.44 K - 1.7 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  One-time Payment <br /> (One-time Payment includes Admission
                  Fee and security deposit){" "}
                </td>
                <td style={tdStyle}>INR 19.95 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 3.61 L - 15.4 L</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>M.Des fee details 2025 </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  Tuition <br />
                  (Tuition fee is calculated on the basis of 1st semester.
                  Actual amount may vary.)
                </td>
                <td style={tdStyle}>INR 94.94 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  Hostel <br />
                  (Hostel fee is calculated on the basis of 1st semester. Actual
                  amount may vary Meal Plan is included in mentioned fee.)
                </td>
                <td style={tdStyle}>INR 56.44 K</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 1.51 L</td>
              </tr>
            </tbody>
          </table>
          <p style={pStyle}>
            <i>
              These are estimated fees information. Actual values may differ.{" "}
            </i>
          </p>
        </div>

        <h3 style={th3Style}>MMS fee details 2024</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee components</th>
                <th style={thStyle}>Amount (for 1 years)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  The fees might include components other than tuition fees.
                </td>
                <td style={tdStyle}>INR 5.4 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  One-time Payment includes Registration Fee and Admission Fee
                </td>
                <td style={tdStyle}>INR 2 L</td>
              </tr>
              <tr>
                <td style={tdStyle}>Total fee</td>
                <td style={tdStyle}>INR 7.4 L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          Indian Institute of Technology Kanpur (IITK) offers admission in
          B.Tech, BS, M.Tech, Dual Degrees, MS, M.Sc., M.Des, MBA and many other
          courses are offered. Admission in the IIT Kanpur is done on the basis
          of performance of the candidate in the entrance examination.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur UG Admissions</strong>
        </h3>
        <p style={pStyle}>
          The college offers B.Tech and B.S. at the undergraduate level. All the
          UG Courses are offered in full-time mode only. The details of the IIT
          Kanpur UG eligibility criteria along with the seat intake are given
          below in the tabular format.
        </p>

        <h3 style={th3Style}>IIT Kanpur UG Courses Selection Criteria</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Seat Intake</th>
                <th style={thStyle}>IIT Kanpur Selection Criteria </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.E / B.Tech</td>
                <td style={tdStyle}>53-192</td>
                <td style={tdStyle}>
                  The candidates must have passed 10+2 with Physics, Math’s’ and
                  Chemistry as compulsory subjects +JEE Advanced
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>B.S</td>
                <td style={tdStyle}>28-64</td>
                <td style={tdStyle}>
                  The candidates must have passed 10+2 with Physics, Math’s’ and
                  Chemistry as compulsory subjects +JEE Advanced{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Admission Process</strong>
        </h3>
        <p style={pStyle}>
          Indian Institute of Technology Kanpur UG Admission Process is as
          follows:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates have to meet the IIT Kanpur UG eligibility criteria.
          </li>
          <li style={liStyle}>
            The candidate have to appear and qualify JEE Mains and JEE Advanced
            examinations.
          </li>
          <li style={liStyle}>
            After the declaration of the results, if the candidate meets the
            cutoff then he/she can register for the JoSAA counseling.
          </li>
          <li style={liStyle}>
            Then, the candidate must select IIT Kanpur as the preferred college
            and preference courses must also be filled.
          </li>
          <li style={liStyle}>
            Then seats will be allotted to the candidates based on their
            performance in the entrance examination.
          </li>
          <li style={liStyle}>
            The provisional admission will be confirmed once the candidate
            submits the documents for verification and pays IIT Kanpur fees.
          </li>
        </ul>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur PG Admissions</strong>
        </h3>
        <p style={pStyle}>
          The institute offers M.Tech, M.S., M.Des, M.Sc., and M.B.A. at the
          postgraduate level. The duration of the PG course lasts for 2 years.
        </p>
        <h3 style={th3Style}>IIT Kanpur PG Selection Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>IIT Kanpur Selection Criteria </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "M.Tech",
                  selection_criteria:
                    "The candidate must have 4 years of bachelor’s degree or master's degree in the relevant streams with a minimum 55% mark or 5.5 CPI + valid GATE score.",
                },
                {
                  course: "M.S by Research Cyber Security",
                  selection_criteria:
                    "The candidate must have a minimum of 75% marks/7.5 CPI in B.Sc. or equivalent.  +GATE/ CSIR/JRF/NET/COGJET score ",
                },
                {
                  course: "M.S by Research Aerospace Engineering",
                  selection_criteria:
                    "The candidate must have a bachelor’s degree in Engineering or Science or a master’s degree in Science with a minimum of 55% marks or 5.5 CPI ",
                },
                {
                  course:
                    "M.S by Research Electrical Engineering/M.S by Research Mechanical Engineering",
                  selection_criteria:
                    "The candidate must have a bachelor’s degree in Engineering or Science or a master’s degree in Science with a minimum of 55% marks or 5.5 CPI ",
                },
                {
                  course: "M.S by Research Cognitive Science",
                  selection_criteria:
                    "The candidate must have a B.E/B.Tech/B.S/M.B.B.S with a minimum of 60% marks or 6 CPI.  +GATE/CSIR/JRF/NET/COGJETL",
                },
                {
                  course: "M.Sc.",
                  selection_criteria:
                    "The candidate must have passed a B.Sc. degree in the relevant streams. +Valid JAM",
                },
                {
                  course: "M.Des.",
                  selection_criteria:
                    "The candidate must have a bachelor's degree in engineering or a 4-year bachelor's degree in science, Design or Architecture with a minimum of 55% marks or 5.5 CPI  +valid GATE/CEED score",
                },
                {
                  course: "M.B.A",
                  selection_criteria:
                    "The candidates must have a Bachelor's degree in Engineering with a minimum 60 per cent mark/6.0 CPI. +Valid CAT score ",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.selection_criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur Admission Process: M.Tech and M.S</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur PG eligibility criteria.
          </li>
          <li style={liStyle}>
            The candidate has to apply and qualify for the GATE examination.{" "}
          </li>
          <li style={liStyle}>
            If the candidate meets the GATE cutoff then the candidate should
            register for counseling conducted by COAP.
          </li>
          <li style={liStyle}>
            Then the candidate must select IIT Kanpur as the preferred
            institute.
          </li>
          <li style={liStyle}>
            Some of the candidates can also be called for written tests and
            interviews.
          </li>
          <li style={liStyle}>
            For the candidates with M.B.B.S. degrees as well as for the B.Tech.
            Graduates from IITs with a minimum overall CPI of 6.5 and a minimum
            CPI of 8.0 in the last two years in B.Tech are exempted from GATE.
          </li>
          <li style={liStyle}>
            Then seat allocation will be done based on the performance of the
            candidate in the entrance examination.
          </li>
          <li style={liStyle}>
            Finally, the candidates must submit the documents for verification
            and pay IITK fees.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur M.Des Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur M.Des eligibility criteria.
          </li>
          <li style={liStyle}>
            The candidate has to apply and qualify for the CEED examination.
          </li>
          <li style={liStyle}>
            If the candidate meets the CEED Cutoff then the candidate can apply
            for the counseling process.{" "}
          </li>
          <li style={liStyle}>
            Then the candidate must select IIT Kanpur as the preferred
            institute.
          </li>
          <li style={liStyle}>
            Some of the candidates can also be called for written tests and
            interviews.
          </li>
          <li style={liStyle}>
            Then seat allocation will be done based on the performance of the
            candidate in the entrance examination.
          </li>
          <li style={liStyle}>
            Finally, the candidates must submit the documents for verification
            and pay fees to complete the IIT Kanpur admission procedure.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur M.B.A. Admission Process </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur M.B.A eligibility criteria.
          </li>
          <li style={liStyle}>
            The candidates have to appear and meet the IIT Kanpur CAT cutoff.
          </li>
          <li style={liStyle}>
            Then the shortlisted candidates participate in interviews and/ or
            group discussions.
          </li>
          <li style={liStyle}>
            The final IIT Kanpur admissions are done based on the performance in
            CAT and interview and/or group discussions.
          </li>
          <li style={liStyle}>
            At last, the candidates must submit their documents for verification
            and pay IIT Kanpur fees.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur M.Sc. Admission Process </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur M.Sc. eligibility criteria.
          </li>
          <li style={liStyle}>
            Then the candidates must appear and qualify for the JAM examination.
          </li>
          <li style={liStyle}>
            If the candidates meet the cutoff, then the candidate must apply for
            admission by filling out the online admission form.
          </li>
          <li style={liStyle}>
            The IIT Kanpur admissions are done based on the performance of the
            candidate in the JAM.
          </li>
          <li style={liStyle}>
            At last, the candidates must submit their documents for verification
            and pay IIT Kanpur fees.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur Dual Degree Admissions 2025</strong>
        </h3>

        <p style={pStyle}>
          The institute offers dual degrees like M.Sc. and Ph.D in Physics, B.S.
          and M.B.A., B.Tech and M.Tech and many more. The duration of the dual
          courses lasts for 5 years.
        </p>

        <h3 style={th3Style}>IIT Kanpur Dual Degree Selection Criteria</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>IIT Kanpur Selection Criteria </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.S / M.S</td>
                <td style={tdStyle}>
                  The candidate must have qualified 10+2 or equivalent. + JEE
                  Advanced
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>B.Tech / M.Tech</td>
                <td style={tdStyle}>
                  The candidate must have qualified 10+2 or equivalent. + JEE
                  Advanced
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Sc. / Ph.D. Physics </td>
                <td style={tdStyle}>
                  The candidate must have B.Sc. degree in the relevant stream. +
                  Valid JAM score
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>
            Indian Institute of Technology Kanpur Admission Process: B.S. M.S
            and B.Tech M.Tech
          </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur eligibility criteria.
          </li>
          <li style={liStyle}>
            Then the candidates must appear and qualify for the JEE Advanced
            examination.
          </li>
          <li style={liStyle}>
            And after the declaration of the results if the candidate meets the
            cutoff then he/she can register for the JoSAA counseling.
          </li>
          <li style={liStyle}>
            Then the candidate must select IIT Kanpur as the preferred institute
            and preference courses must also be filled.
          </li>
          <li style={liStyle}>
            Then seats will be allotted to the candidates based on their
            performance in the entrance examination.
          </li>
          <li style={liStyle}>
            The provisional admission will be confirmed once the candidate
            submits the documents for verification and pay IIT Kanpur admission
            fees.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur M.Sc. Ph.D. Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur eligibility criteria.
          </li>
          <li style={liStyle}>
            Then the candidates must appear and qualify for the JAM examination.
          </li>
          <li style={liStyle}>
            If the candidates meet the cutoff, then the candidate must apply for
            admission by filling out the online admission form.{" "}
          </li>
          <li style={liStyle}>
            The IIT Kanpur B.S. M.Sc. selection process is done based on the
            performance of the candidate in the JAM.
          </li>
          <li style={liStyle}>
            Finally, the selected candidates must submit the documents for
            verification and pay IIT Kanpur admission fees.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur Ph.D. Admissions 2025</strong>
        </h3>

        <p style={pStyle}>
          The institute offers 18 courses at the doctoral level. All the Ph.D.
          courses are offered in full-time mode and the courses last for 6
          years.
        </p>

        <h3 style={th3Style}>IIT Kanpur PhD Selection Criteria </h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>IIT Kanpur Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "Ph.D. Engineering ",
                  eligibility_criteria:
                    "The candidate must have a Master’s Degree in Engineering with a minimum 55% mark or 5.5 CPI  Or The candidate must have a Master’s Degree in Science with a minimum 65% marks or 6.5 CPI and first division in bachelor's degree and JRF/ GATE with 95 percentile or higher.",
                },
                {
                  course: "Ph.D. Biological Sciences and Bioengineering",
                  eligibility_criteria:
                    "The candidate must have passed the master’s degree or bachelor’s degree with a minimum 75% mark/7.5 CPI ",
                },
                {
                  course: "Ph.D. Sciences",
                  eligibility_criteria:
                    "The candidate must have passed the master’s degree or bachelor’s degree in Engineering or Science with a minimum 55% mark or 5.5 CPI",
                },
                {
                  course: "Ph.D. Humanities and Social Sciences",
                  eligibility_criteria:
                    "The candidate must have passed a master’s degree in the relevant streams with a minimum of 55% mark or 5.5 CPI",
                },
                {
                  course: "Ph.D. Design",
                  eligibility_criteria:
                    "The candidate must have passed a master’s degree in the relevant streams with a minimum of 55% mark or 5.5 CPI",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.eligibility_criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur Ph.D. Admission Process </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            The candidates must meet the IIT Kanpur eligibility criteria.
          </li>
          <li style={liStyle}>
            Then the candidates must appear for the GATE/UGC/CSIR.
          </li>
          <li style={liStyle}>
            The shortlisted candidates should then appear for the interview.
          </li>
          <li style={liStyle}>
            The IIT Kanpur admissions are done based on the performance of the
            candidate in the written test and interview.
          </li>
          <li style={liStyle}>
            At last, the candidates must submit their documents for verification
            and pay IIT Kanpur fees.
          </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>
            Indian Institute of Technology Kanpur Admissions- Document Required
          </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Passport size photograph</li>
          <li style={liStyle}>Degree certificate </li>
          <li style={liStyle}>10th marks sheet</li>
          <li style={liStyle}>12th marks sheet</li>
          <li style={liStyle}>Scorecard of the Entrance Examination</li>
          <li style={liStyle}>Caste certificate</li>
        </ul>
        <p style={pStyle}>
          The above-mentioned documents must be submitted for verification to
          conform to IIT Kanpur admission.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur Application Process 2025</strong>
        </h3>
        <p style={pStyle}>
          The application process for all the courses offered by IIT Kanpur is
          different. Interested students must ensure that they satisfy the basic
          eligibility criteria before applying for the desired programme. IIT
          Kanpur application process for all of the courses is as follows:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            B.Tech and BSc/ BS aspirants must fill out the application form for
            JEE (Main) through the official website of the National Testing
            Agency (NTA) (nta.ac.in). The application fee for boys is INR 625
            and INR 325 for girls.
          </li>
          <li style={liStyle}>
            {" "}
            M.Tech candidates are required to register for GATE through the
            official website of GATE Online Application Processing System
            (GOAPS) (appsgate.iitd.ac.in). The application fee for boys is INR
            1,500 and INR 750 for girls.{" "}
          </li>
          <li style={liStyle}>
            For MSc, candidates need to register for IIT JAM through the
            official website (iitr.ac.in). The application fee for others is INR
            1,800 for others and INR 900 for female (all categories)/ SC/ ST/
            PwD for one test paper.{" "}
          </li>
          <li style={liStyle}>
            The aspirants of M.Des need to apply for CEED before submitting an
            application form at the institute. The candidates also need to
            submit several supporting documents and an application fee during
            the application process. The application fee for boys is INR 3,200
            and INR 1,600 for girls.
          </li>
          <li style={liStyle}>
            For MBA and PhD, candidates are required to apply via the official
            website of IIT Kanpur.
          </li>
        </ul>

        <p style={pStyle}>
          Check the steps below to know about IIT Kanpur application process:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Passport size photograph</li>
          <li style={liStyle}>Degree certificate </li>
          <li style={liStyle}>10th marks sheet</li>
          <li style={liStyle}>12th marks sheet</li>
          <li style={liStyle}>Scorecard of the Entrance Examination</li>
          <li style={liStyle}>Caste certificate</li>
        </ul>
        <p style={pStyle}>
          The above-mentioned documents must be submitted for verification to
          conform to IIT Kanpur admission.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kanpur Application Process 2025</strong>
        </h3>
        <p style={pStyle}>
          The application process for all the courses offered by IIT Kanpur is
          different. Interested students must ensure that they satisfy the basic
          eligibility criteria before applying for the desired programme. IIT
          Kanpur application process for all of the courses is as follows:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Step 1:</strong> Visit the official website of IIT Kanpur
            and click on 'Apply Now' when the applications are available.
          </li>
          <li style={liStyle}>
            <strong>Step 2:</strong>Fill in all the personal and educational
            details in the application form after registration.
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>PhD Application Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>General</td>
                    <td style={tdStyle}>INR 500</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      SC/ ST/ EWS/ DAP (Differently Abled Person){" "}
                    </td>
                    <td style={tdStyle}>INR 250</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li style={liStyle}>
            <strong>Step 3:</strong> Upload the required documents.
          </li>
          <li style={liStyle}>
            <strong>Step 4: </strong> Pay the application fee (mentioned in the
            below table)
            <div style={{ overflowX: "auto" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Category</th>
                    <th style={thStyle}>MBA Application Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tdStyle}>General</td>
                    <td style={tdStyle}>INR 1600</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>
                      SC/ ST/ EWS/ DAP (Differently Abled Person){" "}
                    </td>
                    <td style={tdStyle}>INR 800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
