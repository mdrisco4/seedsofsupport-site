import React from "react"
import styled from 'styled-components'
import Home from '../components/home';

import Layout from "../components/layout"

const Logo = styled.div`

`

const IndexPage = () => (
  <Layout>
    <Logo></Logo>
    <Home></Home>
    {/* <Link to="/Jake/">Jake Sassaman</Link> <br />
    <Link to="/Heather/">Heather Yount</Link> <br />
    <Link to="/Natalia/">Natalia Thurston</Link> */}
  </Layout>
)

export default IndexPage
