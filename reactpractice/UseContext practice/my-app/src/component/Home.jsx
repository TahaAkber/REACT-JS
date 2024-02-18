import React from "react";
import ChangeProfile from "./ChangeProfile";

function Home(props) {
  return (
    <h3>
      Hi this is {props.name} speaking..
      <span>
        <ChangeProfile />
      </span>
    </h3>
  );
}

export default Home;
