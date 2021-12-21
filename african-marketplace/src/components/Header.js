import React from "react";
import {NavLink} from "react-router-dom";


function Header() {
    return (
    <div className="nav">
        <h1>African Marketplace</h1>
             <NavLink className='link' to = '/login'>Login</NavLink>
             <NavLink className='link' to= '/logout'>Logout</NavLink>
            <NavLink className='link' to = '/'>Home</NavLink>
    </div>
    )
}

export default Header;