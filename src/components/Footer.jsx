import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer_main_division">
            <div className="footer">

                <span className="footer_copyrights_part">&copy; Copyrights and All Rights Reserved to <span className="footer_logo"><Link className="footer_main_logo" to="/">PureEstate</Link></span>
                </span>

                <span className='footer_legal_part'>
                    <span className="Terms and Conditions">Terms and Conditions</span>
                    <span className="Privacy Policy">Privacy Policy</span>
                </span>
            </div>
        </div>
    )
}

export default Footer;