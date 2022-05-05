import  { useState } from 'react';

const SearchBar = props => {

  const [inStock, setStock] = useState('')


  
const handleInputChange = event => {
      props.setQuery(event.target.value)
    }

    const handleInputChangeBox = event => {
      setStock(event.target.checked)
      props.setQueryCheck(event.target.checked)
    }
  
    return ( <div class="filter">
      <input type="text" onChange={handleInputChange} />
      <div>
      <input type="checkbox" checked={inStock} onChange={handleInputChangeBox} /> 
      <label>Show only products which are in stock</label>
      </div>
      </div>
    )
  }
  
  export default SearchBar;