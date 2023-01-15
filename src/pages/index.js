import Header from "components/Header";
import ProductList from "components/ProductList";
import Filter from "components/Filter";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);


  /* Fetching the data from the json file and setting the state of products. */
  useEffect(() => {
    axios
      .get("/sample-products.json")
      .then((res) => {
        setProducts(res.data.products);
        console.log(res.data.products, "InitialState"); // check the response data
        // setFilteredProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  return (
    <div>
      <Header />
      <Filter products={products} setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} />
      <br />
    </div>
  );
}

export default Home;

// Import {products} from axios

// const [products, setProducts] = useState([]);

// useEffect(() => {
//   axios
//     .get("/sample-products.json")
//     .then((res) => {
//       console.log(res.data); // check the response data
//       setProducts(res.data.products);
//     })
//     .catch((err) => console.log(err));
// }, []);
