import React from 'react'

const Products = () => {
  const cars = [
    {
      id: 1,
      name: 'Tesla Model S',
      price: 89000,
      image: 'assets/img/Car1.jpg',
      features: ['300 mile range', 'Autopilot', 'Premium Audio'],
      badge: 'Popular'
    },
    {
      id: 2,
      name: 'BMW iX',
      price: 84250,
      image: 'assets/img/Car1.jpg',
      features: ['Luxury Interior', 'All-Wheel Drive', 'Advanced Tech'],
      badge: null
    },
    {
      id: 3,
      name: 'Audi e-tron GT',
      price: 103000,
      image: 'assets/img/Car1.jpg',
      features: ['Performance', 'Rapid Charging', '4 Seats'],
      badge: 'Premium'
    },
    {
      id: 4,
      name: 'Porsche Taycan',
      price: 79900,
      image: 'assets/img/Car1.jpg',
      features: ['Sports Performance', 'Fast Charge', 'Dual Motor'],
      badge: 'Deal'
    }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <section className="products-section" id="products">
      <div className="products-container">
        <div className="products-header">
          <h2>Featured Vehicles</h2>
          <p>Discover our premium collection of electric vehicles</p>
        </div>

        <div className="products-grid">
          {cars.map(car => (
            <div key={car.id} className="product-card">
              {car.badge && <span className="product-badge">{car.badge}</span>}
              
              <div className="product-image">
                <img src={car.image} alt={car.name} />
              </div>

              <div className="product-content">
                <h3>{car.name}</h3>
                
                <ul className="product-features">
                  {car.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-label">Starting at</span>
                    <span className="price-value">{formatPrice(car.price)}</span>
                  </div>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>Interested in a specific model?</p>
          <a href="#contact" className="btn btn-large">Schedule a Test Drive</a>
        </div>
      </div>
    </section>
  )
}

export default Products
