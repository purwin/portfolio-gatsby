import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"

const NYCParksPage = () => {
  const title = `Melville House Books`

  const bio = [`Promo material for an awesome independent publisher.`]

  const query = graphql`
    query {
      imgs:allFile(filter:{relativePath:{regex:"/^mhp-\\\\d+.+png$/"}}, 
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
                className={`body__item body__item--c`}
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
        );}
      }
    />
  );

}

export default NYCParksPage;
