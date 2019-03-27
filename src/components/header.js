import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import './header.scss'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      coolThing: this.coolThings[0]
    }
  }

  coolThings = [`ebooks`, `websites`, `graphics`, `GIFs`, `buttons`, `web apps`, `risographs`, `videos`, `applescripts`, `printed matter`, `posters`, `python scripts`, `databases`, `tables`, `desks`, `shelves`, `beer`]

  render() {
    return (
      <header>
        <div>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
            >
              {this.props.siteTitle}
            </Link>
          </h1>
          <p className="header__p">
            <span className="bio">makes </span>
            <span className="bio"><span id="id_noun">{this.state.coolThing}</span>.</span>
          </p>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
