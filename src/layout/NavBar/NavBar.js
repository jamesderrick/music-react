import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/artists">Artists</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    )
}

export default NavBar;