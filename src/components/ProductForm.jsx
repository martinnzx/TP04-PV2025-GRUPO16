import React, { useState, useEffect } from 'react';


const initialState = {
  id: '',
  descripcion: '',
  precioUnitario: '',
  descuento: '',
  stock: '',
  estado: true,
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
      precioConDescuento: parseFloat(precioConDescuento.toFixed(2)),
      estado: true,

    };

    if (editingProduct) {
      updateProduct(finalProduct);
    } else {
      finalProduct.id = Date.now();
      addProduct(finalProduct);
    }

    setProduct(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="descripcion" placeholder="Descripción" value={product.descripcion} onChange={handleChange} required />
      <input name="precioUnitario" type="number" placeholder="Precio" value={product.precioUnitario} onChange={handleChange} required />
      <input name="descuento" type="number" placeholder="Descuento (%)" value={product.descuento} onChange={handleChange} required />
      <input name="stock" placeholder="Stock" type="number" value={product.stock} onChange={handleChange} required />
      <button type="submit">{editingProduct ? 'Modificar' : 'Agregar'}</button>
    </form>
  );
}

export default ProductForm;