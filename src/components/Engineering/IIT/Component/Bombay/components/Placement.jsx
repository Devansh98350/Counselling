import React from "react";

const Placement = () => {
  const sectionStyle = {
    padding: "20px",
    // paddingTop: "calc(20px + 50px)",
    backgroundColor: "#ffffff",
    fontFamily: "Segoe UI",
    lineHeight: "1.6",
    textAlign: "justify",
    overflowX: "hidden",
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

  const pStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const h2Style = {
    color: "rgb(0,0,255)",
    fontSize: "32px",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: "48px",
  };

  const th3Style = {
    marginLeft: "5%",
    fontSize: "24px",
    fontWeight: "700",
  };
  const ulStyle = {
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };
  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  return (
    <section id="placement" style={sectionStyle}>
      <h2 style={h2Style}>Placement</h2>
      <p style={pStyle}>
        In phase 1 of IIT Bombay Placements, over INR 1 crore in annual job offers were given to 22 students in the
        first placement round of 2023–2024. Some highlights of the IIT Bombay Placements 2024 are given below:
        <ul style={ulStyle}>
          <li style={liStyle}>Among the 1,188 students that were placed, 1,340 employment offers were made. </li>
          <li style={liStyle}>There are 297 PPOs and 7 PSUs in all. Airbus, Apple, Google, Intel, and numerous other companies
            are on the list of companies that participated in the 2024 IIT Bombay placements.</li>
          <li style={liStyle}>The majority of the greatest wages have been earned in the field of research and development, where
            the average package at IIT Bombay so far is INR 36.90 LPA, over 14% more than the previous year.
            Additionally, in the first phase, 63 students received offers from abroad. </li>
        </ul>
        Further, In IIT Bombay Placements 2023, the highest international and domestic package offered during IIT
        Bombay placements 2023 stood at INR 3.67 crore per annum and INR 1.68 crore per annum, respectively.
        The major highlights of IIT Bombay Placements 2023 are given below:
      </p>

      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        id="2023"
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>Placements Statistics 2023</th>
            </tr>
          </thead>
          <tbody>
            {[
              { particular: "No. of Recruiters Participated", value: 384 },
              { particular: "No. of Recruiters Making Job Offers", value: 324 },
              { particular: "No. of Registered Students", value: 2174 },
              { particular: "No. of Students Who Actively Participated", value: 1845 },
              { particular: "No. of Job Offers", value: 1788 },
              { particular: "No. of Accepted Offers", value: 1516 },
              { particular: "No. of Pre-Placement Offers", value: 300 },
              { particular: "No. of Accepted Pre-Placement Offers", value: 194 },
              { particular: "Placement Percentage", value: "82.16%" },
              { particular: "Highest International Package", value: "INR 3.67 CPA" },
              { particular: "Highest Domestic Package", value: "INR 1.68 CPA" },
              { particular: "Average Package", value: "INR 21.82 LPA" },
              { particular: "Top Recruiting Sector", value: "Engineering & Technology" },
              {
                particular: "Top Recruiters",
                value: "American Express, Honda Japan, McKinsey & Company, Boston Consulting Group etc.",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particular}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>Average Package, Highest Package & Top Recruiters</strong>
      </h3>
      <p style={pStyle}>IIT Bombay Placements 2024 Phase 1 has been completed. IIT Bombay average package stood at INR 36.9
        LPA whereas IIT Bombay highest package went above to INR 1 CPA. 85 students bagged Crore-plus annual
        package during the first phase of the placement. 63 students received international job offers. Recruiters
        made 1340 placement offers till December 20, 2023. A total of 1180 students have been placed. Students also
        received 297 PPOs among which 258 were accepted. Recruiters came from sectors like IT, Software,
        Finance, Consulting etc. Some of the top recruiters included Apple, Google, Intel, Morgan Stanley, Jaguar
        etc. Some placement highlights of the IIT Bombay are:</p>

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
          <tbody>
            {[
              { particular: "No. of offers ", value: 1340 },
              { particular: "No. of PPOs ", value: 297 },
              { particular: "No. of international offers", value: 63 },
              { particular: "Highest CTC", value: "1 CR." },
              { particular: "Highest CTC", value: "INR 36.9LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particular}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>IIT Bombay Placements 2024: Recruiters & Packages List</strong>
      </h3>
      <p style={pStyle}>IIT Bombay Placements 2024 (Phase 1) has been completed. Students can check the table given below to
        know the range of CTCs offered by various recruiters at IIT Bombay placements 2024:</p>

      <div
        style={{
          overflowX: "auto",
        }}
        id="2024"
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Job Role</th>
              <th style={thStyle}>Package Offered</th>
              <th style={thStyle}>Branches Eligible</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                company: "Exotic Mile Pvt Ltd (Boult Audio)",
                roles: [
                  {
                    job: "Program Associate, Founder's Office",
                    package: "INR 9,00,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.), Interdisciplinary (B.Tech + M.Tech.) & Integrated M.Sc.",
                  },
                ],
              },
              {
                company: "Vvf India Ltd",
                roles: [
                  {
                    job: "Graduate Engineering Trainee",
                    package: "AED 1,02,000",
                    branches: "B.Tech Mechanical, M.Tech, B.Tech + M.Tech",
                  },
                  {
                    job: "Engineering Management Trainee",
                    package: "INR 16,00,000",
                    branches: "B.Tech Mechanical, M.Tech, B.Tech + M.Tech",
                  },
                ],
              },
              {
                company: "Google India Pvt. Ltd.",
                roles: [
                  {
                    job: "Software Engineer, University Graduate",
                    package: "INR 35,24,790",
                    branches:
                      "All B.Tech Branches, B.S. M.Tech, M.S., M.Sc., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                ],
              },
              {
                company: "Nestle",
                roles: [
                  {
                    job: "Management Trainee- Technical",
                    package: "INR 30,00,000",
                    branches: "Electric and M.Tech, B.Tech + Dual",
                  },
                ],
              },
              {
                company: "Strand Life Sciences",
                roles: [
                  {
                    job: "Associate Bioinformatics Engineer",
                    package: "INR 11,00,000",
                    branches:
                      "Biomedical, Biotech, Digital Health, Chemical, Chemistry, Energy",
                  },
                ],
              },
              {
                company: "Strategy& (Part of PwC Network)",
                roles: [
                  {
                    job: "Associate",
                    package: "INR 24,95,729",
                    branches: "Environment, Met All B.Tech Branches, B.S.",
                  },
                ],
              },
              {
                company: "Sony Japan",
                roles: [
                  {
                    job: "JAF 8: Software and Hardware Engineer for Robotics Platform",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 7: Software Engineer, Privacy Preserving Technology",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 6: XR System Engineer",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 5: Software Project Manager of Home Audio Product Development",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 4: Researcher / Natural Language Processing (NLP)",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 3: Visual Recognition Computation System Architect (Research Engineer)",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 1: 3D Media System Engineer",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "JAF 2: Cloud System Technology Engineer for Content Production and Distribution Services",
                    package: "JPY 1,05,81,360",
                    branches: "All B.Tech Branches",
                  },
                ],
              },
              {
                company: "Accenture Japan Ltd",
                roles: [
                  {
                    job: "Digital Consultant",
                    package: "JPY 74,74,000",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "Business Consultant",
                    package: "JPY 74,74,000",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "Strategy Consultant",
                    package: "JPY 86,83,000",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "Data Scientist",
                    package: "JPY 86,83,000",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "AI Architect",
                    package: "JPY 77,24,000",
                    branches: "All B.Tech Branches",
                  },
                ],
              },
              {
                company: "Property Pistol Realty Pvt. Ltd",
                roles: [
                  {
                    job: "Assistant Manager Strategy",
                    package: "INR 18,00,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                ],
              },
              {
                company: "Ikagai Labs",
                roles: [
                  {
                    job: "ML Engineer",
                    package: "INR 25,00,000",
                    branches: "All B.Tech Branches",
                  },
                  {
                    job: "Software Engineer",
                    package: "INR 25,00,000",
                    branches: "All B.Tech Branches",
                  },
                ],
              },
              {
                company: "FASHNEAR TECHNOLOGIES PRIVATE LTD (Meesho)",
                roles: [
                  {
                    job: "Senior Associate- Growth",
                    package: "INR 20,00,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                  {
                    job: "Senior Associate- Finance",
                    package: "INR 20,00,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                  {
                    job: "Associate Business Manager-Trainee",
                    package: "INR 20,00,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                  {
                    job: "Software Development Engineer I",
                    package: "INR 23,50,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                  {
                    job: "Data Scientist I",
                    package: "INR 25,50,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc. ",
                  },
                  {
                    job: "Associate Product Manager I",
                    package: "INR 20,00,000",
                    branches:
                      "All B.Tech Branches, B.S., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc. ",
                  },
                ],
              },
              {
                company: "Fuji Electric India Pvt. Ltd.",
                roles: [
                  {
                    job: "Engineer",
                    package: "INR 10,00,000",
                    branches: "CSE, Electrical, System Controls",
                  },
                  {
                    job: "Embedded Firmware Engineer",
                    package: "INR 12,00,000",
                    branches: "CSE, Electrical, System Controls, Energy",
                  },
                  {
                    job: "Power Electronics Design Engineer",
                    package: "INR 12,00,000",
                    branches: "CSE, Electrical, System Controls, Energy",
                  },
                ],
              },
              {
                company: "General Mills",
                roles: [
                  {
                    job: "Analyst - Supply Chain Analytics",
                    package: "INR 11,50,000",
                    branches:
                      "All B.Tech Branches, B.S., M.Tech., M.Sc., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc.",
                  },
                ],
              },
              {
                company: "Abacus.AI (ABACUSDOTAI INDIA PRIVATE LIMITED)",
                roles: [
                  {
                    job: "Software Engineer (ML)",
                    package: "INR 40,00,000",
                    branches: "CSE B.Tech/Dual",
                  },
                ],
              },
              {
                company: "Airbus",
                roles: [
                  {
                    job: "Associate Engineer - Airframe Research & Technology (R&T)",
                    package: "INR 13,50,000",
                    branches: "Aero, Civil, Mechanical",
                  },
                  {
                    job: "Associate Engineer - Stress",
                    package: "INR 13,50,000",
                    branches: "Aero, Meta, Mechanical",
                  },
                  {
                    job: "Associate Engineer - Aero Thermal",
                    package: "INR 13,50,000",
                    branches: "Aero, Mechanical",
                  },
                  {
                    job: "Flight Operations Data Analyst",
                    package: "INR 13,50,000",
                    branches: "Aero",
                  },
                  {
                    job: "Associate Engineer: System Inst All B.Tech Branches",
                    package: "INR 13,50,000",
                    branches: "Aero, Electrical, Mechanical System Controls",
                  },
                  {
                    job: "Associate Engineer Mass Properties",
                    package: "INR 13,50,000",
                    branches: "Aero, Civil, Mechanical",
                  },
                  {
                    job: "Electrical System Engineer",
                    package: "INR 13,50,000",
                    branches: "Aero, Elec",
                  },
                  {
                    job: "Multi System Physical Architecture Engineer",
                    package: "INR 13,50,000",
                    branches: "Aero, Elec, Mechanical",
                  },
                  {
                    job: "Associate Engineer - Navigation Systems",
                    package: "INR 13,50,000",
                    branches: "Aero, Elec, System Controls",
                  },
                  {
                    job: "Associate Flight Controls and Hydraulics Development Engineer",
                    package: "INR 13,50,000",
                    branches: "Aero, Elec, Mechanical, Energy, System Controls",
                  },
                  {
                    job: "Associate Simulation Platforms Engineer",
                    package: "INR 13,50,000",
                    branches: "Aero, Elec, Mechanical, CSE, System Controls",
                  },
                  {
                    job: "ASSOCIATE ENGINEER - FLIGHT PHYSICS",
                    package: "INR 13,50,000",
                    branches: "Aero, Civil, Mech",
                  },
                  {
                    job: "Associate Industrial System Engineer",
                    package: "INR 13,50,000",
                    branches: "Aero, Mech, IEOR",
                  },
                  {
                    job: "Simulation Modeling Engineer",
                    package: "INR 13,50,000",
                    branches: "Aero, Elec, Mech",
                  },
                ],
              },
              {
                company: "WorldQuant Research (India) Private Limited",
                roles: [
                  {
                    job: "Quantitative Researcher",
                    package: "INR 76,26,000",
                    branches: "All BTech Branches",
                  },
                ],
              },
              {
                company: "SAP HOLDINGS AND LEASING PVT LTD (Sharayu)",
                roles: [
                  {
                    job: "Marketing Manager",
                    package: "INR 12,00,000",
                    branches: "All BTech Branches",
                  },
                  {
                    job: "Finance Manager",
                    package: "INR 12,00,000",
                    branches: "All BTech Branches",
                  },
                  {
                    job: "Business Development Manager",
                    package: "INR 12,00,000",
                    branches: "All BTech Branches",
                  },
                ],
              },
              {
                company: "Kotak Mahindra Bank",
                roles: [
                  {
                    job: "Management Trainee",
                    package: "INR 17,00,000",
                    branches:
                      "All BTech Branches, B.S., MTech, M.S., M.Sc., Dual Degree: (B.Tech + M.Tech.), (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc",
                  },
                ],
              },
              {
                company: "Samsung Delhi (Samsung India Electronics Pvt. Ltd.)",
                roles: [
                  {
                    job: "Engineer",
                    package: "INR 21,50,000",
                    branches: "CSE, Elec, Math, CMInDS",
                  },
                ],
              },
              {
                company: "Groww",
                roles: [
                  {
                    job: "Associate Product Manager",
                    package: "INR 24,00,000",
                    branches:
                      "All BTech Branches, B.S., MTech, M.S., M.Sc., Dual Degree: (B.Tech + M.Tech.), (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc",
                  },
                ],
              },
              {
                company: "JSW Steel",
                roles: [
                  {
                    job: "GRP",
                    package: "INR 9,00,000",
                    branches:
                      "All BTech Branches, B.S., MTech, M.S., M.Sc., Dual Degree: (B.Tech + M.Tech.), (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc",
                  },
                ],
              },
              {
                company: "Logixal Cloud Solutions LLP",
                roles: [
                  {
                    job: "Associate Software Engineer",
                    package: "INR 8,50,000",
                    branches: "BTech and MTech form: CSE, Elec, CMInDS, System Controls, Tech and Development",
                  },
                ],
              },
              {
                company: "Dass Scientific Research Labs Private Limited",
                roles: [
                  {
                    job: "Senior R&D Executive Officer",
                    package: "INR 5,00,000",
                    branches: "All BTech Branches Degrees and Branches",
                  },
                ],
              },
              {
                company: "FSG Advisory Services Pvt. Ltd.",
                roles: [
                  {
                    job: "Associate",
                    package: "INR 10,00,000",
                    branches: "All BTech Branches Degrees and Branches except PhD",
                  },
                ],
              },
              {
                company: "GLEAN SEARCH TECHNOLOGIES INDIA PRIVATE LIMITED",
                roles: [
                  {
                    job: "Software Engineer (US)",
                    package: "USD 1,87,500",
                    branches: "Bachelors/Masters from : CSE and Math",
                  },
                  {
                    job: "Software Engineer (India)",
                    package: "INR 76,19,625",
                    branches: "Bachelors/Masters from : CSE and Math",
                  },
                ],
              },
              {
                company: "Cargill",
                roles: [
                  {
                    job: "Agriculture Supply Chain Associate Data Analyst",
                    package: "INR 19,25,623",
                    branches: "Masters from : IEOR, Stats, Maths and All BTech Branches BTech, Dual",
                  },
                  {
                    job: "Agriculture Supply Chain Data Analyst",
                    package: "INR 23,03,338",
                    branches: "Masters Students of All BTech Branches",
                  },
                  {
                    job: "Agriculture Supply Chain Advanced Analytics Associate Scientist",
                    package: "INR 19,25,623",
                    branches: "Masters from : IEOR, Stats, Maths and All BTech Branches BTech, Dual",
                  },
                  {
                    job: "Agriculture Supply Chain Advanced Analytics Scientist",
                    package: "INR 23,03,338",
                    branches: "Masters Students of All BTech Branches",
                  },
                ],
              },
              {
                company: "Samsung Bangalore",
                roles: [
                  { job: "Interaction Designer", package: "INR 16,00,000", branches: "IDC" },
                  { job: "VISUAL INTERACTION/MOTION DESIGN", package: "INR 16,00,000", branches: "IDC" },
                  { job: "VISUAL DESIGNER", package: "INR 16,00,000", branches: "IDC" },
                  { job: "Advanced Developer (Research Profile)", package: "INR 25,00,000", branches: "CSE, Elec, CMInDS, Math, EP" },
                ],
              },
              {
                company: "ICICI Lombard GIC Ltd.",
                roles: [
                  { job: "Senior Manager - Strategy & Innovation", package: "INR 12,99,114", branches: "All BTech Branches except PhD" },
                  { job: "Senior Developer", package: "INR 12,99,114", branches: "All BTech Branches, B.S., MTech, M.S., M.Sc., Dual Degree: (B.Tech + M.Tech.) (B.S. + M.Sc.) Interdisciplinary (B.Tech + M.Tech.) Integrated M.Sc" },
                  { job: "Senior Manager Data Engineer", package: "INR 12,99,114", branches: "All BTech Branches except PhD" },
                  { job: "Senior Manager Data Scientist", package: "INR 12,99,114", branches: "All BTech Branches except PhD" },
                  { job: "Senior Manager Actuarial Analyst", package: "INR 12,99,114", branches: "All BTech Branches except PhD" },
                ],
              },
              {
                company: "Murata Manufacturing Co. Ltd.",
                roles: [
                  { job: "Electric circuit design engineer (Development of lower-power technologies and new products for the next generation)", package: "JPY 67,80,000", branches: "All BTech Branches" },
                  { job: "Embedded Software Engineer", package: "JPY 67,80,000", branches: "All BTech Branches" },
                  { job: "Sales Engineer of Power Module Product", package: "JPY 67,80,000", branches: "All BTech Branches" },
                ],
              },
              {
                company: "Reliance Industries Limited",
                roles: [
                  { job: "Graduate Engineer Trainee", package: "INR 9,00,000", branches: "BTech: Chem, Civil, Mech, Meta" },
                  { job: "M.Tech Team Member - Computer Science - Reliance New Energy", package: "INR 15,00,000", branches: "MTech CSE" },
                  { job: "M.Tech Team Member - Civil - Reliance New Energy", package: "INR 15,00,000", branches: "MTech/Dual Civil, Energy" },
                  { job: "M.Tech Team Member - Instrumentation - Reliance New Energy", package: "INR 15,00,000", branches: "MTech/Dual Elec, Energy, System Control" },
                  { job: "M.Tech Team Member - Electrical - Reliance New Energy", package: "INR 15,00,000", branches: "MTech/Dual Elec, Energy, System Control" },
                  { job: "M.Tech Team Member - MetAll Btech Branchesury - Reliance New Energy", package: "INR 15,00,000", branches: "MTech/Dual MetAll BTech Branchesury, Energy" },
                  { job: "M.Tech Team Member - Mechanical/Mechatronics - Reliance New Energy", package: "INR 15,00,000", branches: "MTech/Dual Mech, Energy" },
                  { job: "M.Tech Team Member - Chemical/Materials - Reliance New Energy", package: "INR 15,00,000", branches: "MTech/Dual Chem, Meta, Energy " },
                ],
              },
              {
                company: "Aganitha Cognitive Solutions",
                roles: [
                  { job: "Scientist - Biotechnology/Microbiology", package: "INR 10,00,000", branches: "Biomedical, Biotech, Nanotech, Chemical" },
                  { job: "Scientist - Computational Chemistry", package: "INR 10,00,000", branches: "PhD in: Chemistry, Chemical, Nanotech" },
                ],
              },
              {
                company: "ITS Planners and Engineers",
                roles: [
                  { job: "Software Engineering (Full Stack Developer)", package: "INR 8,00,000", branches: "All BTech Branches Degrees and Branches except PhD and Masters + Masters Dual" },
                  { job: "Software Engineering (Python, AIML)", package: "INR 8,00,000", branches: "All BTech Branches Degrees and Branches except PhD and Masters + Masters Dual" },
                ],
              },
              {
                company: "Shell India Markets Private Limited",
                roles: [
                  { job: "Consultant simulation and Optimisation", package: "INR 24,61,794", branches: "Masters in: Chemical, System Controls, Physics, Metallurgy, Math, IEOR, Elec, Environment, Physics, EnergyEconomics, CSE" },
                  { job: "Project Services Graduate-Cost estimation and Risk", package: "INR 24,61,794", branches: "Bachelors/Dual in Meta, Mech, Civil, Chemical, Economics, Elec, Urban Science" },
                  { job: "Graduate Petroleum Engineer", package: "INR 24,61,794", branches: "Masters in Geology, Geophysics, Geoexplorations, Geoinformatics, Metallurgy, Petroleum Geosciences" },
                  { job: "Process Engineer - LNG Operations", package: "INR 24,61,794", branches: "All BTech Branches degrees in Chemical Engineering" },
                  { job: "Simulation and Optimization Graduate", package: "INR 24,61,794", branches: "Masters in Chemical, Mech and Environment" },
                ],
              },
              {
                company: "Tata AIA Life Insurance Co Ltd",
                roles: [
                  { job: "Management Trainee", package: "INR 18,55,000", branches: "All BTech Branches Degrees and Branches" },
                ],
              },

            ].map((company, index) => (
              <React.Fragment key={index}>
                {company.roles.map((role, roleIndex) => (
                  <tr key={roleIndex}>
                    {roleIndex === 0 && (
                      <td style={tdStyle} rowSpan={company.roles.length}>
                        {company.company}
                      </td>
                    )}
                    <td style={tdStyle}>{role.job}</td>
                    <td style={tdStyle}>{role.package}</td>
                    <td style={tdStyle}>{role.branches}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Bombay Placements 2024 Report
      </h3>
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
              <th style={thStyle}>Placements Statistics (2024)</th>
              <th style={thStyle}>Placements Statistics (2023)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { label: "No. of Job Offers", data2024: "1340", data2023: "1898" },
              { label: "No. of Pre-Placement Offers", data2024: "297", data2023: "300" },
              { label: "No. of Accepted Pre-Placement Offers", data2024: "258", data2023: "194" },
              { label: "Highest Package", data2024: "INR 1 CPA", data2023: "INR 3.67 CPA" },
              { label: "Average Package", data2024: "INR 36.9 LPA", data2023: "INR 21.82 LPA" },
              {
                label: "Top Recruiters",
                data2024: "Apple, Google, Intel, Morgan Stanley, Jaguar, Qualcomm etc.",
                data2023: "American Express, Honda Japan, McKinsey & Company, Boston Consulting Group etc.",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.label}</td>
                <td style={tdStyle}>{row.data2024}</td>
                <td style={tdStyle}>{row.data2023}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <p style={pStyle}>The below table shows you the placement comparison of other IITs:</p>

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
              <th style={thStyle}>IITs</th>
              <th style={thStyle}>Highest Package</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>No. of Offers</th>
            </tr>
          </thead>
          <tbody>
            {[
              { iit: "IIT Patna", highest: "INR 82.05 LPA", average: "INR 23.90 LPA", offers: "413" },
              { iit: "IIT Kanpur", highest: "INR 1.9 CPA", average: "NA", offers: "1200" },
              { iit: "IIT Kharagpur", highest: "INR 2.6 CPA", average: "NA", offers: "1600" },
              { iit: "IIT BHU", highest: "INR 1.2 CPA", average: "NA", offers: "472" },
              { iit: "IIT Hyderabad", highest: "INR 63.78 LPA", average: "INR 20.07 LPA", offers: "621" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.iit}</td>
                <td style={tdStyle}>{row.highest}</td>
                <td style={tdStyle}>{row.average}</td>
                <td style={tdStyle}>{row.offers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Bombay Average Package 2024 </strong>
      </h3>
      <p style={pStyle}>IIT Bombay average package stood at INR 36.9 LPA during the recent placement drive of 2024. The below
        table shows the year-wise average packages of IIT Bombay: </p>

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
              <th style={thStyle}>particulars</th>
              <th style={thStyle}>IIT Bombay Average Package </th>
            </tr>
          </thead>
          <tbody>
            {[
              { particular: "2024", package: "INR 36.9 LPA" },
              { particular: "2023", package: "INR 21.82 LPA" },
              { particular: "2022", package: "INR 21.50 LPA" },
              { particular: "2021", package: "INR 17.91 LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particular}</td>
                <td style={tdStyle}>{row.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Bombay Highest Package 2024 </strong>
      </h3>
      <p style={pStyle}>IIT Bombay highest package stood at INR 1 CPA during the recent placement drive of 2024. The below table
        shows the year-wise highest packages of IIT Bombay:</p>

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
              <th style={thStyle}>particulars</th>
              <th style={thStyle}>IIT Bombay Highest Package </th>
            </tr>
          </thead>
          <tbody>
            {[
              { particular: "2024", package: "INR 1 CPA" },
              { particular: "2023", package: "INR 3.67 CPA" },
              { particular: "2022", package: "INR 1.80 CPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.particular}</td>
                <td style={tdStyle}>{row.package}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>Salary Statistics</strong>
      </h3>
      <p style={pStyle}>The below table shows you the salary statistics of IIT Bombay Placements 2023.</p>

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
              <th style={thStyle}>Salary Range</th>
              <th style={thStyle}>No of Offers</th>
              <th style={thStyle}>No. of Companies</th>
            </tr>
          </thead>
          <tbody>
            {[
              { salary: "INR 0 LPA to INR 5 LPA", offers: "1", companies: "1" },
              { salary: "INR 5 LPA to INR 6.25 LPA", offers: "99", companies: "12" },
              { salary: "INR 6.25 LPA to INR 7.75 LPA", offers: "72", companies: "25" },
              { salary: "INR 7.75 LPA to INR 9.5 LPA", offers: "149", companies: "33" },
              { salary: "INR 9.5 LPA to INR 11.5 LPA", offers: "142", companies: "42" },
              { salary: "INR 11.5 LPA to INR 13.5 LPA", offers: "261", companies: "65" },
              { salary: "INR 13.5 LPA to INR 16 LPA", offers: "229", companies: "65" },
              { salary: "Above INR 16 LPA", offers: "563", companies: "130" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.salary}</td>
                <td style={tdStyle}>{row.offers}</td>
                <td style={tdStyle}>{row.companies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Bombay Placements 2024: Sector-wise</strong>
      </h3>
      <p style={pStyle}>The below table shows you the sector-wise statistics of IIT Bombay Placements 2023.</p>

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
              <th style={thStyle}>Sectors</th>
              <th style={thStyle}>Placement Percentage</th>
              <th style={thStyle}>No. of Offers</th>
              <th style={thStyle}>No. of Recruiters</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: "Engineering & Technology", percentage: "30%", offers: "458", recruiters: "97" },
              { sector: "IT/Software", percentage: "20%", offers: "302", recruiters: "88" },
              { sector: "Consulting", percentage: "10%", offers: "154", recruiters: "29" },
              { sector: "Research & Development", percentage: "6%", offers: "92", recruiters: "30" },
              { sector: "Education", percentage: "5%", offers: "81", recruiters: "7" },
              { sector: "Analytics", percentage: "5%", offers: "79", recruiters: "21" },
              { sector: "Finance", percentage: "5%", offers: "76", recruiters: "32" },
              { sector: "Design", percentage: "2%", offers: "33", recruiters: "19" },
              { sector: "Data Science", percentage: "2%", offers: "25", recruiters: "13" },
              { sector: "Public Sector Undertaking", percentage: "1%", offers: "14", recruiters: "4" },
              { sector: "Services", percentage: "1%", offers: "9", recruiters: "4" },
              { sector: "Others", percentage: "1%", offers: "193", recruiters: "59" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.sector}</td>
                <td style={tdStyle}>{row.percentage}</td>
                <td style={tdStyle}>{row.offers}</td>
                <td style={tdStyle}>{row.recruiters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The highest number of offers came from the Engineering & Technology sector with 458 offers which is
        followed by the IT/Software sector with 302 offers & the Consulting sector with 154 offers. <br />
        The below table shows the course-wise distribution of the sectors:</p>
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
              <th style={thStyle}>Sectors</th>
              <th style={thStyle}>B.Tech</th>
              <th style={thStyle}>Dual Degree</th>
              <th style={thStyle}>M.Tech</th>
              <th style={thStyle}>Other Programmes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: "Engineering & Technology", btech: "129", dual: "58", mtech: "213", other: "58" },
              { sector: "IT/Software", btech: "156", dual: "32", mtech: "95", other: "19" },
              { sector: "Consulting", btech: "75", dual: "28", mtech: "33", other: "18" },
              { sector: "Research & Development", btech: "27", dual: "14", mtech: "37", other: "14" },
              { sector: "Education", btech: "5", dual: "1", mtech: "21", other: "54" },
              { sector: "Analytics", btech: "36", dual: "14", mtech: "17", other: "12" },
              { sector: "Finance", btech: "52", dual: "12", mtech: "1", other: "11" },
              { sector: "Design", btech: "1", dual: "3", mtech: "4", other: "25" },
              { sector: "Data Science", btech: "7", dual: "3", mtech: "11", other: "4" },
              { sector: "Public Sector Undertaking", btech: "4", dual: "2", mtech: "4", other: "4" },
              { sector: "Services", btech: "5", dual: "-", mtech: "4", other: "-" },
              { sector: "Others", btech: "91", dual: "20", mtech: "37", other: "26" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.sector}</td>
                <td style={tdStyle}>{row.btech}</td>
                <td style={tdStyle}>{row.dual}</td>
                <td style={tdStyle}>{row.mtech}</td>
                <td style={tdStyle}>{row.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong>Course-wise</strong>
      </h3>
      <p style={pStyle}>The below table represents the course-wise statistics of IIT Bombay Placements 2023</p>
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
              <th style={thStyle}>Students Registered</th>
              <th style={thStyle}>Students Participated</th>
              <th style={thStyle}>Students Placed</th>
              <th style={thStyle}>Placement Percentage</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "B.Tech", registered: "791", participated: "679", placed: "598", percentage: "88%" },
              { course: "M.Tech", registered: "583", participated: "532", placed: "479", percentage: "90%" },
              { course: "Dual Degree (B.Tech + M.Tech)", registered: "215", participated: "187", placed: "178", percentage: "95%" },
              { course: "M.Sc.", registered: "214", participated: "159", placed: "110", percentage: "69%" },
              { course: "Ph.D.", registered: "166", participated: "131", placed: "41", percentage: "31%" },
              { course: "M.Des", registered: "76", participated: "63", placed: "39", percentage: "61%" },
              { course: "B.S.", registered: "57", participated: "43", placed: "39", percentage: "90%" },
              { course: "B.Des", registered: "23", participated: "12", placed: "7", percentage: "58%" },
              { course: "MPP", registered: "12", participated: "9", placed: "6", percentage: "66%" },
              { course: "Dual Degree (B.Des + M.Des)", registered: "10", participated: "9", placed: "8", percentage: "88%" },
              { course: "Others", registered: "27", participated: "21", placed: "11", percentage: "52%" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.registered}</td>
                <td style={tdStyle}>{row.participated}</td>
                <td style={tdStyle}>{row.placed}</td>
                <td style={tdStyle}>{row.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>IIT Bombay Placements 2023, the highest number of students were placed from the B.Tech batch (791) followed by the M.Tech batch (583). The placement percentage was the highest for the Dual Degree (B.Tech +M.Tech) course. </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        id="gen"
      >
        <strong> Department-wise</strong>
      </h3>
      <p style={pStyle}>The below table shows the department-wise statistics of IIT Bombay Placements 2023</p>
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
              <th style={thStyle}>Departments</th>
              <th style={thStyle}>No. of Offers</th>
            </tr>
          </thead>
          <tbody>
            {[
              { department: "Computer Science & Engineering", offers: "228" },
              { department: "Electrical Engineering", offers: "214" },
              { department: "Mechanical Engineering", offers: "191" },
              { department: "Chemical Engineering", offers: "141" },
              { department: "Metallurgical Engineering & Materials Science", offers: "131" },
              { department: "Civil Engineering", offers: "129" },
              { department: "Aerospace Engineering", offers: "78" },
              { department: "Industrial Design Centre", offers: "54" },
              { department: "Energy Sciences & Engineering", offers: "40" },
              { department: "Chemistry", offers: "35" },
              { department: "Biosciences & Bioengineering", offers: "33" },
              { department: "Applied Statistics & Informatics", offers: "26" },
              { department: "Earth Sciences", offers: "17" },
              { department: "Physics", offers: "17" },
              { department: "Others", offers: "182" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.department}</td>
                <td style={tdStyle}>{row.offers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The below table represents the highlights of 2021-23 MBA placement highlights of IIT Bombay:</p>
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
              <th style={thStyle}>MBA Placements Statistics 2023</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: "Batch Size", value: "115" },
              { key: "Percentage of PPOs", value: "50%" },
              { key: "Highest Package", value: "INR 54 LPA" },
              { key: "Average Package", value: "INR 28.88 LPA" },
              { key: "Top 25% Average Package", value: "INR 40.80 LPA" },
              { key: "Top 50% Average Package", value: "INR 34.58 LPA" },
              { key: "Top 75% Average Package", value: "INR 31.41 LPA" },
              { key: "Average Package (Female)", value: "INR 29.35 LPA" },
              { key: "Median Package", value: "INR 26.64 LPA" },
              { key: "Median Package (Female)", value: "INR 28.90 LPA" },
              { key: "Lowest Package", value: "INR 20 LPA" },
              { key: "Lowest Package (Female)", value: "INR 23.50 LPA" },
              { key: "Major Domains", value: "FMCG / FMCD, Conglomerate" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.key}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The below table represents the PPO–wise statistics of IIT Bombay MBA Placements 2023 </p>
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
              <th style={thStyle}>Salary Statistics</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: "Average Package", value: "INR 30.35 LPA " },
              { key: "Lowest Package", value: "INR 16 LPA" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.key}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The below table represents the sector – wise statistics of IIT Bombay MBA Placements 2023</p>
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
              <th style={thStyle}>Sectors</th>
              <th style={thStyle}>Average Package</th>
              <th style={thStyle}>Students Split</th>
              <th style={thStyle}>Company Split</th>
            </tr>
          </thead>
          <tbody>
            {[
              { sector: "IT / E-commerce", package: "INR 31.72 LPA", students: "17%", companies: "14%" },
              { sector: "Consulting", package: "INR 29.09 LPA", students: "21%", companies: "16%" },
              { sector: "FMCG / FMCD", package: "INR 28.88 LPA", students: "24%", companies: "27%" },
              { sector: "Conglomerate", package: "INR 28.54 LPA", students: "24%", companies: "25%" },
              { sector: "BFSI", package: "INR 25.63 LPA", students: "14%", companies: "18%" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.sector}</td>
                <td style={tdStyle}>{row.package}</td>
                <td style={tdStyle}>{row.students}</td>
                <td style={tdStyle}>{row.companies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <p style={pStyle}>The below table represents the company-wise statistics of IIT Bombay Placements 2023</p>
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
              <th style={thStyle}>Company Type</th>
              <th style={thStyle}>No. of Placed Students</th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: "Placement Outside India", value: 65 },
              { key: "Placements in MNCs in India", value: 790 },
              { key: "Placements in Indian Companies ", value: 661 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.key}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The below table represents the highlights of IIT Bombay Ph.D. Placements 2023:</p>
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
              <th style={thStyle}>Ph.D Placements Statistics 2023 </th>
            </tr>
          </thead>
          <tbody>
            {[
              { key: "Registered Students", value: 166 },
              { key: "Active Participants", value: 131 },
              { key: "Accepted Offers", value: 41 },
              { key: "Highest Package", value: "INR 29 LPA" },
              { key: "Average Package", value: "INR 18.34 LPA" },
              { key: "Percentage of Offers to Active Participants", value: "31.66%" },
              { key: "Percentage Increase", value: "34.16%" },

            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.key}</td>
                <td style={tdStyle}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>During IIT Bombay Ph.D. Placements 2023, the number of placed students increased as compared to the last
        few years. The number of Ph.D. students stood at 14 in 2021, 30 in 2022 & 41 in 2023. <br />
        The below table show the year-wise trends of IIT Bombay Placements:
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
              <th style={thStyle}>Particulars</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: "Average Gross Salary", y2023: "INR 16.66 LPA", y2022: "INR 16.50 LPA", y2021: "INR 13.67 LPA" },
              { category: "No. of International Offers", y2023: "65", y2022: "66", y2021: "58" },
              { category: "No. of Pre-Placement Offers", y2023: "194", y2022: "201", y2021: "149" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2022}</td>
                <td style={tdStyle}>{row.y2021}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>As per the Information collected, now 49 companies participated in phase 1 and 2 placements for batch 2023
        and the following are the branch-wise placements for batch 2023 at IIT Bombay: </p>
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
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Name of the Company</th>
              <th style={thStyle}>Highest CTC</th>
              <th style={thStyle}>Sector</th>
            </tr>
          </thead>
          <tbody>
            {[
              { branch: "All", company: "Da Vinci Derivatives", ctc: "INR 1.32 CPA", sector: "Finance" },
              { branch: "CSE / Electronics", company: "Quad Eye", ctc: "INR 1.02 CPA", sector: "SDE And R&D" },
              { branch: "Mechanical", company: "Shell", ctc: "INR 22.5 LPA", sector: "Core" },
              { branch: "Others", company: "NED", ctc: "INR 47.5 LPA", sector: "SDE And R&D" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.branch}</td>
                <td style={tdStyle}>{row.company}</td>
                <td style={tdStyle}>{row.ctc}</td>
                <td style={tdStyle}>{row.sector}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The following table represents the mechanical placements for the batch 2023 at IIT Bombay</p>

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
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Sectors</th>
              <th style={thStyle}>CTC in LPA</th>
              <th style={thStyle}>Gross Salary</th>
              <th style={thStyle}>Slot</th>
            </tr>
          </thead>
          <tbody>
            {[
              { company: "GE ITC", sector: "Core", ctc: "16.6", salary: "10.5", slot: "First Slot" },
              { company: "Shell", sector: "Core", ctc: "22.5", salary: "16.5", slot: "First Slot" },
              { company: "Tata Steel", sector: "Core", ctc: "11.8", salary: "10", slot: "First Slot" },
              { company: "TATA Steel", sector: "Core", ctc: "11.8", salary: "10", slot: "Second Slot" },
              { company: "McKinsey Knowledge Center", sector: "Analytics/Data Driven Consult", ctc: "21", salary: "19", slot: "Second Slot" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.company}</td>
                <td style={tdStyle}>{row.sector}</td>
                <td style={tdStyle}>{row.ctc}</td>
                <td style={tdStyle}>{row.salary}</td>
                <td style={tdStyle}>{row.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The following table represents the other branches placements for the batch 2023 at IIT Bombay </p>
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
              <th style={thStyle}>Company</th>
              <th style={thStyle}>Sectors</th>
              <th style={thStyle}>CTC in LPA</th>
              <th style={thStyle}>Gross Salary</th>
              <th style={thStyle}>Slot</th>
              <th style={thStyle}>Branches</th>
            </tr>
          </thead>
          <tbody>
            {[
              { company: "Qualcomm", sector: "Core", ctc: "28.5", salary: "15.5", slot: "First Slot", branches: "MATH" },
              { company: "UBS", sector: "Finance", ctc: "24", salary: "22.5", slot: "Second Slot", branches: "MATH, IEOR" },
              { company: "GE ITC", sector: "Core", ctc: "16.6", salary: "10.5", slot: "First Slot", branches: "CIVIL, META, SYSCON" },
              { company: "Shell", sector: "Core", ctc: "22.5", salary: "16.5", slot: "First Slot", branches: "Chem, Meta, AERO" },
              { company: "Apple", sector: "SDE And R&D", ctc: "32", salary: "18", slot: "First Slot", branches: "EP, SYSCON" },
              { company: "Texas Instruments", sector: "Core", ctc: "26.8", salary: "16.75", slot: "First Slot", branches: "Elec, EP, ENERGY" },
              { company: "Cairn Oil and Gas Vedanta Limited", sector: "Core", ctc: "20", salary: "14", slot: "Second Slot", branches: "AERO, EARTH, GEO" },
              { company: "NEC", sector: "SDE And R&D", ctc: "46.7", salary: "36.5", slot: "Second Slot", branches: "PHD ALL" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.company}</td>
                <td style={tdStyle}>{row.sector}</td>
                <td style={tdStyle}>{row.ctc}</td>
                <td style={tdStyle}>{row.salary}</td>
                <td style={tdStyle}>{row.slot}</td>
                <td style={tdStyle}>{row.branches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Bombay Internships 2023 report :</p>
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
              <th style={thStyle}>Internship Statistics 2023</th>
              <th style={thStyle}>Internship Statistics 2022</th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: "No. of Internships", y2023: "1104", y2022: "1195" },
              { category: "No. of PPOs Offered", y2023: "300", y2022: "248" },
              { category: "No. of PPOs Accepted", y2023: "194", y2022: "201" },
              { category: "Summer Internship Offers", y2023: "963", y2022: "924" },
              { category: "Winter Internship Offers", y2023: "141", y2022: "271" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.category}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2022}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The below table represents the department-wise statistics of IIT Bombay Internship Placements 2023,</p>
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
              <th style={thStyle}>Departments</th>
              <th style={thStyle}>Internship Offers</th>
            </tr>
          </thead>
          <tbody>
            {[
              { department: "Computer Science", offers: 237 },
              { department: "Electrical", offers: 138 },
              { department: "Mechanical", offers: 130 },
              { department: "Chemical", offers: 98 },
              { department: "MEMS", offers: 50 },
              { department: "Civil", offers: 49 },
              { department: "Aerospace", offers: 33 },
              { department: "Chemistry", offers: 20 },
              { department: "Engineering Physics", offers: 19 },
              { department: "Energy", offers: 11 },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.department}</td>
                <td style={tdStyle}>{row.offers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Bombay Placements Top Recruiters
      </h3>
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
              <th style={thStyle}>Top Recruiters</th>
            </tr>
          </thead>
          <tbody>
            {[
              { course: "Aerospace Engineering", recruiters: "Honeywell, ISRO, Airbus, Gulfstream etc" },
              { course: "Applied Graphics Earth Sciences", recruiters: "Vedanta, CitiusTech, Sysmex, Indigence etc" },
              { course: "NanoTechnology & Science, Civil Engineering", recruiters: "Tata, L&T, Ramboll etc" },
              { course: "Chemical Engineering, Chemistry", recruiters: "Piramal, Dr. Reddy’s, ITC, Hindustan Unilever etc" },
              { course: "Applied Statistics & Informatics, Mathematics", recruiters: "Accenture, Citi Bank, EY, EXL etc" },
              { course: "Computer Science Engineering", recruiters: "Google, Apple, IBM, Uber, Microsoft" },
              { course: "Electrical Engineering", recruiters: "Texas Instruments, Samsung, NEC, Honda etc" },
              { course: "Energy Science & Engineering", recruiters: "Mahindra, SUZLON, GSE etc" },
              { course: "Engineering Physics", recruiters: "Analog Devices, BYJU’s, tsmc etc" },
              { course: "Geoinformatics & Resources, Humanities & Social Sciences", recruiters: "Bloom energy, Sony, Qualcomm, Rakuten etc" },
              { course: "Industrial Design Centre", recruiters: "Reliance, Google, IBM, Microsoft etc" },
              { course: "Industrial & Operations Research, Metallurgical & Materials Science", recruiters: "P&G, NEC, JSW, muRata etc" },
              { course: "Mechanical Engineering", recruiters: "Tata Steel, Loreal Paris, DAIKIN, Jaguar etc" },
              { course: "System & Control Engineering", recruiters: "Hitachi, Havels etc" },
              { course: "Environmental Science & Engineering, Climate Studies", recruiters: "Micron, Dellivery, BDEING etc" },
              { course: "Technology & Development", recruiters: "LT, EATON etc" },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.recruiters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Placement;
