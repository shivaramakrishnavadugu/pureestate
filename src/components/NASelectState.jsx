import React from "react";
import { Link } from "react-router-dom";
import HeaderComp from "./Header";
import Footer from "./Footer";

function NASelectState() {
    return (
        <div>
            <HeaderComp />
            <div className="select_state_parent">
                <h1 className="select_state">Select your state</h1>
                <p>We are working to available to all the states. thanks for forbearing.</p>
                <p className="states"><Link to="/select_state_non_agriculture/tg_non_agriculture/know_the_telangana" className="states_links">Telangana</Link></p>
            </div>
            <Footer />
        </div>
    )
}
export default NASelectState;