import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="parent-n1">
      <div className="child-n1">
        <div className="div1">
          <Link to="/" style={{ color: "red" }}>
            Home
          </Link>
        </div>
        <div className="div1">
          <Link to="/Menu" style={{ color: "red" }}>
            Menu
          </Link>
        </div>
        <div className="div1">
          <Link to="/about" style={{ color: "red" }}>
            About
          </Link>
        </div>
        <div className="div1">
          <Link to="/contact" style={{ color: "red" }}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
