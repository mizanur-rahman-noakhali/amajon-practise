import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
  const [cart,setCart]=useState([]);
       useEffect(()=>{
    //cart
    const savedCart=getShoppingCart();
    const productKeys=Object.keys(savedCart);
    const cartProducts=productKeys.map(key=> {
      const product=fakeData.find(product=> product.key===key);
      product.quantity=savedCart[key];
      return product;
    }, []);
    setCart(cartProducts);
  })
  return (
    <div>
      <h1>item Review:{cart.length}</h1>
      
      {
        cart.map(product=><ReviewItem product={product}></ReviewItem>)
      }
    </div>
  );
};

export default Review;