import React, { useState } from "react";

const Filter = ({ products, setFilteredProducts }) => {
  const filter = () => {
    let filtered = products;

    if (priceFilter !== "none") {
      filtered = filtered.filter((product) => {
        if (priceFilter === "low") {
          return product.price <= 200;
        } else {
          return product.price > 200;
        }
      });
    }

    if (sizeFilter !== "none") {
      filtered = filtered.filter((product) => product.size === sizeFilter);
    }

    if (genderFilter !== "none") {
      filtered = filtered.filter((product) => product.gender === genderFilter);
    }

    setFilteredProducts(filtered);
  };

  console.log(products, "❤️");

  const [priceFilter, setPriceFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  /**
   * If the value of the select element is "highToLow", then return the product.price if it's greater
   * than 0. If the value of the select element is "lowToHigh", then return the product.price if it's
   * less than 0. Otherwise, return true.
   * @param e - the event object
   */
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

  /**
   * If the value of the select element is "high", then filter the products array to return only products
   * with a rating greater than 0. If the value of the select element is "low", then filter the products
   * array to return only products with a rating less than 0. Otherwise, return all products.
   * @param e - the event object
   */
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

  /**
   * If the value of the size filter is equal to the size of the product, then return the product.
   * @param e - the event object
   */
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

  /**
   * If the value of the gender filter is male, return the products that are male. If the value of the
   * gender filter is female, return the products that are female. If the value of the gender filter is
   * unisex, return the products that are unisex. If the value of the gender filter is all, return all
   * products.
   * @param e - the event object
   */
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

  /**
   * When the user clicks the clear filter button, the filter state is reset to empty strings and the
   * filtered products state is reset to the original products state.
   */
  const handleClearFilter = () => {
    setPriceFilter("");
    setRatingFilter("");
    setSizeFilter("");
    setGenderFilter("");
    setFilteredProducts(products);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-5 items-center md:flex md:space-x-5">
      <h2 className="text-lg font-medium text-gray-700">Filters</h2>
      <div className="flex items-center space-x-3">
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
      <div className="flex items-center space-x-3">
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
      <div className="flex items-center space-x-3">
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
      <div className="flex items-center space-x-3">
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
      <div className="md:w-1/3">
        <button
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          onClick={filter}
        >
          Apply Filters
        </button>
      </div>
      <div>
        <button
          onClick={handleClearFilter}
          className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
