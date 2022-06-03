import React from 'react'

const CountryCard = ({ country }) => {
  return (
    <div className="country-cars">
      <div>Country name: {country.name}</div>
      <div>Country capital: {country.capital}</div>
      <div>Country population: {country.population}</div>
      <div>Country currency: {country.currency}</div>
    </div>
  )
}

export default CountryCard
