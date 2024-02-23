import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="parent-n1">
      <div className="child-n1">
        <div className="div1">
          <Link to="/" style={{ color: "black" }}>
            Home
          </Link>
        </div>
        <div className="div1">
          <Link to="/Menu" style={{ color: "black" }}>
            Menu
          </Link>
        </div>
        <div className="div1">
          <Link to="/about" style={{ color: "black" }}>
            About
          </Link>
        </div>
        <div className="div1">
          <Link to="/contact" style={{ color: "black" }}>
            Contact
          </Link>
        </div>
      </div>
      {/* <div className="div2">
        <Link to="/checkout" style={{ color: "black" }}>
          CheckOut
        </Link>
      </div> */}
    </div>
  );
}

export default Navbar;
