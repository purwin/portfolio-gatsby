import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"


const LeavesPage = () => {
	const query = graphql`
    query {
      imgs:allFile(filter:{relativePath:{regex:"/^ebook-leaves-\\\\d.+png/"}}, sort:{fields:name}) {
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
        const leaves_cover = imgs.shift();

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
        );
        
        return (
          <Work
            title={`Leaves of Grass`}
            cover={<Img fluid={leaves_cover.node.childImageSharp.fluid} />}
            bio={
              [
                `“The Deathbed Edition”. An ebook of Mr. Whitman's epic 293-poem collection, broken up and styled from a .txt file using only RegEx.`,
              ]
            }
            body={<Body />}
          />
			)}}
		/>
	)
};

export default LeavesPage;
