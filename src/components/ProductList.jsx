import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, setEditingProduct, deleteProduct }) {
  return (
    <div>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onEdit={() => setEditingProduct(product)}
          onDelete={() => deleteProduct(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;