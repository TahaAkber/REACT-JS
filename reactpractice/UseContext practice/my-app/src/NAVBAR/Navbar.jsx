import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <div className="parent">
      <span>
        <Link to="/home">Home</Link>
      </span>
      <span>
        {" "}
        <Link to="/profile">Profile</Link>
      </span>
      <span>
        {" "}
        <Link to="/contact">Contact</Link>
      </span>
    </div>
  );
}

export default Navbar;
