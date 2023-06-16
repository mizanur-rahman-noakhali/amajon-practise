import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const ProductDetail = () => {
  const {productkey}=useParams()
  return (
    <div>
      <h1>{productkey} Detail coming soooooooon</h1>
    </div>
  );
};

export default ProductDetail;