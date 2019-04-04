import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Work from '../../components/templates/work'


const HandbookWebIndex = () => {
	const query = graphql`
		query {
			file(relativePath: {eq:"ebook-handbook-02.png"}) {
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
			query={query}
			render={data => (
				<Work
					body={
						<div className={`body__row`}>
							<div className={`body__item body__item--c`}>
								<Img fluid={data.file.childImageSharp.fluid} />
							</div>
						</div>
					}
				/>
			)}
		/>
	)
};

export default HandbookWebIndex;
