import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"
// import { Link } from "gatsby"

const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (min-width: 800px) {
    justify-content: space-between;
  }
  @media (min-width: 1150px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 15px 0 15px;
    max-width: 1250px;
    margin: auto;
  }
`

const Logo = styled.img`
  margin: auto;
  display: block;
  @media (min-width: 1150px) {
  }
`

const HeaderItem = styled.h1`
  text-align: center;
  @media (min-width: 1150px) {
  }
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rgb(30, 30, 30)",
      // marginBottom: `1.45rem`,
    }}
  >
    <NavBar>
      <Link
        to="/"
        style={{
          textdecoration: "none",
        }}
      >
        <Logo
          src="https://i.imgur.com/3ei96FN.png"
          alt="logo"
          className="logo"
        />
      </Link>
      <HeaderItem>
        <Link to="/About/" style={{ textDecoration: "none", color: "white" }}>
          About
        </Link>
      </HeaderItem>
      <HeaderItem>
        <Link
          to="/OurMission/"
          style={{ textDecoration: "none", color: "white" }}
        >
          Our Mission
        </Link>
      </HeaderItem>
      <HeaderItem>
        <Link
          to="/BoardOfDirectors/"
          style={{ textDecoration: "none", color: "white" }}
        >
          Board of Directors
        </Link>
      </HeaderItem>
      <HeaderItem>
        <Link to="/Contact/" style={{ textDecoration: "none", color: "white" }}>
          Contact
        </Link>
      </HeaderItem>
    </NavBar>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    ></Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
