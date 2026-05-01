import React from 'react'

const About = () => {
  const PerformanceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
    </svg>
  )

  const LuxuryIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
    </svg>
  )

  const InnovationIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <circle cx="9" cy="10" r="1"></circle>
      <circle cx="12" cy="10" r="1"></circle>
      <circle cx="15" cy="10" r="1"></circle>
    </svg>
  )

  const SustainabilityIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m3.5 6c.83 0 1.5-.67 1.5-1.5S16.33 4 15.5 4 14 4.67 14 5.5 14.67 7 15.5 7m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 4 8.5 4 7 4.67 7 5.5 7.67 7 8.5 7m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
    </svg>
  )

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About EonMotors</h2>
          <p className="about-subtitle">Redefining the Future of Automotive Excellence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              EonMotors is a leading premium automotive brand committed to delivering exceptional quality, 
              innovation, and luxury to drivers worldwide. With a legacy of engineering excellence and a vision 
              for the future, we craft vehicles that combine cutting-edge technology with timeless design.
            </p>
            <p>
              Every EonMotors vehicle is engineered with precision, passion, and an unwavering dedication to 
              pushing the boundaries of automotive innovation. We believe that driving should be an experience—
              one filled with confidence, comfort, performance, and pure joy.
            </p>
            <div className="about-quick-stats">
              <div className="quick-stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="quick-stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Happy Drivers</span>
              </div>
              <div className="quick-stat">
                <span className="stat-number">45+</span>
                <span className="stat-label">Countries Served</span>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="assets/img/Car1.jpg" alt="EonMotors Vehicle" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div className="about-values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <PerformanceIcon />
              </div>
              <h4>Performance</h4>
              <p>Engineering the most powerful and responsive vehicles on the road</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <LuxuryIcon />
              </div>
              <h4>Luxury</h4>
              <p>Premium materials and craftsmanship in every detail</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <InnovationIcon />
              </div>
              <h4>Innovation</h4>
              <p>Pioneering technology that shapes the future of driving</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <SustainabilityIcon />
              </div>
              <h4>Sustainability</h4>
              <p>Committed to eco-friendly vehicles and sustainable practices</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About