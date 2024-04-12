import React from "react";
import HeaderComp from "./Header";
import Footer from "./Footer";

function SuggestFeedback() {
    return(
        <div>
            <HeaderComp /><div className="feedback_main_tag">
                <div className="feedback">
                    <h2 className="feedback_heading">Let us know, what we can do more.</h2>
                    <p className="feedback_email_id">Email: <div>pureestate.feedback@gmail.com</div></p>
                </div>
            </div>
           <Footer /> 
        </div>
    )
}
export default SuggestFeedback;