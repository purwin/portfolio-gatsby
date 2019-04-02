import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from '../components/templates/work';

const IAmSorryPage = () => {
	const title = `I Am Sorry, DF297`

	const bio = [`An illustrated short-story ebook. Written by the one and only Dave Burdick.`];

	const query = graphql`
		query {
			imgs:allFile(filter:{relativePath:{regex:"/^ebook-i-am-sorry-\\\\d+.+png$/"}}) {
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
			},
			cover:file(relativePath: {eq:"ebook-i-am-sorry-cover.png"})
			{
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
			render={data => {
				const imgs = data.imgs.edges;
				const cover = data.cover;
				const Body = () => (
					<>
					{imgs.map(({node}, index) => (
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
					))}
					</>
				);

				return (
					<Work
						title={title}
						cover={<Img fluid={cover.childImageSharp.fluid} />}
						bio={bio}
						body={<Body />}
					/>
				);}
			}
		/>
	);
};

export default IAmSorryPage;