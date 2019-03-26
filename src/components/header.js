import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.scss'

const Header = ({ siteTitle }) => {
  const coolThings = ['ebooks', 'websites', 'graphics', 'GIFs', 'buttons', 'web apps', 'risographs', 'videos', 'applescripts', 'printed matter', 'posters', 'python scripts', 'databases', 'tables', 'desks', 'shelves', 'beer'];

  // const showCoolThings = () => {

  // };
  return (
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
        <p className="header__p">
          <span className="bio">makes </span>
          <span className="bio"><span id="id_noun">{coolThings[0]}</span>.</span>
        </p>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
