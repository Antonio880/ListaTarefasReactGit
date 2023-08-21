import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ products, onRemove }) {
  return (
    <div>
      {products.length > 0 && 
        <ul style={{display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', listStyle: 'none'}} >
        {
          products.map((product, index) => (
            <ProductCard key={index} product={product} onRemove={onRemove} />
          ))
        }
        </ul>
      }
    </div>
  );
};