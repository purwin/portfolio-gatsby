import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/templates/layout'
import SEO from '../components/seo'

const AboutPage = () => {

  const query = graphql`
    query {
      file(relativePath: {eq:"icon.png"}) {
        childImageSharp {
          fluid(maxWidth:1200) {
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const Body = ({cover}) => (
    <div className={`feature about`}>
      <div className={`feature__cover`}>
        {cover}
      </div>
      <div className={`feature__body`}>
        <div className={`body__row`}>
          <div className={`body__item body__item--r`}>
            <h3>Hello! I am [a/n]:</h3>
            <ul>
              <li>Ebook Designer at Penguin Random House</li>
              <li>Native son of New Jersey</li>
              <li>Jackson Heightsian working in New York City</li>
              <li>Experienced in HTML, CSS, JavaScript, Python, SQL, among others</li>
              <li>Frequent camper</li>
              <li>Emergency carpenter</li>
              <li>Future welder</li>
            </ul>
          </div>
        </div>
        <div className={`body__row`}>
          <div className={`body__item`}>
            <h3>I like to:</h3>
            <ul>
              <li>Make websites</li>
              <li>Build databases for fun</li>
              <li>Design sensible interfaces</li>
            </ul>
          </div>
        </div>
        <div className={`body__row`}>
          <div className={`body__item body__item--r`}>
            <h3>Contact!</h3>
            <ul>
              <li>mpurwin@gmail.com</li>
              <li><a href="https://github.com/purwin">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout display={`none`}>
          <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
          <Body cover={<Img fluid={data.file.childImageSharp.fluid} />} />
        </Layout>
      )}
    />
  );

}

export default AboutPage;
