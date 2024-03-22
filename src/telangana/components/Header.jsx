import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComp() { 
    return (
        <div className="header_main_division">
            <div class="main_logo"><Link class="logo" to="index.html">PureEstate</Link></div>
        </div>
    )
}

export default HeaderComp;