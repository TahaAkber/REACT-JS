import React from "react";
import { useContext } from "react";
function Menu() {
  const { username } = useContext();
  return <h1>This is menu page and user is {username}</h1>;
}

export default Menu;
