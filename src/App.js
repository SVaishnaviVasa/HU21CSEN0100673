import React from 'react';
import products from './data/products.json';  

const App = () => {
  return (
    <div>
      <h1>Top Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.productName}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>
              Availability: 
              {product.availability === 'yes' ? ' In Stock' : ' Out of Stock'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
