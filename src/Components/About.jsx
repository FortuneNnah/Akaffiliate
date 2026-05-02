import React from 'react'
import carImage from '../assets/Car4.jpg'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About EonMotors</h2>
          <p className="about-subtitle">Premium Automotive Excellence</p>
        </div>

        <div className="about-content">
          <div>
            <div className="about-text">
              <h3>Who We Are</h3>
              <p>
                EonMotors is a premium car brand committed to delivering exceptional quality, performance, and 
                luxury to drivers around the world. With decades of engineering excellence, we craft vehicles 
                that combine cutting-edge technology with timeless design.
              </p>
              <p>
                Every AK vehicle is built with precision, passion, and a dedication to pushing the boundaries 
                of automotive innovation. We believe that driving should be an experience—one filled with 
                confidence, comfort, and pure joy.
              </p>
            </div>

            <div className="about-quick-stats">
              <div className="quick-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="quick-stat">
                <div className="stat-number">1M+</div>
                <div className="stat-label">Happy Drivers Worldwide</div>
              </div>
              <div className="quick-stat">
                <div className="stat-number">45+</div>
                <div className="stat-label">Countries Served</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src={carImage} alt="EonMotors premium car" />
            <div className="image-overlay"></div>
          </div>
        </div>

        <div className="about-values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="4"/>
                  <path d="M20 38L32 22L44 34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 22L32 44" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Performance</h4>
              <p>Engineering the most powerful and responsive vehicles on the road</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 36L32 14L48 36L32 50L16 36Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
                  <path d="M25 29L32 16L39 29" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Luxury</h4>
              <p>Premium materials and craftsmanship in every detail</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 12C23.1634 12 16 19.1634 16 28C16 36.8366 23.1634 44 32 44C40.8366 44 48 36.8366 48 28C48 19.1634 40.8366 12 32 12Z" stroke="currentColor" strokeWidth="4"/>
                  <path d="M32 44V52" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  <path d="M24 24L40 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Innovation</h4>
              <p>Pioneering technology that shapes the future of driving</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 14C22 28 22 40 32 50C42 40 42 28 32 14Z" stroke="currentColor" strokeWidth="4"/>
                  <path d="M32 20C28 26 28 30 32 36C36 30 36 26 32 20Z" fill="currentColor"/>
                </svg>
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