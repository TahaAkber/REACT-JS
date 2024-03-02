import React, { useState } from "react";
import "./Searchbar.css";
import Axios from "axios";
import { FaSearch } from "react-icons/fa";
function Searchbar() {
  const [input, setinput] = useState("");
  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
    });
  };

  const handleonclick = (value) => {
    setinput(value);
    getData(value);
  };
  return (
    <div className="input-search">
      <div className="input-body">
        <FaSearch id="search-icon" />
        <input
          placeholder="Type to Search..."
          value={input}
          onChange={(e) => {
            handleonclick(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Searchbar;
