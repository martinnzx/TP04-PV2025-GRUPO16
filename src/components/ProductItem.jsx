import React from 'react';

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="product-item">
      <p>ID            : {product.id}</p>
      <p>Descripción   : {product.descripcion}</p>
      <p>Precio        : ${product.precioUnitario}</p>
      <p>Descuento     : {product.descuento}%</p>
      <p>Precio c/desc.: ${product.precioConDescuento}</p>
      <p>Stock         :  {product.stock} unidad/es</p>
      <button onClick={onEdit}  >Editar  </button>
      <button onClick={onDelete}>Eliminar</button>
    </div>
  );
}

export default ProductItem;
