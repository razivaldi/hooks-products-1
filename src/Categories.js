import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (
    <div className="btn-container">
      {categories.map( (category, index) => {
        return (
          <button type="button"
          className="filter-btn"
          key=""
          onClick={() => ""}
          >
            
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
