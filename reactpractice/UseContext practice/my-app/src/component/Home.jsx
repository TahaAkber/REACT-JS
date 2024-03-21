import React, { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { Appcontext } from "../App";
function Home() {
  const { name } = useContext(Appcontext);
  return (
    <h3>
      Hi! This is {name} speaking..
      <span>
        <ChangeProfile />
      </span>
    </h3>
  );
}

export default Home;
