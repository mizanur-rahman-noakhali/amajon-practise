import React from 'react';

const ReviewItem = (props) => {
  const {name,quantity}=props.product;
  const ReviewItemStyle={
    borderBottom:'1px solid gray',
    marginBottom:'5px',
    paddingBottom:'5px',
    marginLeft:'200px'
  }  ; 
  return (
    <div style={ReviewItemStyle} className='review-item'>
      <h1 className='product-name'>{name}</h1>
      <p>Quantity:{quantity}</p>
      <br/>
      <button className='main-button'>Remove</button>
    </div>
  );
};

export default ReviewItem;