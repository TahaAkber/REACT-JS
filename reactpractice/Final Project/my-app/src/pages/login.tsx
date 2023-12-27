import React from "react";

//yeh humne firebase.ts se uthaya hai 2 cheezein then phir import kara hai k popup krke signin ho
import { auth, provider } from "../configs/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // use krke seedha login k bad home page pe bhejdia hai is k zariye
export const Login = () => {
  const navigate = useNavigate();
  const Signinwithgoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };
  return (
    <div>
      <p>Sign In To Google To Continue</p>
      <button onClick={Signinwithgoogle}>Sign In With Google</button>
    </div>
  );
};

export default Login;
