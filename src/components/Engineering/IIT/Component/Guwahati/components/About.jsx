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
  const th3Style = { marginLeft: "5%", fontSize: "20px", fontWeight: "700" };
  const liStyle = { fontSize: "16px", lineHeight: "1.6" };

  return (
    <div style={sectionStyle}>
      <section id="about">
        <h2 style={h2Style}>About IIT Guwahati</h2>
        <p style={pStyle}>
          As we all know that the IIT Guwahati is India’s one of the top public engineering
          universities. Indian Institute of Technology Guwahati or IIT Guwahati is the sixth
          IIT established by the Government of India in 1994. .IIT Guwahati is located on
          the tranquil northern banks of Brahmaputra, in Guwahati, Assam, IIT Guwahati
          is home to the first research park in North East India .IIT Guwahati has signed
          MoUs with numerous national and international institutions across the globe to
          promote student and faculty exchange programmes and bring in more
          opportunities for international internships, joint conferences and workshops. IIT
          Guwahati has five academic centers and five extramural centers. <br /><br />
          In the recently released QS World University Rankings 2024, IIT Guwahati has
          gained rank 32nd globally in the ‘Research Citations per Faculty’ category and
          overall 364th rank. As per NIRF 2023 rankings, IIT Guwahati is ranked on 7th in
          the Engineering category In addition to this, the university has also been
          ranked 6th under the 'Engineering' category by India Today in 2023. The
          international rankings, IIT Guwahati has been ranked 344th in the 'World
          University' category by the QS World University Rankings 2025. US News
          ranking 2023 has ranked the institute 25th under the 'University
          (Overall)' category. NAAC also  has accredited IIT Guwahati. <br /> <br />
          IIT Guwahati offers multiple courses at three different levels which include
          undergraduate, postgraduate, and doctoral levels. IIT Guwahati courses
          include B.Tech, B.Des, B.Sc., Dual Degree, M.Tech, M.A, M.Sc., M.S, M.Des,
          and Ph.D. To get admission in IIT Guwahati the candidate must meet the
          eligibility criteria for the desired course. The college offers more than 160
          courses at the UG, PG and doctoral levels. The fee structure of IIT Guwahati
          varies from courses to course. The candidate must have to appear for the
          entrance exam before applying for the admission, then after appearing in the
          exam candidate should have to meet the IIT Guwahati  cutoff to proceed with the
          next step of the admission process. <br /> <br />
          IIT Guwahati has concluded the placements each year.  IIT Guwahati has
          concluded for the year 2023. During these placements, 1112 offers were made
          to students. The offered pay package at IIT Guwahati B.Tech CSE placements in
          2023 was INR 42.10 LPA. The highest domestic package offered at IIT Guwahati
          was INR 1.1 crore per year, whereas the highest international package was INR
          2.4 crore per year. For the M.Tech & M. Des program, the highest CTC remained
          INR 57.07 LPA and 51.32 LPA respectively. <br /> <br />
          Recently, IIT Guwahati has signed an MoU with Samagra Shiksha Assam (SSA)
          to foster scientific temper among the state-run schools in Assam. The Incubation
          center of IIT Guwahati has incubated 42 start-ups to promote the entrepreneurial
          ecosystem among the students. Further, IIT Guwahati is also home to the
          BioNEST, the Bio Incubation center supported by BIRAC (Govt. of India).
          Recently, BioNEst hosted 80 startups across India to showcase their products to
          Investors, healthcare providers, and Enablers.
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>Course Fees and Structure</h2>
        <p style={pStyle}>
          The Indian Institute of Technology, Guwahati, offers B.Tech. and B.Des courses
          at the UG level. IIT Guwahati PG courses are M.A., M.S., M.Sc., M.Tech, M.Des,
          and M.B.A., and the college also offers PhD courses. The IIT Guwahati courses
          are available in various fields which include sciences, engineering and
          architecture, management and design, and many others. <br /> <br />
          The duration of IIT Guwahati courses ranges from 2 years to 6 years. The
          candidate must meet IIT Guwahati eligibility criteria to apply for the courses. IIT
          Guwahati fees vary from course to course. IIT Guwahati fee structure depends
          on various factors like hostel maintenance charges, electricity and water
          charges, adjustable mess advance, and many others.
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
                <th style={thStyle}>Tuition Fee</th>
                <th style={thStyle}>Number of Courses</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "Certificate",
                  tuition: "INR 95K",
                  numberOfCourses: "2",
                },
                {
                  course: "B.E./B.Tech",
                  tuition: "INR 8L",
                  numberOfCourses: "12",
                },
                {
                  course: "M.E./M.Tech",
                  tuition: "INR 1.1L - 1.7L",
                  numberOfCourses: "34",
                },
                {
                  course: "M.Sc.",
                  tuition: "INR 1.1L - 20L",
                  numberOfCourses: "6",
                },
                {
                  course: "B.Des",
                  tuition: "INR 8L",
                  numberOfCourses: "1",
                },
                {
                  course: "MBA/PGDM",
                  tuition: "INR 5.5L",
                  numberOfCourses: "1",
                },
                {
                  course: "M.A.",
                  tuition: "INR 1.1L",
                  numberOfCourses: "2",
                },
                {
                  course: "M.Des",
                  tuition: "INR 1.1L",
                  numberOfCourses: "2",
                },
                {
                  course: "Ph.D.",
                  tuition: "INR 1.7L",
                  numberOfCourses: "13",
                },
                {
                  course: "MS",
                  tuition: "INR 1.1L - 1.7L",
                  numberOfCourses: "5",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.course}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                  <td style={tdStyle}>{row.numberOfCourses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT Guwahati admissions will be done through national-level tests conducted by
          various authorities. IIT Guwahati offers a range of undergraduate, postgraduate,
          and doctoral courses fewer than 11 constituent departments, four
          interdisciplinary schools, and five centers. It offers courses in the fields of
          Engineering, Science, Architecture, and Pharmacy. Admission to all the courses
          is entrance-based. They need to appear for the respective entrance exam and
          qualify for its cutoff. IIT Guwahati application form for all these courses can be
          filled by visiting the official website of the respective national/ state-level exams. <br /> <br />
          For M.Tech, MSc, and M.Des admission, the institute considers the following
          exams i.e., GATE, IIT JAM, and CEED. IIT Guwahati also offers Ph.D. admission
          programs at the doctoral level. The institute grants admission to its PhD program
          through a written test and a personal interview round. IIT Guwahati PhD
          qualified candidates are also given admission through a valid GATE score.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati Application Process </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidates must visit the official website.</li>
          <li style={liStyle}>Then, fill in all the necessary details correctly. </li>
          <li style={liStyle}>Scan and upload the required documents.</li>
          <li style={liStyle}>Then submit the application form after paying the IIT Guwahati application
            fees.</li>
        </ul>

        <h3 style={th3Style}>Eligibility & Selection Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course Name</th>
                <th style={thStyle}>Eligibility</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.Tech",
                  eligibility:
                    "Class 12 in Science stream with Chemistry, Physics, and Mathematics as compulsory subjects",
                  selection: "JEE Main + JEE Advanced + JoSAA Counseling",
                },
                {
                  course: "B.Des",
                  eligibility:
                    "Class 12 in any stream/ Diploma/ State Board of Technical Education or equivalent",
                  selection: "UCEED + Counseling",
                },
                {
                  course: "M.Tech",
                  eligibility:
                    "B.Tech or BE/ MCA/ MSc/ AMIETE with 60% aggregate or 6.0 CPI",
                  selection: "GATE + COAP Counseling",
                },
                {
                  course: "M.Sc",
                  eligibility:
                    "Bachelor’s degree in the Science stream with a minimum of 55% aggregate",
                  selection: "IIT-JAM + CCMN Counseling",
                },
                {
                  course: "M.Des",
                  eligibility:
                    "Bachelor's degree in Design/ Engineering/ Architecture/ Interior Design or equivalent with a minimum of 6.0 CPI/ 60% aggregate",
                  selection:
                    "CEED + Design Aptitude Test (conducted at DoD, IITG for shortlisted candidates based on CEED score) + Interview and Portfolio",
                },
                {
                  course: "MBA",
                  eligibility:
                    "Bachelor’s/ master’s degree with a minimum of 60% aggregate or 6.0 CPI/CGPA",
                  selection:
                    "CAT + Personal Interview + Work Experience + Academic Merit",
                },
                {
                  course: "MA",
                  eligibility:
                    "Bachelor's degree in any discipline with a minimum of 50% aggregate or 5.0 CPI",
                  selection: "Written Test + Interview/ Counseling conducted by IIT Guwahati",
                },
                {
                  course: "PhD",
                  eligibility:
                    "Master’s degree in a relevant discipline with a minimum of 60% to 70% aggregate or 6.0 to 7.0 CPI",
                  selection: "GATE/ NET/ CEED/ INSPIRE",
                },
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
          <strong>Guwahati UG Admissions process</strong>
        </h3>
        <p style={pStyle}>The IITG offers 15 courses at the undergraduate level. IIT Guwahati UG
          Courses include B.Tech, B.Des and Dual degrees. 13 specializations are offered
          in B.Tech.  </p>

        <h3 style={th3Style}>Eligibility & Selection Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course Name</th>
                <th style={thStyle}>Eligibility</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.Tech",
                  eligibility: "Candidates must have passed 10+2",
                  selection: "JEE Advanced exam scores ",
                },
                {
                  course: "B.Des",
                  eligibility: "Candidates must have passed 10+2",
                  selection: "UCEED score",
                },
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
          <strong>IIT Guwahati B.Tech Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate must meet IIT Guwahati B.Tech eligibility criteria.</li>
          <li style={liStyle}>Then the candidate needs to qualify for JEE Main and JEE Advanced.</li>
          <li style={liStyle}>They need to attend JoSAA counseling and select IIT Guwahati as their preferred institute.</li>
          <li style={liStyle}>If a seat is allotted at IIT Guwahati, candidates need to submit the documents for verification and pay IIT Guwahati B.Tech fees. </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati B.Des Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate must meet IIT Guwahati B.Des eligibility criteria.</li>
          <li style={liStyle}>Then the candidate needs to qualify for UCEED exam.</li>
          <li style={liStyle}>Then the candidates have to register for counseling and seat allotment of
            UCEED.</li>
          <li style={liStyle}>Candidates need to select IIT Guwahati as their first choice. </li>
          <li style={liStyle}>Seats will be allotted on the basis of UCEED rank, category and choice of
            institutes.</li>
          <li style={liStyle}>If the candidate is allotted a seat in IIT Guwahati, submit the documents
            and make IIT Guwahati fee payment.</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati PG Admissions</strong>
        </h3>
        <p style={pStyle}>The IITG offers 38 courses at the postgraduate level. IIT Guwahati PG Courses
          include M.A., M.S., M.Sc., M.Tech, M.Des, and M.B.A. 27 specializations are
          offered in M.Tech. 4 specializations are offered in M.S. and 3 specializations are
          offered in M.Sc.</p>

        <h3 style={th3Style}>Eligibility & Selection Criteria</h3>
        <div
          style={{
            overflowX: "auto",
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
                {
                  course: "M.Tech",
                  eligibility:
                    "Candidates must have a Four-year Bachelor's degree in the relevant discipline with a minimum 6.0 CPI on a 10-point scale (or 60% aggregate marks).",
                  selection: "GATE followed by CCMT counseling",
                },
                {
                  course: "M.Des",
                  eligibility:
                    "Candidates must have a four-year Bachelor's degree or equivalent in Design/ Engineering/ Architecture/ Interior Design or a Design related field with a minimum 6.0 CPI on a 10-point scale (or 60% marks).",
                  selection: "CEED score",
                },
                {
                  course: "M.Sc",
                  eligibility:
                    "Candidates having a bachelor's degree in B.Sc./B.E. In the qualifying degree, the candidate should have 55% or 5.0 CPI.",
                  selection: "JAM followed by CCMN counseling",
                },
                {
                  course: "M.A",
                  eligibility:
                    "Candidates must have a Bachelor's (10+2+3) degree (Major/Honors) or equivalent from a recognized University, in any discipline, with a minimum 6.0 CPI on a 10-point scale (or 60% marks) in major/honors only. Or Candidates not having Major/Honors courses must have the concerned degree with a minimum 6.0 CPI on 10-point scale (or 60% marks).",
                  selection: "Merit-based",
                },
                {
                  course: "M.S",
                  eligibility:
                    "Candidate must have a minimum CPI of 6.5 on a 10-point scale CPI or 60% marks or First class in BE/B.Tech/M.Sc. or equivalent in any discipline OR B.Tech Degree in any discipline from an IIT with a minimum CPI of 8.0 or above in case GATE score is not compulsory. For Sponsored/Part-time/IITG project category staff, GATE/NET/INSPIRE score is not necessary.",
                  selection: "GATE followed by CCMT counseling",
                },
                {
                  course: "M.B.A",
                  eligibility:
                    "Candidates must have a Bachelor's degree or a Master's degree with at least 60% marks or a minimum CPI or CGPA of 6.0 on a 10-point scale. For SC/ST/PwD candidates, a relaxation of 5% in marks (i.e. min. 55%) or equivalent in CPI or CGPA (i.e. min. 5.50 on a 10-point scale) is permissible.",
                  selection: "CAT exam followed by personal interview",
                },
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

        <h3 style={th3Style}>IIT Guwahati M.Tech Admission - Highlights</h3>
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
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Particulars: "Admission Process",
                  Details: "M. Tech Admission at IIT Guwahati",
                },
                {
                  Particulars: "Conducting Body",
                  Details: "Indian Institute of Technology (IIT), Guwahati ",
                },
                {
                  Particulars: "Admission Type",
                  Details: "Post-Graduation",
                },
                {
                  Particulars: "Level of Admission",
                  Details: "Institute Level",
                },
                {
                  Particulars: "Admission Channel",
                  Details: "Through GATE scores",
                },
                {
                  Particulars: "Engineering Departments at IIT Guwahati ",
                  Details: 10,
                },

              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Particulars}</td>
                  <td style={tdStyle}>{row.Details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati M.Tech Eligibility Criteria</strong>
        </h3>
        <p style={pStyle}>In order to be eligible for IIT Guwahati M.Tech admissions, candidates need to
          comply with the eligibility criteria suggested by the authorities. <br /><br />
          Eligibility Applicable to all - Candidates need to have a bachelor's degree in the
          specified specializations for IIT Guwahati M.Tech admission. Also, a minimum
          CPI of 6.0 in a 10-point scale, or a minimum of 60% of total/aggregate marks in
          a qualifying degree is a must for aspiring candidates. The minimum marks
          requirement is relaxed by lowering 0.5 in CPI or 5% in marks for SC/ ST/ PwD
          candidates.</p>

        <h3 style={th3Style}>Specialization Wise Eligibility Criteria for M.Tech Admission at IIT
          Guwahati </h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Specialization</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  specialization: "Computer Science and Engineering",
                  eligibility:
                    "Bachelor of Engineering / Technology or equivalent in an appropriate area, or M.Sc. (Computer Science/Information Technology), or Graduates (AMIETE) enrolled up to 31.05.2013 from the Institution of Electronics and Telecommunication Engineers (IETE) in Computer Science & Engineering or MCA.",
                },
                {
                  specialization: "Electronics and Electrical Engineering",
                  eligibility:
                    "Bachelor of Electrical Engineering / Electronics Engineering or Equivalent, or M.Sc.(Electronics), or Graduates (AMIETE) enrolled up to 31.05.2013 from Institution of Electronics and Telecommunication Engineers (IETE) in Electronics & Telecommunication Engineering.",
                },
                {
                  specialization: "Mechanical Engineering",
                  eligibility:
                    "Bachelor of Engineering / Technology in an appropriate area.",
                },
                {
                  specialization: "Civil Engineering",
                  eligibility:
                    "Bachelor of Engineering / Technology in an appropriate area. For Earth System Science and Engineering specialization - Four-year Bachelor of Civil Engineering/ B.Tech Petroleum Engineering/ B.Tech Mining Engineering/ B.Tech Mineral Engineering/ Geoscience Engineering/ Agriculture Engineering/ Engineering Physics (or equivalent)/ Engineering Mathematics (or equivalent), or Master of Science degree in Geology (or equivalent)/ Geophysics (or equivalent)/ Physics, Soil Physics, or allied areas in natural sciences. Master of Science degree in Mathematics/ Chemistry and allied areas in natural sciences.",
                },
                {
                  specialization: "Biotechnology",
                  eligibility:
                    "Master in Science or Bachelor of Engineering or Technology, with Biology or related subjects as one of the papers at the 10+2 level or later.",
                },
                {
                  specialization: "Chemical Engineering",
                  eligibility:
                    "Bachelor of Engineering / Technology in an appropriate area having Mass Transfer, Heat Transfer, Fluid Mechanics, Thermodynamics, Reaction Engineering, and Process Control as subjects in an undergraduate programme.",
                },
                {
                  specialization: "Rural Technology",
                  eligibility: "B.E./ B.Tech./ M.Sc./ MCA/ Four-year B.S. degrees or equivalent in any engineering/ science discipline.",
                },
                {
                  specialization: "Data Science",
                  eligibility: "B.E./ B.Tech./ M.Sc. in any discipline.",
                },
                {
                  specialization: "Food Science & Technology",
                  eligibility:
                    "Four Year Bachelor of Engineering/ Technology/ Science or equivalent in one of the following disciplines (or equivalent disciplines): Chemical Engineering, Biotechnology/ Biosciences / Bioengineering/ Life Sciences, Food Sciences/ Food Processing/ Food Technology/ Food Engineering, Agricultural Sciences/ Engineering, OR Two Year/ Five Year Integrated Master of Science in one of the following disciplines: Chemistry, Biochemistry, Biology, Zoology, Botany,Any Disciplines of Life Sciences Food Sciences/ Food Processing/ Food Chemistry ",
                },
                {
                  specialization: "Robotics and Artificial Intelligence",
                  eligibility:
                    "Any Discipline of Life Sciences, Food Sciences/ Food Processing/ Food Chemistry. Qualifying Degree: B.Tech/BE in EE/EEE/CSE/Mech/PI/Civil/IT/Design. For Industry-sponsored candidates, GATE/CEED is not mandatory. For Regular candidates, CEED or GATE in EE/ECE/ME/CSE/CE/PI is required. Minimum Marks: Minimum CPI of 6.0 in a 10-point scale or a minimum of 60% of total/aggregate marks in a qualifying degree.",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.specialization}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati M.Tech Application Form</strong>
        </h3>
        <p style={pStyle}>IIT Guwahati has concluded the M.Tech registration process in online mode. The
          candidates aspiring to pursue the programme had to fill the IIT Guwahati M.Tech
          application form carefully before the last date. <br /><br />
          Documents required while filling IIT Guwahati M.Tech Admission Application
          While filling out the IIT Guwahati M.Tech application form, candidates shall need
          to upload the following documents: <br />

          <ul style={ulStyle}>
            <li style={liStyle}>A coloured photograph of 4.5 cm x 3.5 cm (size between 15-80 kb) in
              JPEG/ JPG/ GIF format.</li>
            <li style={liStyle}>Copy of date of birth proof (class 10/ 12 mark sheet or pass certificate).</li>
            <li style={liStyle}>Category certificate (if applicable)</li>
            <li style={liStyle}>PwD certificate, if applicable.</li>
            <li style={liStyle}>Copies of passing certificates</li>
            <li style={liStyle}>All the mark sheets of educational qualifications from class 10 onwards.</li>
            <li style={liStyle}>Consolidated mark sheet of the qualifying degree.</li>
            <li style={liStyle}>Self-attested copy of GATE scorecard</li>
          </ul>
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Steps to fill IIT Guwahati M.Tech Application Form</strong>
        </h3>
        <p style={pStyle}>Candidates will be required to follow the series of steps mentioned below to fill
          out the application form for IIT Guwahati M.Tech admission:
          <ul style={ulStyle}>
            <li style={liStyle}>Visit the official website at iitg.ac.in </li>
            <li style={liStyle}>Click on the link to IIT Guwahati 2024 M.Tech application form</li>
            <li style={liStyle}>Candidates need to enter all the necessary personal, academic, and other
              information while filling out the application form for IIT Guwahati M. Tech
              admission 2024. </li>
            <li style={liStyle}>After that, certain documents need to be uploaded in the format prescribed
              by the authorities.</li>
            <li style={liStyle}>Finally, submit the online application form.</li>
            <li style={liStyle}> Take a printout of the confirmation page after the successful submission of
              the IIT Guwahati application form for M.Tech. </li>
          </ul>
          Candidates invited for the written test must self-attest the IIT Guwahati M.Tech
          application form, attach the requisite documents mentioned above in original
          with the application confirmation page and bring it to the concerned department
          for IIT Guwahati M. Tech 2024 admission.
        </p>

        <h3 style={th3Style}>Application Fees</h3>
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
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Fees</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Category: "All Female Candidates ",
                  Fees: "INR 150",
                },
                {
                  Category: "All Transgender Candidates ",
                  Fees: "INR 150",
                },
                {
                  Category: "All SC/ ST/ PwD Candidates",
                  Fees: "INR 150",
                },
                {
                  Category: "All other candidates ",
                  Fees: "INR 150",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Category}</td>
                  <td style={tdStyle}>{row.Fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Process for IIT Guwahati M.Tech Admissions</strong>
        </h3>
        <p style={pStyle}>The application criteria for IIT Guwahati M.Tech admission are not as straight
          forward. Candidates need to take note of the following selection criteria carefully
          for the IIT Guwahati M. Tech admission:
          <ul style={ulStyle}>
            <li style={liStyle}>For M. Tech admission at IIT Guwahati, candidates have to make two-way
              applications. First, they have to apply for IIT Guwahati admission in M.Tech
              at the official website, followed by the Common Offer Acceptance Portal
              (COAP). </li>
            <li style={liStyle}>They will have to fill out the application form and apply for IIT Guwahati M.
              Tech admission 2024 through CCMT. </li>
            <li style={liStyle}>The candidates will be informed of admission offers through SMS/
              registered email. However, the admission offers will be accessible at
              the GATE COAP portal as well.</li>
            <li style={liStyle}>Thereafter, allotment of seats will be done to the eligible candidates after
              counseling for IIT Guwahati M. Tech admission into respective NITs, IITs
              and CFTIs through CCMT.</li>
          </ul>
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Rules for Tie Breaking the Final Score (GATE Score or Composite Score) for Ranking</strong>
          </h3>
          <p style={pStyle}>While preparing the rank list for (regular category) admission into M.Tech/
            M.Des/ MS(R) Programmes, if two or more candidates scored the same GATE
            Score or same final Composite score for admission, the following rules shall be
            followed to determine the inter-se merit:
            <ul style={ulStyle}>
              <li style={liStyle}>Firstly, based on the Aggregate/ Total Percentage of Marks obtained in
                Class 12, the candidate has a higher percentage of marks to be ranked
                higher.</li>
              <li style={liStyle}>If the Aggregate/ Total Percentage of Marks obtained in Class 12 does not
                break the tie, then based on the Aggregate/ Total Percentage of Marks
                obtained in Class 10, the candidates have a higher percentage of marks to
                be ranked higher. </li>
              <li style={liStyle}>If the Aggregate/ Total Percentage of Marks obtained in Class 10 does not
                break the tie, based on Date of Birth, the candidate senior/ older in age to
                be ranked higher. </li>
              <li style={liStyle}>If there is a tie even after this, such candidates will be assigned the same
                rank.</li>
            </ul>
          </p>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Guwahati M.Des Admission Process</strong>
          </h3>
          <ul style={ulStyle}>
            <li style={liStyle}>The candidate has to meet IIT Guwahati M.Des eligibility criteria.</li>
            <li style={liStyle}>The candidate is required to apply, appear and qualify for the CEED.</li>
            <li style={liStyle}>This is then followed by the process of a personal interview & portfolio
              presentation round.</li>
            <li style={liStyle}>The IIT Guwahati M.Des admissions are done based on the scores obtained in the entrance exam and performance in the interview and presentation. </li>
            <li style={liStyle}>The final stage of the IIT Guwahati admission process is document verification and payment of the admission fee. </li>
          </ul>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Guwahati M.Sc. Admission Process </strong>
          </h3>
          <ul style={ulStyle}>
            <li style={liStyle}>The candidate must meet IIT Guwahati M.Sc. eligibility criteria.</li>
            <li style={liStyle}>Then the candidates need to qualify JAM. </li>
            <li style={liStyle}>After the results are announced, qualified candidates need to apply online using the admission form available at JOAPS website to their preferred institute. </li>
            <li style={liStyle}>Shortlisted students should verify the documents and pay IIT Guwahati
              course fees.</li>
          </ul>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Guwahati M.A. Admission Process</strong>
          </h3>
          <ul style={ulStyle}>
            <li style={liStyle}>The candidate must meet IIT Guwahati M.A eligibility criteria.</li>
            <li style={liStyle}>Based on applications, candidates are shortlisted.</li>
            <li style={liStyle}>Then the shortlisted candidates will need to appear and clear the written test.</li>
            <li style={liStyle}>Finally, documents are verified and IIT Guwahati fee payment is done.</li>
          </ul>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Guwahati M.S. Admission Process</strong>
          </h3>
          <ul style={ulStyle}>
            <li style={liStyle}>The candidate must meet IIT Guwahati M.A eligibility criteria. </li>
            <li style={liStyle}>The candidate must appear and get a valid GATE score/NET (JRF)/INSPIRE. </li>
            <li style={liStyle}>Appear for the written test conducted by the institute.</li>
            <li style={liStyle}>Appear and clear the interview process.</li>
            <li style={liStyle}>Verify the document and pay the IIT Guwahati fees.</li>
          </ul>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Guwahati M.B.A. Admission Process </strong>
          </h3>
          <ul style={ulStyle}>
            <li style={liStyle}>The candidate must meet IIT Guwahati M.B.A. eligibility criteria.</li>
            <li style={liStyle}>Then the candidates have to appear for the CAT</li>
            <li style={liStyle}>Shortlisting of the candidates will be done based on their performance in CAT, Gender Diversity, Work Experience, Performance in Class XII, Performance in Graduation Degree, and Possession of a Postgraduate Degree. </li>
            <li style={liStyle}>Then the shortlisted candidates have to face a personal interview.</li>
            <li style={liStyle}>Final selection will be done based on CAT performance, Performance in Personal Interview, Work Experience, and Performance in Graduation Degree.</li>
            <li style={liStyle}>Finally, documents are verified and IIT Guwahati fee payment is done.</li>
          </ul>
        </p>

        <h3 style={th3Style}>Parameters for shortlisting in IIT Guwahati M.B.A. Admissions </h3>
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
                <th style={thStyle}>Parameter</th>
                <th style={thStyle}>Weightage</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Parameter: "Performance in CAT",
                  Weightage: "70%",
                },
                {
                  Parameter: "Gender Diversity",
                  Weightage: "10%",
                },
                {
                  Parameter: "Work Experience",
                  Weightage: "7%",
                },
                {
                  Parameter: "Performance in Class XII",
                  Weightage: "5%",
                },
                {
                  Parameter: "Performance in Graduation Degree",
                  Weightage: "5%",
                },
                {
                  Parameter: "Possession of a Postgraduate Degree",
                  Weightage: "3%",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Parameter}</td>
                  <td style={tdStyle}>{row.Weightage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>Final Selection Parameters for IIT Guwahati M.B.A Admissions</h3>
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
                <th style={thStyle}>Parameter</th>
                <th style={thStyle}>Weightage</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Parameter: "Performance in CAT",
                  Weightage: "40%",
                },
                {
                  Parameter: "Performance in Personal Interview",
                  Weightage: "40%",
                },
                {
                  Parameter: "Work Experience",
                  Weightage: "10%",
                },
                {
                  Parameter: "Performance in Graduation Degree",
                  Weightage: "10%",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Parameter}</td>
                  <td style={tdStyle}>{row.Weightage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati Dual Degrees Admissions</strong>
        </h3>
        <p style={pStyle}> The IITG also offers 2 dual courses.
          M.Tech+ Ph.D. and M.S. + Ph.D. are the dual courses offered by IIT
          Guwahati. </p>
        <h3 style={th3Style}>IIT Guwahati Dual Courses, Seat Intake and Eligibility Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Seat Intake</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Course: "M.Tech+ Ph.D. ",
                  Intake: "N/A",
                  Criteria: "Candidates must have B.E. or B.Tech. Degree or equivalent in any discipline other than Computer Science and Engineering or Information Technology with a minimum 7.0 CPI on 10-point scale (or 70% marks). +Valid GATE score.",
                },
                {
                  Course: "M.S. + Ph.D. ",
                  Intake: "N/A",
                  Criteria: "Candidates must have Bachelor’s degree in Engineering or Technology or equivalent in any discipline with a minimum 7.0 CPI on 10-point scale (or 70% marks). +Valid GATE score.",
                },

              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Course}</td>
                  <td style={tdStyle}>{row.Intake}</td>
                  <td style={tdStyle}>{row.Criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati Dual Degree Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate must meet IIT Guwahati eligibility criteria.</li>
          <li style={liStyle}>The candidates must attend the written test conducted by IIT Guwahati.</li>
          <li style={liStyle}>Shortlisting of the candidates is done based on their performance in the
            written test. </li>
          <li style={liStyle}>Then the shortlisted candidates are called for an interview.</li>
          <li style={liStyle}>Final IIT Guwahati Selection is done based on the written test and
            interview. </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati Ph.D. Admissions</strong>
        </h3>
        <p style={pStyle}>The IITG offers PhD programmes in 16 specializations. The duration of courses
          may last up to 6 years. </p>

        <h3 style={th3Style}>IIT Guwahati PhD Seat Intake and Eligibility Criteria</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Seat Intake</th>
                <th style={thStyle}>Eligibility Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  Course: "Ph.D.",
                  Intake: "N/A",
                  Criteria: "Candidates must have graduated with 6.0 on a 10-point scale (or 60% of marks) or Bachelor’s degree with 7.0 on a 10-point scale (or 70% of marks)(This depends upon the Specialization and marks secured in the qualifying exam). ",
                },

              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.Course}</td>
                  <td style={tdStyle}>{row.Intake}</td>
                  <td style={tdStyle}>{row.Criteria}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati Ph.D. Admission Process</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>The candidate has to meet IIT Guwahati PhD eligibility criteria.</li>
          <li style={liStyle}>The candidates must attend the written test conducted by IIT Guwahati.</li>
          <li style={liStyle}>Shortlisting of the candidates is done based on their performance in the
            written test. </li>
          <li style={liStyle}>Then the shortlisted candidates are called for an interview.</li>
          <li style={liStyle}>Final IIT Guwahati Selection is done based on the written test and
            interview. </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
