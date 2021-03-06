import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Work from '../components/templates/work'
import handbook_cover from '../images/ebook-handbook-01.gif'
import handbook_img_03 from '../images/ebook-handbook-03.gif'
import handbook_img_04 from '../images/ebook-handbook-04.gif'
import handbook_img_05 from '../images/ebook-handbook-05.gif'
import handbook_img_06 from '../images/ebook-handbook-06.gif'


const Handbook = () => {
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
					title={`A Handbook for Sailing`}
					cover={<img src={handbook_cover} alt="" />}
					bio={
						[
							`An interactive EPUB jam-packed with JavaScript and CSS animations.`,
							`Check out the web version here.`,
						]
					}
					body={
						<>
							<div className={`body__row`}>
								<div className={`body__item body__item--c`}>
									<Img fluid={data.file.childImageSharp.fluid} />
								</div>
							</div>
							<div className={`body__row`}>
								<div className={`body__item body__item--c`}>
									<img src={handbook_img_03} alt="" />
								</div>
							</div>
							<div className={`body__row`}>
								<div className={`body__item body__item--c`}>
									<img src={handbook_img_04} alt="" />
								</div>
							</div>
							<div className={`body__row`}>
								<div className={`body__item body__item--c`}>
									<img src={handbook_img_05} alt="" />
								</div>
							</div>
							<div className={`body__row`}>
								<div className={`body__item body__item--c`}>
									<img src={handbook_img_06} alt="" />
								</div>
							</div>
						</>
					}
				/>
			)}
		/>
	)
};

export default Handbook;
