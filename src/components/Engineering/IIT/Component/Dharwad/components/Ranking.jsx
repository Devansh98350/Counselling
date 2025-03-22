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
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>NIRF Ranking 2023</strong>
        </h3>
        <p style={pStyle}>
          IIT Dharwad is consistently recognised as a top institution in different categories
          by NIRF 2023. Adhering to specified criteria like Faculty Quality Weightage and
          Employability Weightage, the college achieves a good ranking in comparison to
          other universities. Students can check the table below for the IIT Dharwad NIRF
          rankings:
        </p>

        <div style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>2023</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>B.E. / B.Tech</td>
                <td style={tdStyle}>93</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>NIRF Ranking Comparison</strong>
        </h3>
        <p style={pStyle}>
          Based on the NIRF ranking 2023, IIT Dharwad got the #93 rank in the
          'Engineering' category. It competes with NIT Agartala, and Chitkara University for
          the NIRF 'Engineering' category rankings. Check the year-wise NIRF comparison
          analysis of the best institutes in this space:
        </p>

        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>Engineering 2023</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["IIT Dharwad - Indian Institute of Technology", "93"],
                ["NIT Agartala", "91"],
                ["Chitkara University", "92"],
                ["Andhra University", "94"],
                ["NIT Manipur", "95"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="scholarship">
        <h2 style={h2Style}>Scholarship</h2>
        <p style={pStyle}>
          IIT Dharwad offers some of the top scholarships based on the merits of the last
          qualifying exam or entrances and the annual family income of the students. The
          scholarships encourage the students to pursue professional degree courses by
          supporting them financially to meet their academic expenses and to focus more on
          their studies. Some of the top scholarships offered by IIT Dharwad are mentioned
          below. <br />
          Merit cum Means Scholarship: <br /> <br />
          The Merit Cum Means Scholarship is offered under three main following
          categories for the students of different categories.
          <ul style={ulStyle}>
            <li style={liStyle}>In category 1 of the Merit Cum Means, only 25% of the students (Gen/OBC
              NCL/EWS) are eligible to receive a tuition fee refund and a pocket allowance
              of INR 1000 per month.  </li>
            <li style={liStyle}>In category 2, students of SC/ST categories can get Free Messing as a Mess
              Advance Waiver along with INR 250 per month.</li>
            <li style={liStyle}>Under the 3rd category, students of Gen/OBC-NCL/EWS are eligible for full
              or partial remission of tuition fees.</li>
          </ul>
          Other Scholarships: <br /> <br />
          Apart from the Merit Cum Means Scholarship, IIT Dharwad also offers some of the
          below-mentioned scholarships under the central government of India's scholarship
          schemes.
          <ul style={ulStyle}>
            <li style={liStyle}>Central Sector Scholarship Scheme of Top Class Education for SC
              Students </li>
            <li style={liStyle}>Central Sector Scholarship Scheme of Top Class Education for ST
              Students</li>
            <li style={liStyle}>National Scholarship for Higher Education for SC Students</li>
            <li style={liStyle}>National Scholarship for Higher Education for ST Students</li>
            <li style={liStyle}>Scholarship Schemes operated by State Governments/Public authorities</li>
            <li style={liStyle}>Scholarship/Assistance provided by Educational/Private Institutes</li>
          </ul>
        </p>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Dharwad</h2>
        <p style={pStyle}>
          An institute that has all the infrastructural build-up and facilities is always deemed
          to be the best one by the students. For the institutes to stand out, they should
          provide their students with good academics and good infrastructure at the same
          time. Good facilities provide the students with an environment that is safe and
          healthy. This is exactly what the Indian Institute of Information Technology,
          Dharwad is trying to do. IIIT Dharwad is a premium national college where
          students from all across the country arrive to study for graduate and doctoral
          programs. <br />
          The campus of IIIT Dharwad has all the facilities for the students who will arrive to
          study there and also those students who will stay on the campus. IIIT Dharwad
          facilities include spacious classrooms, halls, auditoriums, cultural complexes, and
          hostels for both boys and girls. Indian Institute Of Information Technology,
          Dharwad facilities provides a large campus that will house almost all the facilities
          that the students should have while they are spending their graduation years.

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>BOYS HOSTEL</strong>
          </h3>
          <p style={pStyle}>Indian Institute of Information Technology Dharwad (IIIT-DWD) is a residential
            Institute. All students preferably have to stay in the hostel accommodation
            provided by the Institute. It helps to create a community environment and this
            promotes a group education culture. IIIT-DWD offers separate hostels for Boys.
            Located at Vidya Nagar, in the heart of Hubli city, near to IIIT Dharwad transit
            campus and well connected to transit campus by public transport service. Hostels
            are equipped with 24×7 safety measures, along with other facilities such as the
            internet, Mess, CCTV etc. Hostels are well maintained and kept neat and tidy by
            dedicated housekeeping service. The hostel's rooms are comfortable, offer the
            home-like environment and provided with all basic amenities for day to day use.
            Current hostel rooms are provided on twin/ triplet-sharing basis allocated on the
            basis of first come first serve basis. Hostel Fees: Rs. 45000/- for the 1st Semester
            (includes Rs. 5000/- caution deposit) </p>
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>GIRLS HOSTEL</strong>
        </h3>
        <p style={pStyle}>Indian Institute of Information Technology Dharwad (IIIT-DWD) is a residential
          Institute. All students preferably have to stay in the hostel accommodation
          provided by the Institute. It helps to create a community environment and this
          promotes a group education culture. IIIT-DWD offers separate hostels for Girls.
          Located at Vidya Nagar, in the heart of Hubli city, near to IIIT Dharwad transit
          campus and well connected to transit campus by public transport service. Hostels
          are equipped with 24×7 safety measures, along with other facilities such as
          internet, Mess, CCTV etc. Hostels are well maintained and kept neat and tidy by
          dedicated housekeeping service. The hostels rooms are comfortable, offer home
          like environment and provided with all basic amenities for day to day use. Current
          hostel rooms are provided on twin/ triplet-sharing basis allocated on the basis of
          first come first serve basis. Hostel Fees: Rs. 45000/- for the 1st Semester
          (includes Rs. 5000/- caution deposit)</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>HOSPITAL</strong>
        </h3>
        <p style={pStyle}>There is a medical complex on the campus too so that students will not have to go
          out to get medical attention. There is also a pharmacy on the campus for buying
          medicines and first aid. </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>LIBRARY</strong>
        </h3>
        <p style={pStyle}>The Indian Institute Of Information Technology, Dharwad campus has one of the
          biggest online and offline campus libraries. The library has 2500 offline and digital
          books on various subjects. Also, there are journals, magazines, newspapers, and
          digital media DVDs and CDs for student's academic purposes.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>SPORTS</strong>
        </h3>
        <p style={pStyle}>The campus has a large and open sports complex. The sports complex has a
          football ground, basketball court, volleyball court, etc. not, only that there is a
          separate place for indoor sports and games as well. </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>AUDITORIUM</strong>
        </h3>
        <p style={pStyle}>The campus of IIIT Dharwad also has a plethora of auditoriums and halls for
          cultural and educational seminars and webinars. There is a large auditorium which
          will be used for events and programs. Also, there are separate seminar halls and
          lecture halls with large seating capacity.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>WI-FI</strong>
        </h3>
        <p style={pStyle}>IIT-Dharwad maintains the campus network backbone connectivity and internet
          connections on 24×7 basis. The IT Park has wired connectivity and also Wi-Fi
          Routers have been installed for benefit of students and faculty with a bandwidth of
          5.5Mbps (1:1) to start with. </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>LABORATORIES</strong>
        </h3>
        <p style={pStyle}>Being a premier technology institute of India, the college has various laboratories
          that are equipped with the best of the technologies and equipment. Some of the
          major labs on the campus are; physics lab, electronics lab, computer lab, analog
          and digital lab, processional communication lab, microcontroller lab,
          microprocessor lab, networking lab, etc.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>HOSTEL FEES FOR MALE AND FEMALE</strong>
        </h3>
        <p style={pStyle}>Fee: ₹3,000 <br />
          The Fee Structure is as follows:-
          <ul style={ulStyle}>
            <li style={liStyle}>Hostel Seat Rent - Rs 500</li>
            <li style={liStyle}>Hostel Establishment Charges – Rs 2500</li>
            <li style={liStyle}>Mess Security Deposit – Rs 1,000</li>
          </ul>
          Mess Fee Advance – Rs 24,500 </p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Dharwad</h2>


        <h3 style={th3Style}>IIT Dharwad Alumni Network</h3>
        <div style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name of Companies</th>
                <th style={thStyle}>No. of Alumni</th>
              </tr>
            </thead>
            <tbody>
              {[
                { org: "Indian Institute of Technology Dharwad", alumni: "19" },
                { org: "Career & Development Cell, IIT Dharwad", alumni: "17" },
                { org: "Institute Innovation Council", alumni: "14" },
                { org: "InGene Motorsport", alumni: "7" },
                { org: "Student Mentorship Program, IIT Dharwad", alumni: "5" },
                { org: "G7 CR Technologies India Pvt Ltd", alumni: "4" },
                { org: "Girl Script Foundation", alumni: "2" },
                { org: "Akaike Technologies", alumni: "2" },
                { org: "Bharat Electronics Limited", alumni: "2" },
                { org: "Air Asia Tech", alumni: "2" },
                { org: "LTI- Larsen & Toubro Infotech", alumni: "2" },
                { org: "WizRupt", alumni: "2" },
                { org: "SkyCrafts Aerospace", alumni: "1" },
                { org: "Money View", alumni: "1" },
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row.org}</td>
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
