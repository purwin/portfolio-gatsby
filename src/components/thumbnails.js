import React from 'react'
import { Link } from 'gatsby'

import './thumbnails.scss'
import thumb_lunchido from "../images/thumb-lunchido.png"
import thumb_handbook from "../images/thumb-handbook.gif"
import thumb_jenny from "../images/thumb-jenny.gif"
import thumb_leaves from "../images/thumb-leaves.png"
import thumb_lighthouses from "../images/thumb-lighthouses.png"
import thumb_haircuts from "../images/thumb-hair-cuts.gif"
import thumb_tsatdghbb from "../images/thumb-tsatdghbb.png"
import thumb_iamsorry from "../images/thumb-i-am-sorry.gif"
import thumb_manifestos from "../images/thumb-manifestos.gif"
import thumb_welcome2016 from "../images/thumb-welcome-2016.png"
import thumb_parks from "../images/thumb-nyc-parks.png"
import thumb_mhp from "../images/thumb-mhp.png"
import thumb_ellipsis from "../images/thumb-ellipsis.png"


const Thumbnails = ({ display }) => {
	const thumbs = [
		{
			title: "Lunchido",
			img: thumb_lunchido,
			link: "/lunchido",
			classes: "work web"
		},
		{
			title: "A Handbook for Sailing",
			img: thumb_handbook,
			link: "/handbook",
			classes: "work ebooks"
		},
		{
			title: "I’m the Jenny",
			img: thumb_jenny,
			link: "/im-the-jenny",
			classes: "work graphics"
		},
		{
			title: "Leaves of Grass",
			img: thumb_leaves,
			link: "/leaves-of-grass",
			classes: "work ebooks"
		},
		{
			title: "Lighthouses of Jersey",
			img: thumb_lighthouses,
			link: "/lighthouses",
			classes: "work graphics"
		},
		{
			title: "Hair Cuts",
			img: thumb_haircuts,
			link: "/hair-cuts",
			classes: "work ebooks"
		},
		{
			title: "The Self-Appointed Town Detective",
			img: thumb_tsatdghbb,
			link: "/tsatdghbb",
			classes: "work ebooks"
		},
		{
			title: "I Am Sorry, DF297",
			img: thumb_iamsorry,
			link: "/i-am-sorry",
			classes: "work ebooks"
		},
		{
			title: "Art Manifestos",
			img: thumb_manifestos,
			link: "/art-manifestos",
			classes: "work ebooks"
		},
		{
			title: "Welcome to 2016",
			img: thumb_welcome2016,
			link: "/welcome-2016",
			classes: "work graphics"
		},
		{
			title: "NYC Parks",
			img: thumb_parks,
			link: "/nyc-parks",
			classes: "work graphics"
		},
		{
			title: "Melville House Books",
			img: thumb_mhp,
			link: "/mhp",
			classes: "work graphics"
		},
		{
			title: "Ellipsis Press",
			img: thumb_ellipsis,
			link: "/ellipsis",
			classes: "work graphics"
		},
	];

	return (
		<div className={`thumbs`}>
			{
				thumbs.map((thumb, index) => (
						<div
							key={index}
							className={`thumb__item ${thumb.classes}`}
							hidden={display && !thumb.classes.includes(display)}
						>
							<div className={`thumb__icon`}>
								<Link to={thumb.link}>
									<img
										src={thumb.img}
										alt={thumb.title}
										className={`thumb__img`}
									/>
								</Link>
							</div>
							<h3 className={`thumb__head`}>{thumb.title}</h3>
						</div>
					)
				)
			}
		</div>
	)

};

export default Thumbnails;