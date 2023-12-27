import React from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../configs/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user] = useAuthState(auth);
  const Signout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <div>
        {user && (
          <>
            <p>{user.displayName}</p>
            <img src={user.photoURL || ""} width="20" height="20" />
            <button onClick={Signout}>logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
