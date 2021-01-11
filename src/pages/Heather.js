import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"

const BoardPhoto = styled.img`
  height: 250px;
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
    height: 340px;
  }
`

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
`

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
`

const Heather = () => (
  <Layout>
    <BoardPhoto src="https://i.imgur.com/Qj8xvO8.jpg" />
    <div>
      <BoardTitle>COO: Heather Yount</BoardTitle>
      <BoardDescription>
        Heather Yount is an altruistic member of the Bay Area and larger
        Northern California community. She is a valued member of S.O.S. and the
        local cannabis community. Heather served as an assistant manager at "One
        Solution" dispensary in Sacremento and is well liked in the community.
        Having lost family to the opioid epidemic Heather has first hand
        experience with recovery and dealing with tragedy. She now serves as a
        member of "Loaves and Fishes" in Sacremento and S.O.S. is proud to have
        her as part of the team.
        <p>
          Heather Yount is our Chief operating officer. Born and raised in
          Sacramento, CA. Heather has been in the trenches of addiction for
          years and has risen to be victorious. She is a staunch activist and
          advocate for all people in recovery. She currently works at Loaves and
          Fishes, serving the homeless population.
        </p>
      </BoardDescription>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Heather
