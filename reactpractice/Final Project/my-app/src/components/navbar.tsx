import React from 'react'
import {Link} from 'react-router-dom'
import { Main } from '../pages/main'
import { auth } from '../configs/firebase'
import Login from '../pages/login'
import { signOut} from 'firebase/auth'
// yeh is liye lia hai k profile change nhi horhi thi aik bar login krke then phir yeh lia tou alag alag account se login hoga
//or profile bhi change hogi
import {useAuthState } from 'react-firebase-hooks/auth';
function Navbar() {

    const Signout = async () => {
        await signOut(auth);
    }
    const [user] = useAuthState(auth);
    return (
        <div>
            <ul>
            <div>
                
                    {/* now i want to show user name in the website afterlogin in  */}
        
                    {user &&<> <p id='name'>{user?.displayName}</p>
                    <img src={user?.photoURL || ""} width="100" height="100" id='userphoto'></img>
                    <button onClick={Signout} className='button' >Logout</button></>}
            </div>

  <li><Link to='/' className='button'>Home</Link></li>
  <li><Link to='/login' className='button'>Login</Link></li>
</ul>
            
           
            
        </div>
        

    )
    
}

export default Navbar

