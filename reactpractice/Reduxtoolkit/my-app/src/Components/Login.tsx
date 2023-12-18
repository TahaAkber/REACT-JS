import React from 'react'
import { useState } from 'react'
import { login, logout } from "../store"
import { useDispatch,useSelector } from 'react-redux';
function Login() {
    const [newusername, setusername] = useState("");
    const dispatch = useDispatch();
    const username = useSelector((state:any) => 
        state.user.value.username
    );
  return (
      <h1>
          {username}
          <input onChange={(event) => {
              setusername(event.target.value);
          }}/>
          <button onClick={()=>dispatch(login({username: newusername}))}>Submit Login</button>
          <button onClick={()=>dispatch(logout())}>Logout</button>
    </h1>
  )
}

export default Login