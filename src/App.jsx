
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { useState, useEffect, useMemo, useCallback } from 'react';

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toString().includes(searchTerm)
    );
  }, [products, searchTerm]);

  const addProduct = useCallback((product) => {
    setProducts(prev => [...prev, product]);
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts(prev => prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
    setEditingProduct(null);
  }, []);


  const deleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);


  return (
    <div className="container">
      <h2>Gestión de Productos - PV2025 - Grupo 16</h2>
      <p> Buscar: </p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <ProductForm
        addProduct={addProduct}
        updateProduct={updateProduct}
        editingProduct={editingProduct}
      />
      <ProductList
        products={filteredProducts}
        setEditingProduct={setEditingProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );

}

export default App;