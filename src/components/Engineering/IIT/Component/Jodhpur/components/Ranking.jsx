import React from "react";

const Ranking = () => {
  const sectionStyle = {
    padding: "20px",
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
    fontSize: "1.2rem",
    lineHeight: "1.6",
    listStyleType: "disc",
    marginLeft: "20px",
  };

  const liStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  return (
    <div style={sectionStyle}>
      <section id="ranking">
        <h2 style={h2Style}>Ranking</h2>
        <p style={pStyle}>
          IIT Jodhpur has consistently ranked among the top engineering institutions in India and Asia. Below are the rankings achieved by IIT Jodhpur in recent years:
        </p>

        <h3 style={th3Style}>Ranking Details</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Ranking Agency</th>
              <th style={thStyle}>Year</th>
              <th style={thStyle}>Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>NIRF Engineering Ranking</td>
              <td style={tdStyle}>2024</td>
              <td style={tdStyle}>28</td>
            </tr>
            <tr>
              <td style={tdStyle}>NIRF Engineering Ranking</td>
              <td style={tdStyle}>2023</td>
              <td style={tdStyle}>30</td>
            </tr>
            <tr>
              <td style={tdStyle}>NIRF Overall Ranking</td>
              <td style={tdStyle}>2023</td>
              <td style={tdStyle}>66</td>
            </tr>
            <tr>
              <td style={tdStyle}>NIRF Overall Ranking</td>
              <td style={tdStyle}>2022</td>
              <td style={tdStyle}>86</td>
            </tr>
            <tr>
              <td style={tdStyle}>Times Higher Education World University Rankings (Global)</td>
              <td style={tdStyle}>2022</td>
              <td style={tdStyle}>601-800</td>
            </tr>
            <tr>
              <td style={tdStyle}>QS Asia University Rankings</td>
              <td style={tdStyle}>2021</td>
              <td style={tdStyle}>72</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Jodhpur offers the Merit Cum Means (MCM) Scholarship to support students financially. The scholarship is awarded to 25% of the students enrolled at IIT Jodhpur based on academic merit and parental income. Below are the details:
        </p>
        <h3 style={th3Style}>Eligibility Criteria</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>General and OBC Category:</strong> Minimum 60% marks in 12th standard for 1st-year students and a minimum CPI of 6.5 with no backlogs for 2nd-year students.
          </li>
          <li style={liStyle}>
            <strong>SC and ST Category:</strong> Minimum 55% marks in 12th standard for 1st-year students and no F grades for 2nd-year students.
          </li>
          <li style={liStyle}>
            <strong>Annual Family Income:</strong> Should not exceed INR 6 lakhs for all categories.
          </li>
        </ul>
        <h3 style={th3Style}>Scholarship Awards</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>General and OBC Category:</strong> Free tuition fee and INR 1000 per month.
          </li>
          <li style={liStyle}>
            <strong>SC and ST Category:</strong> Free dining (basic menu), exemption from hostel seat rent, and INR 1000 per month as a pocket allowance.
          </li>
        </ul>
        <h3 style={th3Style}>How to Apply</h3>
        <p style={pStyle}>
          Application forms for the MCM Scholarship are available at the Office of Students, IIT Jodhpur. Students can submit the filled forms along with required documents to the Coordinator (Students) at the Administration Building.
        </p>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus</h2>
        <p style={pStyle}>
          IIT Jodhpur's campus is spread over 852 acres and offers state-of-the-art residential and academic facilities. Below are the key highlights of the campus:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Hostels:</strong> Fully residential campus with single occupancy, air-conditioned, and semi-furnished rooms. Each hostel has a TV room, reading room, and indoor game facilities.
          </li>
          <li style={liStyle}>
            <strong>Sports Complex:</strong> Facilities for football, cricket, basketball, volleyball, lawn tennis, badminton, squash, table tennis, and weightlifting.
          </li>
          <li style={liStyle}>
            <strong>Tech Park:</strong> A planned 100-acre Tech Park with the capacity to host 30 companies at once.
          </li>
          <li style={liStyle}>
            <strong>Healthcare:</strong> ISO-certified healthcare center with OPD and ambulance services. The medical board includes doctors from Government Medical College and AIIMS.
          </li>
          <li style={liStyle}>
            <strong>Incubation Cell:</strong> The Technology and Innovation and Start-Up Centre (TISC) promotes entrepreneurship and is supported by the Ministry of MSME and Ministry of Electronics and IT.
          </li>
          <li style={liStyle}>
            <strong>Other Facilities:</strong> Library, cafeteria, gym, hospital, Wi-Fi campus, shuttle service, auditorium, and labs.
          </li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Notable Alumni</h2>
        <p style={pStyle}>
          IIT Jodhpur has a growing alumni network with graduates excelling in various fields. Below are some of the notable alumni:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Heena Rathor:</strong> Assistant Professor at Texas State University.
          </li>
          <li style={liStyle}>
            <strong>Shivendra Nandan:</strong> Musical Artist.
          </li>
          <li style={liStyle}>
            <strong>Dr. Bibin G Anand:</strong> Research Assistant Professor at SRM.
          </li>
          <li style={liStyle}>
            <strong>Dr. Arun Kumar Upadhyay:</strong> Assistant Professor at IIT Bhilai.
          </li>
          <li style={liStyle}>
            <strong>Rahul Badhwar:</strong> Senior Research Scientist at Reliance Limited.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Ranking;