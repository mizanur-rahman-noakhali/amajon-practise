import React, { useEffect, useState } from 'react';
import { getStoredCart ,removeFromDb,deleteShoppingCart} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Review = () => {
           const [cart, setCart]= useState([]);   
           const [orderPlaced,setOrderPlaced]=useState([false]); 
           const history=useHistory()

           const handleProceedCheckout=()=>{
           history.push('/Shipment');
           }   
           
            const removeProduct=(productKey)=>{
            const newCart=cart.filter(product=>product.key !== productKey);
            setCart(newCart);
            removeFromDb(productKey);
        
          }     
           
          useEffect(() => {
            // Cart
            const saveCart = getStoredCart();
            const productKeys = Object.keys(saveCart);
          
            const cartProduct = productKeys.map(key => {
              const product = fakeData.find(product => product.key === key);
          
              if (product) {
                product.quantity = saveCart[key];
                return product;
              }
          
              return null; // Handle non-existent products
            });
          
            // Filter out null values from cartProduct
            const filteredCart = cartProduct.filter(product => product !== null);
          
            setCart(filteredCart);
          }, []);
          
            
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
       <button onClick={handleProceedCheckout} className='main-button'>Proceed checkout</button>
        </Cart>
      </div>
      </div></>
       
  );
};

export default Review;