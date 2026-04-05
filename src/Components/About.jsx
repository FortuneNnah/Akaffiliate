import React from 'react'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>About EonMotors</h2>
          <p className="about-subtitle">Premium Automotive Excellence</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              AK is a premium car brand committed to delivering exceptional quality, performance, and 
              luxury to drivers around the world. With decades of engineering excellence, we craft vehicles 
              that combine cutting-edge technology with timeless design.
            </p>
            <p>
              Every AK vehicle is built with precision, passion, and a dedication to pushing the boundaries 
              of automotive innovation. We believe that driving should be an experience—one filled with 
              confidence, comfort, and pure joy.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <h4>50+</h4>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-box">
              <h4>1M+</h4>
              <p>Happy Drivers Worldwide</p>
            </div>
            <div className="stat-box">
              <h4>45+</h4>
              <p>Countries Served</p>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Performance</h4>
              <p>Engineering the most powerful and responsive vehicles on the road</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Luxury</h4>
              <p>Premium materials and craftsmanship in every detail</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Innovation</h4>
              <p>Pioneering technology that shapes the future of driving</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
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