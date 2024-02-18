import React, { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import App, { Appcontext } from "../App";
function Home() {
  const { name, setname } = useContext(Appcontext);
  return (
    <h3>
      Hi this is {name} speaking..
      <span>
        <ChangeProfile />
      </span>
    </h3>
  );
}

export default Home;
