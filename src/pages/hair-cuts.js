import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Work from '../components/templates/work';
import haircuts_gif from '../images/ebook-hair-cuts-02.gif'

const HairCutsPage = () => {
	const bio = [`A narrated kids picture ebook.`];

	const haircuts_img = graphql`
		query {
			imgs:allFile(filter:{relativePath:{regex:"/^ebook-hair-cuts-\\\\d+.+png$/"}}) {
				edges {
					node {
					 childImageSharp {
						 fluid(maxWidth:1200) {
							...GatsbyImageSharpFluid
						 }
					 }
					}
				}
			},
			cover:file(relativePath: {eq:"ebook-hair-cuts-cover.png"})
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
			query={haircuts_img}
			render={data => {
				const imgs = data.imgs.edges;
				const haircuts_cover = data.cover;

				console.log(imgs);
				console.log(haircuts_cover);
	
				return (
					<Work
						title={`Hair Cuts`}
						cover={<Img fluid={haircuts_cover.childImageSharp.fluid} />}
						bio={bio}
						body={
							<>
							<div className={`body__row`}>
								<div className={`body__item body__item--full`}>
									<img src={haircuts_gif} alt="" />
								</div>
							</div>
							{imgs.map(({node}) => (
								<div className={`body__row`}>
									<div
										key={node.id}
										className={`body__item body__item--full`}
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

export default HairCutsPage;