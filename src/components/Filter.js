import React from 'react';

const Filter = ({ onCategoryChange }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="all">All</option>
      <option value="food">Food</option>
      <option value="electronics">Electronics</option>
      <option value="clothing">Clothing</option>
      {/* Add more options as needed */}
    </select>
  );
};

export default Filter;
