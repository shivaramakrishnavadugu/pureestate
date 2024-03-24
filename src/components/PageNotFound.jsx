import React from "react";
import Footer from "./Footer";

function PageNotFound() {
    return(
        <div>
            <h1 className="page_not">Page Not Found Dear</h1>
            <p className="kindly_go_home">Kindly go to Homepage by clicking below button.</p>
            <div className="home_button_par"><button className="home_button"><a href="/">Home</a></button></div>
            <Footer />
        </div>
    )
}
export default PageNotFound;