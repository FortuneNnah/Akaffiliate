import React from 'react'
// Adjust this path to wherever Car1.jpg lives in your project.
import heroImage from '../assets/Car6.jpg'

/*
  Hero (poster style)
  - Black stage with a rounded photo frame.
  - The headline word is split in two: "Dri" sits on a black notch cut into the
    photo (white letters), "ve" sits on the photo itself (black letters).
  - The notch width follows the first span automatically, so changing the
    word only means changing the two spans below.
*/
const Hero = () => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__inner">
        {/* Top row: label on the left, short quote on the right */}
        <div className="hero__top">
          <small className="hero__label">Premium Auto Leasing</small>
          <p className="hero__quote">
            Drive with confidence.
            <br />
            Arrive in style.
          </p>
        </div>

        {/* Photo + headline */}
        <div className="hero__visual">
          {/* Replace the alt text with a description of your photo */}
          <img className="hero__image" src={heroImage} alt="A premium vehicle available for lease" />
          <span className="hero__scrim" aria-hidden="true" />

          <h1 className="hero__title" aria-label="Ready to drive">
            <span className="hero__eyebrow" aria-hidden="true">Ready to</span>
            <span className="hero__word" aria-hidden="true">
              <span className="hero__word-in">Dri</span>
              <span className="hero__word-on">ve?</span>
            </span>
          </h1>
        </div>

        {/* Supporting copy, centered under the photo */}
        <p className="hero__copy">
          Modern vehicles, transparent pricing, and concierge service for a stress-free experience.
        </p>

        {/* Actions */}
        <div className="hero__bottom">
          <div className="hero__actions">
            <button type="button" className="hero__button hero__button--primary">Get Started</button>
            <button type="button" className="hero__button hero__button--ghost">Learn More</button>
          </div>
          <span className="hero__scroll" aria-hidden="true">Scroll to explore &darr;</span>
        </div>
      </div>
    </section>
  )
}

export default Hero