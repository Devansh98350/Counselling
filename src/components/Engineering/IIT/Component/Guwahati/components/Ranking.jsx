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
          IIT Delhi is one of Asia's top engineering institutes and consistently
          ranks among the best in both national and international rankings. As
          per the NIRF rankings, IIT Delhi has consistently stayed in the top 3
          engineering colleges in India. In the QS World University Rankings
          2025, IIT Delhi ranks among the top 150 universities globally.
        </p>

        <h3 style={th3Style}>IIT Delhi International Ranking 2025</h3>
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
                  body: "QS World Ranking 2025",
                  category: "World University",
                  rank: "150",
                },
                {
                  body: "QS World Ranking 2024",
                  category: "World University",
                  rank: "197",
                },
                {
                  body: "US News Ranking 2024",
                  category: "Best Global Universities",
                  rank: "689",
                },
                {
                  body: "QS World Ranking 2023",
                  category: "World University",
                  rank: "174+",
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

        <h3 style={th3Style}>IIT Delhi National Ranking 2024</h3>
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
                  body: "India Today 2024",
                  category: "Engineering",
                  rank: "1",
                },
                {
                  body: "The Week 2024",
                  category: "Technical Universities",
                  rank: "2",
                },
                { body: "NIRF 2023", category: "Engineering", rank: "2" },
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
          Indian Institute of Technology Delhi also provides financial aid to
          students who need financial assistance. Apart from the ST/SC/PWD
          students, scholarships are also provided to brilliant students. The
          institution offers merit prizes to deserving students like toppers of
          departments. IIT Delhi offers scholarships for students of UG, PG, and
          Ph.D. programs. The Ph.D. students are offered financial assistance
          through Teaching/Research Assistantships.
        </p>

        <h3 className="th3" style={th3Style}>
          IIT Delhi UG Scholarships, Eligibility Criteria, and Amount
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name of the Scholarship</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Scholarship Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Merit-cum-Means (MCM) Scholarships",
                  eligibility:
                    "For the General/OBC/EWS students of engineering and technology.",
                  amount:
                    "The MCM scholarship grants a scholarship of Rs. 1000 per month.",
                },
                {
                  name: "Institute Merit Prizes and Certificates",
                  eligibility:
                    "The eligible students are top 7% of the 4-year B.Tech programme and 5-year Dual-Degree Programme, of each semester till the 8th/10th semester.",
                  amount: "The Merit Prize offers a prize value of Rs. 2500.",
                },
                {
                  name: "Donor Scholarships",
                  eligibility:
                    "These scholarships are offered by organizations, individuals, and trusts.",
                  amount: "Varies based on the donor.",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.eligibility}</td>
                  <td style={tdStyle}>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="th3" style={th3Style}>
          IIT Delhi Scholarship for PG Programmes
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Degree</th>
                <th style={thStyle}>Scholarship Details</th>
                <th style={thStyle}>Scholarship Amount</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  degree: "M.Sc. Programmes",
                  details:
                    "As per the government rules, this scholarship is offered only to those students whose parents' gross income is less than ₹4.5 lac per annum.",
                  amount:
                    "A tuition fee exemption and Merit-cum-Means scholarship of Rs. 1000 per month is offered to the eligible 25% of the total strength of M.Sc. students.",
                },
                {
                  degree: "M.Tech., M.S. (Research), and M.Des.",
                  details:
                    "No scholarship is available for the students in this category.",
                  amount: "-",
                },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.degree}</td>
                  <td style={tdStyle}>{item.details}</td>
                  <td style={tdStyle}>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Research Assistance</strong>
        </h3>
        <ul style={ulStyle}>
          {[
            "Research Assistance is provided to the students who are enrolled in the Ph.D. or research programs at IIT Delhi and are willing to work for the department.",
            "Any student enrolled in the research-based programs on a full-time basis at IIT Delhi.",
            "A minimum of INR 15,000 is awarded per month to students who can work about 20 hours a week.",
            "For the students enrolled in the MS Research Programme, a sum of INR 24,000 is awarded per month to work 8 hours a week.",
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Loan Scholarships</strong>
        </h3>
        <p style={pStyle}>
          Besides, most of the students are able to get scholarships on the
          basis of merits and academic qualifications at IIT Delhi. Many alumni
          have contributed and instituted scholarships that repay the interest
          on loans students have taken. Some of the loan scholarships are
          mentioned below:
        </p>
        <ul style={ulStyle}>
          {[
            "Ved & Prem Lata Gulati Loan Scholarship",
            "Smt. Sushma Lal Loan Scholarship",
            "Smt. Sarada Warrior Loan Scholarship",
            "Shrimati Dharam Devi Bhatia Loan Scholarship",
            "Shri Motiram Bulchand Shivdasani Scholarship",
            "Samir Anand and Batch of 88 Loan Scholarship",
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Delhi</h2>
        <p style={pStyle}>
          The campus of IIT Delhi is spread across an area of 320 acres, located
          in the Hauz Khas area of South Delhi. The campus is in close proximity
          to notable landmarks such as the Qutub Minar and Lotus Temple, and is
          near other educational institutions like JNU and IIFT. The IIT Delhi
          campus features a range of facilities including an amphitheatre, a
          swimming pool, a music room, a robotics room, a club building, a
          gymnasium hall, and a fully functional central library that is
          accessible 24/7. These amenities contribute to a vibrant and
          well-equipped campus environment.
        </p>
        <p style={pStyle}>
          The campus is organized into several distinct areas for administrative
          and logistical functions. The <strong>West Campus</strong> serves as
          the hostel area, while the <strong>East Campus</strong> is designated
          for residential purposes. The{" "}
          <strong>Main Administrative Building</strong> handles administrative
          functions, and the <strong>Academic Area</strong> is dedicated to
          academic activities. This organization helps streamline operations and
          supports the various needs of students and staff.
        </p>
        {/*<div style={imageContainerStyle}>
          <img src="#" alt="Campus Image 1" style={imageStyle} />
          <img src="#" alt="Campus Image 2" style={imageStyle} />
        </div>*/}
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Hostel Facilities</strong>
        </h3>
        <p style={pStyle}>
          The IIT Delhi hostels are well-equipped with a variety of amenities to
          ensure a comfortable and supportive living environment for students.
          There are 13 boys hostels and 5 girls hostels on campus. Each hostel
          features a dining hall with a mess facility, a lounge for relaxation,
          an indoor games room for recreational activities, and a reading room
          for quiet study. These facilities are designed to provide students
          with a balanced and enjoyable hostel experience. IIT Delhi has boys'
          hostels inside the campus premises. Its hostel runs in a cooperative
          mode, which means the operation is handled by elected student
          leadership under the guidance of designated faculty.
        </p>
        <p style={pStyle}>
          The girls' hostels offer similar facilities, including recreational
          amenities such as indoor games, a common room with TV, a reading room,
          and a dining hall. All rooms have internet connectivity.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Campus Facilities</strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>IT Infrastructure:</strong>
            <ul style={innerListStyle}>
              <li style={liStyle}>
                <strong>Network Type:</strong> State-of-the-art LAN with Fiber
                Optics and enhanced CAT5/CAT6 UTP backbone
              </li>
              <li style={liStyle}>
                <strong>Network Access Points:</strong> Over 9000 across the
                campus
              </li>
              <li style={liStyle}>
                <strong>Cisco Switches:</strong> About 265
              </li>
              <li style={liStyle}>
                <strong>Virtual LANs:</strong> Approximately 75
              </li>
            </ul>
          </li>
          <li style={liStyle}>
            <strong>Wi-Fi:</strong> Secure Wi-Fi available in the academic area,
            main guest house, faculty guest house, RCA, and hospital
          </li>
          <li style={liStyle}>
            <strong>Cafeteria:</strong> Several canteens located opposite
            Aravali Hostel, in Himadri Hostel, and adjacent to Kumaon Hostel;
            serves healthy and hygienic food; additional coffee and cold drinks
            kiosks available
          </li>
          <li style={liStyle}>
            <strong>Auditorium:</strong> Seating capacity of over 120; hosts
            guest lectures, seminars, and other programs
          </li>
          <li style={liStyle}>
            <strong>Alumni Associations:</strong> IITD Alumni Association
            connects over 43,000 members worldwide through a network of national
            and international chapters; one of the most active alumni
            associations globally
          </li>
          <li style={liStyle}>
            <strong>Classrooms:</strong> Fully air-conditioned; equipped with
            LCD projectors
          </li>
          <li style={liStyle}>
            <strong>Laboratories:</strong> Well-equipped laboratories,
            workshops, and library facilities across departments
          </li>
          <li style={liStyle}>
            <strong>Convenience Store:</strong> Stationery shop in the academic
            area; Xeroxing and STD/ISD/PCO facilities available in all hostels
          </li>
          <li style={liStyle}>
            <strong>Banks/ATMs:</strong> On-campus bank available for faculty
            and student convenience
          </li>
          <li style={liStyle}>
            <strong>Guest Room/Waiting Room:</strong> Guest house and waiting
            room facilities for visiting faculty and family members of students
          </li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Delhi</h2>

        <p style={pStyle}>
          The IIT Delhi alumni network spans across various prominent
          recruiters, showcasing the extensive reach and influence of our
          graduates. Here is a snapshot of the number of alumni working with
          some of the leading companies:
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
                <th style={thStyle}>Recruiter</th>
                <th style={thStyle}>No. of Alumni</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Amazon</td>
                <td style={tdStyle}>378</td>
              </tr>
              <tr>
                <td style={tdStyle}>Google</td>
                <td style={tdStyle}>338</td>
              </tr>
              <tr>
                <td style={tdStyle}>Microsoft</td>
                <td style={tdStyle}>332</td>
              </tr>
              <tr>
                <td style={tdStyle}>IBM</td>
                <td style={tdStyle}>317</td>
              </tr>
              <tr>
                <td style={tdStyle}>TCS</td>
                <td style={tdStyle}>312</td>
              </tr>
              <tr>
                <td style={tdStyle}>Accenture</td>
                <td style={tdStyle}>195</td>
              </tr>
              <tr>
                <td style={tdStyle}>Goldman Sachs</td>
                <td style={tdStyle}>164</td>
              </tr>
              <tr>
                <td style={tdStyle}>McKinsey &amp; Co.</td>
                <td style={tdStyle}>138</td>
              </tr>
              <tr>
                <td style={tdStyle}>Facebook</td>
                <td style={tdStyle}>124</td>
              </tr>
              <tr>
                <td style={tdStyle}>BCG</td>
                <td style={tdStyle}>120</td>
              </tr>
              <tr>
                <td style={tdStyle}>Flipkart</td>
                <td style={tdStyle}>108</td>
              </tr>
              <tr>
                <td style={tdStyle}>AWS</td>
                <td style={tdStyle}>90</td>
              </tr>
              <tr>
                <td style={tdStyle}>Bain &amp; Co.</td>
                <td style={tdStyle}>66</td>
              </tr>
              <tr>
                <td style={tdStyle}>Uber</td>
                <td style={tdStyle}>5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />

        <p style={pStyle}>
          IITD Alumni Association is dedicated to bringing together the alumni
          community on a common platform to build another channel of personal
          and professional support to members through ‘self-help’ within the
          community. IIT Delhi Alumni Association today has a membership of over
          43,000 graduates from our alma mater and is growing at about 1,700
          members a year. It is one of the most active alumni associations and
          operates through a network of national and international chapters. Our
          alumni are spread worldwide and figure amongst who’s who worldwide.
        </p>
      </section>
    </div>
  );
};

export default Ranking;
