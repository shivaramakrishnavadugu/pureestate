import React from "react";

function PageNotFound() {
    return(
        <div>
            <h1 className="page_not">Page Not Found Dear</h1>
            <p className="reload_does_not">Reload does not support our site. We are working on it, thanks for being forbearing.</p>
            <p className="kindly_go_home">Kindly go to Homepage by clicking below button.</p>
            <div className="home_button_par"><button className="home_button"><a href="/">Home</a></button></div>
        </div>
    )
}
export default PageNotFound;