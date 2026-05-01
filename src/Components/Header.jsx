import React, { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="header" aria-label="Main navigation">
      <div className="logo">
        <h2>EonMotors</h2>
      </div>

      <button
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-controls="primary-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navLinks ${isOpen ? 'active' : ''}`} aria-label="Primary" id="primary-navigation">
        <ul>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className="header-actions">
        <a href="#quote" className="btn header-cta">Request a Quote</a>
      </div>
    </header>
  )
}

export default Header