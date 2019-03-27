import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"

const LunchidoPage = () => {

  const lunchido_img = graphql`
    query {
      imgs:allFile(filter:{name:{regex:"/^lunchido/"}},
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
      query={lunchido_img}
      render={data => {
        const imgs = data.imgs.edges;

        return (
          <Work
            title={`Lunchido!`}
            bio={
              [
                `Let your computer decide lunch for you!`,
                `Single-page web app that offers lunch suggestions based on your location and current food cravings.`,
                `<a href="lunchido/index.html">Try it out!</a>`,
                `<a href="https://github.com/purwin/lunchido">Github</a>`,
              ]
            }
            body={
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
            }
          />
        );}
      }
    />
  );

}

export default LunchidoPage;
