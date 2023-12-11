import React from "react";
import Changeprofile from "../Changeprofile/Changeprofile";
import { AppContext } from "../App";
import { useContext } from "react";

const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      This is Home Page and the user is {username}
      <Changeprofile />
    </div>
  );
};

export default Home;
