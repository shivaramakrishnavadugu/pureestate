import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function HeaderComp() { 

    function ResponsiveNavBar() {
        var resnav = document.getElementById("res_nav_bar");
        var hamburger_nav = document.getElementById("hamburger_nav");
        var navtopshadow = document.getElementById("header_top_idd");

        if (resnav.style.display === "block"){
            resnav.style.display = "none";
        }else{
            resnav.style.display = "block";
        }
        hamburger_nav.classList.toggle("navchange");
        navtopshadow.classList.toggle("navbarshadow");
    }


    return (
        <div className="header_main_division">
            <div className="header_top" id="header_top_idd">
            <div className="main_logo"><Link className="logo" to="/">PureEstate.in</Link></div>

            <div className="hamburger_nav" id="hamburger_nav" onClick={ResponsiveNavBar}>
                <div className="bar_one"></div>
                <div className="bar_two"></div>
                <div className="bar_three"></div>
            </div>
            </div>

            <div className="navbar" id="res_nav_bar">
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