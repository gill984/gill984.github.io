import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import ClipContainer from "../components/ClipContainer"
import data from "../yourdata"

import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Fade>
    <Layout>
      <SEO title="Michael Gill" />
      <Header></Header>
      <Work></Work>
      <About></About>
      {<Skills></Skills>}
      {/* <Promotion></Promotion> */}
      <Footer></Footer>
      <ClipContainer></ClipContainer>
    </Layout>
  </Fade>
)

export default IndexPage
