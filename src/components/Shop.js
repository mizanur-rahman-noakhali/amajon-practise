import React, { useState } from 'react';
import fakeData from '../fakeData';
const Shop = () => {
 // console.log(fakeData);
 
  const first10= fakeData.slice(0,10); 

  const [Products,setProducts] = useState(first10);
 
 
 
 return (
    <div>
      <h1>This Is Shop</h1>
      <h3>{Products.length}</h3>
      <ul>
        {
          Products.map(product=> <li>{product.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Shop;