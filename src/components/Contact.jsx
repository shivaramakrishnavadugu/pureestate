import React from "react";
import HeaderComponent from "./Header";
import Footer from "./Footer";

function ContactComponent() {
    return(
        <div>
            <HeaderComponent />
            <div className="contact_main_tag">
                <div className="contact">
                    <h2 className="contact_heading">Let us help for you</h2>
                    <p className="contact_email_id">Email: <div>help@pureestate.in</div></p>
                </div>
            </div>
           <Footer />
        </div>
    )
}
export default ContactComponent;