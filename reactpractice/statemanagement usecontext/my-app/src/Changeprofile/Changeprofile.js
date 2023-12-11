import React from "react";
import { useState } from "react";
function Changeprofile(props) {
  const [Newusername, setnewusername] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setnewusername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.setusername(Newusername);
        }}
      >
        Change Username
      </button>{" "}
    </div>
  );
}

export default Changeprofile;
