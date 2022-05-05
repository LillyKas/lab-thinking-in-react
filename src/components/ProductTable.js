
import ProductRow from './ProductRow';
import  { useState } from 'react';
import SearchBar from './SearchBar';

const ProductsTable = props => {

  const [query, setQuery] = useState('')
  
  const [queryCheck, setQueryCheck] = useState('')
  
  return(
      <div>
      <SearchBar setQuery={setQuery} setQueryCheck={setQueryCheck}  />
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <ProductRow 
        products={props.products}
         query={query} 
         queryCheck={queryCheck}
         />
      </table>
      </div>    
  )
}

export default ProductsTable;