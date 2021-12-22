import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
    <div className='nav'>
        <h1>African Marketplace</h1>
        <NavLink className='link' to ='/login'>Login</NavLink>
        <NavLink className='link' to='/logout'>Logout</NavLink>
        <NavLink className='link' to='/'>Home</NavLink>
        <NavLink className='link' to='/register'>Register</NavLink>
        <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
    </div>
    )
}

export default Header;