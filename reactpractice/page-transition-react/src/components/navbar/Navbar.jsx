import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="parent-c1">
      <Link to="/">Home</Link>
      <Link to="/Menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
