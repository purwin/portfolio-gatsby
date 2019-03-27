import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from "../components/templates/work"
import jenny_gif from '../images/jenny-gif.gif';

const JennyPage = () => {

  const jenny_img = graphql`
  query {
    file(relativePath: {eq:"jenny-01.png"}) {
      childImageSharp {
        fluid(maxWidth:1200) {
        ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

  return (
    <StaticQuery
      query={jenny_img}
      render={data => (
          <Work
            title={`I’m the Jenny`}
            bio={
              [
                `A risograph zine made to razz my better half.`,
              ]
            }
            body={
              <div className="feature__body">
                <div className="body__row">
                    <div className={`body__item body__item--full`}>
                      <Img fluid={data.file.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="body__row">
                    <div className={`body__item body__item--c`}>
                      <img src={jenny_gif} alt="" />
                    </div>
                </div>
              </div>
            }
          />
        )
      }
    />
  );

}

export default JennyPage;
