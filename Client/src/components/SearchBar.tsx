import React from "react";
import { FiSearch } from "react-icons/fi";
import Input from "./Input";

const SearchBar: React.FC = () => {
  return (
    <div className="relative z-10 flex w-full justify-center px-4">
      <div className="flex w-full max-w-3xl items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md">
        {/* Search Icon */}
        <div className="pl-4 text-xl text-gray-400">
          <FiSearch />
        </div>

        {/* Reusable Input */}
        <Input type="text" placeholder="Search for a recipe..." />

        {/* Search Button */}
        <button
          type="button"
          className="mr-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-orange-600"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
