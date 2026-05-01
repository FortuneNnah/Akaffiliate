import React from 'react'

const reviews = [
  {
    quote: 'The purchasing process was seamless, and the team made sure my new car was delivered exactly when I needed it.',
    name: 'Aisha K.',
    role: 'Entrepreneur'
  },
  {
    quote: 'EonMotors exceeded every expectation with their premium vehicles and attentive service.',
    name: 'Marcus L.',
    role: 'Tech Executive'
  },
  {
    quote: 'A modern experience from browsing to signing. The car feels exceptional and every detail is polished.',
    name: 'Leila R.',
    role: 'Creative Director'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section" aria-label="Customer testimonials">
      <div className="testimonials-container">
        <div className="section-intro">
          <span className="section-tag">Customer Praise</span>
          <h2>Trusted by Drivers Worldwide</h2>
          <p>Real stories from customers who chose EonMotors for performance, luxury, and peace of mind.</p>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-quote">“{review.quote}”</p>
              <div className="testimonial-author">
                <strong>{review.name}</strong>
                <span>{review.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
