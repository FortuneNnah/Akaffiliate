import React from 'react'

const articles = [
  {
    title: 'Exploring the Future of Electric Performance',
    date: 'May 2026',
    excerpt: 'Discover how cutting-edge powertrains and advanced driver systems are shaping a new era of automotive excellence.'
  },
  {
    title: 'How to Choose the Right Luxury EV',
    date: 'April 2026',
    excerpt: 'Learn the key factors that differentiate a premium electric vehicle from the rest of the market.'
  },
  {
    title: 'Why Personalized Delivery Matters',
    date: 'March 2026',
    excerpt: 'See why concierge delivery and care-forward service are essential for modern car ownership.'
  }
]

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="section-intro">
          <span className="section-tag">Latest Insights</span>
          <h2>News & Updates</h2>
          <p>Stay informed with the latest industry trends and EonMotors news.</p>
        </div>

        <div className="blog-grid">
          {articles.map((article, index) => (
            <article key={index} className="blog-card">
              <span className="blog-date">{article.date}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <a href="#contact" className="blog-link">Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
