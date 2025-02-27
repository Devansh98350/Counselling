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
        <h2 style={h2Style}>About IIT Bombay</h2>
        <p style={pStyle}>
          Indian institute of technology Bombay IIT Bombay is also known as IIT Bombay or IITMumbai.it was
          established in 1958. IIT Bombay is an autonomous institute .It is the first public college which is laid its
          foundation with assistance from UNESCO. In 1961, It was declared as an institute of national importance by
          the government of India .it is declared as deemed university. <br /> <br />
          IIT Bombay consistently ranked among the top technical universities in India and globally as well .IIT Mumbai
          is recognized by UGC and AICTE. IIT Bombay is ranked 149 by the QS world university ranking 2024, an
          118th QS ranking 2025. IIT Bombay ranked 3rd by the NIRF in 2023. <br /> <br />
          Iit Bombay offers degree and dual degree programmes at the UG, PG, and doctoral levels like At the
          undergraduate level, Indian Institute of Technology Bombay offers B.Tech, B.Tech + M.Tech, B.Sc. & B.Des
          whereas at the postgraduate level, it offers M.Tech, M.Tech + PhD, M.Des, MBA, MA + PhD, M.Sc. + PhD etc.
          It also offers PhD in a variety of disciplines. In total, it offers 80+ courses via its 17 departments in the stream
          of engineering, science, technology and management. <br /><br />
          FOR ADMISSSION applicant, first have to give national level entrance level exam. They have to give exam for
          different course like JEE advance, GATE, Jam , UCEED, respectively.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          IIT  Bombay offers wide range of course .some of the programs include like B.Tech, m tech B.Des, , B.Tech +
          M.Tech, B.Sc., , M.Tech + PhD, M.Des, MBA, MA + PhD, M.Sc. + PhD etc. <br />
          Besides, IIT Bombay also offers short-term certificate online courses like Object-oriented Programming,
          Programming Basics, etc.
          The student who want to take admission in B.Tech, B.S. and B.Tech + M.Tech integrated programme they
          have to pass the JEE Advance. Just like that who want to take admission in MS, ma they first need to qualify
          gate exam etc.
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
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>No. of courses</th>
                <th style={thStyle}>Tuition fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "B.Sc", number: 3, tuition: "INR 1.2L-8L" },
                { course: "B.E./B.Tech", number: 27, tuition: "INR 8L-20L" },
                { course: "M.E./M.Tech", number: 74, tuition: "INR 1.2K-10L" },
                { course: "M.Sc.", number: 11, tuition: "INR 75K-10L" },
                { course: "M.A.", number: 4, tuition: "INR 2.7L-8.5L" },
                { course: "Certificate", number: 21, tuition: "INR 32K-80K" },
                { course: "MBA/PGDM", number: 2, tuition: "INR 2.69L-20L" },
                { course: "Executive MBA/PGDM", number: 2, tuition: "INR 13L-42.5L" },
                { course: "M.S.", number: 3, tuition: "INR 2.2L" },
                { course: "PG Diploma", number: 1, tuition: "--" },
                { course: "Ph.D.", number: 25, tuition: "INR 21.25K-9.43L" },
                { course: "M.Des", number: 5, tuition: "INR 2.69L" },
                { course: "B.Des", number: 2, tuition: "INR 8L-11.56L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.number}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Bombay Fee 2024: Affordability & ROI </strong>
        </h3>

        <p style={pStyle}>IIT Bombay fees is a sum of multiple components. Out of the total fee, some are one-time paid while others
          are paid semester-wise. Caution deposit is a refundable amount that is returned to the students after
          completion of the degree. Fee is a concern for many students while joining a college, especially the ones like
          IITs. While the availability of education loans and scholarships has made education accessible but the terms
          and conditions need to become eligible for a student loan or a scholarship often stand as a barrier. Below
          is IIT Bombay fee for all courses:
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
                <th style={thStyle}>Course Name</th>
                <th style={thStyle}>Tuition Fee (Investment)</th>
                <th style={thStyle}>Average Package (Return)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { course: "B.Tech", tuition: "INR 8 lakh", package: "INR 13 lakh - INR 26.6 lakh" },
                { course: "BS", tuition: "INR 8 lakh", package: "INR 18.8 lakh" },
                { course: "MA", tuition: "INR 1.20 lakh - INR 3.54 lakh", package: "INR 16.6 lakh" },
                { course: "M.Tech", tuition: "INR 1.20 lakh", package: "INR 13 lakh - INR 20 lakh" },
                { course: "MBA", tuition: "INR 8 lakh", package: "INR 25.8 lakh - INR 26.6 lakh" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                  <td style={tdStyle}>{row.package}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>We all know that IIT Bombay take admission in the national level exams like JEE Mains, JEE advance ,GATE
          but all this is for different courses .you can see the brief detail in the given below table:
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
                <th style={thStyle}>Entrance exam accepted</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  program: "B.Tech/ B.Tech-M.Tech",
                  entrance: "JEE Advanced ",
                },
                {
                  program: "B.Des",
                  entrance: "UCEED",
                },
                {
                  program: "M.Des",
                  entrance: "CEED",
                },
                {
                  program: "B.Sc.",
                  entrance: "IIT JAM",
                },
                {
                  program: "M.Tech",
                  entrance: "GATE",
                },
                {
                  program: "M.Sc.",
                  entrance: "IIT JAM",
                },
                {
                  program: "MBA",
                  entrance: "CAT",
                },
                {
                  program: "PHD",
                  entrance: "Gate/UGC-NET/CSIR-NET/ICAR or ICMR ",
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
          <strong>Process to fill IIT Bombay application form</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>First you have visit the official site of the IIT Bombay.</li>
          <li style={liStyle}>Then download and fill out the IIT Bombay form with all the details requires.</li>
          <li style={liStyle}>Scan and upload the documents to proceed to the next step of the IIT Bombay application process.</li>
          <li style={liStyle}>Submit the application form by paying the fees of IIT Bombay.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Bombay admission process</strong>
        </h3>

        <p style={pStyle}>Indian institute of technology Bombay offers admission to B.Tech, tech, MBA, M.Sc., MS, and other courses
          also. But first you have to qualify the national level entrance exam such as JEE Main, JEE Advanced, GATE,
          CEED, MET IIT JAM CAT etc. for various exam. <br /> <br />
          The institute offers B.Tech, BS, B.Des and B.Tech M.Tech Integrated courses at the undergraduate level.  The
          duration of B.Tech, B.Des and BE courses is 4 years. On the other hand, B.Tech M.Tech Integrated courses
          are of 5 years duration <br /> <br />
          The most opted course at IITB includes B.Tech & MBA. <br />
          <ul style={ulStyle}>
            <li style={liStyle}>For admission to its B.Tech program, IITB accepts JEE-Main followed by JEE-Advanced + JoSAA
              Counseling.</li>
            <li style={liStyle}>M.Tech Admissions at IITB are done based on a valid GATE Score + COAP Counseling followed by a
              Written Test and/or Interview.</li>
            <li style={liStyle}>Similarly for MBA Admission, IIT Mumbai accepts valid CAT scores followed by Group Discussion &
              Interview Round. </li>
            <li style={liStyle}>The institute counts on UCEED & CEED scores for B.Des & M.Des Admissions. </li>
            <li style={liStyle}>GATE/ UGC-NET/ CSIR-NET/ ICAR or ICMR score followed by Written Test and Interview are
              accepted for Ph.D. admission. The applications for PhD Admission are accepted around the year at
              IITB. However, they are processed twice a year (i.e. Autumn Semester (July session) and Spring
              Semester (January session)).</li>
          </ul>
          There are certain eligibility criteria and selection processes of some popular course are in the below tabulate
          are:-
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
                <th style={thStyle}>1st Year Fees</th>
                <th style={thStyle}>Eligibility</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.Tech",
                  fees: "INR 2.31 lakhs",
                  eligibility: "A minimum of 75% aggregate in 10+2 with PCM.",
                  selection: "JEE Advanced Scores + JoSAA Counseling.",
                },
                {
                  course: "B.Tech + M.Tech",
                  fees: "INR 2.30 lakhs",
                  eligibility: "Passed 10+2 with 60% aggregate marks (55% for SC/ST/PWD).",
                  selection: "JEE Advanced Scores + JoSAA Counseling.",
                },
                {
                  course: "B.Sc",
                  fees: "INR 2.31 lakhs",
                  eligibility: "Bachelor’s degree in respective discipline with minimum 55% aggregate marks.",
                  selection: "IIT JAM + JOAPS Counseling.",
                },
                {
                  course: "B.Des",
                  fees: "INR 2.30 lakhs",
                  eligibility: "Passed 10+2.",
                  selection: "UCEED Scores + Counseling.",
                },
                {
                  course: "MBA",
                  fees: "INR 4.29 lakhs",
                  eligibility: "Master's degree in the relevant discipline with at least 60% marks (55% for SC/ST/PWD).",
                  selection: "CAT Scores + Group Discussion + Interview Round.",
                },
                {
                  course: "M.Tech",
                  fees: "INR 59,300",
                  eligibility: "Bachelor’s degree in the relevant discipline with at least 60% marks (55% for SC/ST/PWD).",
                  selection: "GATE Score + COAP Counseling followed by Written Test and/or Interview.",
                },
                {
                  course: "M.Des",
                  fees: "INR 59,300",
                  eligibility: "A minimum of 55% marks (50% for SC/ST/PWD) or equivalent grades in the qualifying degree.",
                  selection: "CEED Score followed by Other Tests and/or Interview.",
                },
                {
                  course: "MA + PhD",
                  fees: "INR 44,300",
                  eligibility: "Bachelor’s degree in the relevant discipline with at least 60% marks (55% for SC/ST/PWD).",
                  selection: "DEEP (Dual-degree Entrance Examination in Philosophy).",
                },
                {
                  course: "PhD",
                  fees: "INR 39,700",
                  eligibility:
                    "M.E/M.Tech or MD degree with at least 60% (55% for SC/ST/PH) in aggregate OR 60% (55% for SC/ST/PH) marks in MBBS/ M.Sc./ MBA/ MA OR Minimum 70% marks in B.E/B.Tech.",
                  selection: "GATE/ UGC-NET/ CSIR-NET/ ICAR or ICMR score + Written Test and Interview.",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.fees}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                  <td style={tdStyle}>{row.selection}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default About;
