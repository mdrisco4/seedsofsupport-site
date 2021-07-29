import React from "react"
import styled from 'styled-components'
import Home from '../components/home';

import Layout from "../components/layout"

const Logo = styled.div`

`

const IndexPage = () => (
  <Layout>
    {/* <Logo></Logo> */}
    {/* <img src="../images/DowntownOakland_ViaAlameda_MRP_Web_2000x713_rev3_10x4.jpeg"></img> */}
    <Home></Home>
    {/* <Link to="/Jake/">Jake Sassaman</Link> <br />
    <Link to="/Heather/">Heather Yount</Link> <br />
    <Link to="/Natalia/">Natalia Thurston</Link> */}
  </Layout>
)

export default IndexPage
