import React from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Products from './Components/Products'
import Testimonials from './Components/Testimonials'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return(
  <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Products />
    <Testimonials />
    <Blog />
    <Contact />
    <Footer />
  </>
  )
}
export default App