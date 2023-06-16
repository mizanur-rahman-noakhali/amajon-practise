import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Cart = (props) => {
  const cart=props.cart;
 // console.log(cart);
 // const total=cart.reduce((total, prd) => total+prd.price,0)
 let total=0;
 for(let i=0;i<cart.length;i++){
 const product=cart[i];
    total=total+product.price;
}
let shipping =0 ;
if( total>50){
  shipping=0;
}
else if (total >35){
  shipping=4.99;
}
else if (total > 0){
  shipping =12.99;
}
 const tax=(total/10).toFixed(2);
 
 const grandTotal=(total+shipping+Number(tax)).toFixed(2);

 const formatNumber = num =>{
  const precision=num.toFixed(2);
  return Number(precision);

 }
  return (
    <div>
      <h4 className='bg-danger'> Order summary</h4>
      <p> Item ordered:{cart.length}</p>
      <p> product price:{formatNumber(total)}</p>
      <p><small>shipping cost:{shipping}</small></p>
      <p>TAX+VAT:{tax}</p>
      <p> Total Price:{grandTotal}</p>
      <br/>
      <Link to='/review'>
      <button className='main-button'> Review Order</button>
      </Link>
    </div>
  );
};

export default Cart;