import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to={"/"}> Home</Link>
      <Link to={"/Menu"}> Menu</Link>
      <Link to={"/contact"}> contact</Link>
    </div>
  );
}

export default Navbar;
