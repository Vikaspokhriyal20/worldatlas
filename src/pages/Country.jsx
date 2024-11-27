import React, { useEffect, useState, useTransition } from 'react'
import { getCountryData }  from '../api/postApi';
import CountryCard from '../components/layout/CountryCard';
import Loader from '../components/UI/Loader';
import SearchFilter from '../components/layout/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState('all');


  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
    })
  }, []);


  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  }

  const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));
  
// loader when data is take a time to fetch
  if (isPending) return <Loader />;

  return (
    <section className='country'>
      <div className="container">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />

        <ul className='grid-country'>
          {filterCountries.map((curCountry , index) => {
            return <CountryCard country={curCountry} key={index}/>
          })}
        </ul>
     </div>
    </section>
  )
}

export default Country
