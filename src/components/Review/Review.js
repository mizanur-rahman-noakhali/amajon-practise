import React, { useEffect, useState } from 'react';
import { getShoppingCart ,removeFromDb} from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart,setCart]=useState([]);

  const removeProduct=(productkey)=>{
    
    const newCart=cart.filter(product=>product.key !== productkey);
    setCart(newCart);
    removeFromDb(productkey);

  }
       useEffect( () => {
    //cart
    const savedCart=getShoppingCart();
    const productKeys=Object.keys(savedCart);
    const cartProducts=productKeys.map(key=> {
      const product=fakeData.find(product=> product.key===key);
      product.quantity=savedCart[key];
      
      return product;
    } )
    setCart(cartProducts);
  },[])
  return (
    <div>
      
      
      {
        cart.map(product=>
        <ReviewItem
        key={product.key}
         product={product}
          removeProduct={removeProduct}
          >
         </ReviewItem>)
      }
    </div>
  );
};

export default Review;