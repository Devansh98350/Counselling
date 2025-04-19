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
        <h2 style={h2Style}>About IIT Ropar</h2>
        <p style={pStyle}>
          IIT Ropar is a public technical University located in Rupnagar, Punjab. IIT Ropar
          is ranked 22nd by NIRF 2023 for Engineering. Indian Institute of Technology (IIT)
          Ropar was established in 2008 as one of the eight IITs that were set up by
          the MHRD and the Government of India. IIT Punjab, through its 12 departments,
          offers UG, PG, and PhD courses to students across Engineering, Science, and
          various other streams. IIT in Punjab has also been ranked 20th in the University
          (Technical) category by The Week 2023. In QS World University Rankings 2024,
          the IIT Ropar is ranked 90th in Southeast Asia. <br />
          More than 30 courses are available at IIT Ropar in engineering, architecture,
          math, humanities, and social sciences disciplines. IT Ropar is a government
          institute that offers three levels of programmes. IIT Ropar courses are offered at
          undergraduate, postgraduate and doctoral levels.  IIT Ropar’s flagship program is
          B.Tech and JEE Advanced score is required for Admission. The cutoff for its most
          popular B.Tech CSE program is 1426 –2909. The first-year fee for the IIT Ropar
          B.Tech program is INR 2.22 Lakhs. The Placements of 2023, 82.21% of B.Tech
          students were placed. The top recruiters were, Google, Amazon, and Ericsson. <br />
          IIT Ropar courses include B.Tech, B.Tech +M.Tech, M.Tech, M.S, M.Sc. and
          Ph.D.. To get admitted at IIT Ropar for the desired course the candidates should
          meet the eligibility criteria. IIT Ropar fee structure depends on the course selected
          by the candidate. Shortlisting of candidates for IIT Ropar admissions to UG and
          PG courses is offered based on scores obtained in the relevant national-level
          entrance exams such as JEE Advanced/ GATE. Candidates should meet the IIT
          Ropar cutoff to proceed with the next stage of the admission process. IIT Ropar
          admissions are based on the scores obtained in the entrance exam and qualifying
          examination. Along with that, IIT Ropar offers placement to reputed organizations
          to deserving candidates. During IIT Ropar placements in 2024, the median salary
          packages ranged from Rs 12,00,000 - Rs 20,00,000. <br />
          IIT Ropar offers scholarships to deserving and needy students. To avail of IIT
          Ropar scholarships, candidates must meet the eligibility criteria.Central and state
          government scholarships are also available for the students to apply.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          Indian Institute of Technology (IIT), Ropar offers various courses at
          undergraduate, postgraduate and doctoral levels. IIT Ropar courses include
          B.Tech, B.Tech+ M.Tech, M.Tech, M.Sc., MS, and PhD. IIT Ropar courses are
          offered in full-time, part-time and online modes. IIT Ropar courses are offered
          in engineering and architecture, sciences and arts, humanities and social
          sciences streams. The duration of the IIT Ropar B.Tech course is 4 years. While
          the duration of IIT Ropar PG courses is 2 years. <br />
          IIT Ropar PhD courses are offered in 22 specializations. The duration of IIT Ropar
          PhD courses is 6 years. IIT Ropar course fee for B.Tech is Rs. 8.69 Lakhs.. The
          aspiring candidates for admission must meet the IIT Ropar eligibility criteria for
          the desired course. IIT Ropar hostel fee structure differs for each hostel and it
          depends on the room chosen by the candidate. IIT Ropar hostel fee includes a
          mess fee, electricity charge, and many others. <br />
          Given below table shows you the number of courses offer in different degree;
        </p>

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Degree</th>
                <th style={thStyle}>Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.Tech", "9"],
                ["Ph.D.", "11"],
                ["M.Tech", "17"],
                ["M.Sc.", "4"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>Here is the eligibility criteria of some famous degrees of IIT Ropar:</p>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Degree</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.E/B.Tech", "10+2=75%"],
                ["M.E/M.Tech", "10+2=75% \n Graduation=60%"],
                ["M.Sc.", "Graduation=60%"],
                ["Ph.D.", "Master’s Degree in M.Tech/M.Sc./MCA/MBBS/Pharma/MD/MS or its equivalent from a recognized university. "],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={pStyle}>Here is the some degrees and its national level exams through which student can
          take admission of the following:</p>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Degree</th>
                <th style={thStyle}>Exams</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.E/B.Tech", "JEE Main, JEE Advance"],
                ["M.E/M.Tech", "COAP, GATE, JEE Main, JEE Advance"],
                ["M.Sc.", "IIT JAM"],
                ["Ph.D.", "GATE, UGC NET"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>IIT Ropar fee for all courses ranges between INR 60,000 and INR 9 lakh. The
          total fee is inclusive of various components such as one-time payment, tuition
          fees, hostel charges and more. Candidates who get the final admission offer are
          required to pay a part of the first-semester fee to confirm their admission. The
          table below shows the fee breakup for IIT Ropar course for the batch of 2023: </p>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>One-time payment</th>
                <th style={thStyle}>Tuition fees</th>
                <th style={thStyle}>Total Hostel Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["ME/M.Tech", "INR 7,000", "INR 21,470", "INR 29,200"],
                ["BE/B.Tech", "INR 7,000", "INR 8 lakh", "INR 32,000"],
                ["M.Sc", "-", "INR 62,740", "-"],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i} style={tdStyle}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>Here is the tuition fee of the some famous courses of IIT Ropar: </p>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Total Tuition Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["B.E. / B.Tech (10 Courses)", "₹ 8 L"],
                ["M.E/M.Tech (16 Courses)", "₹ 3.4 L"],
                ["M.Sc. (3 Courses)", "₹ 62.74 K"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}><i>The fees are for the entire duration of the respective courses. </i></p>

        <h3 style={th3Style}>B.E / B.Tech Fee Details</h3>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 4 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tuition", "₹ 8 L"],
                ["Hostel (The fees might include components other than hostel fees. Meal Plan is included in mentioned fee.)", "₹ 1.87 L"],
                ["One-time Payment (One-time payment includes non-refundable and refundable fee.)", "₹ 15.8 K"],
                ["Total Fee", "₹ 10.03 L"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={pStyle}><i>These are estimated fees information. Actual values may differ.</i></p>

        <h3 style={th3Style}>M.E./M.Tech fee details 2024</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tuition", "₹ 3.4 L"],
                ["Hostel (The fees might include components other than hostel fees. Meal Plan is included in mentioned fee.)", "₹ 37.2 K"],
                ["One-time Payment (One-time payment includes Admission Fees, Grade card, Thesis Fees, Provisional certificate, Student welfare fund, Modernization fees, Identity card, Benevolent fund, Alumni fees & Training & Placement.)", "₹ 16.55 K"],
                ["Total", "₹ 87.75 K"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}><i>These are estimated fees information. Actual values may differ.</i></p>

        <h3 style={th3Style}>M.Sc. fee details 2024</h3>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Fee Components</th>
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Tuition", "₹ 62.74 K"],
                ["Total Fee", "₹ 62.74 K"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}><i>These are estimated fees information. Actual values may differ.</i></p>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Ropar course admissions 2024 are open for various programmes offered at
          the undergraduate and postgraduate levels. IIT Ropar admission is completely
          entrance-based for B.Tech, M.Tech, and MSc courses to students across
          Engineering, Science, and various other streams. IIT Ropar admission to most of
          the courses is done through national-level entrance exams including JEE
          Main/ JEE Advanced, IIT JAM, and GATE, among others. The institute allows
          admission to its B.Tech program through the JEE Mains followed by the JEE
          Advanced Exam. The JEE-qualified candidates are required to register
          themselves for the JoSAA counselling for the seat allocation process. <br />
          Apart from the flagship B.Tech program, IIT Ropar also offers M.Tech, and MSc
          programs at the PG level. Candidates have to appear for the GATE and IIT
          JAM entrance examinations for the M.Tech, and MSc programs respectively. On
          clearing the entrance tests, students will have to register for the respective
          counselling sessions such as COAP and JAM to reserve a seat at the institute.
          Also, IIT Ropar offers a PhD program at the doctoral level in 11 different
          departments. Candidates will be allowed PhD admission through the GATE/
          CSIR/ UGC NET/ DST INSPIRE/ JEST/ NB HM or any other national fellowship
          followed by a written test and a personal interview conducted by the institute.
        </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>What is the application process for IIT Ropar? </strong>
        </h3>
        <ul>
          {[
            "Visit the official website of IIT Ropar. ",
            "Then select the preferred course.",
            "Candidates are required to log in to fill out the IIT Ropar application form.",
            "Fill up the IIT Ropar application form with the required details.",
            "Candidates need to upload the documents carefully.",
            "Submit or save the IIT Ropar application form.",
            "Further, pay the IIT Ropar application fee.",
            " Later, take a printout of the application form for future reference.",
          ].map((recruiter, index) => (
            <li key={index} style={liStyle}>
              {recruiter}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>UG Admissions</strong>
        </h3>
        <p style={pStyle}>IIT Ropar offers various undergraduate courses. IIT Ropar courses at the UG
          level include B.Tech and B.Tech+ M.Tech programmes. The duration of B.Tech
          and B.Tech+ M.Tech ranges from 4 years to 5 years. IIT Ropar UG Courses,
          Seats and Eligibility Criteria</p>

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Courses</th>
                <th style={thStyle}>Seat Intake</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "B.Tech",
                  "20-73",
                  "Passed 10+2 with a valid score + Valid score in JEE Advanced.",
                ],
                [
                  "B.Tech + M.Tech",
                  "16",
                  "Candidates should have passed the 10+2 examination from a recognised board.",
                ],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i} style={tdStyle}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>UG Admission Process: B.Tech and B.Tech +M.Tech </strong>
        </h3>
        <ul>
          {[
            "Candidates have to clear JEE Main and appear for JEE Advanced and obtain a valid rank.",
            "Next, students have to register with JOSAA for participation in the counselling process.",
            "Candidates have to select IIT Ropar as their preferred college.",
            "Further, candidates have to participate in the counselling session of the Joint Seat Allocation Authority (JoSAA).",
            "The IIT Ropar admissions are done based on the scores obtained in the entrance examination.",
            "Later, candidates are allotted seats after verification of documents and IIT Ropar admission fee payment.",
          ].map((step, index) => (
            <li key={index} style={liStyle}>
              {step}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>PG Admissions</strong>
        </h3>
        <p style={pStyle}>IIT Ropar offers a total of 18 postgraduate courses. IIT Ropar courses at the PG
          level are M.Tech, M.Sc. and MS. The course duration of IIT Ropar PG courses is
          of 2 years.</p>

        <h3 style={th3Style}>IIT Ropar PG Courses, Seats and Eligibility Criteria</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Courses</th>
                <th style={thStyle}>Seat Intake</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "M.Tech",
                  "12-21",
                  "Candidates must have passed B.Tech/B.E. degree in any engineering discipline or an MSc/MS/MCA degree in CS/IT/Maths with a good academic record. + Valid score in GATE.",
                ],
                [
                  "M.Sc.",
                  "-",
                  "Bachelor’s degree with 55% marks or equivalent CGPA (5% relaxation for SC/ST students) from a recognised university.",
                ],
                [
                  "M.S",
                  "-",
                  "Candidates passed bachelor's degree in appropriate specialisation with minimum aggregate 55/60% marks. + Valid GATE score. + B.Tech from IIT with a minimum CGPA of 8.0 out of 10.0 can also apply without a GATE score.",
                ],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i} style={tdStyle}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong> M.Tech Admission Process.</strong>
        </h3>
        <ul>
          {[
            " For IIT Ropar M.Tech admission, candidates need to meet the eligibility criteria. ",
            "Next, candidates have to secure a valid score in GATE. ",
            " Then the GATE result is declared and candidates are required to meet the qualifying GATE cut-off.",
            "The GATE counselling and admission process for IIT Ropar is done by COAP.",
            "Shortlisting of candidates for IIT Ropar admissions is based on academic background and GATE score.",
            "Following this, the shortlisted candidates are called for a written test followed by an interview.",
            "Further, the final IIT Ropar admission is confirmed after the document verification and payment of the admission fee.",
          ].map((step, index) => (
            <li key={index} style={liStyle}>
              {step}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>M.Sc. Admission Process</strong>
        </h3>
        <ul>
          {[
            "Candidates are required to fulfill the eligibility criteria for IIT Ropar M.Sc. admission.",
            "Candidates have to secure a valid score in the entrance exam- JAM. ",
            "Candidates who qualify for the entrance exam are called to IIT JAM counselling. ",
            "Admission is offered on the basis of the candidates’ performance in JAM. ",
            "The last step of the IIT Ropar admission procedure includes the verification of documents and admission fee payment. ",
          ].map((step, index) => (
            <li key={index} style={liStyle}>
              {step}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Ph.D. Admissions</strong>
        </h3>
        <p style={pStyle}>Indian Institute of Technology Ropar offers 22 doctoral programmes. The course
          duration of the IIT Ropar PhD programme is 6 years. The IIT Ropar eligibility
          criteria for PhD programme is that the candidate must have passed a master's
          degree or a professional degree or its equivalent from a recognised university.</p>

        <h3 style={th3Style}>IIT Ropar PhD Courses and Eligibility Criteria</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Ph.D.",
                  "Candidates must have passed a master's degree M.Tech/M.Sc./MCA/M Pharma/MD/MS or a professional degree or its equivalent from a recognised university.",
                ],
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i} style={tdStyle}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Ph.D. Admission process</strong>
        </h3>
        <ul>
          {[
            " Candidates seeking admission to the IIT Ropar PhD programme must meet the eligibility criteria.",
            " Eligible candidates should fill in the application form at the official website of the institution. ",
            " The shortlisted candidates will be invited for the interview/viva voce process.",
            " IIT Ropar admission to Ph.D. programmes is offered based on candidates’ performance in the qualifying examinations and performance in the interview/viva voce. ",
            " To complete the IIT Ropar admission process the candidate should submit the required documents along with the course fee payment.",
          ].map((step, index) => (
            <li key={index} style={liStyle}>
              {step}
            </li>
          ))}
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Documents Required</strong>
        </h3>
        <ul>
          {[
            "Passport size photographs",
            "Class 10th certificate and mark sheet ",
            "Class 12th certificate and mark sheet",
            "Bachelor's degree certificate (for PG admission)",
            "Master's degree certificate (for Ph.D. admission)",
            "Entrance exam scorecard ",
            "ID proof",
            "Migration/transfer certificate",
            "Caste Certificate",
            " Sponsorship letter",
            " No objection certificate",
          ].map((step, index) => (
            <li key={index} style={liStyle}>
              {step}
            </li>
          ))}
        </ul>

        <p style={pStyle}><i>Note: Candidates should be aware of the eligibility criteria before applying for
          admission to the desired course.</i></p>
      </section>
    </div>
  );
};

export default About;
