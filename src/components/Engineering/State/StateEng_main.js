import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../../Layout";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
`;

// Card Style
const Card = styled.div`
  background-color: rgb(249 131 65);
  color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  .title {
    font-weight: bold;
    font-size: 1.1rem;
  }

  .arrow {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const StateEng_main = () => {
  const items = [
    "Andhra_Pradesh",
    "Arunachal_Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal_Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya_Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil_Nadu",
    "Telangana",
    "Tripura",
    "Uttar_Pradesh",
    "Uttarakhand",
    "West_Bengal",
    "Andaman_and_Nicobar_Islands",
    "Chandigarh",
    "Dadra_and_Nagar_Haveli_and_Daman_and_Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <Layout title="StateDetails">
      <GridContainer>
        {items.map((item, index) => (
          <Link to={`/state-details/${item}`} key={index}>
            {" "}
            {/* Add Link here */}
            <Card>
              <div className="title">{item.replace(/_/g, " ")}</div>
              <div className="arrow">→</div>
            </Card>
          </Link>
        ))}
      </GridContainer>
    </Layout>
  );
};

export default StateEng_main;
