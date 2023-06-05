import React from 'react';
import './Product.css';
const Product = (props) => {
  console.log(props.product.name)
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className='product'>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 class='product-name'>{name}</h3>
        <br />
        <p><small>by:{seller}</small></p>
        <p>${price}</p>
        <br />
        <p><small>only{stock}left in stock-order soon</small></p>
      </div>

    </div>
  );
};

export default Product;