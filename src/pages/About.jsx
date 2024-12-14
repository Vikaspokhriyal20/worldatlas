import React from 'react'
import countryData from '../api/countryData.json'

const About = () => {

  return (
    <section className='section-about container'>
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="grid-container">
        {countryData.map((country) => {
          const { id, interesting_fact, population, name, capital } = country;
          return (
            <div className="card" key={id}>
              <h4 className='countryname'> <span className='spanwhite'> {name}</span></h4>
              <p className='capital'>Capital : <span className='spanwhite'> {capital}</span></p>
              <p className='population'>Population :
                <span className='spanwhite'> {population}</span>
              </p>
              <p className='fact'>Interesting Fact :
                <span className='spanwhite'> {interesting_fact}</span>
              </p>
            </div>
          )
        })}

      </div>

    </section>
  )
}

export default About
