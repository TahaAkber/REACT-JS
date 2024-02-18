import React from "react";
import ChangeProfile from "./ChangeProfile";

function Profile(props) {
  return (
    <div>
      {props.name}...Testing Usecontext api
      <span>
        <ChangeProfile />
      </span>
    </div>
  );
}

export default Profile;
