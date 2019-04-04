import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"

const LighthousesPage = () => {
  const title = `Lighthouses of Jersey`;

  const bio = [`Prints of the stellar New Jersey lighthouses.`];

  const query = graphql`
    query {
      imgs:allFile(filter:{name:{regex:"/^lighthouses-\\\\d+/"}},
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
          imgs.map(({node}, index) => (
            <div
              key={index}
              className={`body__row`}
            >
              <div
                key={node.id}
                className={`body__item ${index % 2 !== 0 && `body__item--r`}`}
              >
                <Img fluid={node.childImageSharp.fluid} />
              </div>
            </div>
          ))
        )

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

export default LighthousesPage;
