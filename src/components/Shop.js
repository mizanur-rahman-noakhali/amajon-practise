import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
const Shop = () => {
 // console.log(fakeData);
 
  const first10= fakeData.slice(0,10); 

  const [Products,setProducts] = useState(first10);
 
 
 
 return (
    <div className='shop-container'>
     
      <div className='product-container'>
      <ul>
        {
          Products.map(product=> <li>{product.name}</li>)
        }
      </ul>
    </div>
    
    <div className="cart-container">
      <h3>This is cart</h3>
    </div>
    </div>
  );
};

export default Shop;