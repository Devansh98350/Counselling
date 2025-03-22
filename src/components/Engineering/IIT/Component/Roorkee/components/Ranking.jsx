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
    maxHeight: "500px", // Adjust the width as needed
    width: "100%", // Makes it responsive within the container
    maxWidth: "800px", // Adjust the image size
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
          The National Institutional Ranking Framework (NIRF) was approved by the MHRD
          and launched by the Honorable Minister of Human Resource Development in
          2015. This framework outlines a methodology to rank institutions across the
          country. <br />
          IIT Roorkee is Asia’s oldest technical institute and one of the most prestigious
          autonomous research universities. The institute has been recognised at both
          national and international level for its academic excellence. As per the NIRF
          rankings 2023, IIT Roorkee has expertly achieved the 8th position in the Overall
          category with an audit score of 74.66. Also, the institute stood at the 5th position in
          the Engineering and Innovation segment.
          IIT Roorkee has also achieved glorious rankings from the global ranking agencies.
          In the list of QS World University Rankings 2024, IIT Roorkee has been ranked at
          369th position. Further, the institute has secured 175th rank by the QS World
          University Rankings 2023 in the Engineering & Technology category. <br />
          Given below is the detailed rank of IIT Roorkee by the different national and
          international ranking agencies:
        </p>

        <h3 style={th3Style}>IIT Roorkee Ranking Highlights 2023</h3>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th colSpan={2} style={thStyle}>International Ranking</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["QS World University Ranking 2024", "369"],
                ["QS World University Rankings 2023", "369"],
                ["QS World University Rankings - Engineering & Technology 2023", "175"],
                ["QS Asia University Rankings 2023", "114"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th colSpan={2} style={thStyle}>National Ranking</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["NIRF Overall Rankings 2023", "8"],
                ["NIRF Engineering Rankings 2023", "5"],
                ["NIRF Architecture Rankings 2023", "1"],
                ["NIRF Research Rankings 2023", "7"],
                ["IIRF Ranking 2023 (Govt Engineering College)", "07"],
                ["India Today Ranking 2023 (Top Public Colleges in India)", "05"],
                ["India Today (Architecture) 2023", "01"],
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
          IIT Roorkee offers several schemes of scholarships and financial assistance for its
          students enrolled among the different UG & PG programs. Apart from the
          scholarships, the institute also provides the facility of education loans to help its
          financially weak students and fellowships for its research scholars. The selection
          for the Scholarships is done on the different factors such as their academic
          performances in curricular and co-curricular activities, annual family income,
          merits, etc.
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Scholarship Name</th>
                <th style={thStyle}>Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Merit-cum-Means Scholarship (MCM)",
                  "- IIT Roorkee awards this scholarship to the students who are meritorious but have financial constraints  - MCM scholarship is offered to 25% of undergraduate students - Students admitted in MSc second year can also apply for it",
                ],
                [
                  "Convocation Awards/Scholarship",
                  "- IITR distributes these awards and scholarships during the convocation ceremony to the graduating students - There are two set criteria for these awards: Type A1: Based on Academic Performance Type A2 Based on Academic Performance and other various activities.",
                ],
                [
                  "Non-Convocation Awards/ Scholarship ",
                  "- These are given to current students of various classes - Awarded on the basis of the following criteria: Type A1: Based on academic performance , Type A2: Based on various other achievements ",
                ],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={{ ...tdStyle, }}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <div style={{
          overflowX: "auto",
        }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name of Scholarship</th>
                <th style={thStyle}>Eligibility Criteria</th>
                <th style={thStyle}>Scholarship Awards</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["James Thomason Scholarship", "The Best Ranked students with AIR up to 300", "INR 25,000 per month subject to securing a minimum of 8.00 CGPA in each year."],
                ["SC/ST/PH Scholarship", "All candidates belong to the category of SC/ST/PH.", "Full tuition fee waiver"],
                ["Air Cmdr Shyam Chand Mehra Scholarship", "A girl student of B.Tech (1st, 2nd, and 4th year) with highest CGPA in Electrical Engineering.", "INR 10,000 to the students of 1st and 2nd year. INR 15,000 to the students of 4th year."],
                ["Om Prakash Gupta and Sushila Devi Memorial Scholarship", "A girl student of B.Tech 1st year with highest grades in Mathematics in the final exams.", "INR 10,000 per annum"],
                ["Prof. Dr. S.R. Gupta Memorial Scholarship", "Student of B.Tech (Mechanical Engineering) as per the norms of MCM Scholarship ", "INR 25,000"],
                ["Jai Prakash Seva Sansthan Scholarship", "B.Tech Civil Engineering students.", "INR 2,000 per month for 10 consecutive months"],
                ["Naveen & Anu Jain Scholarship", "B.Tech students whose annual family income is less than INR 2 lakhs", "INR 1,000 per month for 10 consecutive months"],
                ["1940 Batch Alumni Scholarship", "1st-year students of B.Tech Civil Engineering based on the highest rank JEE ", "INR 1,000 per month for 10 consecutive months"],
              ].map((row, index) => (
                <tr key={index}>
                  <td style={{ ...tdStyle }}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                  <td style={tdStyle}>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Roorkee</h2>
        <p style={pStyle}>
          The Institute has over three campuses namely a 365-acre campus at Roorkee, a
          25-acre campus at Saharanpur, and a 10-acre campus of Greater Noida Extension
          Centre at Greater Noida. IIT Roorkee has 8,000+ students, hostels, clubs, sports
          facilities, guest houses, 10 boys' hostels, three girls' hostels, one coed hostel, and
          six married couples' hostels. The institute has UG, PG, Alaknanda clubs, and
          various other facilities for the students. IIT Roorkee's library has a collection of
          more than 3.20 lakh documents, online databases, CD-ROMs, standards, audio
          video material, specifications, theses, reports, etc.
          Check out more on IIT Roorkee Infrastructure:
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Library</strong>
          </h3>
          IIT Roorkee library has a rich collection of more than 3, 20,000 documents, CD
          ROMs, Online databases, audio-video material, standards, specifications, theses,
          reports etc. It also has access to more than 8000 electronic journals. <br />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdpe7V3G3nS4I3E-N7XlnEiFklTha9ZC74VA&s" alt="Library" style={imageContainerStyle} />

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong> Cafeteria</strong>
          </h3>
          IIT Roorkee has many cafeterias. Apart from the all-night canteens, which are
          present in each hostel, there are 3 major cafes on campus, namely Nescafe,
          Alpahar and the University Canteen. These cafeterias provide quality food at
          reasonable prices
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Hostel</strong>
          </h3>
          IIT Roorkee has 10 boys' hostels, 3 girls' hostels and 6 hostels for married
          candidates. All the hostels have basic amenities like cyber cafe, gym, Wi-Fi, water
          purifiers, common room, recreation room, mess, TV, laundry services, security and
          surveillance system etc.

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Boys Hostel</strong>
          </h3>
          <img src="/boys-hostel.png" alt="boys hostel" style={imageContainerStyle} />

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Girls Hostel</strong>
          </h3>
          <img src="https://www.iitr.ac.in/kasturbabhawan/photos/cover_page.jpg" alt="girls hostel" style={imageContainerStyle} />

          <i>*Kasturba Bhawan (Girls Hostel) above photo. </i>

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Sports Complex</strong>
          </h3>
          Badminton Court |Basketball Court| Cricket Ground |Football Ground |Squash
          Court| Swimming Pool| Tennis Court| Athletic Track| Hockey Field| Volleyball Court

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Labs</strong>
          </h3>
          Civil Engineering Lab| Chemistry Lab| Computer Lab| Electrical Lab| Electronics
          Lab| Mechanical Lab

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Post Office</strong>
          </h3>
          The campus has a post office within its premises which is situated
          near the U.G. club. The post office is well equipped and caters to the needs of the
          students and the faculty, as well as the non-residents of the campus. The post
          office works on all weekdays from 9 A.M. to 5 P.M., and on Saturdays from 9 A.M.
          to 2 P.M.

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Other Facilities</strong>
          </h3>
          Computer Center| Conference Rooms| Seminar Halls| Railway
          Reservation Counter| Student Activity Centre| Banking and ATM There are two
          Banks on-campus: the Punjab National Bank (P.N.B.) and the State Bank of India
          (S.B.I.). Both the banks provide Centralized Banking Services, Internet Banking
          and A.T.M. facilities. On enrollment, every student of IIT-R must open an account
          with either bank. Both the banks are centrally located. While P.N.B. is near the post
          office, the S.B.I branch on campus is located in the main building. The A.T.M. of
          Punjab National Bank is located next to the bank. S.B.I. operates 2 A.T.M.s on
          campus- one near the bank branch and the other in Cautley Bhawan. Apart from
          these, many banks have branches and A.T.M. facilities in the town, that is, off
          campus. Facility| Post Office Facility, Gym| Hospital / Medical Facilities |Wi-Fi
          Campus| Auditorium| Convenience Store

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Guest Room/Waiting Room</strong>
          </h3>
          <img src="https://ghbooking.iitr.ac.in/images/room/detail/img-16.jpg" alt="girls hostel" style={imageContainerStyle} />

          IIT Roorkee has three guesthouses and a visitor hostel to accommodate guests
          and delegates who visit the campus regularly

          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>IIT Roorkee Hostel</strong>
          </h3>
          Hostel for Male <br />
          Fee: ₹15,000
          <h3 style={th3Style}>Hostel Charges (Per Semester)</h3>
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Hostel Charges</th>
                  <th style={thStyle}>Autumn</th>
                  <th style={thStyle}>Spring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Accommodation", "5000", "5000"],
                  ["Electricity*", "2500", "2500"],
                  ["Total", "7500", "7500"],
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{row[0]}</td>
                    <td style={tdStyle}>{row[1]}</td>
                    <td style={tdStyle}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Mess Charges</th>
                  <th style={thStyle}>Autumn</th>
                  <th style={thStyle}>Spring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mess Advance towards Food Charges**", "20250", "20250"],
                  ["One-Time Mess Admission Fee (Non-refundable)", "4000", "0"],
                  ["Mess Security (Refundable)", "2000", "0"],
                  ["Total", "26250", "20250"],
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{row[0]}</td>
                    <td style={tdStyle}>{row[1]}</td>
                    <td style={tdStyle}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <i>*This is the minimum charge for Bachelor Hostel. For married
            accommodation charges will be as per actual. <br />
            ** Mess Advance towards food charges is subject to adjustment as per
            actual. </i> <br /> <br />

          IIT Roorkee Hostel For Female <br />
          Fee: ₹15,000

          <h3 style={th3Style}>Hostel Charges (Per Semester)</h3>
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Hostel Charges</th>
                  <th style={thStyle}>Autumn</th>
                  <th style={thStyle}>Spring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Accommodation", "5000", "5000"],
                  ["Electricity*", "2500", "2500"],
                  ["Total", "7500", "7500"],
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{row[0]}</td>
                    <td style={tdStyle}>{row[1]}</td>
                    <td style={tdStyle}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Mess Charges</th>
                  <th style={thStyle}>Autumn</th>
                  <th style={thStyle}>Spring</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Mess Advance towards Food Charges**", "20250", "20250"],
                  ["One-Time Mess Admission Fee (Non-refundable)", "4000", "0"],
                  ["Mess Security (Refundable)", "2000", "0"],
                  ["Total", "26250", "20250"],
                ].map((row, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{row[0]}</td>
                    <td style={tdStyle}>{row[1]}</td>
                    <td style={tdStyle}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <i>*This is the minimum charge for Bachelor Hostel. For married
            accommodation charges will be as per actual. <br />
            ** Mess Advance towards food charges is subject to adjustment as per
            actual. </i> <br /> <br />
        </p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Roorkee</h2>

        <ul style={ulStyle}>
          <li style={liStyle}>Harshil Mathur and Shashank Kumar CEO and MD of Razorpay, USD 7.5 BN
            Valued, a hugely successful payments company</li>
          <li style={liStyle}>Prakash Kumar Singh,former chairman of Steel Authority of India Limited</li>
        </ul>
      </section>
    </div>
  );
};

export default Ranking;
