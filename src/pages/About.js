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
        About Page Under Construction
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Jake
