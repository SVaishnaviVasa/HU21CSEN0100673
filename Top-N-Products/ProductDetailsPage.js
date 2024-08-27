import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = ({ location }) => {
  const { product } = location.state;

  return (
    <div>
      <h1>Product Details</h1>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailsPage;
