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
    alignItems: "center",
    margin: "20px auto",
    maxHeight: "500px",
    width: "100%",
    maxWidth: "800px",
    height: "auto",
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
          IIT Ropar has been ranked at 68th position in THE Asia University
          Rankings 2022. It has also been featured in in THE Young Varsity
          Rankings 2022 at 81st position. IIT Ropar is ranked at 22nd position
          under the Engineering category and at the 35th position under the
          overall category by NIRF 2022 Rankings. <br />
          IIT Ropar is located in Rupnagar city of Punjab and is one of the
          newest IITs established by the Indian Government. Despite being a new
          IIT, IIT Ropar has successfully carved a niche among the top
          engineering colleges in India. However, in NIRF Ranking 2021 IIT Ropar
          was ranked on the 19th spot but for the NIRF 2022 rankings, the
          college falls by 3 spots in the list.
        </p>

        <h3 style={th3Style}>IIT Ropar Rankings Highlights 2023</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Ranking Body</th>
                <th style={thStyle}>Rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["THE Asia University Rankings 2022", "68"],
                ["THE Young Varsity Rankings 2022", "81"],
                ["NIRF Overall 2022 Rankings", "35"],
                ["NIRF Engineering 2022 Rankings", "22"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={tdStyle}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>IIT Ropar 5-Year NIRF Ranking Comparison</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Year</th>
                <th style={thStyle}>Rank</th>
                <th style={thStyle}>Score out of 100</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["2023", "33rd", "56.16"],
                ["2022", "35th", "54.29"],
                ["2021", "31st", "52.89"],
                ["2020", "39th", "50.92"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={tdStyle}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>NIRF Ranking 2023</strong>
        </h3>
        <p style={pStyle}>
          IIT Ropar is consistently recognized as one of the top institutes
          across all major categories by NIRF 2023. It has been noticed that in
          the 'Engineering' category the institute's ranks have shown a
          fluctuating trend when evaluated against the ranking of the prior
          year. In 2023, IIT Ropar's rank is #22, the same as last year's rank
          in the 'Engineering' category by the NIRF ranking. In the
          'Engineering' category, IIT Ropar ranked in the top 50 in the country
          for the 3rd consecutive year in 2023. <br />
          It has been seen that in the 'Overall' category, the institute's
          ranking has fluctuation when compared with the previous year's
          ranking. In 2023, IIT Ropar climbed 2 ranks to #33 rank in the
          'Overall' category by the NIRF ranking. In the 'Overall' category, IIT
          Ropar ranked in the top 50 in the country for the 3rd consecutive year
          in 2023. Students can refer to the table below for the IIT Ropar NIRF
          rankings:
        </p>

        <h3 style={th3Style}>NIRF Rankings for B.E. / B.Tech</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>2021</th>
                <th style={thStyle}>2022</th>
                <th style={thStyle}>2023</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.E. / B.Tech</td>
                <td style={tdStyle}>19</td>
                <td style={tdStyle}>22</td>
                <td style={tdStyle}>22</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Ropar Ranking NIRF Ranking Comparison</strong>
        </h3>
        <p style={pStyle}>
          Based on NIRF ranking 2023, IIT Ropar got #22 rank in the
          'Engineering' category. It stands at par with the leading universities
          such as Thapar University, and NIT Warangal for NIRF rankings under
          the 'Engineering' category; it is also compared with NIT Calicut and
          ICT Mumbai. Check out the year-by-year comparison of IIT Ropar with
          other top institutes:{" "}
        </p>

        <h3 style={th3Style}>
          IIT Ropar vs Other Institutes: NIRF Engineering 2023
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Institute Name</th>
                <th style={thStyle}>Engineering 2023 Rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian Institute of Technology Ropar", "22"],
                ["Thapar University", "20"],
                ["NIT Warangal", "21"],
                ["NIT Calicut", "23"],
                ["ICT Mumbai", "24"],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={tdStyle}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>QS World University Rankings Ranking 2024</strong>
        </h3>
        <p style={pStyle}>
          According to the QS World University Rankings, IIT Ropar surpassed
          various other institutes. It has been observed that the institute has
          displayed stability in trend in the 'Asia' category as compared to the
          ranking of preceding years. In 2024, IIT Ropar's rank is #351, the
          same as last year's rank in the 'Asia' category by the QS World
          University Rankings. <br />
          In the 'Southern Asia' category, the institute's ranks have descended
          when compared with the previous year's ranking. In 2024, IIT Ropar
          fell 12 ranks to 90 ranks in the 'Southern Asia' category by the QS
          World University Rankings. Students can check the table below for more
          details about the IIT Ropar ranking by the QS World University
          Rankings:
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>QS World University Rankings Ranking Comparison</strong>
        </h3>
        <p style={pStyle}>
          IIT Ropar has been given top ranks under various ranking parameters
          among the other institutes in the 'Asia' category. In 2024, it was
          ranked #351-400 in the 'Asia' category. Candidates can find a full
          comparison in the table below:
        </p>

        <h3 style={th3Style}>
          IIT Ropar vs. Other Institutes: QS World University Rankings 2024
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>Asia 2024</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian Institute of Technology Ropar", "351-400"],
                ["Ashoka University Sonipat", "301-350"],
                ["Shiv Nadar University Chennai", "301-350"],
                ["IIT Mandi", "351-400"],
                [
                  "Kalinga Institute of Industrial Technology (KIIT)",
                  "351-400",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={tdStyle}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>
          IIT Ropar vs. Other Institutes: QS World University Rankings 2024
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>Asia 2024</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Indian Institute of Technology Ropar", "351-400"],
                ["Ashoka University Sonipat", "301-350"],
                ["Shiv Nadar University Chennai", "301-350"],
                ["IIT Mandi", "351-400"],
                [
                  "Kalinga Institute of Industrial Technology (KIIT)",
                  "351-400",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={tdStyle}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          The IIT Ropar scholarships are offered to the students on the basis of
          marks scored in the JEE, GATE examinations. <br />
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>
              Merit-cum-Means (MCM) Scholarship for B.Tech students
            </strong>
          </h3>
          The institute offers the scholarship to the students on the basis of
          All India Rank (AIR) rank in the JEE examination. The amount offered
          in McM is INR 1,000. The scholarship is renewed on the basis of
          academic performance.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>
              {" "}
              Merit-cum-Means (MCM) Scholarship for M.Sc. students
            </strong>
          </h3>
          The M.Sc. students get the scholarship in the form of tuition fee
          waiver which is based on the score in JAM. The basic criteria to
          continue the scholarship is:
          <ul>
            <li style={liStyle}>The applicant must score 6.0 or more CGPA.</li>
            <li style={liStyle}>
              The income of family should be up to 4.5 Lakhs per annum.
            </li>
            <li style={liStyle}>
              <b>Scholarship for M.Tech/M.S students</b>: The students who
              possess B.E/B.Tech/B.Des and have qualified GATE/GPAT are eligible
              for fellowship amount (12,400).
            </li>
            <li style={liStyle}>
              <b>Scholarship for Ph.D. Scholars:</b> To avail JRF scholarship
              and fellowship amount (25,000 per month + 10% HRA if applicable),
              the applicant should have PG Degree in Basic Science with GATE/NET
              score or the applicant must hold Degree in the professional
              course. Whereas, to avail SRF scholarship and fellowship amount
              (28,000 per month + 10% HRA if applicable), the applicant must
              have cleared JRF with two years of research experience. The
              students can also apply for Post-Doctoral Fellowship after the
              completion of three years of the Ph.D..{" "}
            </li>
          </ul>
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>S.No</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Thesis Title</th>
                <th style={thStyle}>Thesis Defense Date</th>
                <th style={thStyle}>Current Work Place</th>
                <th style={thStyle}>Designation</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "1.",
                  "Dr. Jaswinder Singh",
                  "A Study of Social Discourse in the Bani of Guru Nanak, Kabir and Sant Ravidas in the Guru Granth Sahib",
                  "March 15, 2018",
                  "Punjab Technical University, Kapurthala",
                  "Assistant Professor",
                ],
                [
                  "2.",
                  "Dr. Rajesh Sharma",
                  "Essays on Banks, Financial Intermediation and Economic Growth in India",
                  "April 17, 2018",
                  "Delhi Technological University",
                  "Assistant Professor",
                ],
                [
                  "3.",
                  "Dr. Gulab Chand Potter",
                  "The Phonology of reduplication in Hadoti: An Optimality Theoretic Approach",
                  "April 23, 2018",
                  "NA",
                  "Assistant professor",
                ],
                [
                  "4.",
                  "Dr. Lekha Roy",
                  "Towards Post-Blackness: A Critical Study of the Poetry of Rita Dove",
                  "November 26, 2018",
                  "NA",
                  "NA",
                ],
                [
                  "5.",
                  "Dr. Devi Prasad Dash",
                  "Three Essays in Urban Economics",
                  "September 20, 2018",
                  "NA",
                  "Assistant Professor",
                ],
                [
                  "6.",
                  "Dr. Pankaj Dwivedi",
                  "Phonology and Sociolinguistics of Kanauji",
                  "April 1, 2019",
                  "Central Institute of Indian Languages",
                  "LJRO (Group 'A Gazetted')",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j} style={tdStyle}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Ropar</h2>
        <p style={pStyle}>
          IIT Ropar permanent campus is located on Birla Seed Farms and is
          spread over 501 acres. The campus has academic, residential, sports,
          training and career development, transportation and healthcare
          facilities. Some other facilities provided at this institute are as
          follows:
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Library</strong>
          </h3>
          Indian Institute of Technology, Ropar has a central library that is
          open 24*7 and has more than 22,000 books (on shelves) and thousands of
          eBooks and journals. It has collection of 500 CD/DVD's and 17000 books
          covering every discipline. Provides access to more than 7000 full-text
          journals, 40000 bibliographic database and 500 electronics books,
          library operations are automated using LIBSYS 7, OPAC and RFID
          software’s.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Hostel</strong>
          </h3>
          Institute has 4 hostels Jupiter, Mercury and Neptune hostels for boys
          and Venus hostel for girls. The hostels are well equipped for
          comfortable lodging and boarding of approximately 380 students. Each
          hostel has a common room that provides facilities for indoor
          recreation and games.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Sports Complex</strong>
          </h3>
          Badminton Court | Basketball Court | Cricket Ground | Football Ground
          | Tennis Court | Hockey | Volley Ball |Table Tennis
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Labs</strong>
          </h3>
          Civil Engineering Lab |Chemistry Lab |Computer Lab |Electrical Lab|
          Electronics Lab| Language Lab| Mechanical Lab| Physics Lab| Electro
          mechanics Laboratory |Analog Electronics Laboratory| Digital
          Electronics Lab| Communication Laboratory |Indoor Environment Control
          Laboratory |Machine Design Research Laboratory
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Cafeteria</strong>
          </h3>
          It provides pocket friendly and nutritious food to students, staff and
          faculty members.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Gym</strong>
          </h3>
          The campus of Indian Institute of Technology Ropar has a modern gym.
          The gym is equipped with the latest equipment. It also students in
          achieving their physical goals.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Medical Facilities</strong>
          </h3>
          IIT Ropar has a medical center that has a dedicated team of medical
          and paramedical staff. Students requiring immediate yet basic medical
          attention can be directed to the medical center. The health center at
          the IIT Ropar campus provides high-quality treatment and prevention
          services to the campus residents. It is open 24x7 for any kind of
          medical check-up or emergency. The ambulance is also available round
          the clock.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Wi-Fi Campus</strong>
          </h3>
          The college has Wi-Fi for the students and staff. Wi-Fi connectivity
          is available in every corner of Indian Institute of Technology Ropar
          campus. Shuttle Service
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Auditorium</strong>
          </h3>
          A modern auditorium is present at the campus. The auditorium is
          equipped with the latest technology. It hosts various events like
          seminars, workshops etc. of the college.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Guest Room/Waiting Room</strong>
          </h3>
          IIT Ropar facilities also include a guest house with five
          well-furnished rooms. Each room has two beds, AC, one LCD TV and some
          basic furniture. Two rooms are situated in the main building with
          reception, and the other three are in another building.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Transport Facility</strong>
          </h3>
          Indian Institute of Technology Ropar has a paid bus facility used for
          daily transportation by staff and faculty members who live off-campus.
          It runs between Chandigarh, Mohali and IIT Ropar campus.
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Other Facilities:</strong>
          </h3>
          Conference Hall| Day care for children| Bank facility| Post offices
          facility | Convenience Store
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>Hostels</strong>
          </h3>
          <img
            src="/image2.png"
            alt="Hostel Image"
            style={imageContainerStyle}
          />
          <h3
            style={{
              marginTop: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            <strong>
              {" "}
              IIT Ropar Hostel fee details for both male and female.
            </strong>
          </h3>
          Fee: ₹12,500 Fees for New Admission (main campus):-
          <ul style={ulStyle}>
            <li style={liStyle}>Hostel Establishment Charges – Rs 1500</li>
            <li style={liStyle}>
              Mess security deposit (refundable) – Rs 6000
            </li>
            <li style={liStyle}>
              Mess admission fees (one- time payment) – Rs 5000
            </li>
          </ul>
          Total – Rs 12500 <br /> <br />
          <i>
            <b>*The hostel fee may vary due to courses.</b>
          </i>
        </p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Ropar</h2>

        <p style={pStyle}>
          The IIT Ropar Alumni Association was founded on 1st February 2013. The
          Association aims to encourage the Alumni to take abiding interest in
          the progress and development of the Institute. Since its
          establishment, the Association has grown from strength to strength,
          regularly undertaking several initiatives to promote and foster
          mutually beneficial interaction between the Alumni and the Alma Mater.
        </p>
      </section>
    </div>
  );
};

export default Ranking;
