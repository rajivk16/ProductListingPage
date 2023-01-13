import React, { useState } from "react";

const Filter = ({ products, setFilteredProducts }) => {

    console.log(products, "❤️");

  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
    setFilteredProducts(
      products.filter((product) => {
        if (e.target.value === "highToLow") {
          return product.price > 0;
        } else if (e.target.value === "lowToHigh") {
          return product.price < 0;
        } else {
          return true;
        }
      })
    );
  };

  const handleRatingFilter = (e) => {
    setRatingFilter(e.target.value);
    setFilteredProducts(
      products.filter((product) => {
        if (e.target.value === "high") {
          return product.rating > 0;
        } else if (e.target.value === "low") {
          return product.rating < 0;
        } else {
          return true;
        }
      })
    );
  };

  const handleSizeFilter = (e) => {
    setSizeFilter(e.target.value);
    setFilteredProducts(
      products.filter((product) => {
        if (e.target.value === "XS") {
          return product.size === "XS";
        } else if (e.target.value === "S") {
          return product.size === "S";
        } else if (e.target.value === "M") {
          return product.size === "M";
        } else if (e.target.value === "L") {
          return product.size === "L";
        } else if (e.target.value === "XL") {
          return product.size === "XL";
        } else if (e.target.value === "XXL") {
          return product.size === "XXL";
        } else {
          return true;
        }
      })
    );
  };

  const handleGenderFilter = (e) => {
    setGenderFilter(e.target.value);
    setFilteredProducts(
      products.filter((product) => {
        if (e.target.value === "male") {
          return product.gender === "male";
        } else if (e.target.value === "female") {
          return product.gender === "female";
        } else if (e.target.value === "unisex") {
          return product.gender === "unisex";
        } else {
          return true;
        }
      })
    );
  };

  const handleClearFilter = () => {
    setPriceFilter("");
    setRatingFilter("");
    setSizeFilter("");
    setGenderFilter("");
    setFilteredProducts(products);
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-medium text-gray-700">Filter</h2>
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Price</label>
        <select
          value={priceFilter}
          onChange={handlePriceFilter}
          className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        >
          <option value="">All</option>
          <option value="highToLow">High to Low</option>
          <option value="lowToHigh">Low to High</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Rating</label>
        <select
          value={ratingFilter}
          onChange={handleRatingFilter}
          className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        >
          <option value="">All</option>
          <option value="high">High</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Size</label>
        <select
          value={sizeFilter}
          onChange={handleSizeFilter}
          className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-gray-700 font-medium mb-1">Gender</label>
        <select
          value={genderFilter}
          onChange={handleGenderFilter}
          className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>
      <div className="mt-4">
        <button
          onClick={handleClearFilter}
          className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
