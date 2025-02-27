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
        <h2 style={h2Style}>About IIT Madras</h2>
        <p style={pStyle}>
          IIT Madras (Indian institute of technology madras) was established in 1959
          and located in Chennai. It is one of the eminent institutions of national
          importance; it is also one of the eight public IOE (Institutes of Eminence) of
          India. It is the 3rd IIT to be set up by the GOI and it is autonomous statutory
          institute governed by IIT council. <br /><br />
          IIT madras has performed exceptionally well in NIRF ranking.it secured the 1st
          rank in overall for the 4th time in a row and engineering and 15th in
          management.it has secured the 227th position in the overall category of QS
          world university ranking 2025. <br /><br />
          IIT madras has 16 departments,4 national and 10 institute research centers
          which offer more than 100+`courses through UG, PG, and Doctoral Level in
          engineering, Science, Humanities and Management. Recently the institute
          launched the country’s 1st online BSC program in programming in data
          science. If you want to get admission in IIT madras you have to give national
          level entrance exam and some  special course you have to clear JEE
          Advance. <br /><br />
          The children who are not financially strong there are scholarship for them and
          there are more than 20+ numbers of scholarship are provided on different
          based like Merit –based, need based, merit –cum- need based. <br />
        </p>
      </section>

      <section id="courses">
        <h2 style={h2Style}>IIT Madras courses and fees</h2>
        <p style={pStyle}>
          IIT madras offers more than 100+ courses thorough UG, PG and PHD
          degrees. The courses are offer in engineering, science, humanities and
          management. They give joint degree, exchange and research programs. They
          also give dual degrees in Btech-Mtech and BS-MS and integrated course in
          M.A., M.Tech, and M.Sc. IIT Madras also offer joint PhD and JDP programs
          and for that they signed MoUs with foreign universities for it. <br /><br />
          IITM is also known for QIP which is sponsored by AICTE. There are the few
          popular programs provided by IITM in different streams are given below:
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
                <th style={thStyle}>No. of Courses</th>
                <th style={thStyle}>Tuition Fee</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stream: "B.Sc", courses: "9", tuition: "INR 1.2L-10L" },
                { stream: "B.E./B.Tech", courses: "35", tuition: "INR 5.3L-10L" },
                { stream: "M.E./M.Tech", courses: "54", tuition: "INR 20K-10L" },
                { stream: "M.Sc.", courses: "6", tuition: "INR 10K-10L" },
                { stream: "M.A.", courses: "5", tuition: "INR 20K" },
                { stream: "Master Of Surgery", courses: "10", tuition: "INR 10K" },
                { stream: "U.G. Diploma", courses: "6", tuition: "INR 55K-70.5K" },
                { stream: "Certificate", courses: "9", tuition: "INR 32K-2.5L" },
                { stream: "B.A.", courses: "2", tuition: "--" },
                { stream: "MBA/PGDM", courses: "2", tuition: "INR 1.3L-17L" },
                { stream: "Executive MBA/PGDM", courses: "2", tuition: "INR 13L-13.5L" },
                { stream: "M.S.", courses: "2", tuition: "INR 10K" },
                { stream: "PG Diploma", courses: "1", tuition: "--" },
                { stream: "Ph.D.", courses: "2", tuition: "INR 15K" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.stream}</td>
                  <td style={tdStyle}>{row.courses}</td>
                  <td style={tdStyle}>{row.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="admission">
        <h2 style={h2Style}>Admission</h2>
        <p style={pStyle}>
          IIT madras admission is completely entrance based for B.Tech, M.Tech, M.sc,
          and B.sc courses. <br /><br />
          IIT madras admissions are mostly done through national level entrance exam
          including JEE Main /JEE advance IIT jam and gate among other.
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Course</th>
                <th style={thStyle}>Entrance exam accepted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.Tech/B.Tech-M.Tech </td>
                <td style={tdStyle}>JEE advance</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Tech</td>
                <td style={tdStyle}>GATE</td>
              </tr>
              <tr>
                <td style={tdStyle}>M.Sc</td>
                <td style={tdStyle}>IIT JAM</td>
              </tr>
              <tr>
                <td style={tdStyle}>MBA</td>
                <td style={tdStyle}>CAT</td>
              </tr>
              <tr>
                <td style={tdStyle}>PHD</td>
                <td style={tdStyle}>Gate/UGC-NET/CSIR-NET/ICAR or ICMR</td>
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
          For applying in IIT Madras, there are three steps which are as follows:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>The eligible candidates first have to visit the official website of the university then after they will have to fill out the application form of the university.
          </li>
          <li style={liStyle}>Candidate must attach the original documents which are required and then they have to pay the IITM application fee.</li>
          <li style={liStyle}>After paying the fee, the candidate can apply.</li>
        </ul>
        <p style={pStyle}>There are certain eligibility criteria and selection processes of some
          popular course are in the below tabulate are:- </p>

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
                <th style={thStyle}>Selection Process</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "B.Tech",
                  eligibility: "Passes 10+2 from PCM from a recognized board with a minimum of 75% marks",
                  selection: "JEE Mains + JoAAA counseling"
                },
                {
                  course: "M.Tech",
                  eligibility: "Passed in B.E./B.Tech/equivalent degree in the relevant stream",
                  selection: "GATE Score + COAP counseling"
                },
                {
                  course: "MBA",
                  eligibility: "Bachelor’s degree in Engineering /Technology/ Architecture /Pharmacy /B.Sc. Agri. Engg. (Minimum 4 years after 10+2) with at least 60% marks OR Master’s degree in any relevant branch with a minimum of 60% marks",
                  selection: "CAT + Group Discussion + Interview Round"
                },
                {
                  course: "Ph.D.",
                  eligibility: "M.E./ M.Tech or MD degree with at least 60% (55% for SC/ST/PH) marks in aggregate OR 60% (55% for SC/ST/PH) marks in MBBS/ M.Sc./ MBA/ MA OR Minimum 70% marks in B.E/B.Tech",
                  selection: "GATE/ UGC-NET/ CSIR-NET/ ICAR or ICMR score OR Written Test and Interview"
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
      </section>
    </div>
  );
};

export default About;
