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
          IIT Bhilai has been recognized for its academic excellence and ranks among the top engineering institutions in India. Below are the details of its rankings:
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
              <td style={tdStyle}>81</td>
              <td style={tdStyle}>73</td>
            </tr>
          </tbody>
        </table>

        <h3 style={th3Style}>NIRF Ranking Comparison</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>College Name</th>
              <th style={thStyle}>Engineering 2023</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>IIT Bhilai</td>
              <td style={tdStyle}>81</td>
            </tr>
            <tr>
              <td style={tdStyle}>RGIPT</td>
              <td style={tdStyle}>79</td>
            </tr>
            <tr>
              <td style={tdStyle}>NIT Bhopal</td>
              <td style={tdStyle}>80</td>
            </tr>
            <tr>
              <td style={tdStyle}>NIT Srinagar</td>
              <td style={tdStyle}>82</td>
            </tr>
            <tr>
              <td style={tdStyle}>JNTUH</td>
              <td style={tdStyle}>83</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Bhilai offers several scholarships to support students financially. Below are the details of the scholarships available:
        </p>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Merit Cum Means (MCM) Scholarship:</strong>
            <ul style={ulStyle}>
              <li>Available for 25% of UR & OBC students</li>
              <li>Eligibility: Annual family income between INR 1 lakh - INR 5 lakh, Minimum CGPA of 6.0</li>
              <li>Benefits: 2/3rd tuition fee remission, 1/3rd tuition fee reimbursement per semester, Pocket money of INR 1000/month</li>
            </ul>
          </li>
          <li style={liStyle}>
            <strong>Institute SC/ST Scholarship:</strong>
            <ul style={ulStyle}>
              <li>Available for all undergraduate SC/ST students</li>
              <li>Eligibility: Annual family income ≤ INR 4.5 lakh, Minimum CGPA of 7.0</li>
              <li>Benefits: Free messing & boarding, Pocket allowance of INR 250/month</li>
            </ul>
          </li>
          <li style={liStyle}>
            <strong>Institute Free Studentship Scholarship:</strong>
            <ul style={ulStyle}>
              <li>Available for 10% of undergraduate students</li>
              <li>Eligibility: Annual family income ≤ INR 5 lakh (UR) / ≤ INR 6 lakh (OBC), Minimum CGPA of 6.0</li>
              <li>Benefits: 2/3rd tuition fee remission, 1/3rd tuition fee reimbursement per semester</li>
            </ul>
          </li>
          <li style={liStyle}>
            <strong>Institute Fellowship for Postgraduate Students:</strong>
            <ul style={ulStyle}>
              <li>M.Tech students (Non-Sponsored) with valid GATE score: Fellowship duration up to 21 months</li>
              <li>Ph.D. students: Fellowship duration up to 3 years</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus</h2>
        <p style={pStyle}>
          The permanent campus of IIT Bhilai is a self-sustaining residential campus located in Kutelabhata village, Bhilai, District Durg. It is being developed in phases and will eventually accommodate 12,000 students over 20 years.
        </p>

        <h3 style={th3Style}>Facilities at IIT Bhilai</h3>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <strong>Hostels:</strong> Separate boys' and girls' hostels with recreation rooms, dining facilities, night canteens, and 24/7 security surveillance.
          </li>
          <li style={liStyle}>
            <strong>Medical Facilities:</strong> 24/7 health center, tie-ups with nearby hospitals, and a fully equipped ambulance.
          </li>
          <li style={liStyle}>
            <strong>Library:</strong> Central library with thousands of books, research publications, and a computerized catalog system.
          </li>
          <li style={liStyle}>
            <strong>Sports Facilities:</strong> Indoor and outdoor games like badminton, basketball, tennis, volleyball, football, carom, and chess. Gym facilities are also available.
          </li>
          <li style={liStyle}>
            <strong>IT Infrastructure:</strong> Two high-end computer labs, Dell desktops and servers, high-speed internet, and campus-wide Wi-Fi connectivity.
          </li>
          <li style={liStyle}>
            <strong>Cafeteria:</strong> Hygienic meals for both hostellers and day scholars.
          </li>
        </ul>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network</h2>
        <p style={pStyle}>
          IIT Bhilai has a growing alumni network with graduates excelling in various fields. Below is a snapshot of the alumni distribution:
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name of Organizations</th>
              <th style={thStyle}>Number of Alumni</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Indian Institute of Technology (IIT), Bhilai</td>
              <td style={tdStyle}>66</td>
            </tr>
            <tr>
              <td style={tdStyle}>LTI - Larsen & Toubro Infotech</td>
              <td style={tdStyle}>12</td>
            </tr>
            <tr>
              <td style={tdStyle}>Tinkerers’ Lab, IIT Bhilai</td>
              <td style={tdStyle}>8</td>
            </tr>
            <tr>
              <td style={tdStyle}>ATONARP</td>
              <td style={tdStyle}>8</td>
            </tr>
            <tr>
              <td style={tdStyle}>Ingenuity IIT Bhilai</td>
              <td style={tdStyle}>7</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Ranking;