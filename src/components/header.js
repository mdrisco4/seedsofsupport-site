import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import React from "react"

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
}
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rgb(250, 250, 250)',
      marginBottom: `1.45rem`,
    }}
  >
    <NavBar>
        <img src="https://i.imgur.com/3ei96FN.png" alt="logo" className="logo"/>
          <h1 className="header-links">About</h1>
          <h1 className="header-links">Our Mission</h1>
          <h1 className="header-links">Board of Directors</h1>
          <h1 className="header-links">Contact</h1>
        </NavBar>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          the
        </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
