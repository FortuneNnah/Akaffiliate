import React from 'react'

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-copy">
          <span className="section-tag">Get in Touch</span>
          <h2>Ready to find your next vehicle?</h2>
          <p>Contact EonMotors for personalized support, test drive scheduling, and premium purchase guidance.</p>
          <div className="contact-info">
            <div>
              <strong>Call Us</strong>
              <p>+1 (800) 123-4567</p>
            </div>
            <div>
              <strong>Email</strong>
              <p>support@eonmotors.com</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <textarea rows="5" placeholder="Tell us what you are looking for"></textarea>
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
