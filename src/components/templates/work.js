import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../templates/layout'
import './work.scss'


const Work = ({ title, cover, bio, body }) => (
	<Layout>
		<div className={`feature handbook`}>
			<div className={`feature__head`}>
				<h1 className={`feature__h1`}>{title}</h1>
			</div>
			{cover && 
				<div className={`feature__cover`}>
					{cover}
				</div>
			}
			{bio && 
				<div className={`feature__bio`}>
					{bio.map((item, index) => (
						<p
							className={`feature__p`}
							key={index}
						>
							{item}
						</p>
					))}
				</div>
			}
			<div className={`feature__body`}>
				{body}
			</div>
		</div>
	</Layout>
);

Work.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  bio: PropTypes.array,
  body: PropTypes.string,
}

export default Work;
