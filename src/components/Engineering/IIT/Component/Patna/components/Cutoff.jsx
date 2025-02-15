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
        Indian Institute of Technology (IIT), Patna releases the cutoff for
        B.Tech admission. IIT Patna B.Tech cutoff is based on candidate rank in
        JEE Advanced 2024. Candidates are required to secure the IIT Patna
        cutoff marks to be eligible for admission at the institute. IIT Patna
        JEE Advanced cutoff is released in the form of opening all India rank
        and closing all India rank.
      </p>
      <p style={pStyle}>
        The factors that determine the IIT Patna JEE-Advanced cutoff 2024 are
        the number of applicants, the number of candidates who appeared in the
        exam, the difficulty level of JEE Advanced, the total number of seats
        available, previous year’s cutoff trends of IIT Patna and the category
        of candidates. Mentioned below is the IIT Patna cutoff 2024 released by
        the counselling authorities.
      </p>

      <h3 className="th3" id="gen" style={th3Style}>
        IIT Patna B.Tech Cutoff 2024 (General Category-Round 5)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Artificial Intelligence and Data Science",
                opening: "3557",
                closing: "4346",
              },
              {
                course:
                  "B. Tech in CE. - M. Tech. in Geotechnical Engineering (Dual Degree)",
                opening: "14906",
                closing: "15274",
              },
              {
                course:
                  "B. Tech in CE. - M. Tech. in Structural Engineering (Dual Degree)",
                opening: "13323",
                closing: "14055",
              },
              {
                course: "B. Tech. (CSE) and M.Tech in CSE (Dual Degree)",
                opening: "18498",
                closing: "18498",
              },
              {
                course: "B. Tech. (ECE) -M. Tech. in VLSI (Dual Degree)",
                opening: "6068",
                closing: "6253",
              },
              {
                course:
                  "B. Tech. (EEE)-M. Tech. in (Power & Control) (Dual Degree)",
                opening: "7254",
                closing: "7605",
              },
              {
                course:
                  "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (Dual Degree)",
                opening: "5147",
                closing: "5683",
              },
              {
                course:
                  "B. Tech. (ME) - M. Tech. in Mechatronics (Dual Degree)",
                opening: "8327",
                closing: "9835",
              },
              {
                course:
                  "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: "4371",
                closing: "4864",
              },
              {
                course:
                  "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: "12577",
                closing: "13111",
              },
              {
                course:
                  "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: "12162",
                closing: "14176",
              },
              {
                course:
                  "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: "14220",
                closing: "15129",
              },
              {
                course:
                  "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: "3427",
                closing: "3427",
              },
              {
                course:
                  "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: "5875",
                closing: "7575",
              },
              {
                course:
                  "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (Dual Degree)",
                opening: "6895",
                closing: "7070",
              },
              {
                course:
                  "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: "10491",
                closing: "12375",
              },
              {
                course:
                  "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: "4990",
                closing: "5445",
              },
              {
                course:
                  "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (Dual Degree)",
                opening: "7840",
                closing: "9445",
              },
              {
                course:
                  "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: "15433",
                closing: "15438",
              },
              {
                course:
                  "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (Dual Degree)",
                opening: "6287",
                closing: "6660",
              },
              {
                course: "B.Tech Chemical Engineering",
                opening: "10776",
                closing: "12519",
              },
              {
                course:
                  "B.Tech Chemical Science and Technology (4 Years, Bachelor of Technology)",
                opening: "11793",
                closing: "14062",
              },
              {
                course: "B.Tech Civil Engineering",
                opening: "12287",
                closing: "14579",
              },
              {
                course: "B.Tech Computer Science and Engineering",
                opening: "1760",
                closing: "3144",
              },
              {
                course: "B.Tech Electrical and Electronics Engineering",
                opening: "5868",
                closing: "6873",
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                opening: "4119",
                closing: "5732",
              },
              {
                course: "B.Tech Engineering Physics",
                opening: "10781",
                closing: "12031",
              },
              {
                course: "B.Tech Mathematics and Computing",
                opening: "3252",
                closing: "4952",
              },
              {
                course: "B.Tech Mechanical Engineering",
                opening: "7745",
                closing: "10647",
              },
              {
                course: "B.Tech Metallurgical and Materials Engineering",
                opening: "11553",
                closing: "15323",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        IIT Patna B.Tech Cutoff 2024 (General Category-Round 4)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Artificial Intelligence and Data Science",
                opening: 2764,
                closing: 4034,
              },
              {
                course:
                  "B. Tech in CE. - M. Tech. in Geotechnical Engineering (Dual Degree)",
                opening: 14055,
                closing: 14566,
              },
              {
                course:
                  "B. Tech in CE. - M. Tech. in Structural Engineering (Dual Degree)",
                opening: 3704,
                closing: 13789,
              },
              {
                course: "B. Tech. (CSE) and M.Tech in CSE (Dual Degree)",
                opening: 3466,
                closing: 4135,
              },
              {
                course: "B. Tech. (ECE) -M. Tech. in VLSI (Dual Degree)",
                opening: 5683,
                closing: 6068,
              },
              {
                course:
                  "B. Tech. (EEE)-M. Tech. in (Power & Control) (Dual Degree)",
                opening: 6909,
                closing: 6935,
              },
              {
                course:
                  "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (Dual Degree)",
                opening: 4663,
                closing: 4864,
              },
              {
                course:
                  "B. Tech. (ME) - M. Tech. in Mechatronics (Dual Degree)",
                opening: 6828,
                closing: 8327,
              },
              {
                course:
                  "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 3950,
                closing: 4371,
              },
              {
                course:
                  "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 12561,
                closing: 12577,
              },
              {
                course:
                  "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 12162,
                closing: 14176,
              },
              {
                course:
                  "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 12017,
                closing: 13726,
              },
              {
                course:
                  "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 3427,
                closing: 3427,
              },
              {
                course:
                  "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 5445,
                closing: 5875,
              },
              {
                course:
                  "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 5982,
                closing: 6895,
              },
              {
                course:
                  "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 10343,
                closing: 10491,
              },
              {
                course:
                  "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 4633,
                closing: 4990,
              },
              {
                course:
                  "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (Dual Degree)",
                opening: 7699,
                closing: 8197,
              },
              {
                course:
                  "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 12121,
                closing: 14530,
              },
              {
                course:
                  "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (Dual Degree)",
                opening: 6096,
                closing: 6188,
              },
              {
                course: "B.Tech Chemical Engineering",
                opening: 9046,
                closing: 11588,
              },
              {
                course:
                  "B.Tech Chemical Science and Technology (4 Years, Bachelor of Technology)",
                opening: 11793,
                closing: 13172,
              },
              {
                course: "B.Tech Civil Engineering",
                opening: 9910,
                closing: 13404,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                opening: 1760,
                closing: 3074,
              },
              {
                course: "B.Tech Electrical and Electronics Engineering",
                opening: 5303,
                closing: 6191,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                opening: 4119,
                closing: 5196,
              },
              {
                course: "B.Tech Engineering Physics",
                opening: 10080,
                closing: 11144,
              },
              {
                course: "B.Tech Mathematics and Computing",
                opening: 3252,
                closing: 4575,
              },
              {
                course: "B.Tech Mechanical Engineering",
                opening: 7745,
                closing: 10000,
              },
              {
                course: "B.Tech Metallurgical and Materials Engineering",
                opening: 11553,
                closing: 14020,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        IIT Patna B.Tech Cutoff 2024 (General Category-Round 3)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Artificial Intelligence and Data Science",
                opening: 2764,
                closing: 4013,
              },
              {
                course:
                  "B.Tech in CE - M.Tech in Geotechnical Engineering (Dual Degree)",
                opening: 14055,
                closing: 14566,
              },
              {
                course:
                  "B.Tech in CE - M.Tech in Structural Engineering (Dual Degree)",
                opening: 3704,
                closing: 13789,
              },
              {
                course: "B.Tech (CSE) and M.Tech in CSE (Dual Degree)",
                opening: 3466,
                closing: 4067,
              },
              {
                course: "B.Tech (ECE) - M.Tech in VLSI (Dual Degree)",
                opening: 5683,
                closing: 6068,
              },
              {
                course:
                  "B.Tech (EEE) - M.Tech in Power & Control (Dual Degree)",
                opening: 6909,
                closing: 6935,
              },
              {
                course:
                  "B.Tech (Mathematics & Computing) - M.Tech in Mathematics & Computing (Dual Degree)",
                opening: 4663,
                closing: 4864,
              },
              {
                course: "B.Tech (ME) - M.Tech in Mechatronics (Dual Degree)",
                opening: 6828,
                closing: 8327,
              },
              {
                course:
                  "B.Tech (AI & Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 3950,
                closing: 4371,
              },
              {
                course:
                  "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 12561,
                closing: 12577,
              },
              {
                course:
                  "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 12162,
                closing: 14176,
              },
              {
                course:
                  "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 12017,
                closing: 13726,
              },
              {
                course:
                  "B.Tech (CSE) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 3427,
                closing: 3427,
              },
              {
                course: "B.Tech (EEE) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 5445,
                closing: 5875,
              },
              {
                course:
                  "B.Tech (ECE) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 5982,
                closing: 6895,
              },
              {
                course:
                  "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 10343,
                closing: 10463,
              },
              {
                course:
                  "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 4633,
                closing: 4990,
              },
              {
                course:
                  "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (Dual Degree)",
                opening: 7699,
                closing: 8197,
              },
              {
                course:
                  "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 12121,
                closing: 14189,
              },
              {
                course:
                  "B.Tech (ECE) and M.Tech in Communication Systems (Dual Degree)",
                opening: 6096,
                closing: 6188,
              },
              {
                course: "B.Tech Chemical Engineering",
                opening: 9046,
                closing: 11588,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                opening: 10427,
                closing: 13061,
              },
              {
                course: "B.Tech Civil Engineering",
                opening: 9910,
                closing: 13379,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                opening: 1760,
                closing: 3074,
              },
              {
                course: "B.Tech Electrical and Electronics Engineering",
                opening: 5303,
                closing: 6191,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                opening: 4119,
                closing: 5196,
              },
              {
                course: "B.Tech Engineering Physics",
                opening: 10000,
                closing: 11041,
              },
              {
                course: "B.Tech Mathematics and Computing",
                opening: 3252,
                closing: 4575,
              },
              {
                course: "B.Tech Mechanical Engineering",
                opening: 7745,
                closing: 9975,
              },
              {
                course: "B.Tech Metallurgical and Materials Engineering",
                opening: 11553,
                closing: 14020,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        ** Some of the course cutoff of Round 3 and Round 2 are same as IIT
        Patna seats may be filled in round 2.
      </p>
      <h3 className="th3" style={th3Style}>
        IIT Patna B.Tech Cutoff 2024 (General Category-Round 2)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Artificial Intelligence and Data Science",
                opening: 2764,
                closing: 4013,
              },
              {
                course:
                  "B. Tech in CE. - M. Tech. in Geotechnical Engineering (Dual Degree)",
                opening: 14055,
                closing: 14532,
              },
              {
                course:
                  "B. Tech in CE. - M. Tech. in Structural Engineering (Dual Degree)",
                opening: 3704,
                closing: 13789,
              },
              {
                course: "B. Tech. (CSE) and M.Tech in CSE (Dual Degree)",
                opening: 3466,
                closing: 4067,
              },
              {
                course: "B. Tech. (ECE) -M. Tech. in VLSI (Dual Degree)",
                opening: 5683,
                closing: 6068,
              },
              {
                course:
                  "B. Tech. (EEE)-M. Tech. in (Power & Control) (Dual Degree)",
                opening: 6909,
                closing: 6935,
              },
              {
                course:
                  "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (Dual Degree)",
                opening: 4663,
                closing: 4864,
              },
              {
                course:
                  "B. Tech. (ME) - M. Tech. in Mechatronics (Dual Degree)",
                opening: 6828,
                closing: 8327,
              },
              {
                course:
                  "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 3950,
                closing: 4371,
              },
              {
                course:
                  "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 12561,
                closing: 12577,
              },
              {
                course:
                  "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 12162,
                closing: 14176,
              },
              {
                course:
                  "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 12017,
                closing: 13726,
              },
              {
                course:
                  "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 3427,
                closing: 3427,
              },
              {
                course:
                  "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 5445,
                closing: 5875,
              },
              {
                course:
                  "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 5982,
                closing: 6895,
              },
              {
                course:
                  "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 10343,
                closing: 10463,
              },
              {
                course:
                  "B.Tech (Mathematics and Computing) - MBA in Digital Business Management (IIM Bodh Gaya) (Dual Degree)",
                opening: 4633,
                closing: 4990,
              },
              {
                course:
                  "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (Dual Degree)",
                opening: 7699,
                closing: 8197,
              },
              {
                course:
                  "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (Dual Degree)",
                opening: 12121,
                closing: 14189,
              },
              {
                course:
                  "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (Dual Degree)",
                opening: 6096,
                closing: 6188,
              },
              {
                course: "B.Tech Chemical Engineering",
                opening: 9046,
                closing: 11588,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                opening: 10427,
                closing: 13061,
              },
              {
                course: "B.Tech Civil Engineering",
                opening: 9910,
                closing: 13379,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                opening: 1760,
                closing: 3074,
              },
              {
                course: "B.Tech Electrical and Electronics Engineering",
                opening: 5303,
                closing: 6191,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                opening: 4119,
                closing: 5196,
              },
              {
                course: "B.Tech Engineering Physics",
                opening: 10000,
                closing: 11041,
              },
              {
                course: "B.Tech Mathematics and Computing",
                opening: 3252,
                closing: 4575,
              },
              {
                course: "B.Tech Mechanical Engineering",
                opening: 7745,
                closing: 9975,
              },
              {
                course: "B.Tech Metallurgical and Materials Engineering",
                opening: 11553,
                closing: 14020,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        IIT Patna B.Tech Cutoff 2024 (General Category-Round 1)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>Opening All India Rank</th>
              <th style={thStyle}>Closing All India Rank</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Artificial Intelligence and Data Science",
                opening: "2764",
                closing: "3870",
              },
              {
                course:
                  "B.Tech in CE. - M. Tech. in Geotechnical Engineering (Dual Degree)",
                opening: "13789",
                closing: "14298",
              },
              {
                course: "B. Tech in CE. - M. Tech. in Structural Engineering",
                opening: "3704",
                closing: "13594",
              },
              {
                course:
                  "B. Tech. (CSE) and M.Tech in CSE (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
                opening: "3466",
                closing: "3926",
              },
              {
                course:
                  "B. Tech. (ECE) -M. Tech. in VLSI (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
                opening: "5683",
                closing: "6068",
              },
              {
                course:
                  "B. Tech. (EEE)-M. Tech. in (Power & Control) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
                opening: "6751",
                closing: "6924",
              },
              {
                course:
                  "B. Tech. (Mathematics & Computing) M. Tech. in (Mathematics & Computing) (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
                opening: "4094",
                closing: "4530",
              },
              {
                course:
                  "B. Tech. (ME) - M. Tech. in Mechatronics (5 Years, B.Tech. + M.Tech./MS (Dual Degree))",
                opening: "6828",
                closing: "8327",
              },
              {
                course:
                  "B.Tech (Artificial Intelligence and Data Science) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "3950",
                closing: "4371",
              },
              {
                course:
                  "B.Tech (Chemical Engineering) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "12441",
                closing: "12561",
              },
              {
                course:
                  "B.Tech (Chemical Science and Technology) - MBA in Hospital and Health Care Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "11696",
                closing: "12162",
              },
              {
                course:
                  "B.Tech (Civil Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "12017",
                closing: "13562",
              },
              {
                course:
                  "B.Tech (Computer Science and Engineering) - MBA in Digital Business Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "3427",
                closing: "3427",
              },
              {
                course:
                  "B.Tech (Electrical and Electronics Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "5445",
                closing: "5875",
              },
              {
                course:
                  "B.Tech (Electronics and Communication Engineering) - MBA in Hospital and Healthcare Management (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "5982",
                closing: "6895",
              },
              {
                course:
                  "B.Tech (Engineering Physics) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "10343",
                closing: "10463",
              },
              {
                course:
                  "B.Tech (Mechanical Engineering) - MBA (IIM Mumbai) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "6351",
                closing: "7840",
              },
              {
                course:
                  "B.Tech (Metallurgical and Materials Engineering) - MBA (IIM Bodh Gaya) (5 Years, Bachelor of Technology and MBA (Dual Degree))",
                opening: "12121",
                closing: "14189",
              },
              {
                course:
                  "B.Tech. in Electronics and Communication Engineering and M.Tech. in Communication Systems (5 Years, Bachelor and Master of Technology (Dual Degree))",
                opening: "6096",
                closing: "6188",
              },
              {
                course: "B.Tech Chemical Engineering",
                opening: "9046",
                closing: "11588",
              },
              {
                course: "B.Tech Chemical Science and Technology",
                opening: "10427",
                closing: "13049",
              },
              {
                course: "B.Tech Civil Engineering",
                opening: "9687",
                closing: "13149",
              },
              {
                course: "B.Tech Computer Science and Engineering",
                opening: "1760",
                closing: "2985",
              },
              {
                course: "B.Tech Electrical and Electronics Engineering",
                opening: "5303",
                closing: "6160",
              },
              {
                course:
                  "B.Tech Electronics and Communication Engineering (4 Years, Bachelor of Technology)",
                opening: "4429",
                closing: "5196",
              },
              {
                course: "B.Tech Engineering Physics",
                opening: "9961",
                closing: "10959",
              },
              {
                course: "B.Tech Mathematics and Computing",
                opening: "3252",
                closing: "4508",
              },
              {
                course: "B.Tech Mechanical Engineering",
                opening: "7745",
                closing: "9876",
              },
              {
                course: "B.Tech Metallurgical and Materials Engineering",
                opening: "11553",
                closing: "13748",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.opening}</td>
                <td style={tdStyle}>{row.closing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        IIT Patna B.Tech Cutoff (General Male - Closing Ranks)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech Artificial Intelligence and Data Science",
                y2023: 3313,
                y2022: 3488,
                y2021: 3623,
              },
              {
                course:
                  "B.Tech and M.Tech in Geotechnical Engineering Dual Degree",
                y2023: 14196,
                y2022: "-",
                y2021: "-",
              },
              {
                course:
                  "B.Tech and M.Tech in Structural Engineering Dual Degree",
                y2023: 13135,
                y2022: "-",
                y2021: "-",
              },
              {
                course:
                  "B.Tech and M.Tech in Computer Science and Engineering Dual Degree",
                y2023: 3322,
                y2022: "-",
                y2021: "-",
              },
              {
                course:
                  "B.Tech Electronics and Communication Engineering and M.Tech VLSI Dual Degree",
                y2023: 6431,
                y2022: "-",
                y2021: "-",
              },
              {
                course:
                  "B.Tech Electrical and Electronics Engineering and M.Tech Power and Control Dual Degree",
                y2023: 7077,
                y2022: "-",
                y2021: "-",
              },
              {
                course:
                  "B.Tech and M.Tech Mathematics and Computing Dual Degree",
                y2023: 4932,
                y2022: "-",
                y2021: "-",
              },
              {
                course: "B.Tech and M.Tech in Mechatronics Dual Degree",
                y2023: 9627,
                y2022: "-",
                y2021: "-",
              },
              {
                course: "B.Tech Mechanical Engineering and MBA Dual Degree",
                y2023: 10326,
                y2022: "-",
                y2021: "-",
              },
              {
                course:
                  "B.Tech and M.Tech in Communication Systems Dual Degree",
                y2023: 5839,
                y2022: "-",
                y2021: "-",
              },
              {
                course: "B.Tech Chemical Engineering",
                y2023: 11674,
                y2022: 11306,
                y2021: 10634,
              },
              {
                course: "B.Tech Chemical Science and Technology",
                y2023: 13601,
                y2022: "-",
                y2021: "-",
              },
              {
                course: "B.Tech Civil Engineering",
                y2023: 13078,
                y2022: 12097,
                y2021: 11011,
              },
              {
                course: "B.Tech Computer Science and Engineering",
                y2023: 2612,
                y2022: 2500,
                y2021: 2633,
              },
              {
                course: "B.Tech Electrical and Electronics Engineering",
                y2023: 6440,
                y2022: 6282,
                y2021: 5776,
              },
              {
                course: "B.Tech Electronics and Communication Engineering",
                y2023: 5319,
                y2022: "-",
                y2021: "-",
              },
              {
                course: "B.Tech Engineering Physics",
                y2023: 11289,
                y2022: 11037,
                y2021: 9107,
              },
              {
                course: "B.Tech Mathematics and Computing",
                y2023: 4534,
                y2022: "-",
                y2021: "-",
              },
              {
                course: "B.Tech Mechanical Engineering",
                y2023: 10086,
                y2022: 9208,
                y2021: 8440,
              },
              {
                course: "B.Tech Metallurgical and Materials Engineering",
                y2023: 14246,
                y2022: 13141,
                y2021: 11963,
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.y2023}</td>
                <td style={tdStyle}>{row.y2022}</td>
                <td style={tdStyle}>{row.y2021}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>R1 (Closing Rank)</th>
              <th style={thStyle}>Last Round (Closing Rank)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech. in Artificial Intelligence and Data Science",
                r1: "3870",
                lastRound: "4346",
              },
              {
                course:
                  "Integrated B.Tech. in Civil Engineering + M.Tech. in Geotechnical Engineering",
                r1: "14298",
                lastRound: "15274",
              },
              {
                course:
                  "Integrated B.Tech. in Civil Engineering + M.Tech. in Structural Engineering",
                r1: "13594",
                lastRound: "14055",
              },
              {
                course:
                  "Integrated B.Tech. + M.Tech. in Computer Science and Engineering",
                r1: "3926",
                lastRound: "4429",
              },
              {
                course:
                  "Integrated B.Tech. in Electronics and Communication Engineering + M.Tech. in VLSI",
                r1: "6068",
                lastRound: "6253",
              },
              {
                course:
                  "Integrated B.Tech. in EEE + M.Tech. in Power and Control",
                r1: "6924",
                lastRound: "7605",
              },
              {
                course:
                  "Integrated B.Tech. + M.Tech. in Mathematics and Computing",
                r1: "4530",
                lastRound: "5683",
              },
              {
                course: "Integrated B.Tech. in ME + M.Tech. in Mechatronics",
                r1: "8327",
                lastRound: "9835",
              },
              {
                course: "B.Tech. in Civil Engineering + MBA (IIM Bodh Gaya)",
                r1: "13562",
                lastRound: "15129",
              },
              {
                course:
                  "B.Tech. in Computer Science and Engineering + MBA in Digital Business Management (IIM Bodh Gaya)",
                r1: "3427",
                lastRound: "3427",
              },
              {
                course:
                  "B.Tech. in Electrical and Electronics Engineering + MBA (IIM Bodh Gaya)",
                r1: "5875",
                lastRound: "7575",
              },
              {
                course: "B.Tech. in Engineering Physics + MBA (IIM Bodh Gaya)",
                r1: "10463",
                lastRound: "12375",
              },
              {
                course: "B.Tech. in Mechanical Engineering + MBA (IIM Mumbai)",
                r1: "7840",
                lastRound: "9445",
              },
              {
                course:
                  "B.Tech. in Metallurgical and Materials Engineering + MBA (IIM Bodh Gaya)",
                r1: "14189",
                lastRound: "15438",
              },
              {
                course: "B.S. in Economics + MBA (IIM Bodh Gaya)",
                r1: "8458",
                lastRound: "9961",
              },
              {
                course: "B.Tech. in Chemical Engineering",
                r1: "11588",
                lastRound: "12519",
              },
              {
                course: "B.Tech. in Chemical Science and Technology",
                r1: "13049",
                lastRound: "14062",
              },
              {
                course: "B.Tech. in Civil Engineering",
                r1: "13149",
                lastRound: "14579",
              },
              {
                course: "B.Tech. in Computer Science and Engineering",
                r1: "2985",
                lastRound: "3144",
              },
              {
                course: "B.Tech. in Economics",
                r1: "10174",
                lastRound: "11437",
              },
              {
                course: "B.Tech. in Electrical and Electronics Engineering",
                r1: "6160",
                lastRound: "6873",
              },
              {
                course: "B.Tech. in Electronics and Communication Engineering",
                r1: "5196",
                lastRound: "5732",
              },
              {
                course: "B.Tech. in Engineering Physics",
                r1: "10959",
                lastRound: "12031",
              },
              {
                course: "B.Tech. in Mathematics and Computing Engineering",
                r1: "4508",
                lastRound: "4952",
              },
              {
                course: "B.Tech. in Mechanical Engineering",
                r1: "9876",
                lastRound: "10647",
              },
              {
                course: "B.Tech. in Metallurgical and Materials Engineering",
                r1: "13748",
                lastRound: "15323",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.r1}</td>
                <td style={tdStyle}>{row.lastRound}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={pStyle}>
        <strong>
          IIT Patna JEE Advanced Cutoff Year Wise Comparison 2024, 2023, 2022
        </strong>
      </p>
      <p style={pStyle}>
        IIT Patna last three years' JEE Advanced cutoff data is available for
        Engineering and Architecture courses across various specialisations.
        Considering the last round closing rank cutoff over the past three
        years, BTech in CSE remains the most competitive branch among the
        General AI category students. On the contrary, B.Tech. in Computer
        Science and Engineering has lost its charm over the years, as the
        closing ranks have continuously increased. This indicates that the
        course is no longer in demand among the students.
      </p>
      <p style={pStyle}>
        Irrespective of the course choice, if someone wants to get into IIT
        Patna - Indian Institute of Technology, they can consider B.Tech. in
        Metallurgical and Materials Engineering + MBA (IIM Bodh Gaya), B.Tech.
        in Metallurgical and Materials Engineering and Integrated B.Tech. in
        Civil Engineering + M.Tech. in Geotechnical Engineering as these courses
        are less competitive for students belonging to the General AI category.
      </p>
      <p style={pStyle}>
        Students belonging to the OBC category can consider B.Tech. in
        Metallurgical and Materials Engineering and B.Tech. in Economics if they
        are not eligible for competitive courses such as CSE, Electrical, etc.
        to secure admission at IIT Patna - Indian Institute of Technology.
      </p>
      <p style={pStyle}>
        For more course, year and category-wise JEE Advanced cutoff ranks,
        candidates must use the filters provided below:
      </p>
      <h3 className="th3" style={th3Style}>
        JEE Advanced Last Round Closing Rank (General-All India)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech. in Electrical and Electronics Engineering",
                years: ["7028", "7359", "6873"],
              },
              {
                course: "B.Tech. in Computer Science and Engineering",
                years: ["2685", "2811", "3144"],
              },
              {
                course: "B.Tech. in Mechanical Engineering",
                years: ["10861", "11453", "10647"],
              },
              {
                course: "B.Tech. in Civil Engineering",
                years: ["13741", "15295", "14579"],
              },
              {
                course: "B.Tech. in Chemical Science and Technology",
                years: ["--", "15032", "14062"],
              },
              {
                course: "B.Tech. in Chemical Engineering",
                years: ["12874", "13933", "12519"],
              },
              {
                course: "B.Tech. in Metallurgical and Materials Engineering",
                years: ["14895", "16253", "15323"],
              },
              {
                course: "B.Tech. in Engineering Physics",
                years: ["12318", "12977", "12031"],
              },
              {
                course: "B.Tech. in Artificial Intelligence and Data Science",
                years: ["3702", "3577", "4346"],
              },
              {
                course:
                  "Discontinued (Jul 2023) - B.Sc. in Mathematics and Computing",
                years: ["5785", "--", "--"],
              },
              {
                course: "B.Tech. in Electronics and Communication Engineering",
                years: ["--", "5701", "5732"],
              },
              {
                course: "B.Tech. in Mathematics and Computing Engineering",
                years: ["--", "4749", "4952"],
              },
              {
                course:
                  "Integrated B.Tech. in Electronics and Communication Engineering + M.Tech. in Communication Systems",
                years: ["--", "6695", "6660"],
              },
              {
                course:
                  "Integrated B.Tech. in Civil Engineering + M.Tech. in Geotechnical Engineering",
                years: ["--", "15521", "15274"],
              },
              {
                course:
                  "Integrated B.Tech. in Civil Engineering + M.Tech. in Structural Engineering",
                years: ["--", "15120", "14055"],
              },
              {
                course:
                  "Integrated B.Tech. + M.Tech. in Computer Science and Engineering",
                years: ["--", "3643", "4429"],
              },
              {
                course:
                  "Integrated B.Tech. in Electronics and Communication Engineering + M.Tech. in VLSI",
                years: ["--", "6601", "6253"],
              },
              {
                course:
                  "Integrated B.Tech. in EEE + M.Tech. in Power and Control",
                years: ["--", "8290", "7605"],
              },
              {
                course:
                  "Integrated B.Tech. + M.Tech. in Mathematics and Computing",
                years: ["--", "5290", "5683"],
              },
              {
                course: "Integrated B.Tech. in ME + M.Tech. in Mechatronics",
                years: ["--", "10914", "9835"],
              },
              {
                course: "Integrated B.Tech. in ME + MBA (NITIE)",
                years: ["--", "11335", "--"],
              },
              {
                course:
                  "B.Tech. in Chemical Science and Technology + MBA in Hospital and Health Care Management (IIM Bodh Gaya)",
                years: ["--", "--", "14176"],
              },
              {
                course: "B.Tech. in Economics",
                years: ["--", "--", "11437"],
              },
              {
                course: "B.Tech. in Civil Engineering + MBA (IIM Bodh Gaya)",
                years: ["--", "--", "15129"],
              },
              {
                course:
                  "B.Tech. in Computer Science and Engineering + MBA in Digital Business Management (IIM Bodh Gaya)",
                years: ["--", "--", "3427"],
              },
              {
                course:
                  "B.Tech. in Electronics and Communication Engineering + MBA in Hospital and Healthcare Management (IIM Bodh Gaya)",
                years: ["--", "--", "7070"],
              },
              {
                course: "B.Tech. in Engineering Physics + MBA (IIM Bodh Gaya)",
                years: ["--", "--", "12375"],
              },
              {
                course:
                  "B.Tech. in Mathematics and Computing + MBA in Digital Business Management (IIM Bodh Gaya)",
                years: ["--", "--", "5445"],
              },
              {
                course:
                  "B.Tech. in Metallurgical and Materials Engineering + MBA (IIM Bodh Gaya)",
                years: ["--", "--", "15438"],
              },
              {
                course:
                  "B.Tech. in Electrical and Electronics Engineering + MBA (IIM Bodh Gaya)",
                years: ["--", "--", "7575"],
              },
              {
                course:
                  "B.Tech. in Artificial Intelligence and Data Science + MBA in Digital Business Management (IIM Bodh Gaya)",
                years: ["--", "--", "4864"],
              },
              {
                course:
                  "B.Tech. in Chemical Engineering + MBA in Hospital and Health Care Management (IIM Bodh Gaya)",
                years: ["--", "--", "13111"],
              },
              {
                course: "B.Tech. in Mechanical Engineering + MBA (IIM Mumbai)",
                years: ["--", "--", "9445"],
              },
              {
                course: "B.S. in Economics + MBA (IIM Bodh Gaya)",
                years: ["--", "--", "9961"],
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.years[0]}</td>
                <td style={tdStyle}>{row.years[1]}</td>
                <td style={tdStyle}>{row.years[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" id="obc" style={th3Style}>
        JEE Advanced Last Round Closing Rank (OBC-All India)
      </h3>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2022</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "B.Tech. in Electrical and Electronics Engineering",
                data: [2386, 2608, 2695],
              },
              {
                course: "B.Tech. in Computer Science and Engineering",
                data: [1007, 1172, 1135],
              },
              {
                course: "B.Tech. in Mechanical Engineering",
                data: [3858, 4269, 4099],
              },
              {
                course: "B.Tech. in Civil Engineering",
                data: [4715, 5526, 5194],
              },
              {
                course: "B.Tech. in Chemical Science and Technology",
                data: ["--", 5568, 5437],
              },
              {
                course: "B.Tech. in Chemical Engineering",
                data: [4722, 5271, 4836],
              },
              {
                course: "B.Tech. in Metallurgical and Materials Engineering",
                data: [5285, 6079, 5706],
              },
              {
                course: "B.Tech. in Engineering Physics",
                data: [4920, 5534, 5206],
              },
              {
                course: "B.Tech. in Artificial Intelligence and Data Science",
                data: [1406, 1626, 1661],
              },
              {
                course:
                  "Discontinued (Jul 2023)-B.Sc. in Mathematics and Computing",
                data: [2152, "--", "--"],
              },
              {
                course: "B.Tech. in Electronics and Communication Engineering",
                data: ["--", 2277, 2197],
              },
              {
                course: "B.Tech. in Mathematics and Computing Engineering",
                data: ["--", 2163, 1939],
              },
              {
                course:
                  "Integrated B.Tech. in Electronics and Communication Engineering + M.Tech. in Communication Systems",
                data: ["--", 2527, 2383],
              },
              {
                course:
                  "Integrated B.Tech. in Civil Engineering + M.Tech. in Geotechnical Engineering",
                data: ["--", 5363, 5517],
              },
              {
                course:
                  "Integrated B.Tech. in Civil Engineering + M.Tech. in Structural Engineering",
                data: ["--", 5953, 5199],
              },
              {
                course:
                  "Integrated B.Tech. + M.Tech. in Computer Science and Engineering",
                data: ["--", 1341, 1541],
              },
              {
                course:
                  "Integrated B.Tech. in Electronics and Communication Engineering + M.Tech. in VLSI",
                data: ["--", 2573, 2215],
              },
              {
                course:
                  "Integrated B.Tech. in EEE + M.Tech. in Power and Control",
                data: ["--", 3225, 3084],
              },
              {
                course:
                  "Integrated B.Tech. + M.Tech. in Mathematics and Computing",
                data: ["--", 2420, 2200],
              },
              {
                course: "Integrated B.Tech. in ME + M.Tech. in Mechatronics",
                data: ["--", 4254, 3916],
              },
              {
                course: "Integrated B.Tech. in ME + MBA (NITIE)",
                data: ["--", 4433, "--"],
              },
              {
                course:
                  "B.Tech. in Chemical Science and Technology + MBA in Hospital and Health Care Management (IIM Bodh Gaya)",
                data: ["--", "--", 5396],
              },
              {
                course: "B.Tech. in Economics",
                data: ["--", "--", 5527],
              },
              {
                course: "B.Tech. in Civil Engineering + MBA (IIM Bodh Gaya)",
                data: ["--", "--", 4971],
              },
              {
                course:
                  "B.Tech. in Computer Science and Engineering + MBA in Digital Business Management (IIM Bodh Gaya)",
                data: ["--", "--", 1183],
              },
              {
                course:
                  "B.Tech. in Electronics and Communication Engineering + MBA in Hospital and Healthcare Management (IIM Bodh Gaya)",
                data: ["--", "--", 3094],
              },
              {
                course: "B.Tech. in Engineering Physics + MBA (IIM Bodh Gaya)",
                data: ["--", "--", 4878],
              },
              {
                course:
                  "B.Tech. in Mathematics and Computing + MBA in Digital Business Management (IIM Bodh Gaya)",
                data: ["--", "--", 2229],
              },
              {
                course:
                  "B.Tech. in Metallurgical and Materials Engineering + MBA (IIM Bodh Gaya)",
                data: ["--", "--", 4728],
              },
              {
                course:
                  "B.Tech. in Electrical and Electronics Engineering + MBA (IIM Bodh Gaya)",
                data: ["--", "--", 2622],
              },
              {
                course:
                  "B.Tech. in Artificial Intelligence and Data Science + MBA in Digital Business Management (IIM Bodh Gaya)",
                data: ["--", "--", 1961],
              },
              {
                course:
                  "B.Tech. in Chemical Engineering + MBA in Hospital and Health Care Management (IIM Bodh Gaya)",
                data: ["--", "--", 4544],
              },
              {
                course: "B.Tech. in Mechanical Engineering + MBA (IIM Mumbai)",
                data: ["--", "--", 3250],
              },
              {
                course: "B.S. in Economics + MBA (IIM Bodh Gaya)",
                data: ["--", "--", 3890],
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                {row.data.map((value, i) => (
                  <td key={i} style={tdStyle}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Patna BTech Cutoff - Top IITs Comparison
      </h3>
      <p style={pStyle}>
        JoSAA conducts counselling for IIT Patna BTech admissions based on JEE
        advanced scores. The table below shows a comparative analysis of JoSAA's
        last round closing ranks for the most competitive BTech specialisation
        with the previous year's last round cutoff for top IITs, including the
        Indian Institute of Technology Patna:
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Institute</th>
              <th style={thStyle}>2023</th>
              <th style={thStyle}>2024</th>
            </tr>
          </thead>
          <tbody>
            {[
              { institute: "IIT Patna", year2023: "2811", year2024: "3144" },
              { institute: "IIT Mandi", year2023: "2909", year2024: "3118" },
              {
                institute: "IIT Bhubaneswar",
                year2023: "3101",
                year2024: "3685",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.institute}</td>
                <td style={tdStyle}>{row.year2023}</td>
                <td style={tdStyle}>{row.year2024}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="th3" style={th3Style}>
        IIT Patna JAM Cutoff Year Wise Comparison 2024, 2023, 2022
      </h3>
      <p style={pStyle}>
        The IIT Patna cutoff 2024 has been released for all the MSc courses. The
        cutoff was released for the General, OBC, SC, ST, EWS, and PWD
        categories as opening and closing ranks. IIT Patna JAM 2024 cutoff for
        the last round ranged between 622 and 707 wherein M.Sc. in Mathematics
        stands out as the most competitive MSc specialisation for the General AI
        category students. Considering the cutoff data over the past three
        years, M.Sc. in Mathematics remains the first choice among the students
        at IIT Patna.
      </p>
      <p style={pStyle}>
        Students who want to pursue an MSc course at IIT Patna (irrespective of
        the course choice) can also consider M.Sc. in Physics, M.Sc. in
        Chemistry, as these MSc specialisations are comparatively easy to get
        into for General category students.
      </p>
      <p style={pStyle}>
        For OBC category students, the last round cutoff varies between 722 and
        1116.
      </p>
      <p style={pStyle}>
        For a detailed year, round and category-wise MSc cutoff, candidates can
        use the IIT Patna, IIT JAM Cutoff 2024 for General Category is listed
        below. The overall cutoff rank for IIT JAM is 515 - 556
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>Round 1</th>
              <th style={thStyle}>Round 2</th>
              <th style={thStyle}>Round 3</th>
              <th style={thStyle}>Round 4</th>
              <th style={thStyle}>Round 5</th>
              <th style={thStyle}>Round 6</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "M.Sc Mathematics",
                round1: "515",
                round2: "532",
                round3: "572",
                round4: "579",
                round5: "622",
                round6: "662",
              },
              {
                course: "M.Sc Chemistry",
                round1: "538",
                round2: "621",
                round3: "637",
                round4: "637",
                round5: "644",
                round6: "761",
              },
              {
                course: "M.Sc Physics",
                round1: "556",
                round2: "630",
                round3: "645",
                round4: "675",
                round5: "707",
                round6: "888",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.round1}</td>
                <td style={tdStyle}>{row.round2}</td>
                <td style={tdStyle}>{row.round3}</td>
                <td style={tdStyle}>{row.round4}</td>
                <td style={tdStyle}>{row.round5}</td>
                <td style={tdStyle}>{row.round6}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3 className="th3" style={th3Style}>
        IIT Patna GATE Cutoff Year Wise Comparison
      </h3>
      <p style={pStyle}>
        The table given below to check out the last round closing rank for IIT
        Patna cutoff 2021.
      </p>
      <p style={pStyle}>
        <strong>COAP Last Round score (General-All India)</strong>
      </p>
      <div
        style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          whiteSpace: "nowrap",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          marginTop: "20px",
        }}
      >
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Course</th>
              <th style={thStyle}>2021</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                course: "M.Tech. in Computer Science and Engineering",
                year2021: "654",
              },
              {
                course: "M.Tech. in Communication System Engineering",
                year2021: "569",
              },
              {
                course: "M.Tech. in Mechanical Design",
                year2021: "640",
              },
              {
                course: "M.Tech. in Mechatronics",
                year2021: "667",
              },
              {
                course: "M.Tech. in Civil Engineering",
                year2021: "550",
              },
              {
                course: "M.Tech. in VLSI and Embedded System",
                year2021: "641",
              },
            ].map((row, index) => (
              <tr key={index}>
                <td style={tdStyle}>{row.course}</td>
                <td style={tdStyle}>{row.year2021}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;
