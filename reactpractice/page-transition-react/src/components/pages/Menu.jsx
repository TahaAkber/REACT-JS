import React from "react";
import axios from "axios";
import "../style/menu.css";
function Menu() {
  const getdata = () => {
    axios.get("")
  }
  return (
    <div className="menu-p1">
      <div className="menu-parent-p1"></div>
    </div>
  );
}

export default Menu;
