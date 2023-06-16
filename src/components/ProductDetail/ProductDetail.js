import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
  const {productKey}=useParams()
   const product=fakeData.find(product=> product.key===productKey);
   console.log(product);
  return (
    <div>
      <h1>Your Product Detail.</h1>
       <Product showAddToCard={false} product={product}></Product> 
    </div>
  );
};

export default ProductDetail;