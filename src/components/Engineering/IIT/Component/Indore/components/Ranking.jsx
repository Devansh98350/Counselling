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
            <td style={tdStyle}>QS Asian University Ranking - Southern Asia</td>
            <td style={tdStyle}>2024</td>
            <td style={tdStyle}>26</td>
          </tr>
          <tr>
            <td style={tdStyle}>QS Asian University Ranking</td>
            <td style={tdStyle}>2024</td>
            <td style={tdStyle}>185</td>
          </tr>
          <tr>
            <td style={tdStyle}>QS World University Ranking (Global)</td>
            <td style={tdStyle}>2024</td>
            <td style={tdStyle}>454</td>
          </tr>
          <tr>
            <td style={tdStyle}>NIRF Engineering Ranking</td>
            <td style={tdStyle}>2023</td>
            <td style={tdStyle}>14</td>
          </tr>
          <tr>
            <td style={tdStyle}>NIRF Overall Ranking</td>
            <td style={tdStyle}>2023</td>
            <td style={tdStyle}>28</td>
          </tr>
          <tr>
            <td style={tdStyle}>NIRF Research Ranking</td>
            <td style={tdStyle}>2023</td>
            <td style={tdStyle}>21</td>
          </tr>
          <tr>
            <td style={tdStyle}>QS World University Ranking by Subject (Electrical and Electronics)</td>
            <td style={tdStyle}>2023</td>
            <td style={tdStyle}>401-450</td>
          </tr>
        </tbody>
      </table>
      <p> </p>
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
            <td style={tdStyle}>QS World University Ranking</td>
            <td style={tdStyle}>2023</td>
            <td style={tdStyle}>396</td>
          </tr>
          <tr>
            <td style={tdStyle}>The Asia University Rankings</td>
            <td style={tdStyle}>2022</td>
            <td style={tdStyle}>87</td>
          </tr>
          <tr>
            <td style={tdStyle}>THE World University Rankings</td>
            <td style={tdStyle}>2022</td>
            <td style={tdStyle}>401-500</td>
          </tr>
        </tbody>
      </table>
    </section>

    
<section id="scholarship">
<h2 style={h2Style}>Scholarship</h2>
<p style={pStyle}> The Indian Institute of Technology Indore provides various scholarships across all programmes under multiple categories, such as merit-cum-means, SC/ST category, disabled students' category, etc. Some scholarships are also funded by reputed industry giants. IIT Indore offers a variety of scholarships and financial assistance for its students pursuing various UG and PG courses in the full-time mode. However, the student needs to satisfy the minimum eligibility and merit requirements to avail of the facilities of scholarships at IIT Indore. The table below mentions all IIT Indore scholarships, with downloadable details: </p>
    
<table style={tableStyle}>
  <thead>
    <tr>
      <th style={thStyle}>Scholarship</th>
      <th style={thStyle}>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={tdStyle}>Merit-Cum-Means (MCM) Scholarship</td>
      <td style={tdStyle}>For SC/ST students and economically backward General/OBC students.</td>
    </tr>
    <tr>
      <td style={tdStyle}>Central Sector Scholarship (CSS) Scholarship</td>
      <td style={tdStyle}>National Scholarship Portal offers the scholarships to SC/ST/OBC/PwD & economically backward students .</td>
    </tr>
    <tr>
      <td style={tdStyle}>Foundation for Excellence (FFE) Scholarship</td>
      <td style={tdStyle}>For meritorious and academically excellent students of any category.</td>
    </tr>
    <tr>
      <td style={tdStyle}>National Handicapped Finance and Development Corporation (NHFDC) Scholarship</td>
      <td style={tdStyle}>For students who are physically disabled in any form.</td>
    </tr>
    <tr>
      <td style={tdStyle}>TCS Fellowship Scheme</td>
      <td style={tdStyle}>For PhD scholars in the research field by TCS.</td>
    </tr>
    <tr>
      <td style={tdStyle}>IBM PhD Fellowship Programme</td>
      <td style={tdStyle}>For PhD scholars in the research field by IBM.</td>
    </tr>
  </tbody>
</table>
<div>
<p><strong>Central Sector Scholarship (CSS) Scholarship:</strong></p>
<ul>
  <li>The Central Sector Scholarship Scheme is specifically offered to the financially weak SC/ST category students enrolled in the 1st year of the B.Tech programmes. </li>
  <li>Students whose annual family income is less than INR 4.5 lakhs from all sources are eligible for the Central Sector Scholarship Scheme. </li>
</ul>
<p><strong>Merit-Cum-Means (MCM) Scholarship:</strong></p>
<ul>
  <li>The MCM Scholarship of IIT Indore is most popular among the students of the B.Tech and M.Sc. programmes. </li>
  <li>However, the number of MCM Scholarships is restricted only to 25% of the students admitted.  </li>
  <li>In order to be eligible for the MCM scholarship, the general category students should have an annual family income of INR 5 lakhs and INR 8 lakhs for the students of the OBC category. </li>
  <li>The merits of the entrances and 12th standard are also considered for the selection of the scholarships at IIT Indore. </li>
</ul>


<p><strong>Foundation for Excellence:</strong></p>
<ul>
  <li>The Foundation for Excellence scholarship is given to the students of IIT Indore who excel in academics and have excellent past academic records.</li>
  <li>Students enrolled in the 1st year B.Tech/B.E. or integrated M.Tech programmes are eligible for the Foundation for Excellence Scholarship.</li>
  <li>The basic requirements for the Foundation for Excellence are 70% in the 12th standard along with 152 marks in JEE Advanced.</li>
  <li>Also, the applying student's annual family income should not exceed INR 1.80 lakhs.</li>
</ul>

<p><strong>National Handicapped Finance and Development Corporation (NHFDC) Scholarship:</strong></p>
<ul>
  <li>The NHFDC Scholarship is provided to students who are physically disabled in any form.</li>
  <li>It aims to support differently-abled students in their educational journey.</li>
</ul>

<p><strong>Samsung Star Scholarship:</strong></p>
<ul>
  <li>As per the name, the Samsung Star Scholarship is offered by Samsung India Electronics Private Limited to all the students/ graduates from all the Jawahar Navodaya Vidyalaya.</li>
  <li>However, the Scholarship is only available for the students of B.Tech or dual degree programmes at IIT Indore.</li>
  <li>The merit criterion of the Samsung Star Scholarship is based on the scores of JEE Advanced.</li>
</ul>

<p><strong>Other Scholarships:</strong></p>
<ul>
  <li>Apart from the scholarships offered by the institute, students of IIT Indore can also opt for several other scholarships offered by the Government of India or private sources. The main motive of the scholarships offered by Ministries of Government of India is to uplift socially backward students. The other scholarships include the following:</li>
  <ul>
    <li>DAAD Scholarship</li>
    <li>Commonwealth Scholarship</li>
    <li>NHFDC Scholarship</li>
  </ul>
</ul>
</div>
</section>

<section id="campus">
<h2 style={h2Style}>Campus</h2>
<div>
<p><strong>Medical/Hospital:</strong></p>
<ul>
  <li>IIT Indore has a dedicated health centre that offers daycare, emergency care, outpatient and trauma care services to the college community.</li>
  <li>It provides important medical assistance to students, institute guests, employees and their dependents, etc.</li>
  <li>The health centre has ambulances and a team of nurses and doctors.</li>
</ul>

<p><strong>Library:</strong></p>
<ul>
  <li>The library at IITI has a huge collection of 35,583+ books at present.</li>
  <li>There are over 575 theses and dissertations at the library.</li>
  <li>The IIT Indore library also provides Hindi and English print newspapers to the readers daily.</li>
  <li>Users can access more than 2,540 e-journals, 7,600+ e-books along with 11 bibliographic databases like Math Sci Net, Sci Finder Scholar, etc.</li>
</ul>

<p><strong>I.T Infrastructure:</strong></p>
<ul>
  <li>The college has excellent IT Infrastructure facilities for the students.</li>
</ul>

<p><strong>Cafeteria:</strong></p>
<ul>
  <li>There are seven different eateries at the IIT Indore campus.</li>
  <li>They include cafes, restaurants, and dining facilities offering multiple dishes, drinks, beverages, desserts, and more.</li>
</ul>

<p><strong>Auditorium:</strong></p>
<ul>
  <li>The college has an auditorium facility for events and seminars.</li>
</ul>

<p><strong>Alumni Associations:</strong></p>
<ul>
  <li>IIT Indore currently boasts about 370 registered alumni, including both former undergraduate and graduate students.</li>
  <li>Many alumni are engaged in nation-building by working in Public Sector Units and internationally renowned organizations, while some have taken up entrepreneurial ventures.</li>
</ul>

<p><strong>Wi-Fi:</strong></p>
<ul>
  <li>The college has a Wi-Fi facility for students and staff.</li>
</ul>

<p><strong>Boys Hostel:</strong></p>
<ul>
  <li>IIT Indore provides accommodation to students in five different hostel buildings known as the ‘Hall of Residence’ named after great personalities: C.V. Raman, Vikram Sarabhai, A.P.J Abdul Kalam, Devi Ahilya, and Homi Jahangir Bhabha.</li>
  <li>IIT Indore offers 5 BHK units accommodating five students per bedroom.</li>
  <li>The top 300 IIT-JEE scorers receive a fully-furnished 1 BHK apartment with single occupancy.</li>
</ul>

<p><strong>Girls Hostel:</strong></p>
<ul>
  <li>Accommodation is provided in the same five hostel buildings as for boys.</li>
  <li>The same 5 BHK and 1 BHK single occupancy options apply.</li>
</ul>

<p><strong>Transport Facility:</strong></p>
<ul>
  <li>The IITI campus offers eco-friendly transport services through green vehicles.</li>
  <li>Indian Institute of Technology, Indore provides transportation facilities to its students and faculty members, operating to and from the campus to multiple parts of Indore.</li>
</ul>

<p><strong>Convenience Store:</strong></p>
<ul>
  <li>IIT Indore campus has a store called ‘La Fresco Store’ that provides groceries and stationery to campus residents.</li>
  <li>The store fulfills students' daily needs at affordable prices and operates from 10 a.m. to 6 p.m.</li>
</ul>

<p><strong>Banks/ATMs:</strong></p>
<ul>
  <li>Indian Institute of Technology, Indore provides banking facilities and ATMs for students and faculty members.</li>
  <li>Banking services operate to and from the campus for convenient access.</li>
</ul>
</div>
</section>

<section id="alumni-network">
<h2 style={h2Style}>Alumni</h2> 
<p style = {pStyle}>
IIT Indore currently boasts of about 370 registered alumni, including both former undergraduate and graduate students. A bountiful number of persons among these are successfully engaged in nation-building by advancing services to Public Sector Units and internationally renowned organizations, while some others have taken up entrepreneurial digressions.
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
    <td style={tdStyle}>Indian Institute of Technology Indore</td>
    <td style={tdStyle}>263</td>
  </tr>
  <tr>
    <td style={tdStyle}>E - Cell, IIT Indore</td>
    <td style={tdStyle}>75</td>
  </tr>
  <tr>
    <td style={tdStyle}>CFA Club - IIT Indore</td>
    <td style={tdStyle}>63</td>
  </tr>
  <tr>
    <td style={tdStyle}>Fluxus - Indore</td>
    <td style={tdStyle}>53</td>
  </tr>
  <tr>
    <td style={tdStyle}>The Programming Club, IIT Indore</td>
    <td style={tdStyle}>49</td>
  </tr>
  <tr>
    <td style={tdStyle}>Model United Nations, IIT Indore</td>
    <td style={tdStyle}>47</td>
  </tr>
  <tr>
    <td style={tdStyle}>Cynaptics Club, IIT Indore</td>
    <td style={tdStyle}>44</td>
  </tr>
  <tr>
    <td style={tdStyle}>Students Gymkhana - IIT Indore</td>
    <td style={tdStyle}>42</td>
  </tr>
  <tr>
    <td style={tdStyle}>Amazon</td>
    <td style={tdStyle}>39</td>
  </tr>
  <tr>
    <td style={tdStyle}>Electronics Club IIT Indore</td>
    <td style={tdStyle}>37</td>
  </tr>
  <tr>
    <td style={tdStyle}>Robotics Club, IIT Indore</td>
    <td style={tdStyle}>36</td>
  </tr>
  <tr>
    <td style={tdStyle}>Gaming Club, IIT Indore</td>
    <td style={tdStyle}>35</td>
  </tr>
  <tr>
    <td style={tdStyle}>Science & Technology Council, IIT Indore</td>
    <td style={tdStyle}>32</td>
  </tr>
  <tr>
    <td style={tdStyle}>IVDC Club</td>
    <td style={tdStyle}>30</td>
  </tr>
  <tr>
    <td style={tdStyle}>Training & Placement Cell, IIT Indore</td>
    <td style={tdStyle}>24</td>
  </tr>
</tbody>
</table> 
</section>
</div>
  );
};


export default Ranking;