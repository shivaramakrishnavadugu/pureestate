import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function HeaderComp() { 
    return (
        <div className="header_main_division">
            <div className="main_logo"><Link className="logo" to="/">PureEstate.in</Link></div>

            <div className="navbar">
                <ul>
                <li><NavLink to="/" className="navlink">Home</NavLink></li>
                <li><NavLink to="/about" className="navlink">About Us</NavLink></li>
                <li><NavLink to="/contact" className="navlink">Contact Us</NavLink></li>
                <li><NavLink to="/suggestions&feedback" className="navlink">Suggestions & Feedback</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComp;