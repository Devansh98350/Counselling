import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LayoutCard = styled.div`
  width: 350px;
  height: 350px;
  margin-left: 1.8vw;
  margin-bottom: 30px;
  border: 1px solid gray;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08);
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.15);
  }

  .upper-card {
    width: 100%;
    height: 60%;
    position: relative;

    .imagebuilding-card {
      position: absolute;
      width: 100%;
      height: 96%;
      object-fit: cover;
    }

    .logo-card {
      height: 45%;
      width: 35%;
      position: absolute;
      background-color: white;
      z-index: 1;
      left: 65%;
      bottom: 0;
      border: 5px solid white;
      border-radius: 50%;
      border: 3px solid #f0f0f0;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }
  }

  .info-card {
    height: 30%;
    margin: 3%;
    padding: 2px;

    h3 {
      font-size: 1.2rem;
      font-weight: 500;
      margin: 8px 0;
      font-family: "Poppins", sans-serif;
    }
    .about-card {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      font-weight: 300;
    }
  }
`;

const Card = ({ build, logo, name, nirf, year, link }) => {
  return (
    <Link to={link}>
      <LayoutCard>
        <div className="upper-card">
          <img src={build} alt="college" className="imagebuilding-card" />
          <img src={logo} alt="logo" className="logo-card" />
        </div>
        <div className="info-card">
          <center>
            <h3 style={{ marginTop: "2px", marginBottom: "4px" }}>{name}</h3>
          </center>
          <div className="about-card flex flex-col">
            <p>NIRF Ranking: {nirf}</p>
            <p className="year-card">Founded in: {year}</p>
          </div>
        </div>
      </LayoutCard>
    </Link>
  );
};

export default Card;
