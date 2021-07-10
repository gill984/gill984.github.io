/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./Navbar"
import Toggler from "./Toggler"

import "../styles/mains.scss"

const Layout = ({ children }) => {
  return (
    <>
    <Toggler/>
      <Navbar></Navbar>
      <main>{children}</main>
    </>
  )
}
export default Layout
