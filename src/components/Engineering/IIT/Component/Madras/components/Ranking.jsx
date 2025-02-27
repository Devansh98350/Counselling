import React from "react";

const Ranking = () => {
  const sectionStyle = {
    padding: "20px",
    paddingTop: "0px",
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
    fontSize: "20px",
    fontWeight: "700",
  };

  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  const ulStyle = {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  const imageContainerStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  const innerListStyle = {
    marginLeft: "20px",
  };

  return (
    <div style={sectionStyle}>
      <section id="ranking">
        <h2 style={h2Style}>IIT Madras ranking</h2>
        <p style={pStyle}>
          IIT Madras remain top of the chart of NIRF ranking top college ranking 1st for
          the consecutive for the 3 years defeating IIT Delhi, IIT Bombay,, IIT Kanpur, IIT
          Kharagpur IIT Roorkee, IIT Guwahati etc. as 2nd, 3rd,4th,5th, 6th,7th as
          respectively for 3 year <br /> <br />
          IIT Madras NIRF ranking with other institution in last year is given below:
        </p>

        <h3 style={th3Style}>Institution Rankings</h3>
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
                <th style={thStyle}>Institutions</th>
                <th style={thStyle}>2024</th>
                <th style={thStyle}>2023</th>
                <th style={thStyle}>2022</th>
              </tr>
            </thead>
            <tbody>
              {[
                { institution: "IIT Madras", rank2024: "1", rank2023: "1", rank2022: "1" },
                { institution: "IIT Delhi", rank2024: "2", rank2023: "2", rank2022: "2" },
                { institution: "IIT Bombay", rank2024: "3", rank2023: "3", rank2022: "3" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.institution}</td>
                  <td style={tdStyle}>{row.rank2024}</td>
                  <td style={tdStyle}>{row.rank2023}</td>
                  <td style={tdStyle}>{row.rank2022}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>The ranking of IIT Madras has been improving each year in the world ranking.
          In QS Global university ranking in 2023 is 250 and Asia ranking it makes it to
          53 and it maintain to 53 in 2024 as well but in world ranking it slide to 285 but it
          improve in 2024 by ranking 227.</p>

        <h3 style={th3Style}>IIT Madras QS world university ranking 2025 </h3>
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
                <th style={thStyle}>2023</th>
                <th style={thStyle}>2024</th>
                <th style={thStyle}>2025</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Asia", rank2023: "53", rank2024: "53", rank2025: "74" },
                { category: "Southern Asia", rank2023: "4", rank2024: "3", rank2025: "3" },
                { category: "Top global Universities", rank2023: "250", rank2024: "285", rank2025: "227" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.rank2023}</td>
                  <td style={tdStyle}>{row.rank2024}</td>
                  <td style={tdStyle}>{row.rank2025}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>Some other IIT Madras ranking in the world is:
          <ul style={ulStyle}>
            <li style={liStyle}>By QS world university ranking- 227th</li>
            <li style={liStyle}>QS WUR ranking by subject- 29th </li>
            <li style={liStyle}>Qs sustainability ranking- 344th</li>
            <li style={liStyle}>Asia university ranking - 3rd</li>
          </ul>
        </p>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Madras also provide financial aid  to the student who  are financially strong
          through many scholarship programs provided by government and privately
          both but first they must be eligible for it because every scholarship have
          particular  eligibility criteria in order to be awarded. <br />
          IIT Madras Scholarship application programs filling process:-
          <ul style={ulStyle}>
            <li style={liStyle}>First you have to open the website of IIT Madras by clicking the link https://www.iitm.ac.in/</li>
            <li style={liStyle}>Then the home page will open on your screen.</li>
            <li style={liStyle}>After that you have to click on the option called <strong>Academics</strong> and a dialogue will appear on your screen.</li>
            <li style={liStyle}>You have to click on the option called <strong>Academic Services</strong> and a few other options will open on your screen successfully.</li>
            <li style={liStyle}>Click on the option called <strong>Scholarships and Financial Assistance</strong> anda new page with the details related to these scholarships will open on your screen. </li>
            <li style={liStyle}>You can click on the <strong>Apply Online</strong> button after reading all of the information about this scholarship.</li>
            <li style={liStyle}>The application form will open on your screen.</li>
            <li style={liStyle}>You have to fill out the application form and upload all of the documents.</li>
            <li style={liStyle}>Successfully apply for the scheme.</li>
          </ul>
        </p>

        <h3 style={th3Style}>Scholarship Details</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name of the Scholarship</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Award Scholarship</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Institute Merit-Cum-Means Scholarship",
                  eligibility: "Family annual income should not exceed INR 4.5 Lakhs",
                  award: "67% tuition exemption. Available for only 25% of students admitted. Renewal every semester requires a minimum GPA of 5.0. in the previous semester.",
                },
                {
                  name: "Institute Free Studentship",
                  eligibility: "Family annual income should not exceed INR 4.5 Lakhs",
                  award: "67% tuition exemption. Available for only 25% of students admitted. Renewal every semester requires a minimum GPA of 5.0. in the previous semester.",
                },
                {
                  name: "Institute National Prize",
                  eligibility: "Based on JEE rank and parents’ monthly income not exceeding INR 4.5 Lakhs",
                  award: "7% of accepted students are eligible. One-time donation of INR 1000.",
                },
                {
                  name: "Institute SC/ST Scholarship",
                  eligibility: "Family annual income should not exceed INR 4.5 Lakhs",
                  award: "Free messing and pocket allowance of INR 250 per month, over and above tuition fee exemption. Renewal requires a minimum GPA of 5.0. in the previous semester.",
                },
                {
                  name: "Girish Ready Scholarship",
                  eligibility: "2 Scholarships on the basis of highest JEE rank and annual family income not exceeding INR 5 lakhs and 1 Scholarship on the basis of best all-round performance in the previous school years and annual family income not exceeding INR 5 lakhs",
                  award: "INR 25,000 every year. Renewal of scholarship every semester requires a minimum GPA of 8.0. in the previous semester.",
                },
                {
                  name: "Indian Women’s Association at Bonn Scholarship",
                  eligibility: "On the basis of the highest JEE rank and annual family income not exceeding INR 5 lakhs ",
                  award: "INR 1,250 to one B.Tech student only for 12 months.",
                },
                {
                  name: "Sri V Ranga Raju Memorial Scholarship",
                  eligibility: "Merit Cum Means, family income ≤ INR 5 lakhs",
                  award: "INR 500 per month for 4 years. Renewal of scholarship every semester requires a minimum GPA of 5.0. in the previous semester.",
                },
                {
                  name: "Kanchi Kamakoti Jagadguru Sri Chandrasekarendra Saraswati Endowment Award",
                  eligibility: "Merit Cum Means, family income ≤ INR 5.5 lakhs",
                  award: "One-time payment of INR 2500.",
                },
                {
                  name: "M Sankaraisah and M Saradha (Mithigiri) Scholarship",
                  eligibility: "On the basis of highest CGPA at the end of 4th semester of students of the B.Tech / Dual Degree   Electrical Engineering ",
                  award: "One-time payment of INR 20,000.",
                },
                {
                  name: "Dr K Vasantha Rau Scholarship",
                  eligibility: "On the basis of the highest JEE rank and annual family income not exceeding INR 5.5 lakhs. Renewal is based on a GPA of 6.5 and above ",
                  award: "INR 25,000 per annum to one student.",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.name}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                  <td style={tdStyle}>{row.award}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}>There are also some other scholarships which are also provided by the
          institution are give below:</p>

        <h3 style={th3Style}>Scholarship Details</h3>
        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Scholarship</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Amount of Scholarship</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  scholarship:
                    "Ministry of Social Justice and Empowerment, Central Sector Scholarship For SC students",
                  eligibility:
                    "Top 10 students based on JEE rank and parent’s income is not exceeding INR 4.5 Lakhs (only students of B.Tech & Dual Degree 5-yr students are eligible).",
                  amount:
                    "Personal PC: INR 45,000 one time; Living Expenses: INR 2,200 per month; Books & stationery: INR 3,000 per annum; Reimbursement of Tuition fees.",
                },
                {
                  scholarship:
                    "Ministry of Tribal Affairs, Govt. of India Scholarship For ST students",
                  eligibility:
                    "Top 5 students based on JEE rank and parent’s income is not exceeding INR 4.5 Lakhs (only students of B.Tech, Dual Degree, MBA & LLB students are eligible).",
                  amount:
                    "Personal PC: INR 45,000; one-time; Living Expenses: INR 2,200 per month; Books & stationery: INR 3,000 per annum; Reimbursement of Tuition fees. Renewal of the scholarship is subject to passing the final examination of each year.",
                },
                {
                  scholarship: "Ministry of Minority Affairs, Merit-cum-Means Scholarship",
                  eligibility:
                    "Students from minority groups like Muslims, Christians, Sikhs, Buddhists, and Parsis who have secured admission and whose parent’s income does not exceed INR 2.5 Lakhs are eligible.",
                  amount:
                    "Maintenance Expenses @ Rs.10, 000/- per annum for hostellers and for day scholars Rs.5, 000/- Reimbursement of course fee of Rs.20, 000/- or the actual fees whichever is less. The scholarship amount will be sanctioned by the State Govt. 30% of the scholarship are reserved for girl students. Renewable subject to passing of the final examination of each year.",
                },
                {
                  scholarship: "MHRD scholarship for single girl child",
                  eligibility: "As per GoI norms",
                  amount: "INR 40,000 per year",
                },
                {
                  scholarship: "Pratibha Scholarship of Govt. of Andhra Pradesh",
                  eligibility:
                    "Open to B.Tech students. They should be native of the State of Andhra Pradesh and secured a minimum of first class with 60% marks in Intermediate / XII class or its equivalent with annual parental income not exceeding 1 Lakh",
                  amount:
                    "INR 20,000 per annum and renewable every year. Students should apply directly to AP Govt.",
                },
                {
                  scholarship: "Aditya Birla Scholarship",
                  eligibility:
                    "The selection will be made by the Aditya Birla Group among the top 20 students in JEE Rank.",
                  amount: "INR 60,000 per annum",
                },
                {
                  scholarship: "Inlakhs Scholarship",
                  eligibility:
                    "Academic performance (CGPA of 9.0 & above) at the end of 2nd semester Selection by a Committee (One scholarship)",
                  amount: "INR 25,000 per semester for a period of four years.",
                },
                {
                  scholarship: "ST Engineering Scholarships",
                  eligibility:
                    "Offered to two B.Tech Students of II, III & IV Year, Amongst top 10% students of AE, CS, ME.",
                  amount: "INR 80,000 per annum",
                },
                {
                  scholarship: "OPJEMS",
                  eligibility:
                    "Selection among top 20 based on JEE rank. Higher semesters based on CGPA among top 20. ",
                  amount: "INR 80,000 per annum",
                },
                {
                  scholarship: "Shipping Corporation of India Scholarships",
                  eligibility:
                    "For all SC / ST / BPL students of B.Tech Naval Architecture ",
                  amount:
                    "INR 48,000 per annum or full tuition fee / hostel charges",
                },
                {
                  scholarship: "TODAI Scholarship",
                  eligibility: "Offered to two B.Tech Students of I, II, III & IV year amongst AE, EE, ME to excellent students.",
                  amount: "2 Lakhs Japanese yen per year",
                },
                {
                  scholarship: "Nissan Scholarship",
                  eligibility:
                    "Offered to two B.Tech / Dual Degree ",
                  amount: "Students III & IV year INR 70,000 per annum",
                },
                {
                  scholarship: "DAE, DGFS scholarship by DRDO",
                  eligibility:
                    "B.Tech Aerospace students Minimum CGPA of 7.0 Based on JEE Rank ",
                  amount:
                    "INR 5,000 per month for 4 years. One time book allowance of INR 10,000/-.",
                },
                {
                  scholarship: "IIT Madras 72 batch Scholarship",
                  eligibility: "Trust is providing interest free Educational loan to B.Tech students.",
                  amount: "INR 25,000 per year",
                },
                {
                  scholarship:
                    "Inspire Scholarship (Department of Science and Technology, Government of India) ",
                  eligibility: "All Students admitted to Dual Degree (B.S & M.S) – for 5 years ",
                  amount: "INR 80,000 per annum per student",
                },
                {
                  scholarship: "SSAN Ananya Educational Trust",
                  eligibility:
                    "Academic performance will be reviewed on periodic basis. Each beneficiary should ensure meeting basic minimum performance criteria (to be established later) to enable to continue the benefit of financial of the Trust.",
                  amount: "Interest-free Educational Loans",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.scholarship}</td>
                  <td style={tdStyle}>{row.eligibility}</td>
                  <td style={tdStyle}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Madras</h2>
        <p style={pStyle}>
          IIT Madras is a residential institute that stretched a 617 acre around
          2.5 km² campuses that is formally a part of adjoin Guindy national
          park. The main entrance of ITI Madras is on Sardar Patel road .the
          campus is close to the Raj Bhawan, the official seat of the governor of
          Tamil Nadu. <br /> <br />
          The campus is 10km from the Chennai airport, 12 km from the
          Chennai central railway station and it is well connected with bus
          stands. Kasturba Nagar is the nearest station on the Chennai MRTS
          line. <br /> <br />
          Most of the campus is protected forest which is carved out of the
          Guindy national park. The campus has the pride of having one of the
          most elegant antelopes in the world – THE BLACKBUCK. The
          campus is also home to the large number of Chital (spotted dear),
          Bonnet Macaque, and other rare wildlife. <br /> <br />
          IIT Madras has about 300 species of tree and plants with quite large
          number of native wild species, which are unique to the tropical ,dry
          evergreen vegetation. There are about 100 species of birds seen at
          different times of the year .There are some resident species and as
          well as few migrants like forest Wagtail, Pied Crested Cuckoo, Golden
          Oriole etc. which are migratory birds. <br />
          Some landmark of the this campus are :-
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>GAJENDRA CIRCLE </strong>
          </h3>
          <p style={pStyle}>The 1st landmark that greets every visitor’s is GC/Gajendra
            Circle.it is 2.5km from the gate the area from the main gate to GC
            is the residential zone of campus where staff and faculty live
            there. After GC there is academic zone with many departments,
            laboratories, workshop and computer center that cover the large
            area.at the end of campus you will see the hostel zone the
            various facilities for the students.</p>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>HIMALAYA</strong>
          </h3>
          <p style={pStyle}>It is a giant building where all the messes are located and in front
            there is a beautiful lawn where you can relax.</p>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>NEW ACADEMIC COMPLEX</strong>
          </h3>
          <p style={pStyle}>This building is constructed recently which is equipped with all
            the latest technology classroom facilities. Presently there are
            departments of mathematics, chemical engineering, metallurgical
            and material engineering. </p>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>OTA</strong>
          </h3>
          <p style={pStyle}>It is Open air theatre, where every weekend movies are screened
            by the film club. It lies between the GC and hostel zone. English,
            Hindi, Tamil, and other regional language movie are screened
            there. It is the same venue where the Saarang Pro-show are
            held.</p>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>CLT</strong>
          </h3>
          <p style={pStyle}>The central lecture theatre is just opposite to oat in the middle of
            the humanities and science block .there is a auditorium with a
            capacity of about 400, which is used for almost every in house
            activity in the institute. The LIT –SOC schedule use only this
            venue.</p>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>CRC, RAMAN and RAMANUJAN BLOCKS</strong>
          </h3>
          <p style={pStyle}>It is the one of the places where most of our common classes
            take place. The ground floor of the classroom is air conditions
            and is open for the use for student till 1am only during the quiz
            weeks to use as a hangout spot.</p>

          <p style={pStyle}>There is also wellness community center, women forum, sports,
            clubs, etc.</p>




        </p>
      </section>

      <section id="departments">
        <h2 style={h2Style}>IIT Madras Departments</h2>

        <ul style={ulStyle}>
          <li style={liStyle}>Aerospace engineering</li>
          <li style={liStyle}>Mechanics and bio medical engineering</li>
          <li style={liStyle}>Biotechnology</li>
          <li style={liStyle}>Chemical engineering</li>
          <li style={liStyle}>Civil  engineering</li>
          <li style={liStyle}>Chemistry</li>
          <li style={liStyle}>Computer science and engineering</li>
          <li style={liStyle}>Data science and artificial intelligence</li>
          <li style={liStyle}>Engineering design</li>
          <li style={liStyle}>Electrical engineering</li>
          <li style={liStyle}>Humanities and social science</li>
          <li style={liStyle}>Management studies</li>
          <li style={liStyle}>Mathematics</li>
          <li style={liStyle}>Mechanical engineering</li>
          <li style={liStyle}>Medical science and technology</li>
          <li style={liStyle}>Metallurgical and material engineering</li>
          <li style={liStyle}>Entrepreneurship</li>
          <li style={liStyle}>Ocean engineering</li>
          <li style={liStyle}>Physics </li>
          <li style={liStyle}>Interdisciplinary (IDRP)</li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Madras Faculty</strong>
        </h3>

        <p style={pStyle}>
          There are 266 professor, 144 associate professor ,1 librarian,41 chair
          professor,5 professor (hag), 4 institute professor, inspire faculty. 3 Professors
          of practice, and 1 visiting faculty.Cafeteria, a/c classroom, library, laboratories, hospital, central facilities Wi-Fi
          campus sports complex auditorium hostel
        </p>
      </section>
    </div>
  );
};

export default Ranking;
