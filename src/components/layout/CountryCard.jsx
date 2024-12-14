import { NavLink } from 'react-router-dom'

const CountryCard = ({ country }) => {

    const { name, population, capital, region, flags } = country;
  return (
      <li className="card">
          <div className="img-box">
              <img src={flags.png} alt={flags.alt} className="conutry-img" />
          </div>
          <div className="countryinfo">
              <h4 className="card-title"> <span className="spanwhite">{name.common}</span></h4>
              <p>Population : <span className="spanwhite">{population.toLocaleString()}</span></p>
              <p>Region : <span className="spanwhite">{region}</span></p>
              <p>Capital : <span className="spanwhite">{capital[0]}</span> </p>
              <NavLink to={`/country/${name.common}`}>
                  <span className='read-more'>Read More...</span>
              </NavLink>
          </div>
    </li>
  )
}

export default CountryCard
