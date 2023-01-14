import React from "react";
import Header from "components/Header";
import ProductList from "components/ProductList";
import Filter from "components/Filter";

function Home() {
  return (
    <div>
      <Header />
      <Filter />
      <br />
      <ProductList />
      <br />
    </div>
  );
}

export default Home;
