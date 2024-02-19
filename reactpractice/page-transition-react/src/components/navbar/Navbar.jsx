import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="parent-n1">
      <div className="child-n1">
        <div className="div1">
          <Link to="/">Home</Link>
        </div>
        <div className="div1">
          <Link to="/Menu">Menu</Link>
        </div>
        <div className="div1">
          <Link to="/about">About</Link>
        </div>
        <div className="div1">
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
