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
          IIT Guwahati gained rank 32 globally in the ‘Research Citations per Faculty’
          category and overall 364 rank in the QS World University Rankings 2024
          released recently. IIT Guwahati has retained the 7th position among the best
          engineering institutions of the country in the ‘India Rankings 2023’ declared by
          the National Institutional Ranking Framework (NIRF) of the Union Ministry of
          Education. <br /> <br />
          IIT Guwahati is the only technical institute from the North-Eastern region of India
          to be placed among the top 10 engineering institutes of the country in NIRF
          Rankings. The college has been successful in maintaining a ranking of #7 in the
          engineering category list of NIRF from past 4 years.
        </p>

        <h3 style={th3Style}>International Ranking</h3>
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
                <th style={thStyle}>Ranking body</th>
                <th style={thStyle}>Rank</th>
              </tr>
              {[
                { label: "QS World University Rankings 2024", rank: "285" },
                { label: "QS World University Rankings 2023", rank: "384" },
                { label: "QS World University Rankings - Engineering & Technology 2023", rank: "301-350" },
                { label: "QS Asia University Rankings 2023", rank: "124" },
                { label: "QS Asian University Ranking - South Asia", rank: "16" },
                { label: "THE World University Rankings 2023", rank: "1001-1200" },
                { label: "THE World University Rankings - Engineering 2023", rank: "601-800" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
                  <td style={tdStyle}>{item.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 style={th3Style}>National Ranking</h3>
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
                <th style={thStyle}>Ranking body</th>
                <th style={thStyle}>Rank</th>
              </tr>
              {[
                { label: "NIRF Overall Rankings 2023", rank: "9" },
                { label: "NIRF Engineering Rankings 2023", rank: "7" },
                { label: "NIRF Research Rankings 2023", rank: "9" },
                { label: "India Today (Top Public Colleges in India)", rank: "6" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.label}</td>
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
          The Indian Institute of Technology, Guwahati, offers scholarships to
          undergraduate and postgraduate students for the academic growth and
          development of meritorious students. The IIT Guwahati Scholarships include
          Institute Merit Scholarships, Institute Merit-cum-Means Scholarships, SC/ST
          Scholarships. The IIT Guwahati allows students to avail of scholarships awarded
          by external Gov./non-Govt. organizations, provided they do not come into conflict
          with any ordinance or rules of the institute. The details of the scholarship are
          given below.
        </p>

        <h3 className="th3" style={th3Style}>
          IIT Guwahati Institute Merit Scholarship (IMS)
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Details</th>
              </tr>
              <tr>
                <td style={tdStyle}><b>Eligibility Criteria</b></td>
                <td style={tdStyle}>
                  <ul>
                    <li>The candidate has to complete the following without any break:</li>
                    <ul>
                      <li>I and II semesters, for the second-year scholarship.</li>
                      <li>III-IV semester, for the third-year scholarship (for B.Des/B.Tech students only).</li>
                      <li>V-VI semester, for the fourth-year scholarship (for B.Des/B.Tech students only).</li>
                    </ul>
                    <li>The candidate should have cleared all the courses of the concerned semesters in the first attempt.</li>
                    <li>The candidate should have secured the highest yearly performance index (YPI) in the semesters taken for reckoning.</li>
                    <li>The student should not have been awarded any major disciplinary action imposed by the institute disciplinary committee (IDC).</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Period of the scholarship</b></td>
                <td style={tdStyle}>The scholarship is given for a period of two semesters: August-November and January-April covering 8 months in total.  </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Benefits</b></td>
                <td style={tdStyle}>
                  A fixed monthly stipend of Rs. 500 for two semesters (August–November and January–April, totaling 8 months). Tuition fee waiver for two semesters.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Top-up Scholarships</b></td>
                <td style={tdStyle}>
                  If the sum of all scholarships awarded to the student does not exceed 1.5 times the amount of the institute merit scholarship (IMS), they may be combined with any other external scholarships (apart from those that do not permit funding from multiple sources). The student may only get external scholarships and not IMS scholarships if the value of the external scholarship is greater than or equal to 1.5 times the amount of the IMS. If the amount of the external scholarship is less than 1.5 times the IMS scholarship, the student may receive both the external scholarship and an additional sum from the IMS scholarship, as long as the additional sum does not exceed 1.5 times the IMS scholarship.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="th3" style={th3Style}>
          IIT Guwahati Institute Merit-cum-Means (McM) Scholarship
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Details</th>
              </tr>
              <tr>
                <td style={tdStyle}><b>Eligibility Criteria</b></td>
                <td style={tdStyle}>
                  For General Students  Parents' income should not be more than the allotted annual cap. (The prescribed income limit is now Rs. 4.5 lakhs per year and is governed by government announcements.) Students who passed their +2 exams from institutions charging more than Rs. 30,000.00 in monthly tuition are not given consideration for McM scholarships. iii. All first-year B.Tech., B.Des., M.Sc., and MA students may submit an application. For second, third, and fourth-year undergraduates, as well as second-year M.Sc./MA students, a CPI of 6.0 is necessary. According to the statutes, a maximum of 25% of non-SC/ST students enrolled in B.Tech./B.Des, M.Sc./M.A., and B.Tech./B.Des programmes are eligible for the McM Scholarship.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Calculation of points based on which selection is made</b></td>
                <td style={tdStyle}>
                  Weightage of parent’s income 60%  Weightage of merit 40%  Parents’ Income weightage:  Annual income below  Rs.1,50,000.00 -50.0 marks Rs. 1,50,000.00 - 2,50,000.00- 47.5 marks Rs. 2,50,000.00 - 3,50,000.00 -45.0 marks Rs. 3,50,000.00 - 4,50,000.00 -42.5 marks  Merit weightage: CPI multiplied by five for 2nd, 3rd and 4th year students and for 1st year students percentage of marks obtained in the qualifying examination is divided by two.

                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Period of the Scholarship</b></td>
                <td style={tdStyle}>Students will receive the scholarship for a period of two semesters: August-November and January-April covering 8 (eight) months in total.</td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Benefits</b></td>
                <td style={tdStyle}>
                  A fixed monthly stipend of Rs. 1000 for two semesters (August–November and January–April, totaling 8 months). Tuition fee waiver for two semesters.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Top-up Scholarship</b></td>
                <td style={tdStyle}>
                  If the total amount of scholarships does not exceed 1.5 times the value of the McM, a student may be eligible to receive both the McM scholarship and any other external scholarships (aside from those that do not permit support from multiple sources). A student may only get external scholarships and not McM scholarships if the sum of the external scholarships is larger than or equal to 1.5 times the McM scholarship. If the value of the external scholarship is less than 1.5 times the McM scholarship, the student may receive both the external scholarship and a portion of the McM scholarship as long as the combined sum does not exceed 1.5 times the McM scholarship.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="th3" style={th3Style}>
          IIT Guwahati SC-ST Scholarships
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Details</th>
              </tr>
              <tr>
                <td style={tdStyle}><b>Eligibility Criteria</b></td>
                <td style={tdStyle}>
                  The annual mandated income limit for parents must not be exceeded (it is now Rs. 4.5 lakhs per year and is subject to government notifications). If a student has passed their +2 examination from a school with an annual tuition charge of more than Rs. 30,000.00, they are not eligible for SC-ST scholarships. All B.Tech., B.Des., M.Sc., and M.A. students may submit an application.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Period of the Scholarship</b></td>
                <td style={tdStyle}>
                  Eligible students will receive the scholarship for a period of two semesters: August-November and January-April covering 8 (eight) months in total.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Benefits</b></td>
                <td style={tdStyle}>
                  A fixed monthly stipend of Rs. 250 for two semesters (August–November and January–April, totaling 8 months). Free messing  (only for the basic menu) A waiver of the dorm room fee. <br />  Tuition fees are waived for all SC/ST students by the statutes, irrespective of availing SC-ST scholarship or not.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Top-up Scholarships</b></td>
                <td style={tdStyle}>
                  If the total amount of scholarships awarded to a student does not exceed 1.5 times the amount of the SC-ST scholarship, they may receive both the SC-ST scholarship and any other external scholarships (apart from those that do not permit support from multiple sources). The student may only get external scholarships and not SC-ST scholarships if the value of the external scholarship is larger than or equal to 1.5 times the amount of the SC-ST scholarship. <br />If the amount of the external scholarship is less than 1.5 times the amount of the SC-ST scholarship, the student may receive both the external scholarship and an additional amount from the SC-ST scholarship, as long as the sum does not exceed 1.5 times the amount of the SC-ST scholarship. <br />The messing fees from the most recent month will be used to determine how much the scholarship will be worth.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="th3" style={th3Style}>
          IIT Guwahati Indian Women’s Association, Bonn (IWAB) Scholarship
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <th style={thStyle}>Particulars</th>
                <th style={thStyle}>Details</th>
              </tr>
              <tr>
                <td style={tdStyle}><b>Eligibility Criteria</b></td>
                <td style={tdStyle}>
                  The girl students may apply during the even
                  semester of an academic year.
                  If the minimum SPI of 1st semester is 7.0 for the
                  candidate to be eligible to apply for the scholarship.
                  The final recommendation made by the scholarship
                  committee is on the consideration of both
                  merit-cum-means of the candidate.
                  A recipient of a McM Scholarship during the same
                  academic period may not be awarded an IWAB
                  scholarship.
                </td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Period of the Scholarship</b></td>
                <td style={tdStyle}>The scholarship is awarded for 1 year.</td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Benefits</b></td>
                <td style={tdStyle}>The scholarship amount is currently Rs. 15,000/- for one time.</td>
              </tr>
              <tr>
                <td style={tdStyle}><b>Calculation of points based on which selection is made </b></td>
                <td style={tdStyle}>
                  <ul>
                    <li>Weightage of parent's income: 50%</li>
                    <li>Weightage of merit: 50%</li>
                    <li>
                      Annual income weightage:
                      <ul>
                        <li>Below Rs. 1,50,000 - 50.0 marks</li>
                        <li>Rs. 1,50,000 - 2,50,000 - 47.5 marks</li>
                        <li>Rs. 2,50,000 - 3,50,000 - 45.0 marks</li>
                        <li>Rs. 3,50,000 - 4,50,000 - 42.5 marks</li>
                      </ul>
                    </li>
                    <li>Merit weightage: SPI multiplied by 5.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Guwahati</h2>
        <p style={pStyle}>
          From academic facilities to sports, they have it all for their students. IIT
          Guwahati facilities are robust and modern and offer a comfortable environment
          for students. IIT Guwahati facilities include a central library, gym, auditorium,
          WIFI, sports grounds, labs, classrooms, stadiums, hospital, commercial complex
          and others. The accommodation facility at IIT Guwahati is quite good since there
          are separate rooms provided to every student. <br /> <br />
          A total of 2 girls' hostels and ten boys' hostel is situated inside the campus, with
          every hostel having its mess facilities. There are various inter-hostel events
          conducted every year as well, which keep the students engaged and help them
          develop an all-round perspective.  The internet facility provided is also quite
          efficient, with high-speed Wi-fi and a computer lab available 24-7 for the
          students. IIT Guwahati facilities make sure students do not face any
          inconvenience at the campus.
        </p>

        <ul style={ulStyle}>
          {[
            {
              title: "Boys Hostel",
              description:
                "All the Boys students of the Institute have been provided with hostel rooms on the campus.The accommodation is single- seater.These hostels are equipped with all modern amenities. There are facilities for sports and recreation such as satellite TV, indoor games and a gymnasium. Facilities for outdoor games like volleyball, basketball, and football are also there. Every room in the hostels is provided with network connectivity. Separate accommodation is provided to the girl students. Around-the-clock canteen is in operation to cater to the needs of the students. "
            },
            {
              title: "Girls Hostel",
              description:
                "All the Girls students of the Institute have been provided with hostel rooms on the campus. The accommodation is single-seater. These hostels are equipped with all modern amenities. There are facilities for sports and recreation such as satellite TV, indoor games and a gymnasium. Facilities for outdoor games like volleyball, basketball, and football are also there. Every room in the hostels is provided with network connectivity. Separate accommodation is provided to the girl students. Around-the-clock canteen is in operation to cater to the needs of the students."
            },
            {
              title: "Medical/Hospital",
              description:
                "An in-campus hospital with approximately 30beds is available for the students, faculties or staff members 24×7 in case of health emergencies. "
            },
            {
              title: "Gym",
              description:
                "A well-equipped gym is provided by IIT, Guwahati for the students to help them maintain a healthy lifestyle and stay fresh. "
            },
            {
              title: "Library",
              description:
                "The Central Library, one of the important central facilities of the Institute, currently has a collection of over 1, 17,000 items including 2605 subscribed online journals and magazines."
            },
            {
              title: "Sports",
              description:
                "The complex has an indoor sports stadium with table tennis, badminton, gymnasium, squash courts, student Gymkhana office. It also has a swimming pool which is 8lane 50 metre long. A field for conducting all outdoor games provides ample space and opportunities for the students."
            },
            {
              title: "I.T Infrastructure",
              description:
                "The IIT Guwahati has excellent IT Infrastructure facility for the students."
            },
            {
              title: "Cafeteria",
              description:
                "The IIT Guwahati has a canteen facility for staff and students."
            },
            {
              title: "Auditorium",
              description:
                "IIT, Guwahati has a conference centre with 2 halls of 150 intake and 2 more halls with 200 intake along with a food court for students, faculty and staff members."
            },
            {
              title: "Alumni Associations",
              description:
                "This association, IITGAA provides a platform to connect with the IIT, Guwahati's alumni, faculty, students, and staff."
            },
            {
              title: "Wifi",
              description:
                "Wide network on a Gigabit Ethernet Backbone with connection in every hostel room, campus is available for the students, faculty and staff members of IIT, Guwahati. "
            },
            {
              title: "Swimming Pool",
              description:
                "The IIT Guwahati has the Swimming Pool facility for its faculty, staff, and students."
            },
            {
              title: "Classrooms",
              description:
                "A well-maintained classrooms with proper ventilation, space and good environment is present in the campus for providing best quality education to its students. It also four different lecture halls with 250 seat capacity plus an auditorium with 1500 capacity for events, teaching or even cultural programmes, workshops and guest lectures from eminent personalities among others. "
            },
            {
              title: "Guest Room/Waiting Room",
              description:
                "A guest with 72room, faculty quarters, and hostels is available for the guest or students guardian to make their stay at the institute comfortable."
            },
          ].map((item, index) => (
            <li key={index} style={liStyle}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Guwahati Hostel for Male and Female</strong>
        </h3>
        <p style={pStyle}>
          Fee: ₹11,500 <br />
          <h3
            style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
          >
            <strong>Hostel Fee Structure:-</strong>
          </h3>
          One-Time Fees:- <br />
          <ul style={ulStyle}>
            <li style={liStyle}>Hostel Admission Fee – Rs. 400</li>
            <li style={liStyle}>Mess Establishment Charge – Rs. 2,500 </li>
          </ul>
          One-Time Deposits (At the time of admission) & Refundable:-  <br />
          <ul style={ulStyle}>
            <li style={liStyle}>Hostel Caution Money – Rs. 4,000</li>
            <li style={liStyle}>Mess Deposit – Rs. 6000</li>
          </ul>
          Payable at Every Semester:-<br />
          <ul style={ulStyle}>
            <li style={liStyle}>Hostel Fund – Rs. 600 </li>
            <li style={liStyle}>Hostel Rent – Rs 1000</li>
            <li style={liStyle}>Hostel Maintenance Charge – Rs. 3,000 </li>
            <li style={liStyle}>Electricity and Water Charges – Rs. 2,500</li>
            <li style={liStyle}>Adjustable Mess Advance – Rs. 18,000</li>
          </ul>
        </p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Guwahati</h2>
        <h3 style={th3Style}>IIT Guwahati Alumni Network</h3>
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
              <tr>
                <th style={thStyle}>Name of Organizations</th>
                <th style={thStyle}>Number of Alumni</th>
              </tr>
              {[
                { org: "Indian Institute of Technology, Guwahati", alumni: "1036" },
                { org: "Alcheringa, IIT Guwahati", alumni: "313" },
                { org: "Microsoft", alumni: "300" },
                { org: "Amazon", alumni: "262" },
                { org: "Techniche, IIT Guwahati", alumni: "222" },
                { org: "Qualcomm", alumni: "151" },
                { org: "Oracle", alumni: "147" },
                { org: "Consulting & Analytics Club, IIT Guwahati", alumni: "122" },
                { org: "E-cell, IIT Guwahati", alumni: "116" },
                { org: "Goldman Sachs", alumni: "103" },
                { org: "Coding Club, IIT Guwahati", alumni: "97" },
                { org: "Intel Corporation", alumni: "94" },
                { org: "Finance & Economics Club - IIT Guwahati", alumni: "87" },
                { org: "Adobe", alumni: "66" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.org}</td>
                  <td style={tdStyle}>{item.alumni}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

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

        <h3 style={th3Style}>Alumni</h3>
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
              <tr>
                <th style={thStyle}>Alumni</th>
                <th style={thStyle}>Designation</th>
                <th style={thStyle}>Company Name</th>
              </tr>
              {[
                { name: "Aditya Singh", designation: "Quantitative Trader", company: "Citadel LLC" },
                { name: "Archit Gupta", designation: "Founder and CEO", company: "ClearTax" },
                { name: "Atanu Guchhait", designation: "5G NR Wireless Access (PHY) Development", company: "Samsung" },
                { name: "Jaspreet Singh", designation: "Founder and CEO", company: "Druva Inc." },
                { name: "Rameshwar M Paswan", designation: "Manager", company: "Petroleumsoft Limited" },
                { name: "Ritwik Tewari", designation: "Engineering Manager, Ads Manager and Metrics - San Francisco Bay Area", company: "Facebook Inc." },
                { name: "Saurabh Nangia", designation: "Tech Entrepreneur", company: "" },
                { name: "Theophilus Thomas", designation: "Head of Design Planning, Samsung Design Delhi", company: "Samsung Electronics Co. Ltd." },
                { name: "Vaibhav Aggarwal", designation: "Founder and CEO", company: "" },
              ].map((item, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.designation}</td>
                  <td style={tdStyle}>{item.company}</td>
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
