import React from "react";
import { Link } from "react-router-dom";
import { Main } from "../pages/main/main";
import { auth } from "../configs/firebase";
import Login from "../pages/login";
import { signOut } from "firebase/auth";
// yeh is liye lia hai k profile change nhi horhi thi aik bar login krke then phir yeh lia tou alag alag account se login hoga
//or profile bhi change hogi
import { useAuthState } from "react-firebase-hooks/auth"; //yeh kara hai humne naya hook auth pakage take  sari information ajaye tareeke se
function Navbar() {
  const Signout = async () => {
    await signOut(auth); //signout krne k liye hai yeh, yahan auth pass kara hai take saari information logout hojaye
  };
  const [user] = useAuthState(auth); //auth ki saari cheezein authstate k zariye user me ajayegi
  return (
    <div>
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/" className="button">
                Home
              </Link>
            </li>
            <li>
              {!user ? (
                <Link to="/login" className="button">
                  Login
                </Link>
              ) : (
                <Link to="/createpost" className="button">
                  CreatePost
                </Link>
              )}
            </li>
          </ul>
          <div className="namephoto">
            {/* now i want to show user name in the website afterlogin in  */}
            <div className="profile">
              {user && (
                <div>
                  {" "}
                  <div className="user" style={{ fontSize: 3 }}>
                    {" "}
                    <p id="name">{user?.displayName}</p>
                  </div>
                  <img
                    src={user?.photoURL || ""}
                    width="100"
                    height="100"
                    id="userphoto"
                    style={{ width: 40, height: 40 }}
                  ></img>
                </div>
              )}
            </div>
          </div>
          <div>
            <button onClick={Signout} className="button1">
              Logout
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
