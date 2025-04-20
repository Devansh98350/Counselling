import React from "react";

const PlacementBHU = () => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontSize: "18px",
    textAlign: "left",
    border: "1px solid #ddd",
  };

  const thStyle = {
    backgroundColor: "#f4f4f4",
    padding: "12px",
    border: "1px solid #ddd",
  };

  const tdStyle = {
    padding: "12px",
    border: "1px solid #ddd",
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Placement Statistics (2023-24)
      </h2>
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={thStyle}>Particulars</th>
            <th style={thStyle}>Details</th>
          </tr>
          <tr>
            <td style={tdStyle}>Highest Package (Domestic)</td>
            <td style={tdStyle}>INR 1.68 crore per annum</td>
          </tr>
          <tr>
            <td style={tdStyle}>Highest Package (International)</td>
            <td style={tdStyle}>INR 77 LPA</td>
          </tr>
          <tr>
            <td style={tdStyle}>Total Offers</td>
            <td style={tdStyle}>1,044</td>
          </tr>
          <tr>
            <td style={tdStyle}>Total PPOs (Pre-Placement Offers)</td>
            <td style={tdStyle}>310</td>
          </tr>
          <tr>
            <td style={tdStyle}>Top Recruiting Sectors</td>
            <td style={tdStyle}>SDE/ML/DS/Quant, Analytics/Product/Business, Core</td>
          </tr>
          <tr>
            <td style={tdStyle}>Top Recruiters</td>
            <td style={tdStyle}>Qualcomm, Uber, Goldman Sachs, Google</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PlacementBHU;
