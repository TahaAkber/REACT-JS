import React from "react";
import { useState, useContext } from "react";
import { AppContext } from "../App";
function Changeprofile() {
  const [Newusername, setnewusername] = useState("");
  const { setusername } = useContext(AppContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setnewusername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setusername(Newusername);
        }}
      >
        Change Username
      </button>{" "}
    </div>
  );
}

export default Changeprofile;
