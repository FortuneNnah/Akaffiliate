import React from 'react'

const serviceItems = [
  {
    title: 'Certified Vehicles',
    description: 'All cars are inspected by our master technicians to ensure premium condition and reliability.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    )
  },
  {
    title: 'Flexible Financing',
    description: 'Tailored payment plans and transparent pricing make leasing or buying simple.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22" />
        <path d="M17 5H9a4 4 0 1 0 0 8h6a4 4 0 1 1 0 8H7" />
      </svg>
    )
  },
  {
    title: 'Concierge Delivery',
    description: 'From showroom to driveway, enjoy fast delivery and premium white-glove support.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12h18" />
        <path d="M8 12V7a4 4 0 0 1 8 0v5" />
        <path d="M5 19h14" />
        <path d="M7 16v3" />
        <path d="M17 16v3" />
      </svg>
    )
  },
  {
    title: 'White-Glove Support',
    description: 'Personalized customer care and maintenance guidance for every owner.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    )
  }
]

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-intro">
          <span className="section-tag">What We Offer</span>
          <h2>Premium Automotive Services</h2>
          <p>From expert inspection to delivery, our services are designed for modern drivers who demand excellence.</p>
        </div>

        <div className="services-grid">
          {serviceItems.map((item, index) => (
            <article key={index} className="service-card">
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
