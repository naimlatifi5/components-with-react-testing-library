import React from 'react'

const SearchInput = ({ value, handleChangeValue }) => {
  return (
    <input
      id="search"
      data-testid="search-input"
      type="search"
      name="search-input"
      className="search-input"
      placeholder="Search..."
      value={value}
      onChange={(e) => handleChangeValue(e)}
    />
  )
}

export default SearchInput
