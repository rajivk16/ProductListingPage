import React, { useState } from "react";
const Filter = ({ products, setFilteredProducts }) => {
  const [priceFilter, setPriceFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleGenderFilter = (e) => {
    setGenderFilter(e.target.value);
  };

  const handleSizeFilter = (e) => {
    setSizeFilter(e.target.value);
  };

  const handleApplyFilters = () => {
    let filteredProducts = products;

    if (priceFilter === "descending") {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.price < b.price ? 1 : -1
      );
    } else if (priceFilter === "ascending") {
      filteredProducts = filteredProducts.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
    }

    if (genderFilter !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.gender === genderFilter
      );
    }

    if (sizeFilter !== "") {
      filteredProducts = filteredProducts.filter(
        (product) => product.size === sizeFilter
      );
    }

    setFilteredProducts(filteredProducts);
    console.log(filteredProducts, 'filtered');
  };

  /**
   * When the user clicks the clear filter button, the filter state is reset to empty strings and the
   * filtered products state is reset to the original products state.
   */

  const handleClearFilter = () => {
    setPriceFilter("");
    setSizeFilter("");
    setGenderFilter("");
    setFilteredProducts(products);
  };

  

  return (
    // Main Div

    <div className="bg-white pt-2.5 pl-4 pb-1.5 rounded-lg shadow-md items-center">
      <div className="items-center space-y-5 md:flex md:space-x-6">
        <div className="text-2xl font-medium text-gray-700">Filters</div>

        {/* Price Filter */}

        <div className="flex items-center space-x-3 pb-5">
          <label className="block text-gray-700 font-medium">Price</label>
          <select
            value={priceFilter}
            onChange={handlePriceFilter}
            className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          >
            <option value="">All</option>
            <option value="descending">High to Low</option>
            <option value="ascending">Low to High</option>
          </select>
        </div>

        {/* Size Filter */}

        <div className="flex items-center space-x-3 pb-5">
          <label className="block text-gray-700 font-medium">Size</label>
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

        {/* Gender Filter */}

        <div className="flex items-center space-x-3 pb-5">
          <label className="block text-gray-700 font-medium mb-1">Gender</label>
          <select
            value={genderFilter}
            onChange={handleGenderFilter}
            className="bg-gray-200 rounded-md p-2 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          >
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>
        </div>

        {/* Filter Buttons */}

        <div className="flex space-x-4 pb-5">
          <div>
            <button
              onClick={handleApplyFilters}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Apply Filters
            </button>
          </div>
          <div>
            <button
              onClick={handleClearFilter}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;

