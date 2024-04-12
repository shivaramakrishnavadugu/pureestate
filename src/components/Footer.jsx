import React from 'react';
import { Link } from 'react-router-dom';

function FooterComponent() {
    return (
        <div className="footer_main_division">
            <div className="footer">
                <span className="footer_copyrights_part">&copy; 2024 <Link className="footer_main_logo" to="/">PureEstate.in</Link>. All rights reserved.
                </span>

                <span className='footer_legal_part'>
                    <span className="terms_of_use"><Link to="/terms_of_use" className="terms_of_use_link">Terms of Use</Link></span><span className="tnp_divider">|</span>
                    <span className="privacy_policy"><Link to="/privacy_policy" className="privacy_policy_link">Privacy Policy</Link></span>
                </span>
            </div>
        </div>
    )
}

export default FooterComponent;