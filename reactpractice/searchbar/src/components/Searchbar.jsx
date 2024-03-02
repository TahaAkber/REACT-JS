import React from "react";
import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";
function Searchbar() {
  return (
    <div className="input-search">
      <div className="input-body">
        <FaSearch id="search-icon" />
        <input placeholder="Type to Search..." />
      </div>
    </div>
  );
}

export default Searchbar;
