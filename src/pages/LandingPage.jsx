import React from 'react'
import Navbar from '../component/navbar/Navbar'
import Home from '../component/home/Home'
import Services from '../component/home/Services'
import Contact from '../component/Contact/Contact'
import Footer from '../component/footer/Footer'



function LandingPage() {
  return (
    <div>
      
      <Navbar />
      <Home />
      <Services />
      <Contact />
      <Footer />

    </div>
  )
}

export default LandingPage
