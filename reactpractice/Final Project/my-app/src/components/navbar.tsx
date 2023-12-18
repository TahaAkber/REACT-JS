import React from 'react'
import {Link} from 'react-router-dom'
import { Main } from '../pages/main'
import { auth } from '../configs/firebase'
import Login from '../pages/login'
function Navbar() {
    return (
      <div>
    <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            {/* now i want to show user name in the website afterlogin in  */}
            <div>
                <p>{auth.currentUser?.displayName}</p>
            </div>
      </div>

  )
}

export default Navbar