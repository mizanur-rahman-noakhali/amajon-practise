import React, { useEffect, useState } from 'react';
import { getShoppingCart ,removeFromDb} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';


const Review = () => {
           const [cart, setCart]= useState([]);    
           const removeProduct=(productKey)=>{
    
            const newCart=cart.filter(product=>product.key !== productKey);
            setCart(newCart);
            removeFromDb(productKey);
        
          }     
           
           useEffect(()=> {
            //cart
            const saveCart=getShoppingCart();
             const productKeys=Object.keys(saveCart);

             const cartProduct = productKeys.map(key=> {
              const product=fakeData.find(product=>product.key ===key);
              product.quantity=saveCart[key];
              return product;

             });
            setCart(cartProduct);
           },[])
  return ( 
   <>
   <div className='twin-container'>
      <div className='product-container'>
        {cart.map(product => <ReviewItem
          key={product.key}
          product={product}
          removeProduct={removeProduct}
        >
        </ReviewItem>)}
      </div>
    <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
      </div></>
       
  );
};

export default Review;