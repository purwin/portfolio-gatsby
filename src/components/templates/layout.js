/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "../header"
import Nav from "../nav"
import Thumbnails from "../thumbnails"
import "./layout.css"

const Layout = ({ children, display }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="content">
        <div className="box header">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Nav />
        </div>
        <div className="main">
          <main>{children}</main>
          <Thumbnails display={display} />
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  // children: PropTypes.node.isRequired,
  children: PropTypes.node,
}

export default Layout
