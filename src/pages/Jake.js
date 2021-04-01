import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

import Layout from "../components/layout"


const BoardPhoto = styled.img`
  height: 250px;
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
    height: 340px;
  }
`;

const BoardTitle = styled.div`
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
  line-height: 35px;
  @media (min-width: 550px) {
    font-size: 28px;
  }
  @media (min-width: 800px) {
    font-size: 35px;
  }
  @media (min-width: 1150px) {
    font-size: 54px;
  }
`;

const BoardDescription = styled.div`
  font-size: 15px;
  margin-left: 10px;
  color: rgb(35, 77, 32);
  font-weight: bold;
  line-height: 35px;
  @media (min-width: 550px) {
    font-size: 20px;
  }
  @media (min-width: 800px) {
    font-size: 24px;
  }
  @media (min-width: 1150px) {
    font-size: 32px;
  }
`;

const Jake = () => (
  <Layout>
    <BoardPhoto src="https://i.imgur.com/RVGefKN.png" />
      <div>
        <BoardTitle>CEO: Jake Sassaman</BoardTitle>
        <BoardDescription>
          Our CEO is Jake Sassaman. Jake has been in the Bay Area Community for
          over 10 years and is active in both Oakland Town Hall and the cannabis
          business community. A respected and engaging member of the bay area,
          Jake set up this project to help vulnerable citizens in need.
        </BoardDescription>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Jake
