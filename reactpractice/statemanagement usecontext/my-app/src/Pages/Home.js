import React from "react";
import Changeprofile from "../Changeprofile/Changeprofile";

function Home(props) {
  return (
    <div>
      This is Home Page and the user is {props.username}
      <Changeprofile setusername={props.setusername} />
    </div>
  );
}

export default Home;
