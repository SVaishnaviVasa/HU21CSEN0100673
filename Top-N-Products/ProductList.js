import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from './ProductCard';

const ProductList = ({ company, category, top, minPrice, maxPrice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts(company, category, top, minPrice, maxPrice);
      setProducts(data);
    };
    loadProducts();
  }, [company, category, top, minPrice, maxPrice]);

  return (
    <div>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
