import React, { useState, useEffect } from 'react';


const initialState = {
  id: '',
  descripcion: '',
  precioUnitario: '',
  descuento: '',
  stock: '',
};


function ProductForm({ addProduct, updateProduct, editingProduct }) {
  const [product, setProduct] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const precioConDescuento = product.precioUnitario * (1 - product.descuento / 100);
    const finalProduct = {
      ...product,
      precioUnitario: parseFloat(product.precioUnitario),
      descuento: parseFloat(product.descuento),
      stock: parseInt(product.stock),
      precioConDescuento: parseFloat(precioConDescuento.toFixed(2))
    };

    setProduct(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      {
      }
      <button type="submit">{editingProduct ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
}

export default ProductForm;