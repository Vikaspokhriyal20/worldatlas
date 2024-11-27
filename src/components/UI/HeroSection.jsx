import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <main>
        <div className="container hero-col-two">
          <div className="hero-content">
            <h1 className='hero-heading'>
              Explore the world, One Country at a time
            </h1>
            <p className='hero-para'>
              Discover the history, culture, and beauty of every nation. sort,
              search, and filter through countries to find the details you need.
            </p>
            <NavLink to={'/country'}>
              <button className='button'>
                Start-Exploring
              </button>
            </NavLink>
          </div>

          <div className="hero-image">
            <img src="images/map.png" alt="map" className='banner-image' />
          </div>
        </div>
      </main>
    </>
  )
}

export default HeroSection
