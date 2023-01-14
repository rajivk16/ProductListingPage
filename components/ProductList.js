import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/sample-products.json")
      .then((res) => {
        console.log(res.data); // check the response data
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={product.image}
            className="w-full h-36 object-contain rounded-t-lg items-center justify-center"
            alt={product.name}
            loading="lazy"
          />
          <div className="py-2">
            <h2 className="text-lg font-medium text-gray-700">
              {product.name}
            </h2>
            <div className="text-gray-500">{product.category}</div>
            <div className="mt-2">
              <span className="text-lg font-medium text-indigo-600">
                ₹ {product.price}
              </span>
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating} rating)
              </span>
            </div>
          </div>
          <div className="space-x-3">
            <button
              className="bg-yellow-300 text-black p-2 rounded-md hover:bg-yellow-400"
            >
              Buy Now
            </button>
            <button
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
