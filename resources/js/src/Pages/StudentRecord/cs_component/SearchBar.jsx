import React from 'react'

function SearchBar() {
  return (
    <div className="my-auto d-none d-lg-block lg:w-1/3">
        <input type="text"
            className="form-control search-box text-sm" 
            placeholder="Search..." 
        />
    </div>
  )
}

export default SearchBar