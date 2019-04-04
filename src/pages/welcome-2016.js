import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"

const WelcomePage = () => {
  const title = `Welcome to 2016`

  const bio = [`Kid’s picture book created for new people.`]

  const query = graphql`
    query {
      imgs:allFile(filter:{name:{regex:"/^welcome-2016-\\\\d+/"}},
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

        const cover = imgs.shift();

        const Body = () => (
          <>
            <div className={`body__row`}>
              <div
                key={cover.node.id}
                className={`body__item body__item--full`}
              >
                <Img fluid={cover.node.childImageSharp.fluid} />
              </div>
            </div>
            <div className={`body__row`}>
              {imgs.map(({node}, index) => (
                <div
                  key={node.id}
                  className={`body__item ${ index + 1 === imgs.length ? `body__item--c` : index % 2 !== 0 && `body__item--r`}`}
                >
                  <Img fluid={node.childImageSharp.fluid} />
                </div>
              ))}
            </div>
          </>
        );

        return (
          <Work
            title={title}
            bio={bio}
            body={<Body />}
          />
        );
      }}
    />
  );

}

export default WelcomePage;
