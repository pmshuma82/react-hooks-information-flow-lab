import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">All</option>
      <option value="Dairy">Dairy</option>
      <option value="Produce">Produce</option>
      <option value="Dessert">Dessert</option>
    </select>
  );
};

export default Filter;
