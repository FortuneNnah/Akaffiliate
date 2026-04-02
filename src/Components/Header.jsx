import React from 'react'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>AKautomobile</h1>
      </div>
        <nav className='navLinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </nav>
    </div>
  )
}

export default Header