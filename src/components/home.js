import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SectionTitle = styled.div`
  font-size: 50px;
  text-align: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 50px;
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
    font-size: 60px;
    margin-bottom: 25px;
  }
`

const MissionStatement = styled.div`
  font-size: 24px;
  text-align: center;
  color: rgb(154, 157, 159);
  font-weight: bold;
  margin-bottom: 15px;
  @media (min-width: 800px) {
    font-size: 30px;
  }
  @media (min-width: 1150px) {
  }
`

const BoardMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  @media (min-width: 650px) {
    padding-left: 10px;
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
  }
`

const BoardPhoto = styled.img`
  height: auto;
  width: 80%;
  margin: 0 10% 0 10%;
  @media (min-width: 768px) {
    width: 20%;
    margin: 0 0 0 0;
  }
  @media (min-width: 800px) {
  }
  @media (min-width: 1150px) {
    /* height: 340px; */
  }
`

const BoardTitle = styled.div`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: bold;
  line-height: 35px;
  color: white;
  text-decoration: none;
  @media (min-width: 550px) {
    font-size: 28px;
  }
  @media (min-width: 800px) {
    font-size: 35px;
  }
  @media (min-width: 1150px) {
    font-size: 40px;
  }
`

const BoardDescription = styled.div`
  font-size: 15px;
  margin-left: 10px;
  color: rgb(154, 157, 159);
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

const ContactInfo = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media (min-width: 650px) {
    text-align: left;
  }
  @media (min-width: 850px) {
    font-size: 32px;
    margin-top: 4px;
  }
  @media (min-width: 1150px) {
    font-size: 45px;
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 650px) {
    flex-direction: row;
  }
  @media (min-width: 850px) {
  }
  @media (min-width: 1200px) {
  }
`

const FooterLogo = styled.img`
  @media (min-width: 650px) {
    height: 100px;
    width: 100px;
    margin: 0;
  }
  @media (min-width: 850px) {
    height: 140px;
    width: 140px;
  }
  @media (min-width: 1150px) {
    height: 180px;
    width: 180px;
  }
`

const Home = () => (
  <div style={{ maxWidth: "1200px", marginLeft: "10%", marginRight: "10%" }}>
    <SectionTitle>Welcome to Seeds of Support!</SectionTitle>
    <MissionStatement>
      We are a secular, all-encompassing and judgement free support group. Our
      non-profit organization is committed to destigmatizing addiction, mental
      health issues and battling chronic health ailments with a harm reduction
      and holistic doctrine. Based in Oakland, California we provide a "Green
      and Clean" environment to our members while providing compassionate
      outreach to Oakland's disenfranchised communities. To learn more about who
      we are please feel free to reach out and contact us by phone or email any
      time of day!
    </MissionStatement>
    <SectionTitle>Board of Directors</SectionTitle>
    <BoardMemberContainer>
      <BoardPhoto src="https://i.imgur.com/RVGefKN.png" />
      <div>
        <Link to="/Jake/" style={{ textDecoration: 'none' }}>
          <BoardTitle>Chief Executive Officer: Jake Sassaman</BoardTitle>
        </Link>
        <BoardDescription>
          Our CEO is Jake Sassaman. Jake has been in the Bay Area Community for
          over 10 years and is active in both Oakland Town Hall and the cannabis
          business community. A respected and engaging member of the bay area,
          Jake set up this project to help vulnerable citizens in need.
        </BoardDescription>
      </div>
    </BoardMemberContainer>
    <BoardMemberContainer>
      <BoardPhoto src="https://i.imgur.com/Qj8xvO8.jpg" />
      <div>
        <Link to="/Heather/" style={{ textDecoration: 'none' }}>
          <BoardTitle>Chief Operating Officer: Heather Yount</BoardTitle>
        </Link>
        <BoardDescription>
          Heather Yount is our Chief operating officer. Born and raised in
          Sacramento, CA. Heather has been in the trenches of addiction for
          years and has risen to be victorious. She is a staunch activist and
          advocate for all people in recovery. She currently works at Loaves and
          Fishes, serving the homeless population.
        </BoardDescription>
      </div>
    </BoardMemberContainer>
    <BoardMemberContainer>
      <BoardPhoto src="https://i.imgur.com/5nsBb1D.png" />
      <div>
        <Link to="/Natalia/" style={{ textDecoration: 'none' }}>
          <BoardTitle>Advisory Board Member: Natalia Thurston</BoardTitle>
        </Link>
        <BoardDescription>
          Natalia Thurston, J.D., M.B.A., serves as an Advisory Board member for
          Seeds of Support. Natalia is the founder of CBD Professionals, one of
          California’s first cannabis business law firms established in 2009.
          Under Prop 215, Natalia helped medical cannabis patients organize
          collectively to cultivate and dispense cannabis to qualified patients.
          Committed to compassionate use, Natalia serves as pro bono counsel to
          Sweetleaf Collective, a San Francisco collective providing free
          medical cannabis to low income patients since 1996 and now serving
          patients under SB 34, the Dennis Peron and Brownie Mary Act.
        </BoardDescription>
      </div>
    </BoardMemberContainer>
    <Link to="/Contact/">
      <SectionTitle>Contact Us</SectionTitle>
    </Link>
    <FooterContainer>
      {/* <div>
        <ContactInfo>560 Thomas L. Berkley Way</ContactInfo>
        <ContactInfo>Oakland, CA 94612</ContactInfo>
        <ContactInfo>(510) 354-9872</ContactInfo>
      </div> */}
      <FooterLogo
        src="https://i.imgur.com/3ei96FN.png"
        alt="logo"
        className="logo"
      />
    </FooterContainer>
  </div>
)

export default Home
