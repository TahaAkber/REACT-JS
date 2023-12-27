import React from "react";
import { auth, provider } from "../configs/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const Signin = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      <p>Sign IN To Continue</p>
      <button onClick={Signin}>Click to Login</button>
    </div>
  );
}

export default Login;
