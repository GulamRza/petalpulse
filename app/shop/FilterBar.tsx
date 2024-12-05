"use client";

import { useState } from "react";

export default function FilterBar() {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    other: "",
  });

  const categories = ["Indoor Plants", "Outdoor Plants", "Fertilizers", "Pots"];
  const priceRanges = ["$0 - $20", "$21 - $50", "$51 - $100", "Above $100"];
  const otherFilters = ["Bestsellers", "New Arrivals", "Discounted"];

  function onFilterChange(filter: any){

  }

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // Pass updated filters to parent
  };



  return (
    <div  className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg  flex flex-col md:flex-row md:items-center md:justify-between gap-4 max-w-6xl mx-auto ">
      {/* Category Filter */}
      <div>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className="block w-full md:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div>
        <select
          value={filters.priceRange}
          onChange={(e) => handleFilterChange("priceRange", e.target.value)}
          className="block w-full md:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
        >
          <option value="">Any Price</option>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Other Filters */}
      <div>
        <select
          value={filters.other}
          onChange={(e) => handleFilterChange("other", e.target.value)}
          className="block w-full md:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md  bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
        >
          <option value="">All</option>
          {otherFilters.map((filter) => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </select>
      </div>

      {/* Reset Filters Button */}
      <button
        onClick={() => {
          setFilters({ category: "", priceRange: "", other: "" });
          onFilterChange({ category: "", priceRange: "", other: "" });
        }}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-500 hover:bg-gray-600 rounded-md  dark:bg-gray-600 dark:hover:bg-gray-700"
      >
        Reset Filters
      </button>
    </div>
  );
}
