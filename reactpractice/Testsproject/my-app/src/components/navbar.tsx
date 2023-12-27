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
    <div className="bar">
      <Link to="/" className="home">
        Home
      </Link>
      <Link to="/login" className="home">
        Login
      </Link>
      <div className="user">
        {user && (
          <>
            <p>{user.displayName}</p>
            <img src={user.photoURL || ""} width="20" height="20" />
            <button
              onClick={Signout}
              className="home"
              style={{ height: 2, width: 2 }}
            >
              logout
            </button>
          </>
        )}
        -
      </div>
    </div>
  );
}

export default Navbar;
