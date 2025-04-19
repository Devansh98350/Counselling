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
          IIT Palakkad is consistently recognized as a top institution in the 'Engineering' category by NIRF. The institute's rankings have shown improvement over the years. Below are the NIRF rankings for IIT Palakkad:
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E. / B.Tech</td>
              <td style={tdStyle}>68</td>
              <td style={tdStyle}>69</td>
              <td style={tdStyle}>64</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Palakkad offers a variety of scholarships for students from reserved categories, students with disabilities, and those with financial needs. Below are the details of the scholarships:
        </p>
        <h3 style={th3Style}>Merit cum Means Scholarship</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Awarded to 25% of students with an annual family income less than INR 4.5 lakhs.
          </li>
          <li style={liStyle}>
            Renewal requires a minimum GPA of 5 in passed subjects.
          </li>
          <li style={liStyle}>
            Benefits include tuition fee exemption and a pocket allowance of INR 1000 per month.
          </li>
        </ul>
        <h3 style={th3Style}>Free Studentship</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Awarded to students with an annual parental income less than INR 4.5 lakhs.
          </li>
          <li style={liStyle}>
            Renewal requires a minimum GPA of 5 in passed subjects.
          </li>
          <li style={liStyle}>
            Benefits include tuition fee exemption.
          </li>
        </ul>
        <h3 style={th3Style}>Scholarship for SC/ST Students</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            For students with an annual family income less than INR 4.5 lakhs.
          </li>
          <li style={liStyle}>
            Benefits include tuition fee exemption, free messing (basic menu), and a pocket allowance of INR 250 per month.
          </li>
        </ul>
        <h3 style={th3Style}>Scholarship for PD Students</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Exemption from tuition fees irrespective of family income and academic performance.
          </li>
        </ul>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus</h2>
        <p style={pStyle}>
          IIT Palakkad operates across two campuses: the Temporary Campus and the Nila Campus. Below are the details of the facilities available:
        </p>
        <h3 style={th3Style}>Hostels</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Temporary Campus: Includes classrooms, seminar rooms, auditorium, library, cafeteria, labs, and on-campus hostels with sports and recreational facilities.
          </li>
          <li style={liStyle}>
            Nila Campus: Includes Wi-Fi-enabled hostels, auditorium, classrooms, labs, library, and canteen.
          </li>
          <li style={liStyle}>
            Hostel Amenities: Wi-Fi/LAN connectivity, water heaters, RO drinking water, washing machines, indoor games, fitness centers, and common rooms with TVs and newspapers.
          </li>
        </ul>
        <h3 style={th3Style}>Dining Facilities</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Separate mess facilities in Nila and Sahyadri Campuses.
          </li>
          <li style={liStyle}>
            Additional eateries: Kedaram, Kaapi, and Amul outlet.
          </li>
        </ul>
        <h3 style={th3Style}>Student Wellness</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Anti-ragging measures with zero tolerance policy.
          </li>
          <li style={liStyle}>
            Counseling services: Resident counselors and online counseling via YourDost.
          </li>
          <li style={liStyle}>
            Health care: Institute clinic and MOUs with local hospitals for cashless medical services.
          </li>
        </ul>
        <h3 style={th3Style}>Sports and Gym Facilities</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Sports facilities: Football, volleyball, basketball, cricket practice pitches, and table tennis.
          </li>
          <li style={liStyle}>
            Gym facilities: Medicine balls, treadmills, and climbing ropes.
          </li>
        </ul>
        <h3 style={th3Style}>Other Facilities</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            Library: Fully computerized with access to the National Digital Library.
          </li>
          <li style={liStyle}>
            Laboratories: Chemistry Lab, Computer Lab, Electronics Lab, Physics Lab, and more.
          </li>
          <li style={liStyle}>
            Other amenities: Cafeteria, gym, medical facilities, Wi-Fi campus, shuttle service, and auditorium.
          </li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Notable Alumni</h2>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Vineet Jain:</strong> Ranked 1st in the Civil Engineering discipline of the All India Engineering Services Exam in his first attempt.
          </li>
          <li style={liStyle}>
            <strong>Aronin Ponnappan:</strong> A 2012 Electronics and Communication Engineering (ECE) alumnus who started Sastra Robotics, a company that signed a contract with Lockheed Martin to supply robots.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Ranking;