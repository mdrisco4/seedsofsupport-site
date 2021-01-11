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

const Natalia = () => (
  <Layout>
    <BoardPhoto src="https://i.imgur.com/2xZ4epu.jpg" />
      <div>
        <BoardTitle>Advisory Board Member: Natalia Thurston</BoardTitle>
        <BoardDescription>
        Natalia Thurston, J.D., M.B.A., serves as an Advisory Board member for
Seeds of Support.  Natalia is the founder of CBD Professionals, one of
California’s first cannabis business law firms established in 2009.
Under Prop 215, Natalia helped medical cannabis patients organize
collectively to cultivate and dispense cannabis to qualified patients.
Committed to compassionate use, Natalia serves as pro bono counsel to
Sweetleaf Collective, a San Francisco collective providing free
medical cannabis to low income patients since 1996 and now serving
patients under SB 34, the Dennis Peron and Brownie Mary Act.
        </BoardDescription>
      </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Natalia
