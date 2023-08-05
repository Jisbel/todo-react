import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setsearchValue,
}) {
  return (
    <input
      placeholder="Busca alguna tarea"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}
    />
  );
}
 
 export { TodoSearch };
  