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
import Clips from "../components/Clips"
import data from "../yourdata"

import Fade from "react-reveal/Fade"

const IndexPage = () => (
  <Layout>
    <SEO title="Michael Gill" />
    <Header></Header>
    <Work></Work>
    <About></About>
    {<Skills></Skills>}
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
    <Fade bottom>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1> Clips </h1>
      </div>
    </Fade>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: 20,
        flexWrap: "wrap",
      }}
    >
      {data.clips.map(clip => (
        <Clips url={clip}></Clips>
      ))}
    </div>
  </Layout>
)

export default IndexPage
