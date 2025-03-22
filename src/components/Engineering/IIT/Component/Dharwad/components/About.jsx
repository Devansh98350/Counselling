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
        <h2 style={h2Style}>About IIT Dharwad</h2>
        <p style={pStyle}>
          Indian Institute of Information Technology, Dharwad is one of the 23 IIITs of India.
          This engineering institute was established in the year 2016. Indian Institute of
          Technology Dharwad or IIT Dharwad is a third-generation IIT that came into
          existence in 2016. It is an autonomous engineering and technology institution in
          Dharwad, Karnataka, India IIT Dharwad was established by the Ministry of
          Education, Government of India, and is mentored by IIT Bombay. It has been
          ranked 93 under the 'Engineering' category by the NIRF 2023 Rankings. Dharwad
          IIT has also established the Global Centre of Excellence for Affordable and Clean
          Energy (GCoE ACE) to help in the advancement of Affordable and Clean Energy
          (ACE) in India. It has also been awarded a 5-star rating under the Green Rating
          for Integrated Habitat Assessment (GRIHA), Large Development (LD) Master
          Plan. <br />
          With a vast 135-acre campus, IIT Dharwad is currently located in a temporary
          location in the Belur Industrial Area, which is outside of the city of Dharwad. The
          institute has around 1100 students, roughly 20% of which are women from
          approximately 20 states across the country. <br />
          It offers various UG, PG, and doctoral courses. IIT Dharwad comprises over 10
          departments including the Department of Chemical Engineering, the Department
          of Civil & Infrastructure Engineering, and others. Through these departments, it
          offers various courses such as B.Tech, M.Tech, MS, Integrated BS-MS, etc. IIT
          Dharwad has signed numerous national and international MoUs with corporations
          and universities such as The University of New Brunswick, Canada, National
          Cheng Kung University, Taiwan, Deshpande Startups, and the University of
          Agricultural Sciences, Dharwad, among others. <br />
          IIT Dharwad admissions are based on national-level entrance exams such as JEE
          Advanced and others. IIT Dharwad course admissions follow counselling sessions
          such as JoSAA to grant admissions to students. The highest and average
          packages offered during IIT Dharwad placements 2024 were INR 52 LPA and INR
          12.63 LPA, respectively. IIT Dharwad cutoff is released annually for various
          courses offered by the institute. <br />
          IIT Dharwad Placements 2023 is in process and till now the placement percentage
          witnessed is 87.62%. A total of 105 students graduated and among them, 92
          students were placed.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Courses and Fees</h2>
        <p style={pStyle}>
          Here is the list of the number of the courses offered by the IIT Dharwad:
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
                <th style={thStyle}>Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  stream: "B.E/B.Tech",
                  courses: 9,
                },
                {
                  stream: "B.Sc.",
                  courses: 1,
                },
                {
                  stream: "M.Sc.",
                  courses: 1,
                },
                {
                  stream: "M.E/M.Tech",
                  courses: 8,
                },
                {
                  stream: "M.S.",
                  courses: 3,
                },
                {
                  stream: "Ph.D.",
                  courses: 2,
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>Given below table show you the eligibility criteria of some the famous courses:</p>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  stream: "B.E/B.Tech",
                  courses: "10+2 with 75 %\nPCM Exams: JEE MainJEE Advanced",
                },
                {
                  stream: "B.Sc.",
                  courses: "10+2 with 75 %",
                },
                {
                  stream: "M.Sc.",
                  courses: "10+2 with 75 %",
                },
                {
                  stream: "M.E/M.Tech",
                  courses: "Graduation : 60 %\nExams : GATE ",
                },
                {
                  stream: "M.S.",
                  courses: "Graduation : 60 %\nExams : GATE",
                },
                {
                  stream: "Ph.D.",
                  courses: "Exams : GATE PCM 10+2=60%\nGRADUATION(B.TECH/ BE) with 60%/6.0 CGPA\nPost-graduation (M.Tech and M.E.) from a recognized university in a relevant field with 60% or 6.0 CGPA ",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>The tuition fee of some of the courses offer by IT Dharwad:</p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Stream</th>
                <th style={thStyle}>Tuition Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  stream: "B.E/B.Tech",
                  courses: "8L",
                },
                {
                  stream: "B.Sc.",
                  courses: "10L",
                },
                {
                  stream: "M.Sc.",
                  courses: "10L",
                },
                {
                  stream: "M.E/M.Tech",
                  courses: "12L",
                },
                {
                  stream: "M.S.",
                  courses: "10K",
                },
                {
                  stream: "Ph.D.",
                  courses: "1.5L",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.courses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Dharwad Fees Breakdown</strong>
        </h3>
        <p style={pStyle}>The total IIT Dharwad fee is comprised of various elements like tuition fees, hostel
          fees, library deposit, training and placement fees, among others. Certain
          components are one-time charges, while others are payable on a semester-wise
          or annual basis, such as tuition fees. The specific fee amount varies based on the
          selected course or specialization. The subsequent sections provide a breakdown
          of the IIT Dharwad fee structure for the respective offered courses. </p>

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
                <th style={thStyle}>Hostel Fee (Without Mess)</th>
                <th style={thStyle}>One-Time Fee</th>
                <th style={thStyle}>Total Mess Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.Tech",
                  tuition: "INR 800000",
                  hostel: "INR 44000",
                  oneTime: "INR 11,500",
                  mess: "INR 197000",
                },
                {
                  course: "M.Tech",
                  tuition: "INR 10,000 - INR 11,92,000",
                  hostel: "INR 32200",
                  oneTime: "INR 16100",
                  mess: "INR 105200",
                },
                {
                  course: "MS",
                  tuition: "INR 10000",
                  hostel: "INR 32000",
                  oneTime: "INR 15600",
                  mess: "INR 105200",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                  <td style={tdStyle}>{row.hostel}</td>
                  <td style={tdStyle}>{row.oneTime}</td>
                  <td style={tdStyle}>{row.mess}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>NOTE:</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}><i>The fee range is inclusive of fee for the different specializations and integrated
            programmes.</i></li>
          <li style={liStyle}><i>The above-mentioned fee is taken from an official source/sanctioning body.
            Hence, it may vary.</i></li>
        </ul>

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
                <th style={thStyle}>B.E. / B.Tech Fee Components</th>
                <th style={thStyle}>Amount (for 4 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 8 L" },
                { component: "Hostel", amount: "₹ 2.21 L" },
                { component: "One-time Payment", amount: "₹ 6.3 K" },
                { component: "Other Fees", amount: "₹ 1.06 L" },
                { component: "Total Fee", amount: "₹ 11.34 L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}><i>*These are estimated fees information. Actual values may differ. </i></p>
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
                { component: "Tuition", amount: "₹ 10 L" },
                { component: "Hostel", amount: "₹ 2.75 L" },
                { component: "One-time Payment", amount: "₹ 6.3 K" },
                { component: "Other Fees", amount: "₹ 1.31 L" },
                { component: "Total Fee", amount: "₹ 14.13 L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}><i>*These are estimated fees information. Actual values may differ.</i></p>
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
                <th style={thStyle}>Amount (for 2 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 10 K - 20 K" },
                { component: "Hostel", amount: "₹ 27.2 K - 39.2 K" },
                { component: "One-time Payment", amount: "₹ 15.6 K - 16.1 K" },
                { component: "Total Fee", amount: "₹ 52.8 K - 75.3 K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={pStyle}><i>*These are estimated fees information. Actual values may differ.</i></p>

        <h3 style={th3Style}>MS Fee Details</h3>
        <div
          style={{
            overflowX: "auto",
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
                { component: "Tuition", amount: "₹ 10 K" },
                { component: "Hostel\nMeal Plan is included in mentioned fee. The fees might include components other than hostel fees. ", amount: "₹ 39.2 K" },
                { component: "One-time Payment\nOne-time Payment includes Admission Fee, Thesis Fee Medical Examination, Provisional Certificate, Student Welfare Fund, Modernization & Upgradation, Identity Card, and Convocation fee, Alumni Fee, Institute Security Deposit and Library Security Deposit. ", amount: "₹ 15.6 K" },
                { component: "Total Fee", amount: "₹ 64.8 K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={pStyle}><i>*These are estimated fees information. Actual values may differ.</i></p>
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
                <th style={thStyle}>Amount (for 3 years)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { component: "Tuition", amount: "₹ 1.5 L" },
                { component: "Hostel (Mess Fee Advance INR 26000/-)", amount: "₹ 57.3 K" },
                { component: "One-time Payment", amount: "₹ 12.6 K" },
                { component: "Total Fee", amount: "₹ 2.2 L" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.component}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          Admission is completely entrance-based for all the courses offered by the institute.
          IIT Dharwad offers B.Tech and BS-MS (integrated course) at the undergraduate
          level. At the postgraduate level, the institute offers M.Tech and MSc. Further, IIT
          Dharwad offers a doctoral-level programme as well. Below is more information
          about the eligibility requirements, selection criteria, and fees for IIT Dharwad
          admission 2024. M.Tech admission is made via the Common Offer Acceptance
          Portal (COAP) and B.Tech candidates must apply for the JEE Main entrance
          exams. <br />
          IIT Dharwad admission to all its UG and PG courses is offered through national
          level entrance examinations. The institute accepts JEE Advanced scores for
          admission to its flagship B.Tech program. Candidates seeking IIT Dharwad
          B.Tech admission must qualify for the JEE Main examination in order to appear for
          the JEE Advanced exam. The final B.Tech shortlisting is done through the JoSAA
          Counselling seat allotment process. For the most sought IIT Dharwad B.Tech CSE
          stream, the JEE Advanced cut-off for the general category ranges between 5162
          5978 ranks. The annual fee of IIT Dharwad’s B.Tech program ranges from INR
          2.42 lakhs. <br />
          Apart from its flagship B.Tech program, IIT Dharwad offers an M.S. (Research)
          program at the PG level. Admission to IIT Dharwad M.S. (Research) Course is
          based on scores obtained in the GATE exam followed by the PI Round. IIT
          Dharwad may conduct a personal interview for the final selection. For admission to
          the PhD program, candidates having a master’s degree in a relevant discipline are
          eligible for admission. Shortlisting for the Ph.D. course is done on the basis of the
          score achieved in the Institute-based written test and interview round. <br />
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>How to apply for IIIT Dharwad Admissions?</strong>
          </h3>
          <ul style={ulStyle}>
            <li style={liStyle}>Candidates can register themselves by visiting the official website of the
              college. </li>
            <li style={liStyle}> IIIT Dharwad Application form to be filled out with all the relevant information.</li>
            <li style={liStyle}>Scan and upload all the necessary documents and certificates.</li>
            <li style={liStyle}>Pay the fees for the IIIT Dharwad application form.</li>
            <li style={liStyle}> Submit the application form to complete the IIIT Dharwad application procedure. </li>
          </ul>
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>B.Tech Admission</strong>
        </h3>
        <p style={pStyle}>The institute offers B.Tech in 7 specializations. Admission is based on JEE
          Advanced. Candidates must have passed the 10+2 examination or equivalent
          from a recognized board of education and qualified for JEE Advanced
          through JEE Main to apply for admission. Further, candidates will have to register
          for the JoSAA counselling for the seat allocation process. <br />
          JEE Advanced is a national-level examination conducted in offline mode. The
          application process is online. Candidates must first apply for JEE-Mains to qualify
          for JEE-Advanced. They can fill out the application form from the official website of
          the college. The registration fee for JEE-Advanced is INR 2400 (INR 1200 for
          SC/ST/PwD/Female candidates). The registration fee must be paid online.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>B.Tech Eligibility Criteria:</strong>
        </h3>
        <ul>
          <li style={liStyle}>Higher Secondary 10+2 qualified from a recognized institute or university.</li>
          <li style={liStyle}>Math’s and Physics must be the major subject.</li>
          <li style={liStyle}>Students appearing for the qualifying examination can apply.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>B.Tech Selection Criteria:</strong>
        </h3>
        <ul>
          <li style={liStyle}>Selection to the course will be based on the marks secured in JEE Advanced.</li>
          <li style={liStyle}>The seats will be allotted based on the rank/ scores obtained by the candidates in the entrance examination.</li>
          <li style={liStyle}>After the seat allotment, candidates will have to visit the IIT campus they have been allotted to finish the admission process.</li>
          <li style={liStyle}>Candidates can submit their preferences for admission into various IITs of the country while filling up the application form.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>MS/Ph.D. Admission</strong>
        </h3>

        <p style={pStyle}>The institute offers admission to MS under 3 specializations and a Ph.D. in 10 disciplines. Students with Graduation and Post -Graduation degree can apply for admission to MS and Ph.D. respectively. </p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Specializations</th>
                <th style={thStyle}>Eligibility</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="3" style={tdStyle}>MS</td>
                <td style={tdStyle}>Computer Science Engineering</td>
                <td rowSpan="3" style={tdStyle}>Graduation Degree holder in the relevant subjects</td>
                <td rowSpan="13" style={tdStyle}>
                  Admission to the course will be based on the performance in the entrance test and interview.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}>Electrical Engineering</td>
              </tr>
              <tr>
                <td style={tdStyle}>Mechanical Engineering</td>
              </tr>
              <tr>
                <td rowSpan="10" style={tdStyle}>Ph.D.</td>
                <td style={tdStyle}>Computer Science Engineering</td>
                <td rowSpan="10" style={tdStyle}>Post-Graduation degree holder in the relevant specialization</td>
              </tr>
              <tr>
                <td style={tdStyle}>Electrical Engineering</td>
              </tr>
              <tr>
                <td style={tdStyle}>Mechanical Engineering</td>
              </tr>
              <tr>
                <td style={tdStyle}>Biosciences and Biomedical Engineering</td>
              </tr>
              <tr>
                <td style={tdStyle}>Chemistry</td>
              </tr>
              <tr>
                <td style={tdStyle}>Chemical Engineering</td>
              </tr>
              <tr>
                <td style={tdStyle}>Civil Engineering</td>
              </tr>
              <tr>
                <td style={tdStyle}>Humanities And Social Science </td>
              </tr>
              <tr>
                <td style={tdStyle}>Mathematics</td>
              </tr>
              <tr>
                <td style={tdStyle}>Physics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={pStyle}>Selection to the course will be based on the marks secured in the written test
          along with the performance in the interview conducted by IIT Dharwad. <br />

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>How to Apply for IIT Dharwad MS/Ph.D.?</strong>
          </h3>
          <p style={pStyle}>The application form for admission to the courses can be downloaded from the
            website of IIT Dharwad and it can be submitted with the application fee of INR
            200/- (for General Candidates) or INR 100/- (for SC/ST/Women Candidate).</p>
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Dharwad Reservation Criteria</strong>
          </h3>
          The reservation criteria for is mentioned below:
          <ul>
            <li style={liStyle}>OBC-NCL (Other Backward Classes belonging to the Non-Creamy Layer): 27% of seats in every course.</li>
            <li style={liStyle}>Scheduled Caste (SC): 15% of seats in every course.</li>
            <li style={liStyle}>Scheduled Tribe (ST): 7.5% of seats in every course.</li>
            <li style={liStyle}>PwD (Person with Disability): 3% of seats.</li>
            <li style={liStyle}>The registration fee for JEE- Advanced is INR 2400 (INR 1200 for SC/ST/ PwD/ Female candidates). </li>
            <li style={liStyle}> IIT Dharwad course admission is subject to a valid score in the national/statelevel entrance exam along with the fulfillment of the minimum eligibility criteria set by the institute. Candidates must check the eligibility criteria of courses offered at IIT Dharwad and complete the admission procedure. </li>
          </ul>
          Check below the IIT Dharwad courses along with their eligibility and selection criteria:
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
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.Tech</td>
                <td style={tdStyle}>Class 12 with a minimum of 75% aggregate</td>
                <td style={tdStyle}>JEE Main + JEE Advanced + JoSAA Counselling</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Tech</td>
                <td style={tdStyle}>B.Tech/ BE or equivalent degree in a relevant stream with at least 60% aggregate</td>
                <td style={tdStyle}>GATE + COAP Counselling</td>
              </tr>
              <tr>
                <td style={tdStyle}>MS</td>
                <td style={tdStyle}>B.Tech/ BE or equivalent degree in a relevant stream with at least 60% aggregate</td>
                <td style={tdStyle}>GATE (For TA Category) and GATE + PI (For PA Category)</td>
              </tr>
              <tr>
                <td style={tdStyle}>PhD</td>
                <td style={tdStyle}>M.Tech/ ME or equivalent degree in a relevant stream with at least 60% aggregate</td>
                <td style={tdStyle}>GATE/ NET scores + PI</td>
              </tr>
              <tr>
                <td style={tdStyle}>Executive M.Tech</td>
                <td style={tdStyle}>BE/ B.Tech or ME/ M.Tech or equivalent degree in a relevant stream with at least 60% aggregate</td>
                <td style={tdStyle}>Entrance/ screening exam + PI</td>
              </tr>
              <tr>
                <td style={tdStyle}>BSc-MSc Integrated</td>
                <td style={tdStyle}>Class 12 with a minimum of 75% aggregate</td>
                <td style={tdStyle}>JEE Main + JEE Advanced + JoSAA Counselling</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>IIT Dharwad Ph.D. Eligibility Criteria</h3>
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Ph.D.</td>
                <td style={tdStyle}>
                  Interested candidates must have a minimum score of 60% in Master’s degree. They must have completed their Master’s degree in the respective doctoral degree they wish to pursue.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Dharwad Ph.D. Course Admission Procedure</strong>
        </h3>
        <p style={pStyle}>IIIT Dharwad offers admissions to PhD through merit and personal interviews. The procedure for admission to PhD, which should be followed by candidates, is given below.
          <ul>
            <li style={liStyle}>Candidates who meet the eligibility criteria set by the institute must first fill out
              the admission form and submit it before the deadline.</li>
            <li style={liStyle}>Candidates will further be selected for a personal interview by the institute for
              final seat allotment. </li>
            <li style={liStyle}>Candidates must participate in the personal interview and submit all the
              required documents for verification.</li>
            <li style={liStyle}>Once the documents are verified, selected candidates will be required to pay
              fees. </li>
          </ul>
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Dharwad Admission: Required Documents</strong>
        </h3>
          <ul>
            <li style={liStyle}>Bachelor’s and Master’s degree mark sheet</li>
            <li style={liStyle}>Caste certificate (if any)</li>
            <li style={liStyle}>Aadhar card/PAN card/Electric bill copy for address proof</li>
            <li style={liStyle}>School/college leaving certificate</li>
            <li style={liStyle}>Passport size photo</li>
            <li style={liStyle}>Class 10 and 12 mark sheet.</li>
            <li style={liStyle}>School/college leaving certificate</li>
            <li style={liStyle}>Caste certificate(if any)</li>
            <li style={liStyle}>Pan card/Aadhar card for address proof</li>
            <li style={liStyle}>JEE MAIN scorecard</li>
          </ul>
      </section>
    </div>
  );
};

export default About;
