import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/templates/layout'
import SEO from '../components/seo'

const MiscPage = () => {

  const query = graphql`
    query {
      imgs:allFile(filter:{name:{regex:"/^misc-/"}},
      sort:{fields:name}) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth:1200) {
                ...GatsbyImageSharpFluid
             }
           }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={query}
      render={data => {
        const imgs = data.imgs.edges;

        const Body = () => (
          <>
            <div className={`feature__head`}>
              <h1 className={`feature__h1`}>Miscellaneous Things</h1>
            </div>
            <div className={`feature misc`}>
              <div className={`feature__body`}>
                {imgs.map(({node}, index) => (
                  <div
                    key={index}
                    className={`body__row`}
                  >
                    <div
                      key={node.id}
                      className={`body__item body__item--full`}
                    >
                      <Img fluid={node.childImageSharp.fluid} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        );

        return (
          <Layout>
            <SEO title="Miscellaneous" keywords={[`gatsby`, `application`, `react`]} />
            <Body />
          </Layout>
        )
      }}
    />
  );

}

export default MiscPage;
