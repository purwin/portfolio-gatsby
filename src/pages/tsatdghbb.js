import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from '../components/templates/work';
import tsatdghbb_gif from '../images/ebook-tsatdghbb-05.gif'

const TSATDGHBBPage = () => {
	const bio = [`An interactive ebook. Randomize the series of events and create a whole new plot to this thriller. All it takes is a little JavaScript.`];

	const query = graphql`
		query {
			imgs:allFile(filter:{relativePath:{regex:"/^ebook-tsatdghbb-\\\\d+.+png$/"}}) {
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
			cover:file(relativePath: {eq:"ebook-tsatdghbb-cover.png"})
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

				return (
					<Work
						title={`The Self-Appointed Town Detective Gets Her Big Break`}
						cover={<Img fluid={cover.childImageSharp.fluid} />}
						bio={bio}
						body={
							<>
								<div className={`body__row`}>
								{imgs.map(({node}) => (
									<div
										key={node.id}
										className={`body__item`}
									>
										<Img fluid={node.childImageSharp.fluid} />
									</div>
								))}
								</div>
								<div className={`body__row`}>
									<div className={`body__item body__item--full`}>
										<img src={tsatdghbb_gif} alt="" />
									</div>
								</div>
							</>
						}
					/>
				);}
			}
		/>
	);
};

export default TSATDGHBBPage;