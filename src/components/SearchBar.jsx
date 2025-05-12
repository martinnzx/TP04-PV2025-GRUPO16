import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    
    <input id="BarraDeBusqueda"
      type="text"
      placeholder="Buscar por descripción o ID"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;