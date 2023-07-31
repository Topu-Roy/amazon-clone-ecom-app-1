import React from "react";
import AmazoneLogo from "../AmazoneLogo";

import SearchBar from "./SearchBar";

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
        <SearchBar />

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
