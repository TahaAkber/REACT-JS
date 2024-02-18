import React, { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { Appcontext } from "../App";

function Profile() {
  const { name } = useContext(Appcontext);
  return (
    <h3>
      {name}...! Testing Usecontext Api
      <span>
        <ChangeProfile />
      </span>
    </h3>
  );
}

export default Profile;
