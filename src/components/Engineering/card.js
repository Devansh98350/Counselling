import React from "react";
import styled from "styled-components";

const LayoutCard = styled.div`
  width: 350px;
  height: 350px;
  margin-left: 2%;
  margin-bottom: 2%;
  border: 1px solid gray;
  background-color: white;
  &:hover {
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
    transition: ease-in-out 0.3s;
  }

  .upper-card {
    width: 100%;
    height: 60%;
    position: relative;

    .imagebuilding-card {
      position: absolute;
      width: 100%;
      height: 96%;
    }

    .logo-card {
      height: 45%;
      width: 35%;
      position: absolute;
      background-color: white;
      z-index: 1;
      left: 33%;
      bottom: 0;
      border: 5px solid white;
    }
  }

  .info-card {
    height: 30%;
    font-weight: 500;
    margin: 3%;

    .about-card {
      display: flex;
      justify-content: space-between;
      margin: 2%;
    }
  }
`;

const Card = ({ build, logo, name, nirf, year, link }) => {
  return (
    <LayoutCard onClick={() => (window.location.href = link)}>
      <div className="upper-card">
        <img src={build} alt="college" className="imagebuilding-card" />
        <img src={logo} alt="logo" className="logo-card" />
      </div>
      <div className="info-card">
        <center>
          <h3 style={{ marginTop: "2px", marginBottom: "4px" }}>{name}</h3>
        </center>
        <div className="about-card">
          <p>NIRF Ranking: {nirf}</p>
          <p className="year-card">Founded in: {year}</p>
        </div>
      </div>
    </LayoutCard>
  );
};

export default Card;
