import React from 'react'

const Hero = () => {
  return (
    <section className="herosection" aria-label="Hero section">
      <div className="hero-overlay" />
      <div className="herotxt">
        <small>Premium Auto Leasing</small>
        <h1>Drive with Confidence.<br /> Arrive in Style.</h1>
        <p>Modern vehicles, transparent pricing, and concierge service for a stress-free experience.</p>
        <div className="hero-actions">
          <button type="button" className="btn primary">Get Started</button>
          <button type="button" className="btn secondary">Learn More</button>
        </div>
      </div>
    </section>
  )
}

export default Hero