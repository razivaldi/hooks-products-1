import React from 'react';

const Prices = ({listPrices, filterPrice }) => {
  return (
    <div className="btn-container">
      {listPrices.map( (price, index) => {
        return (
          <button type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterPrice(price)}
          >
            {price}
          </button>
        )
      })}
    </div>
  );
};

export default Prices;