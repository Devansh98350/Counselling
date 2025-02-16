import React from "react";

const Cutoff = () => {
  const sectionStyle = {
    padding: "20px",
    paddingTop: "0px",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
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

  return (
    <section id="cutoff" style={sectionStyle}>
      <h2 style={h2Style}>Cutoff</h2>
      <p style={pStyle}>
        Integrated B.Tech and B.Arch. courses cutoff in the form of opening
        and closing ranks. In Round 5, the closing ranks varied between
        252 and 10498 wherein B.Tech. in CSE is highly competitive among
        General category students under the AIl Quota. <br /> <br />
        While comparing the IIT Kanpur CSE cutoff 2024 with the last two
        years, we can see that B.Tech. in CSE is fluctuating in its Round 5
        closing ranks. The Round 5 cutoff for the same course was 224 in
        2023 and 236 in 2022 for the General category students for the Ail
        Quota. <br /> <br />
        For the OBC category, IIT Kanpur B.Tech cutoff 2024 ranged
        between 132 and 4766. As for the general category, B.Tech. in CSE
        has the lowest cutoff for OBC category students, making it the most
        competitive course to get into IIT Kanpur - Indian Institute of
        Technology. Candidates can refer to the table below for the
        branch-wise cutoff for 2024, along with a comparison for 2023 and
        2022 for the General AI category students. <br /> <br />
        Among these, the B.Tech. in CSE stands out as the most competitive,
        with a closing rank of 252. The second toughest course to get
        admission in IIT Kanpur is B.Sc. in Mathematics and Scientific
        Computing, which has a Round 5 closing rank of 990 for the General
        category <br /> <br />
        Among OBC candidates, the most competitive course is B.Tech. in
        CSE, with a Round 5 closing rank of 132. The easiest B.Tech
        specialization to secure admission in is B.Sc. in Chemistry, with a
        closing rank of 4766.
      </p>

      <h3 className="th3" style={th3Style} id="gen">
        JEE Advanced Last Round Closing Rank (General-All India)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech in Civil Engineering</td>
              <td style={tdStyle}>6297</td>
              <td style={tdStyle}>6116</td>
              <td style={tdStyle}>5948</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Aerospace Engineering</td>
              <td style={tdStyle}>4683</td>
              <td style={tdStyle}>4027</td>
              <td style={tdStyle}>3638</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Biological Science and
                Bioengineering </td>
              <td style={tdStyle}>7309</td>
              <td style={tdStyle}>8031</td>
              <td style={tdStyle}>6952</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Chemical Engineering</td>
              <td style={tdStyle}>4649</td>
              <td style={tdStyle}>4344</td>
              <td style={tdStyle}>4015</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Computer Science and Engineering
              </td>
              <td style={tdStyle}>237</td>
              <td style={tdStyle}>238</td>
              <td style={tdStyle}>252</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Electrical Engineering</td>
              <td style={tdStyle}>1368</td>
              <td style={tdStyle}>1349</td>
              <td style={tdStyle}>1290</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech. in Materials Science and
                Engineering
              </td>
              <td style={tdStyle}>6535</td>
              <td style={tdStyle}>6939</td>
              <td style={tdStyle}>6008</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Economics
              </td>
              <td style={tdStyle}>3300</td>
              <td style={tdStyle}>3653</td>
              <td style={tdStyle}>3106</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech. in Mechanical Engineering
              </td>
              <td style={tdStyle}>3155</td>
              <td style={tdStyle}>2940</td>
              <td style={tdStyle}>2776</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Chemistry
              </td>
              <td style={tdStyle}>9676</td>
              <td style={tdStyle}>11824</td>
              <td style={tdStyle}>10498</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Mathematics and Scientific
                Computing
              </td>
              <td style={tdStyle}>1143</td>
              <td style={tdStyle}>1060 </td>
              <td style={tdStyle}>990</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Physics
              </td>
              <td style={tdStyle}>6383</td>
              <td style={tdStyle}>6153</td>
              <td style={tdStyle}>5508</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.S. in Earth Science</td>
              <td style={tdStyle}>9614</td>
              <td style={tdStyle}>11426</td>
              <td style={tdStyle}>10058</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.S. in Statistics and Data Science
              </td>
              <td style={tdStyle}>1082</td>
              <td style={tdStyle}>1090</td>
              <td style={tdStyle}>1030</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="obc">
        JEE Advanced Last Round Closing Rank (OBC-All India)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech in Civil Engineering</td>
              <td style={tdStyle}>2582</td>
              <td style={tdStyle}>2862</td>
              <td style={tdStyle}>2764</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Aerospace Engineering</td>
              <td style={tdStyle}>2214</td>
              <td style={tdStyle}>2158</td>
              <td style={tdStyle}>1980</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech. in Biological Science and
                Bioengineering </td>
              <td style={tdStyle}>3262</td>
              <td style={tdStyle}>3608</td>
              <td style={tdStyle}>3476</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Chemical Engineering</td>
              <td style={tdStyle}>2034</td>
              <td style={tdStyle}>2208</td>
              <td style={tdStyle}>2058</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech in Computer Science and Engineering
              </td>
              <td style={tdStyle}>155</td>
              <td style={tdStyle}>146</td>
              <td style={tdStyle}>132</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech in Electrical Engineering</td>
              <td style={tdStyle}>696</td>
              <td style={tdStyle}>788</td>
              <td style={tdStyle}>743</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech. in Materials Science and
                Engineering
              </td>
              <td style={tdStyle}>3003</td>
              <td style={tdStyle}>3292</td>
              <td style={tdStyle}>3126</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Economics
              </td>
              <td style={tdStyle}>1971</td>
              <td style={tdStyle}>1571</td>
              <td style={tdStyle}>2051</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Tech. in Mechanical Engineering
              </td>
              <td style={tdStyle}>1529</td>
              <td style={tdStyle}>1479</td>
              <td style={tdStyle}>1392</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Chemistry
              </td>
              <td style={tdStyle}>4440</td>
              <td style={tdStyle}>5256</td>
              <td style={tdStyle}>4766</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Mathematics and Scientific
                Computing
              </td>
              <td style={tdStyle}>681</td>
              <td style={tdStyle}>684 </td>
              <td style={tdStyle}>673</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.Sc. in Physics
              </td>
              <td style={tdStyle}>3781</td>
              <td style={tdStyle}>3875</td>
              <td style={tdStyle}>3602</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.S. in Earth Science</td>
              <td style={tdStyle}>4513</td>
              <td style={tdStyle}>4846</td>
              <td style={tdStyle}>4562</td>
            </tr>
            <tr>
              <td style={tdStyle}>
                B.S. in Statistics and Data Science
              </td>
              <td style={tdStyle}>833</td>
              <td style={tdStyle}>799</td>
              <td style={tdStyle}>714</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur Cut-Off 2023 (Gender Male)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>2316</td>
              <td style={tdStyle}>4027</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>5576</td>
              <td style={tdStyle}>8031</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>2990</td>
              <td style={tdStyle}>4344</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>4295</td>
              <td style={tdStyle}>6116</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>118</td>
              <td style={tdStyle}>238</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>539</td>
              <td style={tdStyle}>1349</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>4644</td>
              <td style={tdStyle}>6939</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>1769</td>
              <td style={tdStyle}>2940</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Chemistry</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>8784</td>
              <td style={tdStyle}>11824</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Earth Science</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>7875</td>
              <td style={tdStyle}>11426</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Economics</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>2084</td>
              <td style={tdStyle}>3653</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Mathematics and Scientific Computing</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>619</td>
              <td style={tdStyle}>1060</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Physics</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>2789</td>
              <td style={tdStyle}>6153</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Statistics and Data Science</td>
              <td style={tdStyle}>General</td>
              <td style={tdStyle}>736</td>
              <td style={tdStyle}>1090</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>The IIT Kanpur Cutoff will be categorized into opening and closing
        ranks. The IIT Kanpur Cutoff depends on various factors like the
        number of seats in the courses offered by the institute, the number of
        candidates who appeared, and the difficulty level of the entrance
        examination.
        Similarly, for PG admissions, the candidate must meet the IIT
        Kanpur GATE /CEED/CAT/JAM cutoff. Students aspiring to pursue IIT
        Kanpur MBA courses, students must secure a valid CAT Score. The
        details of the IIT Kanpur cutoff are given below. </p>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Kanpur B.Tech Cutoff 2024</strong>
      </h3>
      <p>JoSAA released the IIT Kanpur Cutoff 2024round 5 for all categories.
        IIT Kanpur cutoff 2024 ranges from 120 to 6791.
        The following table shows the IIT Kanpur Cutoff 2024 in the form of
        opening and closing ranks. </p>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur JEE Advanced Cutoff 2024 (General Category-Round 5)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>2713</td>
              <td style={tdStyle}>3638</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>5259</td>
              <td style={tdStyle}>6952</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>2227</td>
              <td style={tdStyle}>4015</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>4213</td>
              <td style={tdStyle}>5948</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>120</td>
              <td style={tdStyle}>252</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>743</td>
              <td style={tdStyle}>1290</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>4831</td>
              <td style={tdStyle}>6008</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mathematics and Scientific Computing</td>
              <td style={tdStyle}>756</td>
              <td style={tdStyle}>990</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>1889</td>
              <td style={tdStyle}>2776</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur JEE Advanced Cutoff 2024 (General Category-Round 4)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>2713</td>
              <td style={tdStyle}>3582</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>5259</td>
              <td style={tdStyle}>6791</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>2227</td>
              <td style={tdStyle}>3911</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>4213</td>
              <td style={tdStyle}>5702</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>120</td>
              <td style={tdStyle}>250</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>743</td>
              <td style={tdStyle}>1284</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>4748</td>
              <td style={tdStyle}>5826</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mathematics and Scientific Computing</td>
              <td style={tdStyle}>575</td>
              <td style={tdStyle}>989</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>1889</td>
              <td style={tdStyle}>2740</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}><strong>Note: </strong>Round 2 and Round 4 cutoffs are same as the IIT Kanpur seats
        are filled in round 2.</p>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur JEE Advanced Cutoff 2024 (General Category-Round 3)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>2713</td>
              <td style={tdStyle}>3582</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>5259</td>
              <td style={tdStyle}>6791</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>2227</td>
              <td style={tdStyle}>3911</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>4213</td>
              <td style={tdStyle}>5702</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>120</td>
              <td style={tdStyle}>250</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>743</td>
              <td style={tdStyle}>1284</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>4748</td>
              <td style={tdStyle}>5826</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mathematics and Scientific Computing</td>
              <td style={tdStyle}>575</td>
              <td style={tdStyle}>989</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>1889</td>
              <td style={tdStyle}>2740</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}><strong>Note: </strong> Round 2 and Round 3 cutoffs are same as the IIT Kanpur seats
        are filled in round 2. </p>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur JEE Advanced Cutoff 2024 (General Category-Round 2)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>2713</td>
              <td style={tdStyle}>3582</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>5259</td>
              <td style={tdStyle}>6791</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>2227</td>
              <td style={tdStyle}>3911</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>4213</td>
              <td style={tdStyle}>5702</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>120</td>
              <td style={tdStyle}>250</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>743</td>
              <td style={tdStyle}>1284</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>4748</td>
              <td style={tdStyle}>5826</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mathematics and Scientific Computing</td>
              <td style={tdStyle}>575</td>
              <td style={tdStyle}>989</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>1889</td>
              <td style={tdStyle}>2740</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur Cutoff 2024 (General Category-Round 1)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>2713</td>
              <td style={tdStyle}>3495</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>5259</td>
              <td style={tdStyle}>6791</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>2227</td>
              <td style={tdStyle}>3903</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemistry</td>
              <td style={tdStyle}>7317</td>
              <td style={tdStyle}>10037</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>4158</td>
              <td style={tdStyle}>5676</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>120</td>
              <td style={tdStyle}>248</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>743</td>
              <td style={tdStyle}>1257</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>3998</td>
              <td style={tdStyle}>5791</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>1889</td>
              <td style={tdStyle}>2736</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style} id="obc">
        IIT Kanpur JEE Advanced Cutoff for General Category (Male Gender)
      </h3>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Aerospace Engineering</td>
              <td style={tdStyle}>3754</td>
              <td style={tdStyle}>4247</td>
              <td style={tdStyle}>3578</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Biological Sciences and Bioengineering</td>
              <td style={tdStyle}>7520</td>
              <td style={tdStyle}>6568</td>
              <td style={tdStyle}>6596</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Chemical Engineering</td>
              <td style={tdStyle}>4097</td>
              <td style={tdStyle}>4413</td>
              <td style={tdStyle}>3767</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Chemistry</td>
              <td style={tdStyle}>10942</td>
              <td style={tdStyle}>8614</td>
              <td style={tdStyle}>8669</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Civil Engineering</td>
              <td style={tdStyle}>5933</td>
              <td style={tdStyle}>5796</td>
              <td style={tdStyle}>5093</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science and Engineering</td>
              <td style={tdStyle}>215</td>
              <td style={tdStyle}>236</td>
              <td style={tdStyle}>213</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Earth Science</td>
              <td style={tdStyle}>10106</td>
              <td style={tdStyle}>9286</td>
              <td style={tdStyle}>9197</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Economics</td>
              <td style={tdStyle}>3242</td>
              <td style={tdStyle}>3300</td>
              <td style={tdStyle}>2724</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>1305</td>
              <td style={tdStyle}>1360</td>
              <td style={tdStyle}>1256</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Materials Science and Engineering</td>
              <td style={tdStyle}>6405</td>
              <td style={tdStyle}>6206</td>
              <td style={tdStyle}>5690</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Mathematics and Scientific Computing</td>
              <td style={tdStyle}>987</td>
              <td style={tdStyle}>1143</td>
              <td style={tdStyle}>1016</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>2844</td>
              <td style={tdStyle}>2962</td>
              <td style={tdStyle}>2674</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Physics</td>
              <td style={tdStyle}>5572</td>
              <td style={tdStyle}>5173</td>
              <td style={tdStyle}>4122</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Statistics and Data Science</td>
              <td style={tdStyle}>1090</td>
              <td style={tdStyle}>1082</td>
              <td style={tdStyle}>1257</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        style={{ marginTop: "10px", fontSize: "20px", marginBottom: "10px" }}
      >
        <strong>IIT Kanpur, JEE Advanced Cutoff 2024 </strong>
      </h3>

      <p style={pStyle}>IIT Kanpur, JEE Advanced Cutoff 2024 for General Category is listed
        below. The overall cutoff rank for JEE Advanced is 248 - 10037 </p>

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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#dfe9ff", color: "black" }}>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
              <th style={thStyle}>Round 3</th>
              <th style={thStyle}>Round 4</th>
              <th style={thStyle}>Round 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>B.Tech Computer Science Engineering</td>
              <td style={tdStyle}>248</td>
              <td style={tdStyle}>250</td>
              <td style={tdStyle}>250</td>
              <td style={tdStyle}>250</td>
              <td style={tdStyle}>252</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Mathematics and Scientific Computing</td>
              <td style={tdStyle}>926</td>
              <td style={tdStyle}>989</td>
              <td style={tdStyle}>989</td>
              <td style={tdStyle}>989</td>
              <td style={tdStyle}>990</td>
            </tr>
            <tr>
              <td style={tdStyle}>BS Statistics and Data Science</td>
              <td style={tdStyle}>990</td>
              <td style={tdStyle}>1023</td>
              <td style={tdStyle}>1023</td>
              <td style={tdStyle}>1023</td>
              <td style={tdStyle}>1030</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Electrical Engineering</td>
              <td style={tdStyle}>1257</td>
              <td style={tdStyle}>1284</td>
              <td style={tdStyle}>1284</td>
              <td style={tdStyle}>1284</td>
              <td style={tdStyle}>1290</td>
            </tr>
            <tr>
              <td style={tdStyle}>B.Tech Mechanical Engineering</td>
              <td style={tdStyle}>2736</td>
              <td style={tdStyle}>2740</td>
              <td style={tdStyle}>2740</td>
              <td style={tdStyle}>2740</td>
              <td style={tdStyle}>2776</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={pStyle}>IIT Kanpur, GATE Cutoff 2024 for General Category is listed below.
        The overall cutoff marks for GATE is 600 - 935 </p>

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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#6d4c9a", color: "white" }}>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
              <th style={thStyle}>Round 3</th>
              <th style={thStyle}>Round 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>M.Tech Microelectronics and VLSI Design</td>
              <td style={tdStyle}>935</td>
              <td style={tdStyle}>934</td>
              <td style={tdStyle}>930</td>
              <td style={tdStyle}>930</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech Control & Automation</td>
              <td style={tdStyle}>801</td>
              <td style={tdStyle}>742</td>
              <td style={tdStyle}>710</td>
              <td style={tdStyle}>705</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech Communication and Signal Processing</td>
              <td style={tdStyle}>787</td>
              <td style={tdStyle}>733</td>
              <td style={tdStyle}>707</td>
              <td style={tdStyle}>691</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech RF and Microwave Engineering</td>
              <td style={tdStyle}>767</td>
              <td style={tdStyle}>722</td>
              <td style={tdStyle}>702</td>
              <td style={tdStyle}>682</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Tech Photonics</td>
              <td style={tdStyle}>757</td>
              <td style={tdStyle}>707</td>
              <td style={tdStyle}>691</td>
              <td style={tdStyle}>673</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Kanpur, IIT JAM Cutoff 2024 for EWS Category is listed below. The
        overall cutoff rank for IIT JAM is 100 - 397</p>

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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#96b345", color: "white" }}>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
              <th style={thStyle}>Round 3</th>
              <th style={thStyle}>Round 4</th>
              <th style={thStyle}>Round 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>M.Sc. Statistics</td>
              <td style={tdStyle}>100</td>
              <td style={tdStyle}>103</td>
              <td style={tdStyle}>103</td>
              <td style={tdStyle}>103</td>
              <td style={tdStyle}>103</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. Physics</td>
              <td style={tdStyle}>146</td>
              <td style={tdStyle}>205</td>
              <td style={tdStyle}>280</td>
              <td style={tdStyle}>295</td>
              <td style={tdStyle}>330</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. Chemistry</td>
              <td style={tdStyle}>220</td>
              <td style={tdStyle}>251</td>
              <td style={tdStyle}>251</td>
              <td style={tdStyle}>251</td>
              <td style={tdStyle}>251</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. + Ph.D. Physics</td>
              <td style={tdStyle}>337</td>
              <td style={tdStyle}>355</td>
              <td style={tdStyle}>361</td>
              <td style={tdStyle}>367</td>
              <td style={tdStyle}>399</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. Mathematics</td>
              <td style={tdStyle}>397</td>
              <td style={tdStyle}>397</td>
              <td style={tdStyle}>397</td>
              <td style={tdStyle}>397</td>
              <td style={tdStyle}>397</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Kanpur, CCMN Cutoff 2024 for EWS Category is listed below. The
        overall cutoff rank for CCMN is 103 - 397 </p>

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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#b34040", color: "white" }}>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Round 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>M.Sc. Statistics</td>
              <td style={tdStyle}>103</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. Chemistry</td>
              <td style={tdStyle}>251</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. Physics</td>
              <td style={tdStyle}>280</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. + Ph.D. Physics</td>
              <td style={tdStyle}>361</td>
            </tr>
            <tr>
              <td style={tdStyle}>M.Sc. Mathematics</td>
              <td style={tdStyle}>397</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Kanpur, CAT Cutoff 2024 for General Category is listed below. The
        overall cutoff percentile for CAT is 50
      </p>
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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#b34040", color: "white" }}>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Round 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>MBA</td>
              <td style={tdStyle}>50</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={pStyle}>IIT Kanpur, CEED Cutoff 2024 for EWS Category is listed below. The
        overall cutoff marks for CEED is 41. </p>

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
        <table className="table-container" style={tableStyle}>
          <thead>
            <tr style={{ backgroundColor: "#b34040", color: "white" }}>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Round 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>M.Des</td>
              <td style={tdStyle}>41</td>
            </tr>
          </tbody>
        </table>
      </div>

    </section>
  );
};

export default Cutoff;
