import React from "react";
import HeaderComp from "../components/Header";
import Footer from "../components/Footer";

function SuggestFeedback() {
    return(
        <div>
            <HeaderComp /><div className="feedback_main_tag">
                <div className="feedback">
                    <h2 className="feedback_heading">Let us know, what we can do more.</h2>
                    <p className="feedback_email_id">Email: <span>pureestate.feedback@gmail.com</span></p>
                </div>
            </div>
           <Footer /> 
        </div>
    )
}
export default SuggestFeedback;