import React, { useState } from 'react';
import ProductList from './ProductList'
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [productItems, setProductItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {

    if(category === 'all'){
      setProductItems(items);
      return;
    }

    const newItems = items.filter( (item) => item.category === category);

    setProductItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
      </section>
      <ProductList items={productItems} />
    </main>
  );
}

export default App;
