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
        <h3 style={th3Style}>IIT Kharagpur Ranking Highlights</h3>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Ranking Agencies</th>
                <th style={thStyle}>Rank</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["QS World University Rankings 2024", "271"],
                ["QS World University Rankings 2023", "270"],
                ["QS World University Rankings - Engineering & Technology 2023", "82"],
                ["QS Asia University Rankings 2023", "59"],
                ["QS South Asia University Ranking 2023", "05"],
                ["NIRF Overall Rankings 2023", "7"],
                ["NIRF Engineering Rankings 2023 (Best among NIRF ranked colleges in West Bengal in 2023)", "6"],
                ["NIRF Management Rankings 2023", "14"],
                ["NIRF Law Rankings 2023", "9"],
                ["NIRF Architecture Rankings 2023", "3"],
                ["NIRF Research Rankings 2023", "5"],
                ["India Today 2023 (Top Public Colleges in India)", "4"],
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
          Scholarships availed by UG Students
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>Scholarship</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Institute Type",
                  <>
                    <ol>
                      <li>Merit Cum Means Scholarship including Tuition fee waiver</li>
                      <li>Scholarship to 2-year MSc students of Joint MSc PhD Program.</li>
                    </ol>
                  </>,
                ],
                [
                  "Central Government Ministries/Organizations",
                  <>
                    <ol>
                      <li>Innovation in Science Pursuit for Inspired Research</li>
                      <li>Kishore Vaigyanik Protsahan Yojana</li>
                      <li>Post Graduate Indira Gandhi Scholarship</li>
                      <li>
                        Central Sector Scholarship Scheme - Ministry of Social Justice and Empowerment, Govt. of India
                      </li>
                      <li>
                        Central Sector Scholarship Scheme - Ministry of Tribal Affairs, Education Department, Govt. of India
                      </li>
                      <li>
                        National Handicapped Finance and Development Corporation - Department of Disability Affairs, Ministry of Social Justice & Empowerment, Govt. of India
                      </li>
                      <li>
                        North Eastern Council Scholarship - Financial support to students of the North Eastern Region for Higher Professional Courses
                      </li>
                      <li>
                        National Talent Search Scholarship – National Council of Educational Research & Training
                      </li>
                      <li>MHRD Assistantship to final-year Dual Degree students</li>
                      <li>AICTE - Scholarship to eligible students of Jammu & Kashmir</li>
                    </ol>
                  </>,
                ],
                [
                  "State Governments and Union Territories",
                  <>
                    <ol>
                      <li>Andhra Pradesh Govt.</li>
                      <li>Post Matric Scholarship Assam</li>
                      <li>Govt. of Arunachal Pradesh Scholarship</li>
                      <li>Post Mat Sch to ST, Arunachal Pradesh</li>
                      <li>Bihar Govt. Scholarship, Patna</li>
                      <li>Govt. of Chennai Scholarship</li>
                      <li>Directorate of Tech. Education, Chhattisgarh</li>
                      <li>Tribal Welfare Scholarship, Jharkhand</li>
                      <li>Kerala Govt. Scholarship (Minorities)</li>
                      <li>Manipur Govt. Scholarship</li>
                      <li>Madhya Pradesh Govt. Scholarship</li>
                      <li>Tribal Welfare Scholarship, MP</li>
                      <li>Director of Higher Education, Maharashtra</li>
                      <li>Social Welfare Nagpur Free ship to SC students</li>
                      <li>Rajarshee Shahu Maharaj Merit Schol. (Govt. of Maharashtra)</li>
                      <li>Meghalaya Govt. Scholarship</li>
                      <li>Director of Higher Education Nagaland</li>
                      <li>Director of Higher Education Orissa</li>
                      <li>Rajasthan Siksha Board Scheme</li>
                      <li>Director of Higher Education, Tripura</li>
                      <li>UP Govt. Scholarship, Lucknow</li>
                      <li>Director Education Allahabad UP</li>
                      <li>WB Govt. Scholarship</li>
                      <li>Merit-Cum-Means Scholarship for Minorities, West Bengal</li>
                    </ol>
                  </>,
                ],
                [
                  "Public Sector Units/Government Undertakings",
                  <>
                    <ol>
                      <li>Rashtriya Ispat Nigam Limited Scholarship through Visakapatnam Steel Plant</li>
                      <li>Pandit Jawaharlal Nehru Science and Technology Scholarship Scheme of SAIL</li>
                      <li>Indian Oil Educational Scholarship</li>
                      <li>Engineers India Limited Scholarship</li>
                      <li>Balmer Lawrie Scholarship Kolkata under the CSR scheme</li>
                    </ol>
                  </>,
                ],
                [
                  "Private Companies/Foundations/Organizations",
                  <>
                    <ol>
                      <li>PJEMS (O. P. Jindal Engineering & Management Scholarships)</li>
                      <li>Aditya Birla Scholarship</li>
                      <li>FAEA Foundation for Academic Excellence & Access</li>
                      <li>INLAKS Scholarship</li>
                      <li>Jagadish Bose National Science Talent Search (JBNSTS), Kolkata</li>
                    </ol>
                  </>,
                ],
                [
                  "Foreign Agencies",
                  <>
                    <ol>
                      <li>TODAI—IIT Undergraduate Students Scholarship Program</li>
                      <li>Singapore Technologies Scholarship in Engineering</li>
                    </ol>
                  </>,
                ],

              ].map((row, index) => (
                <tr key={index}>
                  <td style={tdStyle}>{row[0]}</td>
                  <td style={tdStyle}>{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Institute Scholarships</strong>
        </h3>
        <p style={pStyle}>Institute scholarships are the type of fee waiver programs that are awarded from
          the Institute funds. There are awarded on the basis of merit-cum-means to all
          eligible students. The students eligible for the Institute scholarship at IIT
          Kharagpur are 4-year B.Tech (Hons), 5-year Dual Degree, 5-year BArch (Hons.)
          and 5-year Integrated MSc courses and 4-year BS program, except the students
          belonging to SC and ST (who are eligible for Post-Matric Scholarship). The
          students who fulfill the conditions after this appearance shall be eligible for the
          award of the Merit-Cum-Means (MCM) scholarship. <br />
          These scholarships will be offered to no more than 25% of students admitted to
          Undergraduate and Dual Degree programs each year. The Board of Governors will decide on the monetary worth of these scholarships from time to time. There
          will be an exemption from paying Institute tuition for all recipients of the MCM
          scholarship.  </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Endowment and Alumni-Funded Scholarships </strong>
        </h3>
        <p style={pStyle}>Endowments and Alumni Funded scholarships are the scholarships that are
          awarded through endowment funds. To be eligible for this scholarship the term
          best student or the student who has secured the highest CGPA in the
          immediately preceding semester amongst all the students of the same batch. </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kharagpur Foundation (IITKGPF) of USA Award Program
            for International Internships</strong>
        </h3>
        <p style={pStyle}>Under the IIT Kharagpur Foundation (IITKGPF) of USA offers an Award Program
          for International Internships, supporting meritorious students across Bachelor's
          and Master's levels as well as various Departments/Schools/Centers each year .
          Awardees are chosen based on factors such as the quality of the host
          institution/company, the proposed research, and the academic standing of the
          applicant. The award ranges from USD 3000-5000 and is managed directly by
          IITKGPF. However, awardees may need to secure additional funding if
          necessary. <br />
          The final approval for the award is subject to completion of the internship and
          return to the Institute before the start of the Autumn Semester. It also includes
          the approvals from the faculty advisor and Head of Department (HoD). The
          application process involves waiting for the call, logging into the Foreign Training
          Portal, and providing the necessary details. Third-year students are prioritized
          over second-year students when deciding on mandatory internships. Additionally,
          CGPA rankings are taken into account for non-mandated internships. <br />
          The candidates who have received provisional approval must return to campus
          before to the autumn semester, negotiate with the host institute to arrange an
          internship date if necessary, and get approval from their faculty adviser and the
          head of the department if the dates cannot be modified. The final approval
          depends on fulfilling these requirements. Every year, the rules and calls for
          applications are usually announced in March or April. </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kharagpur Foundation (IITKGPF) of USA: Award Program for Students
            Participation in International</strong>
        </h3>
        <p style={pStyle}>IIT Kharagpur Foundation supports meritorious students across Bachelor's and
          Master's levels and various Departments/ Schools/ Centers each year to pursue
          high-quality international research and professional internships. Awardees are
          selected based on the quality of the host institution /company, the proposed
          research, and the applicant's academic standing. The award ranges from US
          Dollars 3000-5000 and is administered directly by IITKGPF, with awardees
          responsible for securing additional funding if necessary. Upon completing the
          internship and returning to the Institute before the Autumn Semester, obtaining
          approvals from faculty advisors and HoDs, and submitting approvals to the Office
          of International Relations, the IITKGPF scholarships are awarded. <br />
          The application process involves waiting for the call, logging into the Foreign
          Training Portal, and providing the required information. Decision-making
          prioritizes mandatory internships, ranks non-mandatory internship applicants
          based on CGPA, and gives preference to 3rd-year students over 2nd-year
          students. All applications must be endorsed by faculty mentors and HoDs. The
          final approval is dependent upon meeting these requirements, with applications
          typically released around March-April each year.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Guru Krupa Foundation (GKF) USA </strong>
        </h3>
        <p style={pStyle}>The GKF is a postgraduate Scholarship for International Students, under which
          they support meritorious self-funded international students of Postgraduate level
          across all disciplines in the form of awarding scholarships. They offer a
          scholarship amount worth INR 25,000 per month to cover tuition fees,
          hostel/accommodation charges, mess charges, and living expenses. The award
          is based on the academic excellence of the candidate and should not have any
          disciplinary action taken against him/her during a stay at IIT Kharagpur. The
          CGPA must be at least 8.5 with no backlog in any subject. The student is not a
          recipient of any financial support from the Institute or outside sponsor. Bonafide
          students who wish to avail of the scholarship should apply against the call
          released by the Office of International Relations by filling up the form. The call is
          released normally in January every year.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Shri Gopal Rajgarhia International Program </strong>
        </h3>
        <p style={pStyle}>The objective of the SGRIP endowment fund, which was established primarily as
          a donation from Shri Gopal Rajgarhia (68/BTech/CH/NH), is to support different
          initiatives that would increase IIT Kharagpur's international participation. IIT
          Kharagpur aims to enhance its global standing and bring about major change by
          utilizing these initiatives, with a particular focus on supporting and facilitating
          overseas programs.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Other Scholarships </strong>
        </h3>
        <p style={pStyle}>Australian National University Future Research Talent (FRT) Award: The FRT is
          a competitive and prestigious program attracting the most meritorious students
          from the best and top Indian instituitions. The program allows India’s emerging
          research talent to form international connections and develop research skills at
          Australia’s best university. The FRT program provides selected Indian students
          with an opportunity to pursue a collaborative research project remotely or in the
          presence of supervisors from The Australian National University (ANU), for a
          period of 10-12 weeks, in a range of Science, Health and Medicine disciplines. <br />
          Warwick Manufacturing Group: WMG annually invites the Indian Institute of
          Technology Kharagpur to select a small number of students to attend a short
          course for 8 weeks (UG) and 11 weeks (PG) at the University of Warwick. Events
          take place either virtually or on-site. Participants will carry out an individual
          research project that is related to the degree course for which they are
          registered. The purpose is to develop the research skills of the students in an
          industrially focused environment, encourage collaboration with WMG encourage
          the development of nascent research ideas, and build the research profiles of
          WMG and IITKGP. In the past, supervisors have benefitted greatly from the work
          carried out by their students through contributions to publications and successful
          grant applications. <br />
          Raman-Charpak Fellowship Programme: The Raman-Charpak Fellowship is a
          flagship program for Indo-French researcher's mobility implemented by the Indo
          French Centre for Promotion of Advanced Research and is jointly funded by the
          Department of Science and Technology (DST), Government of India and the
          French Institute in India (IFI), French Embassy in India, Ministry for Europe and
          Foreign Affairs, Government of France. It aims to foster mobility of highly
          qualified Indian & French PhD and French Master’s students between the two
          countries for duration of 2 to 6 months to broaden the scope and depth of future
          engagements in Science, Technology, and Innovation. </p>
      </section>

      <section id="campus">
        <h2 style={h2Style}>Campus Facilities at IIT Kharagpur</h2>
        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Campus Highlights</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur campus area is over 2100 acres, over a total of 55 kilometers of
          roadways and approximately 10,000 students live on the campus. There are
          plenty of facilities and centres for extracurriculars available inside the IIT
          Kharagpur campus such as the Student Activity Center better known as the
          Technology Students' Gymkhana, Jnan Ghosh and Tata Sports Complex for
          various sports activities, Social and Cultural Centre, Counselling Centre, B C Roy
          Technology Hospital and various cafeterias. All everyday necessities can be
          found inside the IIT Kharagpur campus' "Tech Market," which is a one-stop shop.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kharagpur Hostel</strong>
        </h3>
        <p style={pStyle}>
          There are 21 hostels at the IIT Kharagpur campuses out of which 16 are for boys
          and rest 5 are for girls. Here is the list of halls of residence at IIT Kharagpur:
        </p>
        <ul style={ulStyle}>
          <li>Sir Ashutosh Mukherjee Hall</li>
          <li>Azad Hall</li>
          <li>B C Roy Hall</li>
          <li>B R Ambedkar Hall</li>
          <li>Gokhale Hall</li>
          <li>Homi Bhabha Hall</li>
          <li>J C Bose Hall</li>
          <li>Lala Lajpat Rai Hall</li>
          <li>Lalbahadur Sastry Hall</li>
          <li>Madan Mohan Malviya Hall</li>
          <li>Megnad Saha Hall</li>
          <li>Mother Teresa Hall</li>
          <li>Nehru Hall</li>
          <li>Patel Hall</li>
          <li>Radha Krishnan Hall</li>
          <li>Rajendra Prasad Hall</li>
          <li>Rani Laxmibai Hall</li>
          <li>Sister Nivedita Hall</li>
          <li>Sarojini Naidu / Indira Gandhi Hall</li>
          <li>Vidyasagar Hall</li>
          <li>Zakir Hussain Hall</li>
        </ul>
        <p style={pStyle}>
          Lal Bahadur Shastri and Madan Mohan Malviya Hall of Residences were built in
          2010 and have all the modern facilities in it. Girl's hostels are located near the
          academic center, playground, police station and auditorium. Zakir Hussain Hostel
          provides accommodation for married students.
        </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Hostel Facilities</strong>
        </h3>
        <p style={pStyle}>
          IIT Kharagpur hostels offer various facilities for its residences such as
          uninterrupted Wi-Fi, canteens, stationery shop, juice centers, night canteens, tea
          shops, common room with TV, swimming pool, bank, market, gym facilities, and
          many other facilities. <br />
          Almost every room in each hall of residence is furnished with a bed, table, chair,
          high-speed LAN ports, fans, lights and adequate electricity ports. The quantity of
          the aforementioned things may vary depending upon the occupancy of the room
          whether it’s single room, double sharing or triple occupancy sharing. <br />
          More hostel facilities available at IIT Kharagpur are as follows:
        </p>

        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <tbody>
              {[
                ["Mess food", "Canteen", "Common playgrounds"],
                ["Cafeteria", "Night canteens", "Tea shops"],
                ["Swimming pool", "Bank", "Market"],
                ["Gym", "Water purifiers", "Common library"],
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

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>IIT Kharagpur v/s Other IITs: Hostel Comparison</strong>
        </h3>
        <p style={pStyle}>The hostel comparison of various IITs is as follows: </p>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>College Name</th>
                <th style={thStyle}>Hostel Fee (B.Tech)</th>
                <th style={thStyle}>Number of Hostel Buildings Available</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["IIT Kharagpur", "INR 30,000", "21"],
                ["IIT Bombay", "INR 40,750", "17"],
                ["IIT Delhi", "INR 8,000 – INR 10,500", "18"],
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
        <p style={pStyle}><i><b>Note: </b>The hostel fee mentioned above is collated from unofficial sources. Hence,
          it may vary.</i></p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Sports Facilities</strong>
        </h3>
        <p style={pStyle}>The IIT Kharagpur campus has Jnan Ghosh Stadium and Tata Sports Complex
          for various games like Hockey, Football, Cricket and Athletics. Apart from these,
          the campus also has a fully modernized Aquatic Center for sports like Swimming
          and Water Polo. Also, IIT Kharagpur organizes the General Championship and
          the prestigious Inter-IIT Sports Meet annually and students are encouraged to
          participate in it.</p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Places to visit in & around the campus</strong>
        </h3>
        <p style={pStyle}>There are many places within the IIT Kharagpur campus where students can
          enjoy during their spare time such as Coffee Café Day (CCD), Amul Corner,
          Nescafe Shop and Netaji Auditorium where movies are screened regularly. Also,
          IIT Kharagpur students can visit Digha Beach, Jhargram Palace, Kurumbera Fort
          and can visit to Kolkata which is 120 kilometers from IIT Kharagpur. </p>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Infrastructure/Facilities </strong>
        </h3>
        <ul style={ulStyle}>
          <li style={liStyle}> <b>Library</b> <br />
            Central Library of IIT Kharagpur is one of the largest and finest technical libraries
            in Asia. It has been catering to the needs of the ten thousand students of
            undergraduates, postgraduates, research scholar, seven hundred faculty
            members and more than thousand staff members of the 19 departments, 14
            centers, 12 schools and 11 research facilities of the Institute. Central Library
            provides IP based access to 20,664 full-text e-Journals, and 1, 22,744 full-text e
            books to the users. The Library is having a collection of more than 3.5 Lakh
            documents, subscribing about 100+ print journals, and providing access to over
            26,000+ online full- text journals and several abstracting databases. Besides,
            there are 135,000+ e-books</li>
          <li style={liStyle}> <b>Cafeteria</b> <br />
            Apart from canteens IIT Kharagpur has on campus eateries such as: Subway,
            Café Coffee Day (CCD), Baskin Robbins Ice Cream Parlors, Heritage
            Restaurant, Sahara Restaurant, Dreamland Restaurant, Dulal Nandi (Tikka),
            PAN Loop, Fast Food Corner (PFC), Veggies Restaurant (Pure Veg), Eggies
            (Night Canteen), Billoo’s Restaurant, etc. </li>
          <li style={liStyle}> <b>Sports Complex </b> <br />
            Badminton Court |Basketball Court| Squash Court| Tennis Court| Pool Tables|
            Volleyball Court| Aquatic Center| Weightlifting Facilities </li>
          <li style={liStyle}> <b>Labs</b> <br />
            Civil Engineering Lab |Chemistry Lab| Computer Lab| Electrical Lab| Electronics
            Lab| Mechanical Lab| High voltage Lab| Instrumentation Lab |Machine and Drive
            Lab| Analytical Food Testing Lab </li>
        </ul>

        <h3
          style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
        >
          <strong>Hostel For Male and Female</strong>
        </h3>
        <p style={pStyle}>Fee: ₹24,180 <br />
          <ul style={ulStyle}>
            <li style={liStyle}>Hostel Overhead - Rs. 880</li>
            <li style={liStyle}>Hall Establishment Charges - Rs. 18300</li>
            <li style={liStyle}>Mess Charges - Rs. 14000</li>
            <li style={liStyle}>Hostel Admission Fee – Rs.1000</li>
            <li style={liStyle}>Hostel Caution Deposit – Rs 4000</li>
          </ul></p>
      </section>

      <section id="alumni-network">
        <h2 style={h2Style}>Alumni Network at IIT Kharagpur</h2>
        <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Role</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Sundar Pichai", "CEO of Alphabet Inc. (Google’s Parent Company)"],
                ["Arvind Kejriwal", "7th Chief Minister of Delhi"],
                ["Duvvuri Subbarao", "22nd Governor of Reserve Bank Of India, Civil Servant, Economist"],
                ["Vinod Gupta", "Businessman, Investor, and Philanthropist; Former CEO and Chairman of infoGROUP"],
                ["Jitendra Kumar", "ACTOR (famous for Jeetu Bhaiya of Kota Factory series)"],
                ["Biswa Kalyan Rath", "Indian stand-up comedian, writer and YouTuber"],
                ["Koppillil Radhakrishnan", "Chairman of Space Commission, Secretary of the Department of Space and Chairman of ISRO between November 2009 and December 2014"],
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
    </div>
  );
};

export default Ranking;
