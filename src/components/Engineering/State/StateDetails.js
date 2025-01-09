import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from "../../Layout";
import Card from "../card";
import { collegesData } from './collegesData';
 


const MarginInformation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin-top: 2%;
`;

const StateDetails = () => {
  const { state } = useParams();
  
  // Get the list of colleges for the given state, or default to an empty array if no state is found
  const list = collegesData[state] || [];

  return (
    <Layout title="StateDetails">
      <div>
        <h1>List of colleges in {state.replace(/_/g, ' ')}</h1>

        <MarginInformation>
          {list.length > 0 ? (
            list.map((item) => (
              <Card
                key={item.id}
                logo={item.logo}
                build={item.build}
                name={item.name}
                nirf={item.nirf}
                year={item.found}
                link={item.link}
              />
            ))
          ) : (
            <p>No data available for {state.replace(/_/g, ' ')}</p>
          )}
        </MarginInformation>
      </div>
    </Layout>
  );
};

export default StateDetails;
