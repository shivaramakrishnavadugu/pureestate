import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function HeaderComp() { 
    return (
        <div className="header_main_division">
            <div className="main_logo"><Link className="logo" to="/">PureEstate</Link></div>

            <div className="navbar">
                <NavLink to="/" className="navlink">Home</NavLink>
                <NavLink to="/about" className="navlink">About Us</NavLink>
                <NavLink to="/contact" className="navlink">Contact Us</NavLink>
                <NavLink to="/suggestions&feedback" className="navlink">Suggestions & Feedback</NavLink>
            </div>
        </div>
    )
}

export default HeaderComp;