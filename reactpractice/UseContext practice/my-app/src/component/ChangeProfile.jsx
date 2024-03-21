import React, { useContext, useState } from "react";
import { Appcontext } from "../App";
function ChangeProfile() {
  const { setname } = useContext(Appcontext);
  const [newname, setnewname] = useState("");

  return (
    <div>
      <input
        onChange={(e) => {
          setnewname(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setname(newname);
        }}
      >
        Change name
      </button>
    </div>
  );
}

export default ChangeProfile;
