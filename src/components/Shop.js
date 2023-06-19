import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import Product from './Product/Product';
import Cart from './Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import Review from './Review/Review';
import { useEffect } from 'react';
const Shop = () => {
 // console.log(fakeData);
 
  const first10= fakeData.slice(0,10); 

  const [Products,setProducts] = useState(first10);
  const [cart,setCart] = useState([]);

  useEffect(()=>{
         const savedCart=getShoppingCart();
         const productKeys=Object.keys(savedCart);
         const previousCart=productKeys.map(existingKey=>{
          const product=fakeData.find(product=> product.key===existingKey);
          product.quantity=savedCart[existingKey];
          return product;

         })
         setCart(previousCart);
  },[])
 
 const handleAddProduct =(product) =>{
  const toBeAddedKey=product.key;
const sameProduct=cart.find(product=> product.key ===  toBeAddedKey);
let count=1;
let newCart;
if(sameProduct){
   count=sameProduct.quantity+1;
      sameProduct.quantity = count ;
      const others=cart.filter(product=>product.key!==toBeAddedKey);
      newCart=[...others,sameProduct];
}

else{
  product.quantity=1;
  newCart = [...cart,product];
}

  setCart(newCart)
  addToDb(product.key,count);
 }
 
 return (
    <div className='twin-container'>
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