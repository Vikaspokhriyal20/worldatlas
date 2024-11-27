import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../../api/postApi';
import Loader from '../UI/Loader';

const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      console.log(res);
    })
  }, []);

  if (isPending) return <Loader />;

  return (
    <section>
      <div className='container'>
        <div className='card  m-2'>
          {country && (
            <div className="grid-two-col">
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className='flag'
              />
              <div className="country-content">
                <h3> <span className="spanwhite">{country.name.official}</span></h3>
                <div className="countryinfo">
                  <p> Region :<span className='spanwhite'> {country.region}</span></p>
                  <p> Capital :<span className='spanwhite'> {country.capital} </span></p>
                  <p> Top Level Domian :<span className='spanwhite'> {country.tld[0]} </span></p>
                  <p>Population : <span className='spanwhite'>{country.population}</span></p>
                  <p>Subregion : <span className='spanwhite'>{country.subregion}</span></p>
                  <p>Currencies : <span className='spanwhite'>
                    {Object.keys(country.currencies).map((curEle) => country.currencies[curEle].name).join(', ')} , {Object.keys(country.currencies).map((curEle) => country.currencies[curEle].symbol).join(', ')}
                  </span></p>
                  <p>
                    Languages : <span className='spanwhite'>
                      {Object.keys(country.languages).map((key) => country.languages[key]).join(' , ')}
                    </span>
                  </p>
                  <p>
                    Borders Share : <span className='spanwhite'>
                      {Object.keys(country.borders).map((key) => country.borders[key]).join(' , ')}
                    </span>
                  </p>

                  <p>
                    Native Names : <span className='spanwhite'>
                      {Object.keys(country.name.nativeName).map((key) => country.name.nativeName[key].common).join(' , ')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          <div className="back-btn">
            <NavLink to={'/country'}>
                Go Back
            </NavLink>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CountryDetails
