import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"

const MiscPage = () => {

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

  const Body = () => (
    <>
      <div className={`body__row`}>
        <div className={`body__item`}>
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
        <div className={`body__item body__item--r`}>
          <h3>I like to:</h3>
          <ul>
            <li>Make websites</li>
            <li>Build databases for fun</li>
            <li>Design sensible interfaces</li>
          </ul>
        </div>
      </div>
      <div className={`body__row`}>
        <div className={`body__item`}>
          <h3>Contact!</h3>
          <ul>
            <li>mpurwin@gmail.com</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <StaticQuery
      query={query}
      render={data => (
        <Work
          title={`Miscellaneous Things`}
          body={<Body />}
        />
      )}
    />
  );

}

export default MiscPage;
