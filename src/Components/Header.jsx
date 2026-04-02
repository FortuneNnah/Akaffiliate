import React from 'react'

const Header = () => {
  return (
    <header className="header" aria-label="Main navigation">
      <div className="logo">
        <h2>EonMotors</h2>
      </div>

      <nav className="navLinks" aria-label="Primary">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <a href="#quote" className="btn header-cta">Request a Quote</a>
      </div>
    </header>
  )
}

export default Header