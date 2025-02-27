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
          IITB has been ranked by various national and international bodies over the past few years. It ranked 3rd &
          4th under the “Overall” & “Engineering” categories respectively as per NIRF Rankings 2023. Further, IIT
          Bombay stood at 149th position for the world university ranking by QS World Ranking 2024.
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
                <th style={thStyle}>Body</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Rank (Year)Latest</th>
                <th style={thStyle}>Rank (Year)Previous</th>
              </tr>
            </thead>
            <tbody>
              {[
                { body: "QS World University Rankings", category: "International Ranking", latest: "149 (2024)", previous: "172 (2023)" },
                { body: "QS World University Rankings - Engineering & Technology", category: "International Ranking", latest: "47 (2023)", previous: "65 (2022)" },
                { body: "QS Asia University Rankings", category: "International Ranking", latest: "40 (2024)", previous: "40 (2023)" },
                { body: "NIRF Overall Rankings", category: "National Ranking", latest: "4 (2023)", previous: "3 (2022)" },
                { body: "NIRF Engineering Rankings", category: "National Ranking", latest: "3 (2023)", previous: "3 (2022)" },
                { body: "NIRF Research Rankings", category: "National Ranking", latest: "4 (2023)", previous: "4 (2022)" },
                { body: "NIRF Innovation Rankings", category: "National Ranking", latest: "7 (2023)", previous: "--" },
                { body: "ARIIA Public Institution (Central Universities, INIs, CFTIs)", category: "National Ranking", latest: "2 (2021)", previous: "--" },
                { body: "The Week Best Technical Universities India", category: "National Ranking", latest: "1 (2023)", previous: "1 (2021)" },
                { body: "The Week Top Engineering Colleges India", category: "National Ranking", latest: "2 (2023)", previous: "2 (2022)" },
                { body: "Outlook India's Top Govt. Technical Universities", category: "National Ranking", latest: "3 (2023)", previous: "3 (2022)" },
                { body: "Outlook India's Top Govt. Engineering Colleges", category: "National Ranking", latest: "3 (2023)", previous: "3 (2022)" },
                { body: "India Today Top Engineering Colleges", category: "National Ranking", latest: "2 (2023)", previous: "2 (2023)" },
                { body: "India Today Top Govt. Engineering Colleges", category: "National Ranking", latest: "2 (2022)", previous: "2 (2021)" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.body}</td>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.latest}</td>
                  <td style={tdStyle}>{row.previous}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          id="gen"
        >
          <strong>IIT Bombay vs Other IITs: NIRF Overall Rankings 2023 </strong>
        </h3>
        <p style={pStyle}>NIRF 2023 has ranked IIT Bombay for its overall segment followed by other IITs. The institute has achieved
          the 4th spot overall whereas IIT Kharagpur and IIT Roorkee have been ranked 7th and 8th
          positionsrespectively.</p>

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
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>Overall</th>
              </tr>
            </thead>
            <tbody>
              {[
                { college: "IIT Bombay", overall: 4 },
                { college: "IIT Delhi", overall: 3 },
                { college: "IIT Kharagpur", overall: 7 },
                { college: "IIT Madras", overall: 1 },
                { college: "IIT Kanpur", overall: 5 },
                { college: "IIT Roorkee", overall: 8 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.college}</td>
                  <td style={tdStyle}>{row.overall}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={pStyle}><strong>IIT Bombay</strong> ranks <strong>3</strong> and <strong>4</strong> under the <strong>'Overall'</strong> and <strong>'Engineering'</strong> categories, respectively, by the <strong>NIRF 2023 Rankings</strong>. Over the past few years, IIT Bombay rankings for international bodies such as QS World Ranking2025 stood at <strong>118</strong> for the World University category. IITB rankings have grown under multiple streams,including Management, Engineering, Commerce and Computer Applications by other. A few of the important IIT Bombay rankings are mentioned below: </p>

        <h3 style={th3Style}>IIT Bombay International Rankings 2024</h3>
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
                <th style={thStyle}>Ranking Body</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                { body: "QS World Rankings 2025", category: "World University", rank: 118 },
                { body: "QS World Rankings 2024", category: "World University", rank: 149 },
                { body: "QS Asia Rankings 2023", category: "Engineering", rank: 40 },
                { body: "QS World Rankings 2023", category: "World University", rank: 172 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.body}</td>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>IIT Bombay National Rankings 2023</h3>
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
                <th style={thStyle}>Ranking Body</th>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                { body: "India Today 2023", category: "Engineering", rank: 2 },
                { body: "India Today 2023", category: "Engineering (Government)", rank: 2 },
                { body: "NIRF 2023", category: "Engineering", rank: 3 },
                { body: "NIRF 2023", category: "Overall", rank: 4 },
                { body: "NIRF 2023", category: "Research Institutions", rank: 4 },
                { body: "NIRF 2023", category: "Management", rank: 10 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.body}</td>
                  <td style={tdStyle}>{row.category}</td>
                  <td style={tdStyle}>{row.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Bombay offers numerous scholarships and if you can qualifies for the criteria you can avail of many
          scholarships such as Postgraduate Assistantships, MS Scholarships, and Teaching Assistantships for Dual
          Degree Programs, and Undergraduate Scholarships. In the UG Scholarships section, the major IIT Bombay
          Scholarships are Institute cum Merit Scholarships, Remission of Fees, Names Scholarships/ Private
          Scholarships, National Scholarships, and National Talent Search Scholarships. <br /> <br />
          To assist students financially, IIT Bombay offers several scholarship schemes which include Institute's Scholarships,
          Govt. Scholarships, Private Scholarships, and Fellowships for its Ph.D. students. For every scholarship, there's certain
          eligibility required to get the scholarship award. Some of the most popular scholarship schemes offered by IIT
          Bombay and other Private Scholarships are as follows:
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong> Merit cum Means Scholarship (Institute Scholarship)</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "The Merit Cum Means Scholarship is awarded to the new entrants on the basis of their JEE AIR rank and the candidates whose annual family income is less than INR 4.5 lakhs. ",
            "A free tuition fee of INR 25,000 per semester is awarded in the Merit Cum Means scholarship along with a benefit of INR 1000 per month to a maximum of 25% undergraduate students.",
            "In addition to this, almost 10% of students are offered the benefit of free tuition.",
            "All the SC/ST Students are exempted from payment of tuition fees and are allowed to avail the facility of free messing along with a pocket allowance of INR 250 per month."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Bombay Heritage Fund Scholarship</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "The IIT Bombay Heritage Fund has been created by the Alumni of IIT Bombay in the USA, which collects donations from the alumni for the institution of scholarships at IIT Bombay.",
            "The eligibility criteria for the IIT Bombay Heritage Fund Scholarship are the same as per the merit criterion of the MCM Scholarship.",
            "The students wishing to apply for the IIT Bombay Heritage Fund Scholarship should have a parental annual income from all sources that do not exceed INR 5 lakhs."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Dr. Burjor Godrej Scholarship</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "IIT Bombay offers two Dr. Burjor Godrej Merit Scholarships of INR 5000 per month, six Dr. Burjor Godrej Merit Cum Means Scholarships of INR 2000 per month, and ten Prof. MV Pandya Merit Cum Means Scholarships of INR 1000 per month.",
            "The above-mentioned scholarships are available to the students admitted to the M.Sc. Chemistry Programmes at IIT Bombay.",
            "The criterion for the Dr. Burjor Godrej Scholarship is the highest SPI scored by the students of the M.Sc programs.",
            "The fellowship duration is five months in each semester; hence, the student securing the highest SPI will get a cumulated scholarship amount of INR 25,000 for the duration of the preceding semester.",
            "The MV Pandya Fellowship Merit cum Means Scholarship carries an award of INR 10,000 per annum for students whose annual parental income does not exceed INR 1.5 lakhs."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Aditya Birla Scholarship</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "The Aditya Birla Scholarship covers the entire course, and scholars are rewarded with INR 65,000 per annum. However, the performance of the students is closely monitored for the renewal of awards every year.",
            "The performance assessment criteria for the Aditya Birla Scholars are based on qualitative and quantitative parameters.",
            "In order to be eligible for renewal of the Aditya Birla Scholarship, a candidate should be in the top 25% of his/her batch and must have a rating of at least 7 on the 9-point scale during the coursework.",
            "Candidates are required to actively participate in the activities conducted by the institute and have to write an essay of 350-400 words on 'Being an Aditya Birla Scholar: Experience Sharing'."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <p style={pStyle}>
          Aditya Birla Scholarship Selection Process:</p>
        <ul style={ulStyle}>
          {[
            "The eligible students are evaluated through the information they provide in their application form.",
            "The overall achievements, academic, and co-curricular experiences are also assessed and weighted during the application process.",
            "The initial shortlisting of the candidates is done on the basis of the essays and application, and then the shortlisted candidates are called for a final interview. However, the travel and accommodation expenses are provided to the invited students.",
            "Candidates who successfully clear the interview are then offered the scholarship awards."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>OPJEMS Scholarship</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "The OPJEMS Scholarship at IIT Bombay is a yearly scholarship of INR 65,000.",
            "The Scholarship is awarded to the students under two main categories at IIT Bombay. The categories of the students are as follows:",
            "2 toppers from each batch from the following streams for all 4 years: Civil Engineering, Electrical Engineering, Mechanical Engineering, Metallurgical Engineering",
            "Top 12 students from each batch from any specialization or stream for all 4 years.",
            "The Scholarship is awarded to a total of 112 students from 33 institutes and is granted on the basis of the scores of a student in the online test followed by a personal interview.",
            "However, equal weightage will be given to the online test and interview for selection."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>INSPIRE Scholarship</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "The INSPIRE Scholarship is quite popular among the students of bachelor's and master's programs at IITs.",
            "The scheme of INSPIRE Scholarship offers 10,000 scholarships every year that worth a total of INR 80,000 to each student undertaking bachelor's or master's level education in Natural & Basic Sciences at IIT Bombay.",
            "A candidate should satisfy the minimum requirements to avail the facility of INSPIRE Scholarship such as:",
            "A candidate should be in the top 1% in the 12th standard and opted for Natural & Basic Sciences.",
            "Students who have secured in the Joint Entrance Examination of IIT top 10,000 ranks, AIEEE top 10,000 ranks plus those clearing AIPMT to top 10,000 ranks."
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <p style={pStyle}>Apart from the above-mentioned Scholarships, there are various scholarships that include Scholarships
          offered by the Government such as Central Sector Scholarship, NTS Scholarship, NBHM Scholarship, DBT
          Scholarship, etc. </p>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Bombay</h2>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Highlights</strong>
        </h3>
        <p style={pStyle}>
          IIT Bombay campus provides all the facilities for the holistic development of students. Ranging from hi-tech
          classrooms to libraries and comfortable hostel facilities, the institute manages to be at the top in every sphere.
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
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Amount (INR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Electricity & Water Charges", amount: "Rs 3450" },
                { category: "Hostel Establishment Charges", amount: "Rs 3600" },
                { category: "Hostel Rent", amount: "Rs 2400" },
                { category: "Mess Establishment Charges", amount: "Rs 1900" },
                { category: "Hostel Amenities Fund", amount: "Rs 1500" },
                { category: "Hostel-Mess Security Deposit (one time)", amount: "Rs 3000" }
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.category}</td>
                  <td style={tdStyle}>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>

        <ul style={ulStyle}>
          {[
            {
              title: "24-hour power supply",
              description:
                "To ensure that all students have a comfortable stay at the hostels, all of the hostel rooms have a 24-hour power source. To add, there is a backup power supply, and an electrician is on call to rapidly install it if there are any technical issues."
            },
            {
              title: "Wi-Fi Internet Services",
              description:
                "A seamless Wi-Fi is accessible in every hostel at IIT Bombay. Each student receives a different login credential that they can use to access the network."
            },
            {
              title: "Well-appointed common areas",
              description:
                "Each hostel has a common room with a TV and other indoor activities, including chess and other board games."
            },
            {
              title: "Gym",
              description:
                "All students have access to a gym facility where every sort of equipment is available. According to his or her wants and requirements, a student can seek advice on exercise and diet regimens. The gym opens at specific times in the morning and evening and operates according to those schedules. It has enough room to hold 20 to 25 students at once."
            },
            {
              title: "Guest Room at hostel for students' families",
              description:
                "If a student's family or guardian is coming to visit them on campus, they are welcome to remain in one of the guest rooms the hostel has to offer. The lodging staff must be notified in advance in order to check on availability."
            }
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>HOSTEL</strong>
        </h3>
        <p style={pStyle}>The institute has a total of 17 hostels, which are managed and coordinated by the Hostel Coordinating Unit (HCU) of IIT
          Bombay. Students who live inside the hostel premises of the institute get a private caterer serving messes. A
          well-equipped sports complex is also provided separately for every hostel. <br /> <br />
          The first-year students from all the UG & PG courses are allocated the same hostel. This hostel-sharing
          facility is only applicable in the first year of the respective courses. Apart from the regular students, the hostel
          rooms are also allotted to external interns during summer and winter internships. Other than that, the Guest
          accommodation facility is also provided for one week to parents visiting their children at the campus.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Hostel Facilities</strong>
        </h3>
        <p style={pStyle}>
          List of facilities available at IIT Bombay:
          <ul style={ulStyle}>
            <li style={liStyle}>Furniture rooms (Bed, Chair, Study table, Cupboard)</li>
            <li style={liStyle}>Sports Complex</li>
            <li style={liStyle}>17 Hostels</li>
            <li style={liStyle}>Mess</li>
            <li style={liStyle}>TV Room</li>
          </ul>
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Hostel for Male</strong>
        </h3>
        <p style={pStyle}>
          Fee: ₹15,850 <br />Hostel fee structure:-Total Hostel Fee – Rs 15,850 <br />Per Semester Mess Advance – Rs 22,500

          <h3 className="th3" style={th3Style}>
            IIT Bombay Hostel for Female
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
              <tbody>
                {[
                  { category: "Electricity & Water Charges", amount: "Rs 3450" },
                  { category: "Hostel Establishment Charges", amount: "Rs 3600" },
                  { category: "Hostel Rent", amount: "Rs 2400" },
                  { category: "Mess Establishment Charges", amount: "Rs 1900" },
                  { category: "Hostel Amenities Fund", amount: "Rs 1500" },
                  { category: "Hostel-Mess Security Deposit (one time)", amount: "Rs 3000" },
                ].map((item, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{item.category}</td>
                    <td style={tdStyle}>{item.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          Total Hostel Fee – Rs 15,850 <br />
          Per Semester Mess Advance – Rs 22,500
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Hostel Comparison between IIT Bombay and Other IITs</strong>
        </h3>
        <p style={pStyle}>The comparison of IIT Bombay with other top IITs based on the Hostel Fee and the availability of hostel is
          tabulated below: </p>

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
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>Hostel Fee*</th>
                <th style={thStyle}>Number of Hostels Available</th>
              </tr>
            </thead>
            <tbody>
              {[
                { college: "IIT Bombay", fee: "INR 40,750", hostels: "17" },
                { college: "IIT Delhi", fee: "INR 8,000 – INR 10,500", hostels: "18" },
                { college: "IIT Kharagpur", fee: "INR 30,000", hostels: "21" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.college}</td>
                  <td style={tdStyle}>{item.fee}</td>
                  <td style={tdStyle}>{item.hostels}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <i>*This fee is sourced from unofficial sources. Hence, is indicative. </i>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Library</strong>
        </h3>
        <p style={pStyle}>The library has a mix of both traditional and modern learning resources. The Central Library is indexed with an
          overall 5 lakh books, extensive theses, publications, journals and various other reading materials. Moreover,
          there are around 1000 CDs, 231 DVDs and E-books in store. Along with that, the library is equipped with
          modern plagiarism detection software and provides an electronic collection of research to boost digital
          learning. </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Sports Facilities</strong>
        </h3>
        <p style={pStyle}>The institutes provide a dynamic range of gaming options such as Athletics, Basketball, Badminton, Cricket,
          Football, Hockey, Lawn Tennis, Squash, Swimming, Table tennis, etc. Every individual hostel has its own
          Volleyball and Basketball courts. Alongside Cricket Pitches and Football, fields are also available.
          Furthermore, indoor games like Snooker, Table Tennis, and Football Tables are also provided at the hostel.
          It’s mandatory for first-year students to register for extracurricular activities including sports as per the scheme
          of the National Sports Organization.</p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Sports Festival - AAVHAN</strong>
        </h3>
        <p style={pStyle}>Every year IIT Bombay organizes a three-day sports festival for the sports
          enthusiast. A total of 13 sports are played in the festival. Over three thousand sportspersons from universities,
          clubs and organizations across the nation take part and give tough competition. </p>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Places to Visit in and Around IIT Bombay</strong>
        </h3>
        <p style={pStyle}>To explore and enjoy the free time at the institute, students can visit the main city of Mumbai, which is easily
          accessible within an hour's drive. <br />
          IIT Bombay has many canteens and cafeterias inside the campus that run up to late night and provides
          affordable options. There are many nearby places that can also be visited during the free hours or to relax on
          weekends. Students can explore the following places around the IIT Bombay campus to satisfy their hunger
          pangs and for their weekend getaway:</p>
        <ul style={ulStyle}>
          {[
            "Powai Lakeview Restaurant: Located near Powai Lake, this restaurant provides a beautiful lake with Chinese cuisine.",
            "The Calcutta Club: Famous for serving Bengali cuisine in Powai.",
            "Hiranandani Market: Best nearby place to shop for regular stuff."
          ].map((item, index) => (
            <li key={index} style={liStyle}>{item}</li>
          ))}
        </ul>

        <h3 style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}>
          <strong>Infrastructure/Facilities</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}><strong>Library:</strong> IIT Bombay’s Central Library is user-focused, innovative, and excellence driven. The library collection comprises of 2, 40,101 books, 1, 18,925 journals, theses, 67,677 reports, standards, pamphlets on various study topics.</li>
          <li style={liStyle}><strong>Hostel:</strong>IIT Bombay boasts of having 16 hostels for boys and girls. Hostels have with all the basic amenities like water purifiers, common room, recreation room, mess, TV, laundry services, security and surveillance system etc. <br /> Boys Hostel-Single Occupancy| Shared Rooms| In-Campus Hostel, <br />
            Girls Hostel-Single Occupancy| Shared Rooms| In-Campus Hostel </li>
          <li style={liStyle}><strong>Sports Complex:</strong> Available Facilities:  <br />
            Basketball Court| Cricket Ground| Football Ground| Swimming Pool| Tennis Court| Volleyball </li>
          <li style={liStyle}><strong>Labs:</strong> Available Facilities:  <br />
            Civil Engineering Lab| Chemistry Lab| Computer Lab| Design Lab| Electrical Lab| Electronics Lab| Mechanical
            Lab| Physics Lab </li>
          <li style={liStyle}><strong>Additional Facilities:</strong> Cafeteria, Gym, Hospital/Medical Facilities, Wi-Fi Campus, Auditorium, and A/C Classrooms.</li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Bombay</h2>

        <h3 className="th3" style={th3Style}>
          IIT Bombay Alumni Network
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
                <th style={thStyle}>Name of Organizations</th>
                <th style={thStyle}>Number of Alumni</th>
              </tr>
            </thead>
            <tbody>
              {[
                { organization: "Indian Institute of Technology Bombay", alumni: 2616 },
                { organization: "Google", alumni: 741 },
                { organization: "Microsoft", alumni: 560 },
                { organization: "Amazon", alumni: 401 },
                { organization: "E-Cell, IIT Bombay", alumni: 333 },
                { organization: "Mood Indigo IIT Bombay", alumni: 317 },
                { organization: "Techfest, IIT Bombay", alumni: 301 },
                { organization: "Accenture", alumni: 252 },
                { organization: "Goldman Sachs", alumni: 184 },
                { organization: "JP Morgan Chase & Co", alumni: 177 },
                { organization: "McKinsey & Company", alumni: 136 },
                { organization: "Placement Office, IIT Bombay", alumni: 119 },
                { organization: "Boston Consulting Group (BCG)", alumni: 119 },
                { organization: "Student Alumni Relations Cell, IIT Bombay", alumni: 83 },
                { organization: "Bain & Company", alumni: 74 },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.organization}</td>
                  <td style={tdStyle}>{row.alumni}</td>
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
