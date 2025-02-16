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
        <h2 style={h2Style}>Ranking</h2>
        <p style={pStyle}>
          IIT Kanpur (IITK) is one of the most famous colleges in India. It is one
          of the prestigious IITs colleges like IIT Bombay, IIT Delhi, IIT Madras,
          and IIT Kharagpur. IIT Kanpur is the first generation of IITs established
          in India. IIT Kanpur is placed 278th by the QS World University
          Rankings 2024. The institute has also been ranked in India at number
          #4 by NIRF for the year 2023 in the Engineering category. It has
          consistently been among the top 5 in NIRF’s rankings. IIT Kanpur has
          also been ranked for management category by NIRF 2023 with
          23rd rank. Outlook ICARE and India Today have also recognized IIT
          Kanpur as one of the best in the nation by conferring it with a rank of
          #6 and #4 respectively. <br />
          IIT Kanpur is a public engineering and research institute in Kanpur,
          Uttar Pradesh which became operational in 1959. It is a Government
          of India-designated Institute of National Importance established under
          the IIT Act. For the third consecutive year, i.e. from 2021 to 2023, the
          Indian Institute of Technology Kanpur remained 5th in the overall
          category in the India Rankings 2023.
        </p>

        <h3 style={th3Style}>IIT Kanpur Ranking Highlights</h3>
        <div
          className="table-wrapper"
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
              <tr>
                <th style={thStyle}>Ranking Body</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Rank</th>
              </tr>
              {[
                {
                  body: "NIRF",
                  category: "Innovation 2023",
                  rank: "1",
                },
                {
                  body: "NIRF",
                  category: "Overall Category 2023",
                  rank: "5",
                },
                {
                  body: "NIRF",
                  category: "Research 2023",
                  rank: "6",
                },
                {
                  body: "NIRF",
                  category: "Engineering 2023",
                  rank: "4",
                },
                {
                  body: "NIRF",
                  category: "Management 2023",
                  rank: "23",
                },
                {
                  body: "NIRF",
                  category: "Engineering 2022",
                  rank: "4",
                },
                {
                  body: "India Today 2023",
                  category: "Top 10 Government Engineering 2023",
                  rank: "3",
                },
                {
                  body: "India Today 2023",
                  category: "T (Top 10 Colleges with Placement Record)",
                  rank: "3",
                },
                {
                  body: "QS",
                  category: "World University Ranking 2024",
                  rank: "278",
                },
                {
                  body: "QS",
                  category: "WUR Ranking by Subject 2024",
                  rank: "151 - 200",
                },
                {
                  body: "QS",
                  category: "Sustainability Ranking 2024",
                  rank: "522",
                },
                {
                  body: "QS",
                  category: "Asian University Ranking 2024",
                  rank: "6",
                },
                {
                  body: "QS",
                  category: "World University Rankings 2023",
                  rank: "264",
                },
                {
                  body: "QS",
                  category: "World University Rankings - Engineering & Technology 2023",
                  rank: "85",
                },
                {
                  body: "QS",
                  category: "Asia University Rankings 2023",
                  rank: "66",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.body}</td>
                  <td style={tdStyle}>{item.category}</td>
                  <td style={tdStyle}>{item.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          Being one of the top engineering institutes of India, IIT Kanpur offers a
          wide variety of programs to enroll in and to support the students
          financially, numerous scholarships are being offered for the 1st year
          students at IIT KANPUR  Apart from the scholarships offered by the
          institute, there are several other options for financial aid and
          scholarship offered by the alumni as well. Some of the popular
          scholarships at IIT Kanpur are mentioned below.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Merit Cum Means Scholarships:</strong>
        </h3>

        <ul style={ulStyle}>
          {[
            "The Merit Cum Means Scholarship is offered on the basis of the merits scored by the students in the entrances or last qualification. ",
            "In the scholarship, students receive a full tuition waiver and pocket money of INR 1000 per month. ",
            "In order to be eligible for the MCM scholarship, a candidate must have maintained a minimum CPI of 6.5 and if the minimum CPI falls, the monthly pocket money will be withdrawn. ",
            "The MCM Scholarship can be availed by the candidates belonging to the category of SC/ST or candidates whose annual parental income is less than 4.5 lakhs. ",
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>INSPIRE Scholarship:</strong>
        </h3>

        <ul style={ulStyle}>
          {[
            "INSPIRE Scholarship offered by IIT Kanpur can be availed by the Students of B.S programs within the ALL INDIA RANK (AIR) 10,000 as per Common Merit LIST (CML) in Chemistry, Physics, and Mathematics departments.",
            "As an award, students receive an annual scholarship of INR 30,000 per semester (INR 60,000 annually), along with a research grant of INR 20,000.",
            "However, the scholarship is merit-based; the students must have maintained a minimum CPI of 6.0. ",
            "Also, students are required to submit an undertaking for not getting any other scholarship to the SSPC every semester to apply for this scholarship. ",
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Sports Scholarship:</strong>
        </h3>

        <ul style={ulStyle}>
          {[
            "Students who have shown excellence in sports events and activities on the campus are eligible to avail the Sports Scholarship. ",
            "IIT Kanpur offers a maximum of 20 scholarships every year along with an amount of INR 1000 for 9 months.",
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>External Scholarship </strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "The students, who are unable to get institute scholarships, are assisted by the institute to apply for various other external scholarships.",
            " The external scholarships are generally offered under the various governments of India schemes.",
            "The Government of India has launched the National Scholarship Portal for students across the country as per the Prime Minister's Digital India Program.",
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Donors Scholarship:</strong>
        </h3>

        <p style={pStyle}>To help the meritorious and needy students, IIT Kanpur offers several
          Donors Scholarships based on a particular department or a minimum
          CPI of 6.0. The list of some of the Donors Scholarship along with their
          selection criteria is mentioned below in the table.</p>

        <div
          style={{
            overflowX: "auto",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name of Donors Scholarship</th>
                <th style={thStyle}>Selection Criteria</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  course: "Babu Ram Jain and Mrs. Shanti Jain Memorial Scholarship",
                  eligibility_criteria:
                    "1st year UG student of any engineering department based on the lowest TFAI. Also, the student should not be getting any other scholarship.",
                },
                {
                  course: "Balajit and Nirmal Dhindsa Scholarship",
                  eligibility_criteria:
                    "1st year UG student of BSBE department based on the highest CPI.",
                },
                {
                  course: "Kinra Scholarship",
                  eligibility_criteria:
                    "1st year UG student of ME department based on the minimum CPI of 6.0.",
                },
                {
                  course: "Kunta Jha Scholarship",
                  eligibility_criteria:
                    "A UG Student in a 4-year or 5-year program of any department based on the minimum CPI of 6.0.",
                },
                {
                  course: "Mathur Brother Scholarship",
                  eligibility_criteria:
                    "1st year UG student of any department based on JEE-AIR. The student should be of General Category and must have studied in a non-English medium school.",
                },
                {
                  course: "Prof. CNR Rao Science Talent Scholarship",
                  eligibility_criteria:
                    "UG student in a 4-year or 5-year program of the chemistry department based on MCM-Donor criteria.",
                },
                {
                  course: "Shanti and Ramkishore Sahai Saxena Memorial Scholarship",
                  eligibility_criteria:
                    "1st year UG student of any department based on JEE-AIR.",
                },
                {
                  course: "A Shrimati Madhuri Dubey Scholarship",
                  eligibility_criteria:
                    "Any UG or PG Student of any department based on the MCM Donor Criteria.",
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
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Kanpur</h2>
        <p style={pStyle}>
          The IIT Kanpur (IITK) has a sprawling campus, spread over 420
          hectares in Kalyanpur outskirts of Kanpur. IIT Kanpur provides
          in-campus education and has around 108 buildings on the campus
          which come up with facilities that are ultramodern for the students. IIT
          Kanpur facilities and infrastructure include academic blocks, hostels
          for accommodation of the students that are separate for boys and
          girls, library, canteen, sports grounds, auditorium, reading lounge,
          computer center, central workshop, liquid helium facility, Virtual
          Instrument Cell, Central Cryogenic Facility and more. <br />
          Apart from these IIT Kanpur facilities, the campus also has an IT
          infrastructure that is powerful which ensures that 24x7 connectivity of
          internet is available and is made accessible to faculties as well as
          students. Indian Institute of Technology Kanpur facilities provide a
          comfortable environment for students and faculty members.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Boys Hostel</strong>
        </h3>
        <p style={pStyle}>
          The college has hostels with spacious and ventilated rooms. Every
          hostel has facilities such as table tennis room, reading room, computer
          room etc. The hostels have separate rooms for visitors. Mess is
          present at each hostel to carter the hunger of students.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Boys Hostel</strong>
        </h3>
        <p style={pStyle}>
          The college has hostels with spacious and ventilated rooms. Every
          hostel has facilities such as table tennis room, reading room, computer
          room etc. The hostels have separate rooms for visitors. Mess is
          present at each hostel to cater the hunger of students.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Girls Hostel</strong>
        </h3>
        <p style={pStyle}>
          The girl hostels present at the campus have well-furnished rooms for
          accommodation of students. For the convenience of students basic
          facilities such as indoor & outdoor sports facilities, reading room, hall,
          mess is present at girls hostels.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Medical/Hospital</strong>
        </h3>
        <p style={pStyle}>
          The Institute campus has a full-fledged health center which caters to
          the health care needs of the students as well as faculties and
          employees in the institute.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Gym</strong>
        </h3>
        <p style={pStyle}>
          Indian Institute of Technology Kanpur has a modern gym. Students
          who are interested in attaining good physical fitness can make use of
          gym present at the campus.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Library</strong>
        </h3>
        <p style={pStyle}>
          IIT Kanpur library - P.K Kelkar Library has a diverse collection of
          books, journals, thesis etc. Further, the library has periodicals,
          magazines, newspapers etc. The library is centrally air-conditioned
          and has a spacious reading room.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Sports</strong>
        </h3>
        <p style={pStyle}>
          The college has both indoor and outdoor sports facilities for its
          students. Facilities for games like basketball, volleyball, football,
          badminton, table tennis, chess, squash, cricket etc. is present at the
          campus. Every year numerous sports tournaments are also organized
          at the campus.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>I.T Infrastructure</strong>
        </h3>
        <p style={pStyle}>
          The computer center of IIT Kanpur has fully-air conditioned and is
          operational 24x7. The whole center is backed up by UPS system in
          case of a power failure. It provides IT as well as computational
          requirements not only to the academic division but also to the
          residential units built in the campus. The systems present in the
          computer center have upgraded hardware and software.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Cafeteria</strong>
        </h3>
        <p style={pStyle}>
          The cafeteria of IIT Kanpur serves delicious and nutritious food to
          students, staff and faculty members. Hygiene is kept while preparing
          food at IIT Kanpur cafeteria.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Wi-Fi </strong>
        </h3>
        <p style={pStyle}>
          The college has Wi-Fi for students. The Wi-Fi is available not only in
          seminar halls, classrooms but also the hostel rooms and library of the
          campus.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Laboratories</strong>
        </h3>
        <p style={pStyle}>
          The college has a CAD Lab for concept design and product realization
          works. The lab allows students to conduct experiments and turn ideas
          into reality. The CAD Lab has been designed and structured to take
          care of professional certification programmes for students and act as a
          consultancy for industries.
        </p>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Auditorium</strong>
        </h3>
        <p style={pStyle}>
          The institute has many halls for conferences and seminars that are
          well equipped with audio as well as video facilities, internet
          connectivity and are centrally air-conditioned.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong> IIT Kanpur Hostel fee details for both male
            and female.</strong>
        </h3>
        <p style={pStyle}>
        Fee: ₹15,385
        Hostel Charges per semester:-
        <ul style={ulStyle}>
          <li style={liStyle}>Hostel seat rent – Rs 1250</li>
          <li style={liStyle}>Water Charges – Rs 25</li>
          <li style={liStyle}>Mess establishment charges – Rs 14110</li>
        </ul>
        Total – Rs 15385
        </p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>IIT Kanpur Alumni Network </h2>

        <p style={pStyle}>
          The following table represents the alumni who are currently working under
          different recruiters who visited the IIT Kanpur campus-
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
                <th style={thStyle}>Recruiter/Company</th>
                <th style={thStyle}>No. of Alumni</th>
              </tr>
            </thead>
            <tbody>
              {[
                { company: "Tata Consultancy Services", alumni: 203 },
                { company: "Microsoft", alumni: 187 },
                { company: "Amazon", alumni: 166 },
                { company: "Intel Corporation", alumni: 150 },
                { company: "Qualcomm", alumni: 140 },
                { company: "Infosys", alumni: 137 },
                { company: "HSBC", alumni: 124 },
                { company: "Accenture", alumni: 110 },
                { company: "Goldman Sachs", alumni: 106 },
                { company: "Flipkart", alumni: 100 },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.company}</td>
                  <td style={tdStyle}>{item.alumni}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
      </section>
    </div>
  );
};

export default Ranking;
