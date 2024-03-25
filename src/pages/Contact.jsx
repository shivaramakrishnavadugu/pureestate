import React from "react";
import HeaderComp from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
    return(
        <div>
            <HeaderComp />
            <div className="contact_main_tag">
                <div className="contact">
                    <h2 className="contact_heading">Let us help for you</h2>
                    <p className="contact_email_id">Email: <span>help@pureestate.in</span></p>
                </div>
            </div>
           <Footer />
        </div>
    )
}
export default Contact;