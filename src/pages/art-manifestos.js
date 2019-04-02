import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from '../components/templates/work';

const ManifestosPage = () => {
	const bio = [`Heavily-formatted reflow EPUB.`];

	const query = graphql`
		query {
			imgs:allFile(filter:{relativePath:{regex:"/^ebook-manifestos-\\\\d+.+png$/"}}) {
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
			cover:file(relativePath: {eq:"ebook-manifestos-cover.png"})
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
						title={`Art Manifestos`}
						cover={<Img fluid={cover.childImageSharp.fluid} />}
						bio={bio}
						body={
							<>
							{imgs.map(({node}, index) => (
								<div
									key={index}
									className={`body__row`}
								>
									<div
										key={node.id}
										className={`body__item`}
									>
										<Img fluid={node.childImageSharp.fluid} />
									</div>
								</div>
							))}
							</>
						}
					/>
				);}
			}
		/>
	);
};

export default ManifestosPage;