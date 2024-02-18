import React, { useContext } from "react";
import ChangeProfile from "./ChangeProfile";
import { Appcontext } from "../App";

function Profile() {
  const { name } = useContext(Appcontext);
  return (
    <div>
      {name}...Testing Usecontext Api
      <span>
        <ChangeProfile />
      </span>
    </div>
  );
}

export default Profile;
