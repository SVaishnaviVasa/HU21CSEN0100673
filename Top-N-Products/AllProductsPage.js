import React, { useState } from 'react';
import ProductList from '../components/ProductList';

const AllProductsPage = () => {
  const [company, setCompany] = useState('AMZ');
  const [category, setCategory] = useState('Laptop');
  const [top, setTop] = useState(10);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(10000);

  return (
    <div>
      <h1>All Products</h1>
      <ProductList company={company} category={category} top={top} minPrice={minPrice} maxPrice={maxPrice} />
    </div>
  );
};

export default AllProductsPage;
