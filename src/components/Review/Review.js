import React, { useEffect, useState } from 'react';
import { getShoppingCart ,removeFromDb,deleteShoppingCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';


const Review = () => {
           const [cart, setCart]= useState([]);   
           const [orderPlaced,setOrderPlaced]=useState([false]); 

           const handlePlaceOrder=()=>{
            setCart([]);
            setOrderPlaced(true);
            deleteShoppingCart();
            
           }   
           
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
           let thankYou;
           if(orderPlaced){
            thankYou=<img src={happyImage} alt="" />
           }
  return ( 
   <>
   <div className='twin-container'>
      <div className='product-container'>
        {cart.map(product => <ReviewItem
          key={product.key}
          product={product}
          removeProduct={removeProduct}>
        
        </ReviewItem>)}
          {thankYou}
      </div>
    <div className='cart-container'>
        <Cart cart={cart}>
       <button onClick={handlePlaceOrder} className='main-button'>Place Order</button>
        </Cart>
      </div>
      </div></>
       
  );
};

export default Review;