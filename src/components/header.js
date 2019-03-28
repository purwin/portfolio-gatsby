import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

import { randomize } from '../utils/nouns'
import './header.scss'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      coolThing: ``,
      coolColor: ``
    }
  }

  coolThings = [`ebooks`, `websites`, `graphics`, `GIFs`, `buttons`, `web apps`, `risographs`, `videos`, `applescripts`, `printed matter`, `posters`, `python scripts`, `databases`, `tables`, `desks`, `shelves`, `beer`]

  // hex colors from https://flatuicolors.com/palette/us
  coolColors = [`#55efc4`, `#81ecec`, `#74b9ff`, `#a29bfe`, `#00b894`, `#00cec9`, `#0984e3`, `#6c5ce7`, `#fab1a0`, `#ff7675`, `#fd79a8`, `#fdcb6e`, `#e17055`, `#d63031`, `#e84393`]

  changeNouns() {
    let noun = this.state.coolThing;
    while (noun === this.state.coolThing) {
      noun = randomize(this.coolThings)
    }
    this.setState({coolThing: noun});
  }

  changeColors() {
    let color = this.state.coolColor;
    while (color === this.state.coolColor) {
      color = randomize(this.coolColors)
    }
    this.setState({coolColor: color});
  }

  componentDidMount() {
    setInterval(() => {
      this.changeNouns()
      this.changeColors()
    }, 1500)
 }

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
            <span className="bio"><span style={{ color: this.state.coolColor }}>{this.state.coolThing}</span>.</span>
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
