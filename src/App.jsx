
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { useState, useEffect, useMemo, useCallback } from 'react';

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    console.log('Productos actualizados:', products);
  }, [products]);

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
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, estado: false } : p)));
  }, []);

  const handleEdit = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  return (
    <div className="container">
      <h2>Gestión de Productos - PV2025 - Grupo 16</h2>
      <p id="label_buscar"> Buscar: </p>
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
