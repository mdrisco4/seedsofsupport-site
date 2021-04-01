import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import Home from '../components/home';

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Logo = styled.div`

`

const IndexPage = () => (
  <Layout>
    <Logo>dgfhjs</Logo>
    <Home></Home>
    {/* <Link to="/Jake/">Jake Sassaman</Link> <br />
    <Link to="/Heather/">Heather Yount</Link> <br />
    <Link to="/Natalia/">Natalia Thurston</Link> */}
  </Layout>
)

export default IndexPage
