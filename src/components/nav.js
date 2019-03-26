import React from 'react'

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
            {item}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav;