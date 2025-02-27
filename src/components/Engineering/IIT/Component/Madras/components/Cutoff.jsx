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
      <p id="gen" style={pStyle}>
        IIT Madras cutoff are released in the form of opening and closing ranks on the
        official websites of JoSAA. Like we all know that IIT Madras take admission of
        B.Tech in the JEE advance result which is released by the JoSAA counseling
        process. The JoSAA released the cut off in six rounds the opening and closing
        ranks of IIT Madras in JEE Advance of the last three years is given below:
      </p>

      <h3 className="th3" style={th3Style} id="obc">
        Category-wise Opening & Closing Ranks
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
        <th style={thStyle}>Category</th>
        <th style={thStyle}>Year</th>
        <th style={thStyle}>Opening Rank</th>
        <th style={thStyle}>Closing Rank</th>
      </tr>
    </thead>
    <tbody>
      {[
        { category: "OPEN", year: 2021, opening: 85, closing: 163 },
        { category: "OPEN", year: 2022, opening: 6, closing: 167 },
        { category: "OPEN", year: 2023, opening: 148, closing: 11185 },
        { category: "OPEN (FEMALE)", year: 2021, opening: 363, closing: 644 },
        { category: "OPEN (FEMALE)", year: 2022, opening: 425, closing: 617 },
        { category: "OPEN (FEMALE)", year: 2023, opening: 479, closing: 15528 },
        { category: "EWS", year: 2021, opening: 21, closing: 37 },
        { category: "EWS", year: 2022, opening: 25, closing: 34 },
        { category: "OBC-NCL", year: 2021, opening: 19, closing: "89" },
        { category: "OBC-NCL", year: 2022, opening: 37, closing: "88" },
        { category: "SC", year: 2021, opening: 34, closing: 57 },
        { category: "SC", year: 2022, opening: 33, closing: 53 },
        { category: "ST", year: 2021, opening: 16, closing: 24 },
        { category: "ST", year: 2022, opening: 19, closing: 23 },
      ].map((row, index) => (
        <tr key={index}>
          <td style={tdStyle}>{row.category}</td>
          <td style={tdStyle}>{row.year}</td>
          <td style={tdStyle}>{row.opening}</td>
          <td style={tdStyle}>{row.closing}</td>
        </tr>
      ))}
    </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cutoff;
