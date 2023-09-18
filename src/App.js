import React, { useCallback, useState } from "react";
import ProductList from "./ProductList";
import Categories from "./Categories";
import items from "./data";
import Prices from "./Prices";
import List from "./List";

//Get exist categories
const existCategories = items.map((item) => item.category);
//create set of unique category
const myset = new Set(existCategories);
//create array categories contains 'all' and exist categories
const allCategories = ["All", ...myset];
const listPrices = [20000, 50000, 100000, 200000, "All"];

function App() {
  //create state for product items
  const [productItems, setProductItems] = useState(items);
  //create state for array categories

  const filterItems = (category) => {
    //WRITE YOUR CODE
    if (category === "All") {
      return setProductItems(items);
    }
    setProductItems(items.filter((item) => item.category === category));
  };

  const filterPrice = (price) => {
    //WRITE YOUR CODE
    setProductItems(items.filter((item) => item.price < price));
    if (price === "All") {
      return setProductItems(items);
    }
  };

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    const startNumber = Number.isNaN(number) ? 0 : number;
    return [startNumber, startNumber + 1, startNumber + 2];
  },[number])

  // const itemsMemo = useMemo(() => getItems(number), [number]);
  // console.log(getMemo)

  const theme = {
    backgroundColor: dark ? "black" : "blue",
    color: dark ? "blue" : "black",
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Products</h2>
          <div className="underline"></div>
        </div>
        {/* fill with state name*/}
        <Categories categories={allCategories} filterItems={filterItems} />
        <Prices listPrices={listPrices} filterPrice={filterPrice} />
      </section>
      {/* fill with state name*/}
      <ProductList items={productItems} />

      <div style={theme}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value, 10))}
        />
        <button onClick={() => setDark(!dark)}>Change Mode</button>
        <List getItems={getItems}></List>
      </div>
    </main>
  );
}
export default App;
