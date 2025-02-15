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
          <strong> International Ranking</strong>
        </p>
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            marginTop: "20px",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Latest </th>
                <th style={thStyle}>Previous</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  category: "QS Asian University Ranking - Southern Asia",
                  latest: "106",
                  previous: "-",
                },
                {
                  category: "QS Asia University Rankings",
                  latest: "401-450 (2024)",
                  previous: "351-400 (2023)",
                },
                {
                  category: "THE World University Rankings",
                  latest: "601–800 (2024)",
                  previous: "801–1000 (2023)",
                },
                {
                  category: "THE World University Rankings - Engineering",
                  latest: "601–800 (2023)",
                  previous: "601–800 (2022)",
                },
                {
                  category: "THE Asia University Rankings",
                  latest: "201–250 (2023)",
                  previous: "251–300 (2022)",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.latest}</td>
                  <td style={tdStyle}>{row.previous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={pStyle}>
          <strong> National Ranking</strong>
        </p>
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            marginTop: "20px",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Latest </th>
                <th style={thStyle}>Previous </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  category: "NIRF Overall Rankings",
                  latest: "66 (2023)",
                  previous: "59 (2022)",
                },
                {
                  category: "NIRF Engineering Rankings",
                  latest: "41 (2023)",
                  previous: "33 (2022)",
                },
                {
                  category: "NIRF Research Rankings",
                  latest: "41 (2022)",
                  previous: "47 (2021)",
                },
                {
                  category: "NIRF Innovation Rankings",
                  latest: "151-300 (2023)",
                  previous: "--",
                },
                {
                  category: "The Week Best Technical Universities India",
                  latest: "26 (2023)",
                  previous: "--",
                },
                {
                  category: "India Today Top Engineering Colleges",
                  latest: "13 (2023)",
                  previous: "--",
                },
                {
                  category: "India Today Top Govt. Engineering Colleges",
                  latest: "10 (2022)",
                  previous: "--",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.latest}</td>
                  <td style={tdStyle}>{row.previous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Patna offers various scholarships to its students. These
          scholarships are offered to ensure that the students can pursue their
          education without any hurdles. Candidates must meet the eligibility
          conditions set by the college to avail of the scholarships. Further
          details regarding the IIT Patna scholarships are listed below.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Central Scheme Scholarships</li>
          <li style={liStyle}>State Scheme Scholarships</li>
          <li style={liStyle}>UGC Scheme Scholarships</li>
          <li style={liStyle}>Institute Scholarships</li>
          <li style={liStyle}>Donor Scholarships</li>
        </ul>
        <p style={pStyle}>
          <strong>Central Scheme Scholarships:</strong> The objective of the
          scheme is to recognised and promote high-quality education among
          children from low-income families by giving complete financial
          support. SC students will be covered under the scheme if they wish to
          continue their education beyond the 12th grade.
        </p>
        <p style={pStyle}>
          <strong> State Scheme Scholarships:</strong> Details can be found on
          the scholarship webpage of the relevant state government.
        </p>
        <p style={pStyle}>
          <strong>UGC Scheme Scholarships:</strong> The IIT Patna scholarships
          scheme provide equal chances for higher education in the Northeast. To
          place a greater emphasis on professional education in the Northeast,
          etc.
        </p>
        <p style={pStyle}>
          <strong>Institute Scholarships:</strong> The IIT Patna awards
          scholarships based on merit rather than financial need. The
          scholarships are offered to deserving students. It is available to
          undergraduate students or students enrolled in a two-year M.Sc degree.
        </p>
        <p style={pStyle}>
          <strong>Donor Scholarships</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            For remarkable all-around performance, strong organisational
            ability, and leadership qualities in a 4th-year UG student in the
            CSE department. The CSE department will recommend a name. Cash prize
            worth Rs 10,000 on convocation will be honoured.
          </li>
          <li style={liStyle}>
            The best first-year UG student in the Civil and Environmental
            Engineering Department, admitted through JEE, with a CPI of 8.00 or
            higher in the second semester, would be considered for the Indian
            Institute of Technology Patna scholarships. The scholarship would be
            of Rs. 30,000.
          </li>
        </ul>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Patna</h2>
        <p style={pStyle}>
          Indian Institute of Technology, Patna offers a number of
          infrastructural amenities to its students such as a library with a
          wide collection of printed materials like books, magazines, journals,
          thesis, project reports etc. Also there are digital resources
          available for the students such as e-books, e-journals, CD/DVDs
          available at the library.
        </p>
        <p style={pStyle}>
          IIT Patna provides many other conveniences like 7 boys' hostels and 2
          girls' hostels separately with amenities like food delivery service,
          common room, internet connectivity, guest houses, an actively
          functioning hospital with trained doctors and nurses to provide the
          medical facility 24/7, a fully furnished auditorium, facilities for
          playing different outdoor and indoor games like basketball,
          volleyball, badminton, tennis, table tennis, athletics, chess, carrom
          etc., and a computer centre to give students practical knowledge. Also
          there are other things for students like a well-furnished auditorium,
          classrooms built with modern technology for a better experience for
          the students.
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Computer Labs</li>
          <li style={liStyle}>Sports</li>
          <li style={liStyle}>Gym</li>
          <li style={liStyle}>Medical Hospital</li>
          <li style={liStyle}>Cafeteria</li>
          <li style={liStyle}>Laboratory</li>
          <li style={liStyle}>Library</li>
          <li style={liStyle}>Auditorium</li>
          <li style={liStyle}>Hostel</li>
        </ul>
        <p style={pStyle}>
          IIT Patna is spread over 40 acres. It is acknowledged for its huge
          campus and residential facilities in India. Some of the highlighting
          features of the IIT Patna campus are given below
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Incubation Centre</li>
          <li style={liStyle}>Library</li>
          <li style={liStyle}>Guest House</li>
          <li style={liStyle}>Hostel</li>
          <li style={liStyle}>Gymnasium</li>
          <li style={liStyle}>Mess</li>
          <li style={liStyle}>Seminar Rooms</li>
          <li style={liStyle}>Classroom</li>
          <li style={liStyle}>Conference Room</li>
          <li style={liStyle}>Wellness Centre</li>
          <li style={liStyle}>Labs</li>
          <li style={liStyle}>Sports Facilities</li>
        </ul>
        <p style={pStyle}>
          <strong>Incubation Centre:</strong> The incubation centre is the ideal
          destination for startups taking early entrepreneurial steps in medical
          electronics and information and communication technology domains. The
          college carefully designs incubation and pre-incubation programs to
          support startups through the state of the art technical facilities
          required for work in the ESDM sector, corporate quality office and
          communication facilities, mentoring support from industry or
          investors.
        </p>
        <p style={pStyle}>
          <strong>Library:</strong> The library offers a wide range of
          Information Technology (IT) services and products. It is in a fast
          growing stage and has approximately 1000 books and one online
          resource. The IIT Patna library is equipped with the modern technology
          of library automation system with Online Public Access Catalogue
          (OPAC) and self-check-in and self-check-out (Drop Box) system using
          RFID technology. The library has 50 computers for accessing the
          different e-resources of the library. The users can avail the library
          facilities during opening hours.
        </p>
        <p style={pStyle}>
          <strong>Guest House:</strong> IIT Patna has a guest house that
          provides comfortable accommodation to guests visiting for official
          work, attending conferences or seminars, meetings, etc. Accommodation
          is also provided to the staff or faculty members and parents. The
          second and third floors of the building, comprising 24 rooms, are used
          to run the guest house. All the rooms are equipped with AC and a
          high-speed Wifi internet facility. The guest house has eight rooms
          with attached toilets, and sixteen rooms are common toilets. A
          full-fledged canteen equipped with all modern facilities is also
          available in the guesthouse.
        </p>
        <p style={pStyle}>
          <strong>Hostel:</strong> IIT Patna hostel offers residential
          facilities for boys and girls.
        </p>
        <p style={pStyle}>
          <strong>Gymnasium:</strong> The college has a gymnasium such as
          dumbbells, barbells, and bench presses. There are also treadmills,
          exercise bikes, squat stations, hammer strength machines, cables and
          pulleys, let pull down machines, and leg extension machines.
        </p>
        <p style={pStyle}>
          <strong> Mess:</strong> On the ground level, the boys' hostel has two
          mess halls while the ladies' hostel has one. Breakfast, lunch, snacks,
          and dinner are all available. Messes adhere to a month-by-month
          cuisine. The mess menu is rotated once a month. During breakfast and
          snack time, coffee/tea is available. Students from all years elect a
          mess secretary to handle mess-related matters. Messes are cleaned up
          after, and food is prepared and served in sanitary conditions.
        </p>
        <p style={pStyle}>
          <strong>Seminar Rooms:</strong> The IIT Patna campus area has a
          seminar room. The main purpose of the seminar rooms is to conduct
          department seminars. It can accommodate around 56 students at a time.
          The rooms also have modern amenities, including 24x7 UPS connectivity,
          air conditioning room, digital podium.
        </p>
        <p style={pStyle}>
          <strong>Classroom:</strong> The classrooms are well-equipped and
          provide all the necessary facilities to the students. It can
          accommodate around 50 students at a time.
        </p>
        <p style={pStyle}>
          <strong>Conference Room:</strong> The conference room can accommodate
          around 20 students and provides various facilities like UPS
          connectivity, air condition room, and life-size cloud video
          conferencing solution.
        </p>
        <p style={pStyle}>
          <strong>Wellness Centre:</strong> Indian Institute of Technology Patna
          infrastructure has a wellness centre for the well-being of students
          and encourages them to enhance their on-campus lifestyle. The centre
          consists of faculty members across various departments of the
          Institute. It deals with various activities, including yoga, sports,
          music, life skill, etc. In addition to these, the centre organizes
          various programs like workshops on happiness, motivational talks, etc.
        </p>
        <p style={pStyle}>
          <strong>Labs</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Chromatography Lab</li>
          <li style={liStyle}>Bioscience Lab</li>
          <li style={liStyle}>B.Tech Chemistry Lab</li>
          <li style={liStyle}>Materials Research Lab</li>
          <li style={liStyle}>Chemistry Instrumental Lab</li>
          <li style={liStyle}>Chemistry Wet Research Lab</li>
        </ul>
        <p style={pStyle}>
          <strong>Sports Facilities</strong>
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>Basketball</li>
          <li style={liStyle}>Volleyball</li>
          <li style={liStyle}>Tennis</li>
          <li style={liStyle}>Badminton</li>
          <li style={liStyle}>Table Tennis</li>
          <li style={liStyle}>Athletics</li>
          <li style={liStyle}>Cricket</li>
          <li style={liStyle}>Chess</li>
          <li style={liStyle}>Carrom</li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Patna</h2>
        <div
          style={{
            overflowX: "auto",
            WebkitOverflowScrolling: "touch",
            whiteSpace: "nowrap",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            marginTop: "20px",
          }}
        >
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Year</th>
                <th style={thStyle}>Research Area</th>
                <th style={thStyle}>Current Occupation</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Dr. Priyanka Sinha",
                  year: "2015",
                  research: "India's Trade Policy",
                  occupation: "Assistant Professor, CIMP Patna",
                },
                {
                  name: "Dr. Shaivya Singh",
                  year: "2016",
                  research: "Linguistics",
                  occupation: "Assistant Professor, IIMT Group of Colleges",
                },
                {
                  name: "Dr. Raj Rajesh",
                  year: "2016",
                  research: "Business Cycles",
                  occupation: "Reserve Bank of India",
                },
                {
                  name: "Dr. Partha Bhattacharjee",
                  year: "2016",
                  research: "English Literature",
                  occupation: "Assistant Professor, SRM University",
                },
                {
                  name: "Dr. Aimen Reyaz",
                  year: "2016",
                  research: "English Literature",
                  occupation:
                    "Assistant Professor, Jai Prakash University, Bihar",
                },
                {
                  name: "Dr. Sadeqa Ghazal",
                  year: "2019",
                  research: "ELT",
                  occupation: "Assistant Professor, Magadh University",
                },
                {
                  name: "Dr. Anuja Akhouri",
                  year: "2020",
                  research: "Corporate Social Responsibility",
                  occupation: "Assistant Professor, IIM Jammu",
                },
                {
                  name: "Dr. Nusrat Begum",
                  year: "2021",
                  research: "Sociolinguistics",
                  occupation:
                    "Assistant Professor, Vellore Institute of Technology",
                },
                {
                  name: "Dr. Sandeep K. Sharma",
                  year: "2021",
                  research: "Cognitive Linguistics",
                  occupation: "Assistant Professor, DIT University",
                },
                {
                  name: "Dr. Ratul Mahela",
                  year: "2021",
                  research: "Linguistic Grammar",
                  occupation: "Assistant Professor, Rajiv Gandhi University",
                },
                {
                  name: "Dr. Kumar Gaurav",
                  year: "2021",
                  research: "International Trade",
                  occupation: "Assistant Professor, Magadh University",
                },
                {
                  name: "Dr. Ramjit Kumar",
                  year: "2021",
                  research: "Science Education",
                  occupation: "A.N. Sinha Institute of Social Sciences, Patna",
                },
                {
                  name: "Dr. Anupama Singh",
                  year: "2021",
                  research: "Environmental Science and Technology",
                  occupation: "Scientist-C, FARE Labs Pvt. Ltd., Gurugram",
                },
                {
                  name: "Dr. Sanjib K. Biswas",
                  year: "2021",
                  research: "English Literature",
                  occupation: "Assistant Teacher, West Bengal",
                },
                {
                  name: "Dr. Kriti Gupta",
                  year: "2021",
                  research: "Psychology",
                  occupation:
                    "Assistant Professor, O.P. Jindal Global University",
                },
                {
                  name: "Dr. Mamta Kumari",
                  year: "2021",
                  research: "International Trade",
                  occupation:
                    "Assistant Professor, Alliance University, Bengaluru",
                },
                {
                  name: "Dr. Sujay Kumar Saha",
                  year: "2022",
                  research: "ELT",
                  occupation: "Assistant Professor, DIET, West Bengal",
                },
                {
                  name: "Dr. Chhandita Das",
                  year: "2022",
                  research: "English Literature",
                  occupation:
                    "Assistant Professor, GKC Institute of Engineering and Technology",
                },
                {
                  name: "Dr. Vinayak Yashraj",
                  year: "2022",
                  research: "English Literature",
                  occupation: "Assistant Professor, NIFT, Patna",
                },
                {
                  name: "Dr. Mantasha Firoz",
                  year: "2023",
                  research: "Workplace Loneliness",
                  occupation:
                    "Assistant Professor, Goa Institute of Management",
                },
                {
                  name: "Dr. Samrat Bisai",
                  year: "2023",
                  research: "Education",
                  occupation: "Assistant Professor, RMBCE, West Bengal",
                },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.name}</td>
                  <td style={tdStyle}>{row.year}</td>
                  <td style={tdStyle}>{row.research}</td>
                  <td style={tdStyle}>{row.occupation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Ranking;
