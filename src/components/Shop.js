import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import { addToDb } from '../utilities/fakedb';
const Shop = () => {
 // console.log(fakeData);
 
  const first10= fakeData.slice(0,10); 

  const [Products,setProducts] = useState(first10);
  const [cart,setCart] = useState([]);
 
 const handleAddProduct =(product) =>{
  
  const newCart=[...cart,product];
  setCart(newCart)
  addToDb(product.key);
 }
 
 return (
    <div className='shop-container'>
      <div className='product-container'>
        {
          Products.map(product=>
             <Product
             key={product.key}
             showAddToCard={true}
              product={product}
                handleAddProduct={handleAddProduct}>
              </Product>)
        }
    </div>
    
    <div className="cart-container">
      <Cart cart={cart}></Cart>
    </div>
    </div>
  );
};

export default Shop;