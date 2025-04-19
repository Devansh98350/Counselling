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

  return (
    <div style={sectionStyle}>
      <section id="ranking">
        <h2 style={h2Style}>Ranking</h2>
        <p style={pStyle}>
          IIT Jammu has been ranked by various renowned ranking bodies such as NIRF. These rankings are based on parameters like quality of education, research, and placement. Below are the details of IIT Jammu's rankings:
        </p>

        <h3 style={th3Style}>NIRF Ranking 2024</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.E./B.Tech</td>
              <td style={tdStyle}>67</td>
              <td style={tdStyle}>62</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>IIT Jammu vs Other Institutes: NIRF Ranking 2023</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>College Name</th>
              <th style={thStyle}>Engineering 2023 Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>IIT Jammu</td>
              <td style={tdStyle}>67</td>
            </tr>
            <tr>
              <td style={tdStyle}>SVNIT Surat</td>
              <td style={tdStyle}>65</td>
            </tr>
            <tr>
              <td style={tdStyle}>Sathyabama University</td>
              <td style={tdStyle}>66</td>
            </tr>
            <tr>
              <td style={tdStyle}>Banasthali Vidyapith</td>
              <td style={tdStyle}>68</td>
            </tr>
            <tr>
              <td style={tdStyle}>IIT Palakkad</td>
              <td style={tdStyle}>69</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Jammu offers various scholarships to support students financially. Below are the details of the scholarships available:
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name of Scholarship</th>
              <th style={thStyle}>Eligible Category</th>
              <th style={thStyle}>Benefits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Merit-cum-Means (MCM)</td>
              <td style={tdStyle}>Gen/OBC-NCL/EWS</td>
              <td style={tdStyle}>Tuition Fee refund (branch-wise)</td>
            </tr>
            <tr>
              <td style={tdStyle}>Free Messing</td>
              <td style={tdStyle}>SC/ST/PWD</td>
              <td style={tdStyle}>
                Rs.1,000/- per month, Mess Advance waiver & Rs.250/- per month
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Freeship: Remission of Tuition Fee</td>
              <td style={tdStyle}>Gen/OBC-NCL/EWS</td>
              <td style={tdStyle}>
                Remission of tuition fee (up to 10% of eligible students per
                batch)
              </td>
            </tr>
          </tbody>
        </table>
        <p style={pStyle}>
          Note: Students can apply for only one scholarship by submitting the required documents, including income certificates, Aadhaar copies, and caste certificates (if applicable).
        </p>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus</h2>
        <p style={pStyle}>
          IIT Jammu operates from both a temporary and a permanent campus. The temporary campus is located in the LCD campus, while the permanent campus spans 159 hectares of land provided by the State Government.
        </p>

        <h3 style={th3Style}>Temporary Campus</h3>
        <p style={pStyle}>
          The temporary campus includes classrooms, a seminar room, a library, a computer lab, faculty offices, a cafeteria, and recreational facilities. Sports facilities include volleyball, basketball, badminton courts, and cricket nets. Indoor sports like table tennis, carom, chess, and snooker are also available.
        </p>

        <h3 style={th3Style}>Permanent Campus</h3>
        <p style={pStyle}>
          The permanent campus includes state-of-the-art infrastructure and facilities for students and faculty. It houses hostels, academic buildings, and recreational areas.
        </p>

        <h3 style={th3Style}>Hostel Facilities</h3>
        <p style={pStyle}>
          IIT Jammu provides separate hostel facilities for male and female students. The hostel fees range from ₹41,320 to ₹60,230, depending on the type of occupancy. Mess fees include a refundable security deposit of ₹10,000, a one-time admission fee of ₹10,000, and a semester mess advance of ₹20,000.
        </p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network</h2>
        <p style={pStyle}>
          IIT Jammu has a growing alumni network with graduates working in reputed organizations. Below is a snapshot of the alumni distribution:
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name of the Organization</th>
              <th style={thStyle}>Number of Alumni</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Indian Institute of Technology, Jammu</td>
              <td style={tdStyle}>82</td>
            </tr>
            <tr>
              <td style={tdStyle}>Training & Placement Cell, IIT Jammu</td>
              <td style={tdStyle}>23</td>
            </tr>
            <tr>
              <td style={tdStyle}>Amazon</td>
              <td style={tdStyle}>16</td>
            </tr>
            <tr>
              <td style={tdStyle}>Qualcomm</td>
              <td style={tdStyle}>10</td>
            </tr>
            <tr>
              <td style={tdStyle}>Team Kinesis</td>
              <td style={tdStyle}>9</td>
            </tr>
            <tr>
              <td style={tdStyle}>Coding Club, IIT Jammu</td>
              <td style={tdStyle}>9</td>
            </tr>
            <tr>
              <td style={tdStyle}>Intel Corporation</td>
              <td style={tdStyle}>8</td>
            </tr>
            <tr>
              <td style={tdStyle}>Kritash</td>
              <td style={tdStyle}>8</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Ranking;