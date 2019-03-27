import React from 'react'
import { Link } from 'gatsby'

import './nav.scss'

const Nav = () => {
  const navItems = ["About", "Work", "Ebooks", "Web", "Graphics", "Misc"];
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map((item, index) => (
          <li
            className="nav__item"
            key={index}
            id={`nav-${item.toLowerCase()}`}
          >
            <Link
              to={`/${item.toLowerCase()}`}
              className={`nav__link`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;