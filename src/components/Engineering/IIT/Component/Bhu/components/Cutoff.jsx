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
        <h2 style={h2Style}>IIT BHU Cutoff</h2>
        
        <h3 className="th3" style={th3Style}>

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
            <table style={tableStyle}>
      <tbody>
        <tr>
          <th style={thStyle}>Course</th>
          <th style={thStyle}>2022</th>
          <th style={thStyle}>2023</th>
          <th style={thStyle}>2024</th>
        </tr>
        {[
          { course: "Integrated B.Tech. + M.Tech. in Mathematics and Computing", y2022: 2369, y2023: 2034, y2024: 2154 },
          { course: "Integrated B.Tech. + M.Tech. in Engineering Physics", y2022: 8711, y2023: 9612, y2024: 7764 },
          { course: "B.Tech. in Ceramic Engineering", y2022: 13109, y2023: 13254, y2024: 12154 },
          { course: "Integrated B.Tech. + M.Tech. in Ceramic Engineering", y2022: 15213, y2023: 14479, y2024: 13931 },
          { course: "B.Tech. in Chemical Engineering", y2022: 8343, y2023: 8999, y2024: 7757 },
          { course: "B.Tech. in Civil Engineering", y2022: 9867, y2023: 10232, y2024: 9339 },
          { course: "Integrated B.Tech. + M.Tech. in Civil Engineering (Structural Engineering)", y2022: 11085, y2023: 11332, y2024: 10583 },
          { course: "B.Tech. in Computer Science and Engineering", y2022: 897, y2023: 1079, y2024: 1071 },
          { course: "B.Tech. in Electrical Engineering", y2022: 3706, y2023: 3534, y2024: 3608 },
          { course: "Integrated B.Tech. in Electrical Engineering + M.Tech. in Power Electronics", y2022: 5408, y2023: 4662, y2024: 4619 },
          { course: "B.Tech. in Electronics Engineering", y2022: 3128, y2023: 2876, y2024: 2826 },
          { course: "B.Tech. in Mechanical Engineering", y2022: 7083, y2023: 6694, y2024: 6596 },
          { course: "B.Tech. in Metallurgical Engineering", y2022: 11057, y2023: 11388, y2024: 10740 },
          { course: "B.Tech. in Mining Engineering", y2022: 12824, y2023: 13556, y2024: 12876 },
          { course: "Integrated B.Tech. + M.Tech. in Computer Science Engineering", y2022: 1318, y2023: 1366, y2024: 1510 },
          { course: "Integrated B.Tech. + M.Tech. in Metallurgical Engineering", y2022: 12522, y2023: 13072, y2024: 11530 },
          { course: "Integrated B.Tech. + M.Tech. in Mechanical Engineering", y2022: 7912, y2023: 8244, y2024: 7497 },
          { course: "Integrated B.Tech. + M.Tech. in Mining Engineering", y2022: 14632, y2023: 15572, y2024: 14557 },
          { course: "Integrated B.Tech. in Biochemical Engineering and Biotechnology + M.Tech. in Biochemical Engineering and Biotechnology", y2022: 13885, y2023: 14830, y2024: 12761 },
          { course: "Integrated B.Tech. in Bioengineering + M.Tech. in Biomedical Engineering", y2022: 13157, y2023: 14852, y2024: 14001 },
          { course: "Integrated B.Tech. + M.Tech. in Material Sciences and Engineering", y2022: 13359, y2023: 13565, y2024: 12524 },
          { course: "Integrated B.Tech. + M.Tech. in Industrial Chemistry", y2022: 13456, y2023: 14443, y2024: 12317 },
          { course: "B.Tech. in Pharmaceutics Engineering and Technology", y2022: 14311, y2023: 14379, y2024: 13562 },
          { course: "Integrated B.Tech. + M.Tech. in Pharmaceutical Engineering and Technology", y2022: 15463, y2023: 15585, y2024: 14463 },
          { course: "Bachelor of Architecture (B.Arch.)", y2022: 19296, y2023: 24641, y2024: 22390 },
        ].map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.course}</td>
            <td style={tdStyle}>{item.y2022}</td>
            <td style={tdStyle}>{item.y2023}</td>
            <td style={tdStyle}>{item.y2024}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

      <h3 className="th3" style={th3Style}>
      JEE Advanced Last Round Closing Rank (OBC-All India)      </h3>
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
            <th style={thStyle}>Course</th>
            <th style={thStyle}>2022</th>
            <th style={thStyle}>2023</th>
            <th style={thStyle}>2024</th>
            </tr>
            {[
            { course: "Integrated B.Tech. + M.Tech. in Mathematics and Computing", y2022: 1080, y2023: 1178, y2024: 1028 },
            { course: "Integrated B.Tech. + M.Tech. in Engineering Physics", y2022: 3981, y2023: 4637, y2024: 3874 },
            { course: "B.Tech. in Ceramic Engineering", y2022: 4837, y2023: 5566, y2024: 4895 },
            { course: "Integrated B.Tech. + M.Tech. in Ceramic Engineering", y2022: 5353, y2023: 6274, y2024: 5501 },
            { course: "B.Tech. in Chemical Engineering", y2022: 3382, y2023: 3854, y2024: 3404 },
            { course: "B.Tech. in Civil Engineering", y2022: 3538, y2023: 3959, y2024: 3819 },
            { course: "Integrated B.Tech. + M.Tech. in Civil Engineering (Structural Engineering)", y2022: 3643, y2023: 4359, y2024: 4123 },
            { course: "B.Tech. in Computer Science and Engineering", y2022: 389, y2023: 359, y2024: 524 },
            { course: "B.Tech. in Electrical Engineering", y2022: 1538, y2023: 1627, y2024: 1544 },
            { course: "Integrated B.Tech. in Electrical Engineering + M.Tech. in Power Electronics", y2022: 1798, y2023: 2178, y2024: 1896 },
            { course: "B.Tech. in Electronics Engineering", y2022: 1274, y2023: 1374, y2024: 1351 },
            { course: "B.Tech. in Mechanical Engineering", y2022: 2726, y2023: 2999, y2024: 2829 },
            { course: "B.Tech. in Metallurgical Engineering", y2022: 3969, y2023: 4473, y2024: 4494 },
            { course: "B.Tech. in Mining Engineering", y2022: 4606, y2023: 5426, y2024: 4990 },
            { course: "Integrated B.Tech. + M.Tech. in Computer Science Engineering", y2022: 591, y2023: 597, y2024: 727 },
            { course: "Integrated B.Tech. + M.Tech. in Metallurgical Engineering", y2022: 4542, y2023: 5219, y2024: 4945 },
            { course: "Integrated B.Tech. + M.Tech. in Mechanical Engineering", y2022: 3057, y2023: 3393, y2024: 3138 },
            { course: "Integrated B.Tech. + M.Tech. in Mining Engineering", y2022: 5073, y2023: 6067, y2024: 5454 },
            { course: "Integrated B.Tech. in Biochemical Engineering and Biotechnology + M.Tech. in Biochemical Engineering and Biotechnology", y2022: 5248, y2023: 6271, y2024: 5680 },
            { course: "Integrated B.Tech. in Bioengineering + M.Tech. in Biomedical Engineering", y2022: 4876, y2023: 5956, y2024: 5361 },
            { course: "Integrated B.Tech. + M.Tech. in Material Sciences and Engineering", y2022: 5077, y2023: 5753, y2024: 5324 },
            { course: "Integrated B.Tech. + M.Tech. in Industrial Chemistry", y2022: 5137, y2023: 6065, y2024: 5474 },
            { course: "B.Tech. in Pharmaceutics Engineering and Technology", y2022: 5160, y2023: 6051, y2024: 5464 },
            { course: "Integrated B.Tech. + M.Tech. in Pharmaceutical Engineering and Technology", y2022: 5366, y2023: 6142, y2024: 5622 },
            { course: "Bachelor of Architecture (B.Arch.)", y2022: 6554, y2023: 8755, y2024: 8177 },
            ].map((item, index) => (
            <tr key={index}>
                <td style={tdStyle}>{item.course}</td>
                <td style={tdStyle}>{item.y2022}</td>
                <td style={tdStyle}>{item.y2023}</td>
                <td style={tdStyle}>{item.y2024}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
    </section>



  );
};

export default Cutoff;
