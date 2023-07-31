"use client";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  const submitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => submitSearch(e)}
      className="flex-1 group flex items-center bg-white justify-center w-full h-10 rounded-md overflow-hidden focus-within:ring-[3px] ring-yellow-500"
    >
      <button
        type="button"
        className="text-gray-500 text-sm h-full border-r-2 flex items-center justify-center pl-3"
      >
        All
        <span>
          <MdOutlineArrowDropDown size={25} color={"#4a4e57"} />
        </span>
      </button>
      <input
        type="text"
        placeholder="Search Product"
        className="w-full h-10 px-2 placeholder:text-sm placeholder:text-gray-400 focus:outline-none group-focus:outline-2 group-focus:outline-yellow-600"
      />
      <button
        type="submit"
        className="px-4 h-full bg-yellow-600/80 hover:bg-yellow-600"
      >
        <BsSearch size={20} color={"#4a4e57"} />
      </button>
    </form>
  );
}

export default SearchBar;
