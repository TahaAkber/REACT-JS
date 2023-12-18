import React from 'react'
import {auth,provider} from "../configs/firebase"
import { signInWithPopup } from 'firebase/auth';
export const Login = ()=>  {
    const Signinwithgoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);  
    }
  return (
      <div>
          <p>Sign In To Google To Continue</p>
          <button onClick={Signinwithgoogle}>Sign In With Google</button>
    </div>
  )
}

export default Login