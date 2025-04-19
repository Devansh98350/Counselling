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
        <h2 style={h2Style}>About IIT Kharagpur</h2>
        <p style={pStyle}>
          IIT Kharagpur is also known as Indian institute of technology Kharagpur or IIT
          KGP. It was established in 1951 by the Ministry of Human Resources
          Development, GOI.IIT KGP is recognized as an Institute of National Importance,
          ranking 6th among the Top Engineering Colleges in India according to the NIRF
          2023 report. IIT Kharagpur offers multiple courses at undergraduate,
          postgraduate, and doctoral level courses. The total number of IIT Kharagpur
          courses is around 491. IIT Kharagpur is the fourth oldest technical
          institute in West Bengal. <br />
          IIT Kharagpur is popular for its 4-year B.Tech program offered via JEE advanced
          score followed by JoSAA counselling. The B.Tech course is offered in 15
          streams. The cutoff for B.Tech at IIT KGP ranges from 261 to 19542 for the
          general category students. IIT Kharagpur Placements 2024 (Second Phase) is
          over now and 6 students have already received an annual CTC exceeding INR 1
          Crore. Some of the top recruiters of IIT KGP are Apple, Airbus, McKinsey, EXL
          Services, Google, DE Shaw, etc. <br />
          Candidates seeking IIT Kharagpur admission must meet the eligibility criteria for
          the desired course. IIT Kharagpur course includes B.E/B.Tech, BS MS, B.Tech
          M.Tech, MBA, LLM, M.E/M.Tech and many others. Before applying for IIT
          Kharagpur admission, the candidate has to appear for the appropriate entrance
          examination including JEE advanced/GATE/JAM. The candidates will be
          shortlisted for IIT Kharagpur admissions based on the scores secured in the
          entrance examination. IIT Kharagpur fee structure varies from course to course. <br />
          IIT Kharagpur offers scholarships to deserving students. The various IIT
          Kharagpur scholarships are offered in the form of financial assistance so that
          deserving students can get a quality education without having to worry about the
          lack of funds. <br />
          The University of Warwick (WMG), National Tsing Hua University (NTHU),
          Purdue University, and the University of Torino have entered into collaborative
          agreements with the Indian Institute of Technology, Kharagpur. IIT KGP is
          famous for B.Tech, and M.Tech courses. The academic session in the college is
          divided broadly into two semesters. Each has approximately 20 weeks of
          duration: a Spring Semester (January-April) and an Autumn Semester (July
          November). IIT Kharagpur admissions are entrance-based. For admission to its
          flagship B.Tech programme, the institute accepts JEE Advanced scores. <br />
          Indian Institute of Technology Kharagpur has collaborated with various
          international universities for Training Programs, Semester Exchange Programs,
          Joint Doctoral Programs, etc. The institute has signed 10 academic
          collaborations with organizations like ONGC Limited, Tata Medical Centre
          Kolkata, DRDO, etc.
        </p>

      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          IIT Kharagpur offers various courses to students based on merit in the national
          level examinations. The examinations accepted for admission include JEE
          Advanced, IIT JAM, GATE, and CAT. IIT Kharagpur offers B.Tech, B.Arch.,
          BS+MS, B.Sc.-B.Ed., at the undergraduate level. It offers M.Tech, LL.B., LL.M.,
          MCP, MBA, EMBA, MHRM, MMST and PGDBA at the PG level. For research
          applicants, IIT KGP provides Ph.D., MS, and MIPA programs. The institute also
          offers Integrated M.Sc. courses. <br />
          IIT Kharagpur courses are offered in Engineering and Architecture, Computer
          Application and IT, Sciences, Commerce, Animation and Design, Management
          and Business Administration and many other streams. The candidate must meet
          the IIT Kharagpur eligibility criteria for the desired course before applying for
          admission. The details of the IIT Kharagpur fees and eligibility criteria for the
          available courses are given below.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Selection Criteria</th>
                <th style={thStyle}>Tuition Fees (First Year)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.Tech", "10+2 (PCM) with 75% marks (65% for reserved category)", "JEE Mains + JoSAA Counselling", "INR 2.24 Lakhs"],
                ["M.Tech", "Graduation with 60% marks (5% relaxation for other categories)", "GATE + COAP Counselling", "INR 27,650"],
                ["MBA", "Graduation with 60% marks", "CAT + GD + PI", "INR 5 Lakhs"],
                ["M.Sc", "Graduation with 55% (Gen, NC-OBC) and 50% (others)", "IIT JAM + JOAPS Counselling", "INR 82,600"],
                ["LL.B.", "Graduation in a relevant discipline", "IIT Kharagpur LLB Entrance Test", "INR 1.24 Lakhs"],
                ["LL.M.", "Passed LL.B.", "IIT KGP LLM Entrance Test (CBT + PI)", "INR 2.80 Lakhs"],
                ["B.Arch", "10+2 (PCM) with 75% marks (65% for reserved category)", "JEE Main + JEE Advanced + JoSAA Counselling", "-"],
                ["B.Sc", "Class 12 with 75% aggregate", "JEE Main + JEE Advanced + JoSAA Counselling", "-"],
                ["Ph.D.", "Post-graduation with at least 60% marks (5% relaxation for reserved categories)", "GATE/UGC-NET/CSIR-NET/INSPIRE/ICAR/ICMR score OR Written Test and Interview", "INR 50,000"],
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

        <br />

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.Tech", "JEE Mains + JoSAA Counselling"],
                ["M.Tech", "GATE + COAP Counselling"],
                ["MBA", "CAT + GD + PI"],
                ["M.Sc", "IIT JAM + JOAPS Counselling"],
                ["LL.B.", "IIT Kharagpur LLB Entrance Test"],
                ["LL.M.", "IIT KGP LLM Entrance Test"],
                ["Ph.D.", "GATE/UGC-NET/CSIR-NET/INSPIRE/ICAR/ICMR score OR Written Test and Interview"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
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
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Entrance Exam</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.Tech", "JEE Main followed by JEE Advanced"],
                ["M.Tech", "GATE"],
                ["M.Sc", "IIT JAM"],
                ["MBA", "CAT"],
                ["LL.B. / LL.M.", "IIT Kharagpur Entrance Test"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
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
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Number of Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.E. / B.Tech", "67 courses"],
                ["M.E. / M.Tech", "118 courses"],
                ["B.Sc.", "13 courses"],
                ["M.Sc.", "28 courses"],
                ["MBA/PGDM", "3 courses"],
                ["Ph.D.", "15 courses"],
                ["B.Arch.", "1 course"],
                ["LL.M", "7 course"],
                ["M.Plan", "1 course"],
                ["M.Arch.", "2 courses"],
                ["Executive MBA/PGDM", "1 courses"],
                ["MMRT", "1 course"],
                ["M.A.", "1 course"],
                ["PG Diploma", "1 courses"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Tuition Fees for Popular Courses at IIT KGP</h3>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Tuition Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.Tech", "INR 8 lakh – INR 10 lakh"],
                ["M.Tech", "INR 20,000 – INR 10 lakh"],
                ["MBA", "INR 3 lakh – INR 25 lakh"],
                ["MSc", "INR 42,700 – INR 10 lakh"],
                ["Executive MBA", "INR 6 lakh"],
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
          <strong>List of others IITs with Fee Structure</strong>
        </h3>
        <p style={pStyle}>Students can check the table below to know about the fee range of some of
          the Top IITs in India. </p>

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>College Names</th>
                <th style={thStyle}>UG Fees</th>
                <th style={thStyle}>PG Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["IIT Delhi", "Rs. 8,55,000 to Rs. 9,02,000", "Rs. 61,750 to Rs. 12,10,000"],
                ["IIT Banaras", "Rs. 8,58,000 to Rs. 10,76,000", "Rs. 55,380"],
                ["IIT Indore", "Rs. 8,48,000", "Rs. 1,29,000 to Rs. 2,68,000"],
                ["IIT Mandi", "Rs. 8,61,000", "Rs. 75,500 to Rs. 9,00,000"],
                ["IIT Jodhpur", "Rs. 2,44,000 - 10,22,000", "Rs. 1,39,000 - Rs. 25,000"],
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
          <strong>Breakdown of some of the famous course of the IIT KGP</strong>
        </h3>

        <ul style={ulStyle}>
          <li style={liStyle}>B.Tech Fee Breakdown <br />
            <p style={pStyle}>IIT Kharagpur B.Tech courses fee ranges between INR 9, 38,700 and INR 11,
              70,450. The table given below mentions IIT Kharagpur B.Tech (Hons) and
              integrated courses fee breakdown for the 2022-2026 batches:</p>

            <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Course Name</th>
                    <th style={thStyle}>Tuition Fee</th>
                    <th style={thStyle}>Hostel Fee</th>
                    <th style={thStyle}>One-Time Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["B.Tech Hons (for all specializations)", "INR 8 lakh", "INR 1.32 lakh", "INR 6,700"],
                    ["B.Tech + M.Tech (for all specializations)", "INR 10 lakh", "INR 1.64 lakh", "INR 6,700"],
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
          </li>
          <li style={liStyle}>M.Tech Fee Breakdown <br />
            <p style={pStyle}>IIT Kharagpur M.Tech course fee is the same for all the specializations. The table
              below presents the fee breakdown for the 2023-2025:</p>

            <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Course Name</th>
                    <th style={thStyle}>Tuition Fee</th>
                    <th style={thStyle}>Hostel Fee</th>
                    <th style={thStyle}>One-Time Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["M.Tech (For all specializations)", "INR 20,000", "INR 1.18 lakh", "INR 6,000"],
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
          </li>

          <li style={liStyle}>BSc and Integrated BSc Fee Breakdown <br />
            <p style={pStyle}>The fee for IIT Kharagpur BSc programmes ranges between INR 8 lakh and INR
              10 lakh. It varies for BSc regular and integrated courses. Candidates can check
              the IIT-Kharagpur BSc fee breakup released in AY 2021 and 2022 from the table
              given below:</p>

            <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Course Name</th>
                    <th style={thStyle}>Tuition Fee</th>
                    <th style={thStyle}>Hostel Fee</th>
                    <th style={thStyle}>One-Time Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["B.Sc. (for all specializations) ", "INR 8 lakh", "INR 1.32 lakh", "INR 6,700"],
                    ["Integrated BSc (Hons) + MSc (for all specializations) ", "INR 10 lakh", "INR 1.64 lakh", "INR 6,700"],
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
          </li>

          <li style={liStyle}>Integrated MSc Fee Breakdown<br />
            <p style={pStyle}>The fee breakup for the IIT Kharagpur MSc 2022-2024 batch: </p>

            <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={thStyle}>Course Name</th>
                    <th style={thStyle}>Tuition Fee</th>
                    <th style={thStyle}>Hostel Fee</th>
                    <th style={thStyle}>One-Time Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["M.Sc. + PhD (for all specializations) ", "INR 42,655", "INR 9.35 lakh", "INR 9,100"],
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
          </li>
        </ul>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Application Process for  IIT Kharagpur 2024</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates should register by visiting the official website of the institute. </li>
          <li style={liStyle}>The applicants should read the instructions carefully and fill out the details in
            the IIT Kharagpur application form.</li>
          <li style={liStyle}>The applicant should submit the required documents.</li>
          <li style={liStyle}>To complete the application procedure the candidate should pay the IIT
            Kharagpur application fee. </li>
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Documents Required for IIT Kharagpur admission</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>Qualifying examination mark sheet </li>
          <li style={liStyle}>Entrance exam scorecard</li>
          <li style={liStyle}>ID proof </li>
          <li style={liStyle}>Birth certificate </li>
          <li style={liStyle}>Passport size photographs</li>
          <li style={liStyle}>Transfer certificates </li>
        </ul>
        <p style={pStyle}>IIT Kharagpur has reserved 15% of seats for SC applicants and 7.5% for ST
          students. Additionally, 27% of seats are reserved for OBC applicants. Candidates
          can apply online to the official website for their preferred course. <br />
          IIT Kharagpur divides academic sessions into two semesters each having
          duration of approximately 20 weeks. The autumn semester of IIT KGP is
          conducted between July to November and the spring semester is from January to
          April. </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Tech Admission</strong>
        </h3>
        <p style={pStyle}>IIT Kharagpur offers a 4-year B.Tech program in 15 different specializations.
          Candidates who are willing to get admission in the B.Tech program have to clear
          the JEE Main exam followed by JEE Advanced examination. Further, the
          students have to register themselves for the JoSAA counselling to reserve a seat
          at the institute. The fees for 4yrs B.Tech is INR 8.96 Lakhs. Some of the most
          popular specializations at IIT KGP are CSE, Aerospace Engineering, Civil
          Engineering, Chemical Engineering, Electrical Engineering, etc.  </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Tech Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following eligibility criteria to apply for B.Tech at IIT
          KGP:
          <ul style={ulStyle}>
            <li style={liStyle}>Candidates must have passed Class X exams with at least 60% marks (5%
              relaxation to SC/ ST/ PwD candidates). </li>
            <li style={liStyle}>Candidates must have passed Class XII with 75% marks in Physics,
              Chemistry and Mathematics (5% relaxation to SC/ ST/ PwD candidates). </li>
          </ul>
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Tech Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following selection criteria for B.Tech admission at IIT
          KGP:
          <ul style={ulStyle}>
            <li style={liStyle}>Candidates have to appear for JEE Main exam first to be eligible for JEE
              Advanced which forms the basis of admission to B.Tech at IIT Kharagpur. </li>
            <li style={liStyle}>Students who secure a rank up to 2, 50,000 in JEE Main (B.Tech) can apply
              for JEE Advanced.</li>
            <li style={liStyle}>Those who have been earlier admitted to IIT or have accepted a seat in IIT
              last year are not eligible to apply for JEE Advanced. </li>
            <li style={liStyle}>Candidate must be born on or after October 1, 1999. </li>
            <li style={liStyle}> The minimum qualifying cutoff for JEE Advanced 2024 is 35% for CRL.</li>
            <li style={liStyle}>Once the exam is qualified, the candidate must appear for JoSAA counselling
              to get a seat at IIT Kharagpur.</li>
          </ul>
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Integrated B.Tech + M.Tech Admission</strong>
        </h3>
        <p style={pStyle}>IIT Kharagpur offers an Integrated B.Tech-M.Tech program in 15 different
          specializations for 5 years. Candidates must have appeared for the JEE
          Advanced exam to be eligible for admission to the B.Tech+ M.Tech program. The
          first year fees for IIT KGP Dual Degree B.Tech-M.Tech course is INR 2, 23,600.</p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Tech-M.Tech Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following eligibility criteria to apply for B.Tech-M.Tech
          at IIT KGP:
          <ul style={ulStyle}>
            <li style={liStyle}>Candidates must have passed Class X exams with at least 60% marks (5%
              relaxation to SC/ ST/ PwD candidates).</li>
            <li style={liStyle}>Candidates must have passed Class XII with 75% marks in Physics,
              Chemistry and Mathematics (5% relaxation to SC/ ST/ PwD candidates).</li>
          </ul>
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Tech-M.Tech Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following selection criteria for admission to B.Tech
          M.Tech at IIT KGP:
          <ul style={ulStyle}>
            <li style={liStyle}>Candidates have to appear for JEE Main exam first to be eligible for JEE
              Advanced which forms the basis of admission to B.Tech-M.Tech at IIT
              Kharagpur. </li>
            <li style={liStyle}>Students who secure a rank up to 2, 50,000 in JEE Main (B.Tech) can apply
              for JEE Advanced. </li>
            <li style={liStyle}>Those who have been earlier admitted to IIT or have accepted a seat in IIT
              last year are not eligible to apply for JEE Advanced. </li>
            <li style={liStyle}> Candidate must be born on or after October 1, 1999. </li>
            <li style={liStyle}>The minimum qualifying cutoff for JEE Advanced 2024 is 35% for CRL.
            </li>
            <li style={liStyle}>Once the exam is qualified, the candidate must appear for JoSAA
              counselling to get a seat at IIT Kharagpur. </li>
          </ul>
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Tech Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur M.Tech program is offered at the PG level in 54 different specializations. The institute accepts GATE scores to allow admission to this program. Also, candidates are required to register themselves for the COAP counselling for the seat allocation process.
        </p>
        <p style={pStyle}>
          IIT KGP has recently launched three new specializations for M.Tech applicants as follows:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}><strong>Artificial Intelligence</strong></li>
          <li style={liStyle}><strong>Safety Engineering and Analytics</strong></li>
          <li style={liStyle}><strong>Operations Research and Data Analytics</strong></li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Tech Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following eligibility criteria to apply for M.Tech at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Passed Bachelor's Degree in Engineering/ Technology/ Architecture/ M.Sc. or equivalent professional degrees (AMIE etc.) with a minimum aggregate of 60%.</li>
          <li style={liStyle}>SC/ST/PwD category students are given a relaxation of 5%.</li>
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Tech Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following selection criteria to apply for M.Tech at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>The final selection will be based on GATE scores.</li>
          <li style={liStyle}>For seat allocation, candidates must apply for COAP counselling.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Sc. Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur offers admission to a two-year M.Sc. course under the Joint M.Sc.-Ph.D. program. Students must qualify for IIT JAM for admission to this course.
        </p>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Sc. Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must satisfy the following eligibility criteria for admission to M.Sc at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates must hold a valid Bachelor's degree from a recognized university or institution.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Sc. Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must go through the following selection criteria for admission to M.Sc. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>The final selection is based on IIT JAM scores followed by JOAPS counselling.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>MBA Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur MBA program is offered for a duration of 2 years. Students must have appeared for the CAT exam to apply for this course. Furthermore, GD and PI rounds are conducted by VGSoM, IIT Kharagpur, for the final selection. The first-year fee for the IIT KGP MBA is INR 5 Lakhs.
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>MBA Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must satisfy the following eligibility criteria to apply for MBA admission at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Passed a Bachelor's degree of minimum 4-year duration in Engineering/ Technology/ Pharmacy.</li>
          <li style={liStyle}>Passed a Master's degree in Science/Economics/Commerce (with Mathematics or Statistics at Bachelor's level).</li>
          <li style={liStyle}>Minimum percentage of marks in the qualifying degree:</li>
          <ul style={ulStyle}>
            <li style={liStyle}><strong>General/EWS/OBC:</strong> Minimum of 60% marks (or CGPA of 6.5 on a 10-point scale).</li>
            <li style={liStyle}><strong>SC/ST/PWD:</strong> Minimum of 55% marks (or CGPA of 6.0 on a 10-point scale).</li>
          </ul>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>MBA Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must go through the following selection criteria for MBA admission at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates must appear for the CAT examination.</li>
          <li style={liStyle}>Applicants who meet the minimum IIT Kharagpur CAT cutoff will be shortlisted for a personal interview.</li>
          <li style={liStyle}>The final selection of the candidates is based on a combined score comprising application rating (AR), CAT performance, and personal interview (PI) performance.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Arch. Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur B.Arch. is a 5-year program offered at the UG level. Admission to this course will be based on the JEE Advanced AAT scores obtained by the candidates followed by JoSAA counselling. The first-year B.Arch. fee is INR 2.23 Lakhs.
        </p>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Arch. Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following eligibility criteria to apply for B.Arch. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates seeking admission in the B.Arch. program should have passed 10+2 from a recognized board of education with a minimum of 75% marks.</li>
          <li style={liStyle}>The candidate should have PCM (Physics, Chemistry, Maths) as major subjects in Class XII.</li>
          <li style={liStyle}>Candidates from the SC/ST category should have passed 10+2 from a recognized board of education with a minimum of 65% marks.</li>
        </ul>



        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>B.Arch. Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following selection criteria to apply for B.Arch at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates must have qualified for JEE Main 2024 and then appeared for JEE Advanced.</li>
          <li style={liStyle}>It is important to note that only the top 2,50,000 rank holders are eligible for JEE Advanced 2024.</li>
          <li style={liStyle}>The final selection will be based on merit in JEE Advanced AAT followed by JoSAA counselling.</li>
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>LL.B. Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur offers an LL.B. program in full-time mode at the UG level for 3 years. Candidates will have to appear for an entrance examination conducted by the institute to be selected for admission. The per semester fee of IIT Kharagpur LL.B. is INR 80,000. The application fee is INR 3,000 for male applicants (General/EWS/OBC) and INR 1,500 for female applicants/Third Gender/SC/ST/PwD candidates.
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>LL.B. Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following eligibility criteria to apply for admission to LL.B. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Passed Bachelor's Degree in Engineering/Technology/Medicine or equivalent with 60% marks.</li>
          <li style={liStyle}>Passed Master's Degree in Science or Pharmacy or equivalent with 60% marks.</li>
          <li style={liStyle}>Passed MBA Degree with any of the above with 60% marks.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>LL.B. Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Students must satisfy the following selection criteria for admission to LL.B. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate must qualify for an MCQ-based CBT test of 2 hours conducted by the institute.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>LL.M. Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur offers an LL.M. course for a duration of 2 years through the Rajiv Gandhi School of Intellectual Property Law (RGSOIPL). The institute conducts its own entrance test for admission to this course. The per semester tuition fee for LL.M. at IIT KGP is INR 1,00,000.
        </p>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>LL.M. Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Students must fulfill the following eligibility criteria for admission to LL.M. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Bachelor of Laws LL.B./B.L. (5 years) program from any recognized university with 60% marks.</li>
          <li style={liStyle}>Bachelor of Laws LL.B./B.L. (3 years) program from any recognized university along with a Bachelor's Degree (not less than 3 years) in Humanities/Science/Commerce or equivalent with 60% marks.</li>
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>LL.M. Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Students must go through the following selection criteria for admission to LL.M. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate must qualify for an MCQ-based CBT test of 2 hours conducted by the institute.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>MHRM Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur offers a 2-year duration Master of Human Resource Management (MHRM) program in the Department of Humanities and Social Sciences. Candidates are required to appear for the CAT examination to be eligible for admission to this course. The total seat intake for MHRM at IIT Kharagpur is 60. The admission and tuition fee is INR 5,00,000 for two years. SC/ST/PwD candidates are exempted from the tuition fees.
        </p>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>MHRM Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must satisfy the following eligibility criteria for admission to MHRM at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Passed a Bachelor's degree of minimum 4-year duration in Engineering, Technology, Pharmacy, Medicine, or similar disciplines.</li>
          <li style={liStyle}>Passed a Master's degree in any subject.</li>
          <li style={liStyle}>GE/OBC: Minimum of 60% marks (or CGPA of 6.5 on a 10-point scale).</li>
          <li style={liStyle}>SC/ST/PwD: Minimum of 55% marks (or CGPA of 6.0 on a 10-point scale).</li>
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>MHRM Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must go through the following selection criteria for MHRM admission at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates must appear for the CAT examination.</li>
          <li style={liStyle}>Applicants meeting the minimum IIT Kharagpur CAT cutoff will be shortlisted for an offline GD-PI round.</li>
          <li style={liStyle}>The final admission to the MHRM program is offered based on a cumulative score and the candidate's performance in the GDPI process.</li>
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px", fontStyle: "italic" }}>
          <strong>Ph.D. Admission</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur offers a Ph.D. program at the doctoral level in 4 categories namely:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Regular with Institute Assistantship</li>
          <li style={liStyle}>Individual Fellowship (i.e. CSIR/UGC/DBT/ICMR/INSPIRE etc.)</li>
          <li style={liStyle}>Sponsored</li>
          <li style={liStyle}>Working Professionals</li>
        </ul>
        <p style={pStyle}>
          This program is offered in different disciplines such as Engineering, Technology, Science, Architecture & Regional Planning, Humanities & Social Sciences, Rural Development, Law, Management, and Medicine. The per semester tuition fee is INR 50,000.
        </p>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Ph.D. Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must satisfy the following eligibility criteria for admission to Ph.D. at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates must have a minimum of 60% marks in Engineering/Science/Commerce/Management/Law or equivalent disciplines.</li>
          <li style={liStyle}>Candidates must have a minimum of 55% marks or a CGPA of 6.0 in the qualifying degree of Humanities/Social Science/MBBS.</li>
        </ul>


        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Ph.D. Selection Criteria</strong>
        </h3>
        <p style={pStyle}>Candidates must go through the following selection criteria for Ph.D. admission at IIT KGP:</p>
        <ul style={ulStyle}>
          <li style={liStyle}>Candidates must qualify for a written test followed by an interview round conducted by the institute.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
