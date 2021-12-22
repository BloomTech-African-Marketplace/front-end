import React from "react";
import {NavLink} from "react-router-dom";


function Header() {
    return (
    <div className="nav">
        <h1>African Marketplace</h1>
             <NavLink className='link' to = '/login'><button>Login</button></NavLink>
             <NavLink className='link' to='/register'>
                <button>Register</button>
             </NavLink>
             <NavLink className='link' to= '/logout'><button>Logout</button></NavLink>
            <NavLink className='link' to = '/landingPage'><button>Home</button></NavLink>
    </div>
    )
}

export default Header;