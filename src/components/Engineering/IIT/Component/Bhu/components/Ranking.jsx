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

  return (
    <div style={sectionStyle}>
      {/* Ranking Section */}
      <section id="ranking">
        <h2 style={h2Style}>Ranking</h2>
        <h3 style={th3Style}>International Rankings</h3>
        <div style={{ overflowX: "auto" }}>
        <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Agency</th>
          <th style={thStyle}>Category</th>
          <th style={thStyle}>Rank</th>
        </tr>
        {[
          { agency: "QS World University Ranking 2024", category: "University", rank: "571" },
          { agency: "QS Asian University Ranking 2023", category: "University", rank: "261-270" },
          { agency: "QS Asian University Ranking – South Asia 2023", category: "University", rank: "55" },
        ].map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.agency}</td>
            <td style={tdStyle}>{item.category}</td>
            <td style={tdStyle}>{item.rank}</td>
          </tr>
        ))}
      </tbody>
    </table>

        <h3 style = {th3Style}>National Rankings</h3>
        <table style={tableStyle}>
        <tbody>
        <tr>
          <th style={thStyle}>Agency</th>
          <th style={thStyle}>Category</th>
          <th style={thStyle}>Rank</th>
        </tr>
        {[
          { agency: "NIRF 2024", category: "B.E./B.Tech", rank: "10" },
          { agency: "NIRF 2023", category: "Overall", rank: "31" },
          { agency: "NIRF 2023", category: "Engineering", rank: "15" },
          { agency: "NIRF 2023", category: "Innovation", rank: "10" },
          { agency: "The Week 2023", category: "----", rank: "9" },
        ].map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.agency}</td>
            <td style={tdStyle}>{item.category}</td>
            <td style={tdStyle}>{item.rank}</td>
          </tr>
        ))}
        </tbody>
        </table>
        </div>

      </section>

      {/* Scholarship Section */}
      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
        IIT BHU offers a variety of scholarships for its meritorious & needy students and the students belonging to SC/ST category to promote seamless education among the students enrolled in the UG and PG programs offered by IIT BHU. Some of the most popular scholarships offered at the institute are mentioned below.</p>

        <h3 style={th3Style}>Merit Cum Means Scholarships:</h3>
        <div style={{ overflowX: "auto" }}>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.6", fontSize: "16px" }}>
        <li>
        IIT BHU offers the MCM scholarship to only 25% of the students admitted 
        across UG and PG programs.
        </li>
        <li>
        In order to be eligible for the Merit Cum Means Scholarship, a student 
        should have scored a minimum of <strong>60% marks</strong> in the 12th 
        standard, and the annual family income should not exceed 
        <strong> INR 6 lakhs</strong>.
        </li>
        <li>
        The <strong>full tuition fee</strong> is exempted from the payment as a 
        scholarship award.
        </li>
        </ul>
        </div>

        <h3 style = {th3Style}>National Fellowship and Scholarship for Higher Education of ST Students - Scholarship (Formally Rajiv Gandhi National Fellowship for ST Students): </h3>
        <ul style={{ paddingLeft: "20px", lineHeight: "1.6", fontSize: "16px" }}>
        <li>
        The National Fellowship and Scholarship for Higher Education is specially 
        designated for students belonging to the <strong>Scheduled Tribes (ST)</strong> 
        who are pursuing higher studies such as <strong>M.Phil.</strong> and <strong>Ph.D.</strong> 
        degrees.
        </li>
        <li>
        This scholarship is applicable for students in <strong>Sciences, Humanities & 
        Social Sciences, and Engineering & Technology</strong> disciplines, provided 
        they are enrolled in a <strong>regular and full-time mode</strong>.
        </li>
        <li>
        Every year, about <strong>750 slots</strong> of scholarships/fellowships under 
        this scheme are offered to ST students across all subjects.
        </li>
        </ul>
      </section>

      {/* Campus Facilities Section */}
      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT BHU</h2>
        <p style={pStyle}>
        IIT (BHU) Varanasi is located within the sprawling 1300-acre campus of Banaras Hindu University and has magnificent buildings that showcase exemplary Indo-Gothic architecture dating back to the first half of the 20th century. Within this picturesque setting, IIT BHU offers a comprehensive array of amenities to cater to its student body. IIT BHU ensures that its students have access to on-campus housing, with separate accommodations provided for both boys and girls.        </p>

        <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Particulars</th>
          <th style={thStyle}>Details</th>
        </tr>
        {[
          { particular: "Campus Area", detail: "1300 acres" },
          { particular: "Hostel", detail: "Separate hostels for male & female candidates" },
          { 
            particular: "Facilities", 
            detail: "Library, Cafeteria, Badminton Court, Volleyball Court, Wi-Fi LAN, Internet Facility, Hostel, Sports Complex, Gym, Garden, etc." 
          },
          { particular: "New Projects", detail: "The Dhaulagiri-2 hostel" },
        ].map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.particular}</td>
            <td style={tdStyle}>{item.detail}</td>
          </tr>
        ))}
        </tbody>
    </table>


        <h3 style={th3Style}>Hostel Facilities</h3>
        <ul style={ulStyle}>
            {[
            "16 Hostels",
            "Girls Hostel",
            "Dining Hall with Mess",
            "Lounge",
            "Indoor Games Room",
            "Reading Room",
            "Gardens"
            ].map((facility, index) => (
            <li key={index} style={liStyle}>{facility}</li>
            ))}
        </ul>

        <h3 style={th3Style}>Sports Facilities</h3>
        <ul style={ulStyle}>
        {[
        "Tennis Court",
        "Badminton Court",
        "Basketball Court",
        "Cricket Ground",
        "Athletic Track",
        "Swimming Pool, etc."
        ].map((facility, index) => (
        <li key={index} style={liStyle}>{facility}</li>
        ))}
        </ul>
      </section>

      <section id="alumni-network">
      <h2 style={h2Style}>Alumni Network at IIT BHU</h2>
      <h3 style={th3Style}>Notable Alumni of IIT BHU</h3>
       <div className="table-wrapper" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Notability</th>
          <th style={thStyle}>Degree & Class Year</th>
        </tr>
        {[
          { name: "Nikesh Arora", notability: "CEO at Palo Alto Networks, former President at Softbank, ex-SVP & Chief Business Officer at Google", degree: "B.Tech, 1989" },
          { name: "Deepak Ahuja", notability: "Former CFO at Tesla, Inc.", degree: "B.Tech (Ceramic), 1985" },
          { name: "Jay Chaudhry", notability: "CEO and Founder of ZScaler", degree: "B.Tech (Electronics)" },
          { name: "Ram Charan (Consultant)", notability: "Renowned management consultant, Global Indian of the Year 2010 by Economic Times", degree: "B.Tech (Mechanical)" },
          { name: "Sahu Ramesh Chandra Jain", notability: "Former Executive Director of Bennett, Coleman & Co. Ltd., Chairman of Press Trust of India & The Indian Newspaper Society", degree: "B.Sc. (Industrial Chemistry)" },
          { name: "Vinod Kumar Bansal", notability: "Indian educationist, Founder of Bansal Classes (Kota)", degree: "B.Tech (Mechanical)" },
          { name: "Sanjay Sethi", notability: "Co-founder & CEO of ShopClues", degree: "B.Tech (Mechanical), 1983" },
          { name: "Bhupendra Kumar Modi", notability: "Chairman of Smart Group & Singapore-based Spice Global business conglomerate", degree: "B.Tech (Chemical)" },
          { name: "Late Krishan Kumar Modi", notability: "Former Chairman of Modi Group", degree: "—" },
          { name: "Salil Prabhakar", notability: "President & CEO, Delta ID Inc.", degree: "B.Tech (Computer Science), 1996" },
          { name: "Late Sadhan Dutt", notability: "Founder-chairman of Development Consultants, a member of the Kuljian Group of Companies", degree: "B.Tech" }
        ].map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.name}</td>
            <td style={tdStyle}>{item.notability}</td>
            <td style={tdStyle}>{item.degree}</td>
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
