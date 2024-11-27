import React from 'react'

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
    }

    const handleOption = (event) => {
        event.preventDefault();
        setFilter(event.target.value);
    }

    const sortCountries = (value) => {
        const sortCountry = [...countries].sort((a, b) => {
            return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        });
        setCountries(sortCountry);
    }
    return (
        <section className='search-filter'>
            <input
                type="text"
                placeholder='Search'
                value={search}
                onChange={handleInputChange}
                className='form-control'
            />

            <div className='btn-container'>
                <button className='button' onClick={() => sortCountries('asc')}>Ascending </button>
                <button className='button' onClick={() => sortCountries('des')}>Descending</button>
            </div>

            <div>
                <select  className='form-control' onChange={handleOption} value={filter}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}

export default SearchFilter
