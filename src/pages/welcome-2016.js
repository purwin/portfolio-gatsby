import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"

const WelcomePage = () => {
  const title = `Welcome to 2016`

  const bio = [`Kid’s picture book created for new people.`]

  const query = graphql`
    query {
      imgs:allFile(filter:{name:{regex:"/^welcome-2016/"}},
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
                className={`body__item body__item--full`}
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

export default WelcomePage;
