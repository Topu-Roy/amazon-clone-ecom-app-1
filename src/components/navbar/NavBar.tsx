import React from "react";
import AmazoneLogo from "../AmazoneLogo";

import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsSearch } from "react-icons/bs";

function NavBar() {
  const submitSearch = () => {};

  return (
    <header className=" mx-auto bg-gray-800 text-white">
      <nav className="flex justify-between items-center container mx-auto gap-4 h-14 px-2">
        {/* Logo & Location */}
        <div className="flex items-center justify-between gap-4">
          <AmazoneLogo />
          <div className="">location</div>
        </div>

        {/* Search Bar */}
        <form
          // onSubmit={submitSearch}
          className="flex-1 group flex items-center bg-white justify-center w-full h-10 rounded-md overflow-hidden"
        >
          <span className="text-gray-500 text-sm h-full border-r-2 flex items-center justify-center pl-3">
            All
            <span>
              <MdOutlineArrowDropDown size={25} color={"gray"} />
            </span>
          </span>
          <input
            type="text"
            placeholder="Search Product"
            className="w-full h-10 px-2 placeholder:text-sm placeholder:text-gray-400 focus:outline-none group-focus:outline-2 group-focus:outline-yellow-600"
          />
          <button
            type="submit"
            className="px-4 h-full bg-yellow-600/80 hover:bg-yellow-600"
          >
            <BsSearch size={20} color={"black"} />
          </button>
        </form>

        {/* Profile , Favorite & Cart */}
        <div className="flex items-center justify-between gap-4">
          <div className="">User</div>
          <div className="">favorite</div>
          <div className="">cart</div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
