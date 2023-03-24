import React from 'react'
import ServiceContainer from '../companents/Servic/ServiceContainer'
import About from '../companents/About/About'
import ReviewsContainer from '../companents/Reviews/ReviewsContainer'
import Work from '../companents/Work/Work'
import Contact from '../companents/Contact/Contact'
import Header from '../companents/Header/Header'

const Homes = () => {
  return (
    <>
    <Header />
    <div id='content-wrapper'>
    <ServiceContainer />
    <About />
    
    <ReviewsContainer />
    <Work />
    <Contact />
    
 
    </div>
    </>
  )
}

export default Homes